import { NextResponse } from 'next/server'
import type { TutorInput } from '@/types/tutor'
import { callTutor } from '@/lib/ai/tutorClient'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TutorInput
    const result = await callTutor(body)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json(
      { error: 'Failed to get tutor response' },
      { status: 500 }
    )
  }
}
