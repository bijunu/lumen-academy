import type { TutorInput, TutorOutput } from '@/types/tutor'
import { logger } from '@/lib/logger'

export async function callTutor(input: TutorInput): Promise<TutorOutput> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    logger.warn('ANTHROPIC_API_KEY not set, returning fallback hint')
    return getFallbackResponse(input)
  }

  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk')
    const client = new Anthropic({ apiKey })

    const systemPrompt = buildSystemPrompt(input)
    const userMessage = buildUserMessage(input)

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 512,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    })

    const text =
      response.content[0].type === 'text' ? response.content[0].text : ''

    return {
      message: text,
      hintLevel: input.hintLevel,
      shouldOfferBreak: input.frustrationSignal && input.attemptCount >= 3,
      flagForParent: input.frustrationSignal && input.attemptCount >= 5,
    }
  } catch (error) {
    logger.error('Tutor API call failed:', error)
    return getFallbackResponse(input)
  }
}

function buildSystemPrompt(input: TutorInput): string {
  return `You are a friendly AI tutor for Lumen Academy, helping a Year 7 UK grammar school student (age 11-12). You are currently helping with: ${input.nodeTitle}.

Rules:
- Use UK English throughout (colour, metre, maths)
- Use Socratic prompts appropriate for age 12
- Never give the answer directly on the first hint
- Use analogies and everyday examples from UK life
- Use metric units and GBP for any examples
- If the student seems frustrated, be encouraging and offer to try an easier approach
- Keep responses concise (2-3 sentences for nudges, up to a paragraph for worked hints)
- Refuse off-topic conversation politely

Hint level: ${input.hintLevel}
- nudge: Ask a guiding question without revealing the method
- partial: Give part of the method but leave the final step
- worked: Walk through the full solution step by step`
}

function buildUserMessage(input: TutorInput): string {
  let msg = `Question: ${input.questionStem}\n`
  if (input.learnerAnswer) msg += `Student's answer: ${input.learnerAnswer}\n`
  if (input.correctAnswer) msg += `Correct answer: ${input.correctAnswer}\n`
  msg += `Attempt number: ${input.attemptCount}\n`
  if (input.previousHints.length > 0) {
    msg += `Previous hints given:\n${input.previousHints.map((h, i) => `${i + 1}. ${h}`).join('\n')}\n`
  }
  msg += `\nPlease provide a ${input.hintLevel} level hint.`
  return msg
}

function getFallbackResponse(input: TutorInput): TutorOutput {
  const messages: Record<string, string> = {
    nudge: 'Have a think about what you already know about this topic. What is the question really asking?',
    partial:
      'You are on the right track. Try looking at the relationship between the numbers. What operation connects them?',
    worked:
      'Let us work through this step by step. Look at the question again and identify what information you have been given.',
  }

  return {
    message: messages[input.hintLevel] ?? messages.nudge,
    hintLevel: input.hintLevel,
    shouldOfferBreak: input.frustrationSignal,
    flagForParent: false,
  }
}
