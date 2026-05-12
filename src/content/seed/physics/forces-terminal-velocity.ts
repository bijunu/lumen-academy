import type { SkillNode } from '@/types/content'

const SKYDIVER_THREE_PHASES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Skydiver at three speeds during freefall</text>

    <!-- Phase 1: just left plane, slow -->
    <text x="135" y="75" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Phase 1</text>
    <text x="135" y="92" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">just jumped, slow</text>
    <circle cx="135" cy="130" r="14" fill="currentColor" />
    <line x1="135" y1="144" x2="135" y2="180" />
    <line x1="120" y1="155" x2="150" y2="155" />
    <!-- big weight arrow down -->
    <line x1="135" y1="190" x2="135" y2="290" />
    <polygon points="127,278 135,295 143,278" fill="currentColor" stroke="none" />
    <text x="170" y="245" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight 700 N</text>
    <!-- tiny drag arrow up -->
    <line x1="135" y1="115" x2="135" y2="100" />
    <polygon points="129,105 135,95 141,105" fill="currentColor" stroke="none" />
    <text x="170" y="108" font-size="11" stroke="none" fill="currentColor">Drag 50 N</text>
    <text x="135" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Resultant 650 N down.</text>
    <text x="135" y="352" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Speeds up.</text>

    <!-- Phase 2: speeding up, drag growing -->
    <text x="400" y="75" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Phase 2</text>
    <text x="400" y="92" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">faster, drag growing</text>
    <circle cx="400" cy="130" r="14" fill="currentColor" />
    <line x1="400" y1="144" x2="400" y2="180" />
    <line x1="385" y1="155" x2="415" y2="155" />
    <!-- big weight arrow down -->
    <line x1="400" y1="190" x2="400" y2="290" />
    <polygon points="392,278 400,295 408,278" fill="currentColor" stroke="none" />
    <text x="435" y="245" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight 700 N</text>
    <!-- medium drag arrow up -->
    <line x1="400" y1="115" x2="400" y2="55" />
    <polygon points="392,65 400,50 408,65" fill="currentColor" stroke="none" />
    <text x="435" y="80" font-size="12" stroke="none" fill="currentColor">Drag 400 N</text>
    <text x="400" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Resultant 300 N down.</text>
    <text x="400" y="352" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Still speeding up, more slowly.</text>

    <!-- Phase 3: terminal velocity -->
    <text x="665" y="75" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Phase 3</text>
    <text x="665" y="92" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">terminal velocity</text>
    <circle cx="665" cy="130" r="14" fill="currentColor" />
    <line x1="665" y1="144" x2="665" y2="180" />
    <line x1="650" y1="155" x2="680" y2="155" />
    <!-- weight arrow down -->
    <line x1="665" y1="190" x2="665" y2="290" />
    <polygon points="657,278 665,295 673,278" fill="currentColor" stroke="none" />
    <text x="555" y="245" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight 700 N</text>
    <!-- drag arrow same length up -->
    <line x1="665" y1="115" x2="665" y2="15" />
    <polygon points="657,25 665,10 673,25" fill="currentColor" stroke="none" />
    <text x="555" y="60" font-size="13" font-weight="700" stroke="none" fill="currentColor">Drag 700 N</text>
    <text x="665" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Resultant 0 N.</text>
    <text x="665" y="352" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Constant velocity at 55 m/s.</text>
  </g>
`

const SKYDIVER_VT_GRAPH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Skydiver speed-time graph</text>
    <text x="400" y="55" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">freefall, parachute opens at 40 s</text>

    <!-- axes -->
    <line x1="100" y1="330" x2="720" y2="330" />
    <line x1="100" y1="80" x2="100" y2="330" />
    <!-- y label -->
    <text x="50" y="80" font-size="12" stroke="none" fill="currentColor">Speed</text>
    <text x="50" y="95" font-size="12" stroke="none" fill="currentColor">(m/s)</text>
    <text x="85" y="120" text-anchor="end" font-size="11" stroke="none" fill="currentColor">55</text>
    <line x1="95" y1="120" x2="100" y2="120" />
    <text x="85" y="305" text-anchor="end" font-size="11" stroke="none" fill="currentColor">5</text>
    <line x1="95" y1="305" x2="100" y2="305" />
    <!-- x label -->
    <text x="400" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Time (s)</text>
    <text x="100" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">0</text>
    <text x="350" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">40</text>
    <line x1="350" y1="325" x2="350" y2="330" />
    <text x="450" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">50</text>
    <line x1="450" y1="325" x2="450" y2="330" />
    <text x="700" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">90</text>

    <!-- curve segment A: 0 to 25, rising, curving to flat -->
    <path d="M 100 330 Q 200 200 260 130 L 350 120" stroke-width="3" />
    <!-- segment B: 40 to 50, flat at 55 m/s -->
    <line x1="350" y1="120" x2="350" y2="120" />
    <!-- segment C: chute opens, sharp drop from 55 down -->
    <path d="M 350 120 Q 380 220 450 305" stroke-width="3" />
    <!-- segment D: 50 to 90, flat at 5 m/s -->
    <line x1="450" y1="305" x2="700" y2="305" />

    <!-- markers -->
    <text x="220" y="260" font-size="12" stroke="none" fill="currentColor">A: speeding up</text>
    <text x="320" y="105" font-size="12" stroke="none" fill="currentColor">B: terminal 55 m/s</text>
    <text x="395" y="200" font-size="12" stroke="none" fill="currentColor">C: chute opens</text>
    <text x="500" y="295" font-size="12" stroke="none" fill="currentColor">D: new terminal 5 m/s</text>
  </g>
`

const RAINDROP_TERMINAL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Raindrop at terminal velocity</text>
    <text x="400" y="55" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 9 m/s for a typical drop</text>

    <!-- cloud sketch top -->
    <path d="M 180 90 Q 220 60 270 80 Q 320 60 360 90 Q 400 75 410 105 Q 420 130 380 130 L 200 130 Q 160 130 180 90 Z" fill="currentColor" opacity="0.2" />
    <text x="295" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cloud</text>

    <!-- raindrop -->
    <path d="M 400 200 Q 380 240 400 270 Q 420 240 400 200 Z" fill="currentColor" />

    <!-- weight arrow down -->
    <line x1="400" y1="270" x2="400" y2="350" />
    <polygon points="392,338 400,355 408,338" fill="currentColor" stroke="none" />
    <text x="430" y="335" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight (down)</text>

    <!-- drag arrow up -->
    <line x1="400" y1="200" x2="400" y2="135" />
    <polygon points="392,145 400,130 408,145" fill="currentColor" stroke="none" />
    <text x="430" y="160" font-size="13" font-weight="700" stroke="none" fill="currentColor">Air resistance (up)</text>

    <!-- ground line -->
    <line x1="60" y1="390" x2="740" y2="390" />
    <text x="400" y="410" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Pavement in Tunbridge Wells</text>

    <!-- note -->
    <text x="640" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Drag has grown</text>
    <text x="640" y="217" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">to match weight.</text>
    <text x="640" y="234" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Net force is 0 N.</text>
    <text x="640" y="251" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Drop falls at a</text>
    <text x="640" y="268" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">steady 9 m/s.</text>
  </g>
`

export const forcesTerminalVelocity: SkillNode = {
  id: 'physics-forces-terminal-velocity',
  title: 'Terminal Velocity',
  description:
    'Explain why a falling object reaches a steady (terminal) velocity, even though gravity never stops pulling it down. Use the idea that air resistance grows as the object speeds up, until drag equals weight and the resultant force is zero. Apply it to a skydiver before and after the parachute opens, and to a falling raindrop.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'challenge',
  prerequisites: ['physics-forces-friction', 'physics-forces-newton-first'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion (qualitative only); resistance to motion of air and water.',
    awardingBodies: {
      aqa: '4.5.6.2.4 Resistive forces and terminal velocity; falling objects and the skydiver scenario (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.30 Terminal velocity; resultant force on a falling object reaches zero (GCSE Physics 1PH0)',
      ocr: "P2.2 Newton's laws; falling objects, air resistance and terminal velocity (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    {
      id: 'ftv-scene-three-phases',
      title: 'A Skydiver at Three Speeds',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the weight and drag arrows on a skydiver at three points during the fall.',
      data: {
        viewBox: '0 0 800 400',
        svg: SKYDIVER_THREE_PHASES_SVG,
        hotspots: [
          {
            id: 'ftv-tp-phase1',
            x: 17,
            y: 22,
            label: 'Phase 1: just jumped',
            description:
              'The skydiver has just left the plane and is going slowly. Weight 700 N pulls down. Drag is only about 50 N, because drag grows with speed and the speed is still low.',
          },
          {
            id: 'ftv-tp-phase1-result',
            x: 17,
            y: 85,
            label: 'Resultant 650 N down',
            description:
              'Subtract drag from weight to get the resultant force: 700 minus 50 is 650 N down. A non-zero resultant force makes the skydiver speed up.',
          },
          {
            id: 'ftv-tp-phase2',
            x: 50,
            y: 22,
            label: 'Phase 2: faster, drag growing',
            description:
              'The skydiver is now falling faster. Weight is still 700 N. Drag has grown to about 400 N because the faster you move through the air, the harder it pushes back.',
          },
          {
            id: 'ftv-tp-phase2-result',
            x: 50,
            y: 85,
            label: 'Resultant 300 N down',
            description:
              'Subtract drag from weight: 700 minus 400 is 300 N down. The resultant force is smaller than in phase 1, so the skydiver still speeds up but more slowly.',
          },
          {
            id: 'ftv-tp-phase3',
            x: 83,
            y: 22,
            label: 'Phase 3: terminal velocity',
            description:
              'Drag has grown to 700 N, the same size as the weight. The two arrows are equal and opposite.',
          },
          {
            id: 'ftv-tp-phase3-result',
            x: 83,
            y: 85,
            label: 'Resultant 0 N',
            description:
              'When drag matches weight, the resultant force is zero. The skydiver keeps falling, but now at a steady 55 m/s. This steady falling speed is called the terminal velocity.',
          },
        ],
      },
    },
    {
      id: 'ftv-scene-vt-graph',
      title: 'Speed-Time Graph: Two Terminal Velocities',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the speed-time graph to read off what happens to a skydiver across a full jump.',
      data: {
        viewBox: '0 0 800 400',
        svg: SKYDIVER_VT_GRAPH_SVG,
        hotspots: [
          {
            id: 'ftv-vt-a',
            x: 28,
            y: 65,
            label: 'A: speeding up',
            description:
              'The curve rises and bends. Drag is still smaller than weight, so the resultant force is downwards and the skydiver speeds up. The curve flattens as drag grows.',
          },
          {
            id: 'ftv-vt-b',
            x: 44,
            y: 27,
            label: 'B: first terminal velocity at 55 m/s',
            description:
              'The line is flat at 55 m/s. Drag now equals weight. The resultant force is zero, so the speed stays the same. This is the first terminal velocity.',
          },
          {
            id: 'ftv-vt-c',
            x: 55,
            y: 50,
            label: 'C: parachute opens',
            description:
              'At 40 s the parachute opens. Drag jumps suddenly to a much bigger value. Drag is now larger than weight, so the resultant force points upwards and the skydiver slows down.',
          },
          {
            id: 'ftv-vt-d',
            x: 75,
            y: 74,
            label: 'D: new terminal velocity at 5 m/s',
            description:
              'As the skydiver slows, drag falls until it equals weight again. The line goes flat at 5 m/s. This new, slower terminal velocity is safe for landing.',
          },
        ],
      },
    },
    {
      id: 'ftv-scene-raindrop',
      title: 'A Raindrop on the Way Down',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a raindrop hits the pavement at a steady speed, not faster and faster.',
      data: {
        viewBox: '0 0 800 420',
        svg: RAINDROP_TERMINAL_SVG,
        hotspots: [
          {
            id: 'ftv-rd-weight',
            x: 50,
            y: 76,
            label: 'Weight (down)',
            description:
              'The Earth pulls the raindrop down. Weight does not change as the drop falls.',
          },
          {
            id: 'ftv-rd-drag',
            x: 50,
            y: 34,
            label: 'Air resistance (up)',
            description:
              'Air pushes back on the falling raindrop. Drag is small at first, then grows as the drop falls faster.',
          },
          {
            id: 'ftv-rd-terminal',
            x: 80,
            y: 56,
            label: 'Equal and opposite',
            description:
              'Once drag has grown to match weight, the resultant force is zero. The drop keeps falling but at a steady 9 m/s, which is its terminal velocity. Without air, the drop would land much faster.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ftv-worked-1',
      title: 'Naming the phase of a skydive from the force arrows',
      steps: [
        {
          explanation:
            'Pick the object. The object is the skydiver in freefall (no parachute yet). Two vertical forces matter: weight and drag.',
        },
        {
          explanation:
            'Read the arrows. The diagram shows weight 700 N down and drag 200 N up. Both arrows act on the skydiver.',
          maths: 'Weight = 700 N down, Drag = 200 N up',
        },
        {
          explanation:
            'Find the resultant force. Subtract drag from weight, taking down as positive: 700 minus 200 gives 500 N down.',
          maths: 'Resultant = 700 - 200 = 500 N down',
        },
        {
          explanation:
            'Decide what the resultant tells you. A non-zero resultant force means the velocity is changing. The resultant points down, so the speed is rising.',
        },
        {
          explanation:
            "Check against the terminal-velocity rule. Terminal velocity needs drag to equal weight. Here drag is still smaller than weight, so the skydiver is not at terminal velocity yet.",
        },
        {
          explanation:
            'Name the phase. The skydiver is in the speeding-up phase of freefall, partway between the moment of leaving the plane and reaching terminal velocity.',
        },
      ],
    },
    {
      id: 'ftv-worked-2',
      title: 'Why the parachute terminal velocity is slower',
      steps: [
        {
          explanation:
            'Set the scene. Before the parachute opens, the skydiver falls at a steady 55 m/s. The parachute then opens and the skydiver eventually falls at a steady 5 m/s.',
        },
        {
          explanation:
            "Apply the terminal-velocity rule to both speeds. At any terminal velocity the resultant force is zero, so drag must equal weight.",
          maths: 'Drag = Weight at every terminal velocity',
        },
        {
          explanation:
            'State the weight. The skydiver weighs about 700 N. Weight does not change when the parachute opens; the same person and parachute are pulled down by gravity with 700 N.',
          maths: 'Weight = 700 N (unchanged)',
        },
        {
          explanation:
            'Compare the two cases. Before the parachute opens, drag at 55 m/s reaches 700 N. After it opens, drag at only 5 m/s also reaches 700 N. The same drag value is reached at a much smaller speed.',
        },
        {
          explanation:
            'Explain the change. Opening the parachute gives the skydiver a much larger surface pushing against the air. At any given speed, that bigger shape collects more drag than the body alone.',
        },
        {
          explanation:
            'State the result. With the parachute open, drag matches weight at a much lower speed, so the new terminal velocity is much smaller. A bigger shape means a slower terminal velocity.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ftv-q1',
      type: 'multiple-choice',
      stem: 'A skydiver falls at terminal velocity in freefall. Which sentence describes the forces on the skydiver?',
      tier: 'core',
      options: [
        'Weight is zero, because the skydiver is not slowing down.',
        'Weight is unchanged. Drag has grown to equal weight, so the resultant force is zero.',
        'Drag is zero, because the resultant force is zero.',
        'Drag is bigger than weight, which is why the speed is steady.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ftv-mis-terminal-weight-zero',
      hint: 'Terminal velocity means the resultant force is zero. Weight has not changed; drag has caught up to it.',
    },
    {
      id: 'ftv-q2',
      type: 'multiple-choice',
      stem: 'A skydiver has just left the plane and is going slowly. Drag is much smaller than weight. What is the direction of the resultant force on the skydiver?',
      tier: 'core',
      options: [
        'Upwards, because drag is the only force.',
        'Sideways, because the plane was moving sideways.',
        'Downwards, because weight is larger than drag.',
        'Zero, because the skydiver has only just jumped.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Subtract the smaller arrow from the larger one. Which way does the bigger arrow point?',
    },
    {
      id: 'ftv-q3',
      type: 'multiple-choice',
      stem: 'A raindrop is falling at terminal velocity towards a pavement in Tunbridge Wells. What is the size of the resultant force on the raindrop?',
      tier: 'core',
      options: ['Zero', 'Equal to its weight', 'Equal to the drag', 'Equal to weight plus drag'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ftv-mis-terminal-zero-speed',
      hint: 'Terminal velocity always means the resultant force is zero. The drop is not slowing down or stopping.',
    },
    {
      id: 'ftv-q5',
      type: 'multiple-choice',
      stem: 'Just after a parachute opens, the skydiver is still going at 55 m/s. The drag on the parachute is now much bigger than the weight. What happens to the skydiver next?',
      tier: 'core',
      options: [
        'They float upwards because drag is now larger than weight.',
        'They keep falling at 55 m/s.',
        'They speed up, because drag is large.',
        'They slow down, because the resultant force is now upwards.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ftv-mis-parachute-goes-up',
      hint: 'Drag points up; weight points down. The resultant force points the way of the bigger arrow.',
    },
    {
      id: 'ftv-q6',
      type: 'numeric-entry',
      stem: 'A skydiver has a weight of 720 N. They are at terminal velocity in freefall. What is the size, in newtons, of the air resistance acting on them?',
      tier: 'core',
      correctAnswer: 720,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'ftv-mis-terminal-weight-zero',
      hint: 'At terminal velocity, drag matches weight. The numbers are the same.',
    },
    {
      id: 'ftv-q7',
      type: 'numeric-entry',
      stem: 'A skydiver weighs 800 N. Just after leaving the plane, drag is 100 N upwards. What is the size, in newtons, of the resultant force on the skydiver?',
      tier: 'core',
      correctAnswer: 700,
      unit: 'N',
      xpValue: 10,
      hint: 'Take down as positive. Subtract the upward drag from the downward weight.',
    },
    {
      id: 'ftv-q8',
      type: 'multiple-choice',
      stem: 'A pupil writes, "When the parachute opens, drag is greater than weight, so the skydiver moves upwards through the air for a moment." Spot what is wrong.',
      tier: 'confident',
      options: [
        'Nothing is wrong; the skydiver does move upwards once the chute opens.',
        'The resultant force is upwards, so the skydiver slows down. They still move downwards, but at a smaller and smaller speed, until drag falls back to match weight at a new terminal velocity.',
        'Drag is never larger than weight, so the claim has no basis.',
        'The skydiver stops in mid-air the moment the chute opens.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ftv-mis-parachute-goes-up',
      hint: 'An upward resultant force changes velocity, not position straight away. The skydiver slows; they do not go up.',
    },
    {
      id: 'ftv-q9',
      type: 'multiple-choice',
      stem: 'Two skydivers leap from the same plane over Headcorn Aerodrome in Kent. One weighs 600 N and the other weighs 900 N, but they have the same shape and posture in freefall. Whose terminal velocity is higher in freefall?',
      tier: 'confident',
      options: [
        'They have the same terminal velocity, because gravity acts equally on both.',
        'The 600 N skydiver, because lighter objects always fall faster.',
        'The 900 N skydiver, because they need a bigger drag to balance their weight, and drag only reaches that size at a higher speed.',
        'Neither, because terminal velocity only depends on the parachute, not on weight.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ftv-mis-heavier-falls-faster',
      hint: 'At terminal velocity drag equals weight. A bigger weight needs a bigger drag, and drag grows with speed.',
    },
    {
      id: 'ftv-q10',
      type: 'multiple-choice',
      stem: 'A wind turbine technician rappels down from a North Sea tower nacelle and pauses partway, hanging still on the rope. Why is this not a terminal velocity case, even though the resultant force on them is zero?',
      tier: 'confident',
      options: [
        'The resultant force is not really zero; the rope hides one arrow.',
        'Terminal velocity is the steady speed of a falling object. The technician is not falling; the rope tension holds them still, so the steady speed is zero, not a terminal velocity.',
        'It is a terminal velocity case, because the resultant force is zero.',
        'Terminal velocity only applies to skydivers, not to people on ropes.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ftv-mis-terminal-zero-speed',
      hint: 'Terminal velocity is about a falling object whose drag has grown to equal weight. A held still rope is a different situation.',
    },
    {
      id: 'ftv-q11',
      type: 'spot-misconception',
      stem: 'Aisha says, "When a skydiver reaches terminal velocity, gravity has stopped pulling on them. That is why they are not speeding up any more."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Gravity switches off once drag matches it, otherwise the skydiver would keep speeding up.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Gravity still pulls with the same weight. Drag has grown to equal weight, so the two arrows cancel and the resultant force is zero.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ftv-mis-terminal-weight-zero',
    },
    {
      id: 'ftv-q12',
      type: 'spot-misconception',
      stem: 'Theo says, "Once the parachute opens, the skydiver is weightless for a moment. That is why they slow down so fast."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. The parachute cancels weight, which is why the skydiver slows.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Weight is unchanged. The parachute makes drag big enough to be larger than weight for a while, so the resultant force is now upwards and the skydiver slows down.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ftv-mis-parachute-weightless',
    },
    {
      id: 'ftv-q13',
      type: 'numeric-entry',
      stem: 'A skydiver has a weight of 750 N. The drag on them at one moment in freefall is 250 N upwards. What is the size, in newtons, of the resultant downward force on the skydiver?',
      tier: 'confident',
      correctAnswer: 500,
      unit: 'N',
      xpValue: 15,
      hint: 'Take down as positive. Subtract the upward drag from the downward weight.',
    },
    {
      id: 'ftv-q14',
      type: 'data-extraction',
      stem: "Use the dataSource below, which describes a skydiver's speed-time graph, to read off the first terminal velocity (before the parachute opens).",
      tier: 'confident',
      dataSource:
        "Speed-time graph for a skydiver over Headcorn Aerodrome. Time on the x-axis runs from 0 s to 90 s. Speed on the y-axis runs from 0 m/s to 60 m/s. From 0 s to 25 s the line curves up from 0 m/s and slowly bends towards a flat line. From 25 s to 40 s the line is flat at 55 m/s. At 40 s the parachute opens; from 40 s to 50 s the line drops sharply down to 5 m/s. From 50 s to 90 s the line is flat at 5 m/s.",
      correctAnswer: '55 m/s',
      xpValue: 15,
      misconceptionId: 'ftv-mis-drag-constant',
      hint: 'Terminal velocity shows up as a flat (horizontal) part of the line. Read off the speed before the parachute opens.',
    },
    {
      id: 'ftv-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a raindrop falls onto a pavement at a steady speed, not faster and faster.',
      tier: 'core',
      steps: [
        'The raindrop leaves the cloud and starts to fall. Weight pulls down; drag is small because the speed is low.',
        'The resultant force is downwards, so the raindrop speeds up.',
        'As the raindrop goes faster, drag grows. The faster it falls, the harder the air pushes back.',
        null,
        'After this point the raindrop keeps falling at a steady 9 m/s, which is its terminal velocity.',
      ],
      missingStepIndex: 3,
      correctStep:
        'When drag has grown to equal the weight, the two arrows are equal and opposite. The resultant force becomes zero, so the raindrop stops speeding up.',
      xpValue: 15,
    },
    {
      id: 'ftv-q16',
      type: 'drag-order',
      stem: 'A skydiver leaps from a plane, falls in freefall, opens the parachute, and lands at a slow steady speed. Place the four phases of the jump in the order they happen.',
      tier: 'confident',
      items: [
        'Drag has grown to match weight; the skydiver falls at a steady 55 m/s (freefall terminal velocity).',
        'The parachute opens. Drag jumps up and is larger than weight; the skydiver slows down.',
        'Drag is small and much less than weight; the skydiver speeds up rapidly.',
        'Drag has dropped back to match weight; the skydiver falls at a steady 5 m/s (parachute terminal velocity).',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
      misconceptionId: 'ftv-mis-parachute-goes-up',
      hint: 'Start at the moment the skydiver leaves the plane and work through to landing.',
    },
    {
      id: 'ftv-q17',
      type: 'multiple-choice',
      stem: 'Two metal balls of the same shape and size, one made of steel and one made of aluminium, are dropped from a tall tower into still air. They both start to fall and reach terminal velocity. Which sentence describes their fall?',
      tier: 'challenge',
      options: [
        "The aluminium ball reaches a higher terminal velocity, because it weighs less.",
        'They reach the same terminal velocity, because they are the same shape.',
        'Neither ball reaches terminal velocity, because they are not parachutists.',
        'The steel ball reaches a higher terminal velocity, because its weight is larger, so drag has to grow more before it matches weight.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'ftv-mis-heavier-falls-faster',
      hint: 'At terminal velocity drag equals weight. Same shape means drag grows the same way with speed; the heavier ball needs more drag, which means a higher speed.',
    },
    {
      id: 'ftv-q18',
      type: 'multiple-choice',
      stem: 'A 70 kg skydiver with weight 700 N falls in freefall over Kent. The graph of their speed against time has a flat section between 25 s and 40 s, at 55 m/s. Which sentence describes the resultant force on the skydiver during this flat section?',
      tier: 'challenge',
      options: [
        'Resultant force is 0 N; drag equals weight at 55 m/s.',
        'Resultant force is 700 N down; the skydiver speeds up.',
        'Resultant force is 700 N up; the skydiver slows down.',
        'Resultant force is 55 N down; this is why the speed is steady.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'ftv-mis-terminal-zero-speed',
      hint: 'A flat speed-time graph means the velocity is not changing. By the first law, the resultant force must be zero.',
    },
    {
      id: 'ftv-q19',
      type: 'numeric-entry',
      stem: 'A wind turbine maintenance crew member has a weight of 900 N. They are at terminal velocity in a long freefall during a training jump over the North Sea coast (before opening the chute). What is the size, in newtons, of the air resistance acting on them?',
      tier: 'challenge',
      correctAnswer: 900,
      unit: 'N',
      xpValue: 20,
      misconceptionId: 'ftv-mis-terminal-weight-zero',
      hint: 'Terminal velocity means resultant force = 0. So drag = weight, whatever the speed.',
    },
    {
      id: 'ftv-q20',
      type: 'multiple-choice',
      stem: 'A skydiver opens their parachute and slows down. After about ten seconds the parachute terminal velocity is reached at 5 m/s. Which sentence best explains why the new terminal velocity is much smaller than the freefall terminal velocity?',
      tier: 'challenge',
      options: [
        "Weight is much smaller with the parachute open, so drag does not need to grow much.",
        'Gravity is weaker once the parachute opens, so weight is less.',
        'Weight is unchanged. The parachute presents a much larger shape to the air, so the same drag value is reached at a much smaller speed.',
        'The parachute makes the skydiver heavier, so terminal velocity drops.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ftv-mis-parachute-weightless',
      hint: 'At any terminal velocity drag must equal weight. Weight has not changed. What has changed is the shape collecting drag.',
    },
    {
      id: 'ftv-q21',
      type: 'free-text',
      stem: 'A friend in Year 7 watches a video of a skydive over Kent and says, "Once the skydiver hits terminal velocity they have no weight any more, otherwise gravity would still be making them go faster and faster." Use the ideas of weight, drag, and resultant force to give one fair point and one mistake in the claim.',
      tier: 'challenge',
      sampleAnswer:
        'A fair point is that something must change to stop the skydiver speeding up. Gravity never stops pulling, so weight by itself would keep the speed rising. The mistake is the idea that weight has vanished. Weight has not changed; the skydiver is still pulled down by gravity with the same force as when they left the plane. What has changed is the air resistance (drag). Drag grows as the skydiver speeds up, because moving faster through the air means a bigger push back. When drag has grown to match weight, the two arrows are equal and opposite. The resultant force is now zero, so by the first law the velocity stops changing. The skydiver keeps falling, but at a steady speed called terminal velocity. So weight stays the same; drag catches up to it.',
      keywords: [
        'weight',
        'drag',
        'air resistance',
        'resultant force',
        'terminal velocity',
        'unchanged',
        'equal',
      ],
      xpValue: 20,
      misconceptionId: 'ftv-mis-terminal-weight-zero',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates write "weight is zero" or "gravity has stopped" when describing terminal velocity
    {
      id: 'ftv-mis-terminal-weight-zero',
      description:
        'Believing that at terminal velocity the weight of the falling object becomes zero, on the grounds that the object is no longer speeding up.',
      triggerAnswer: 'terminal-weight-zero',
      correction:
        'Weight does not change at terminal velocity. Gravity still pulls with the same force. What has changed is drag, which has grown to equal weight, so the resultant force is zero.',
      reExplanation:
        'A 70 kg skydiver weighs about 700 N at every moment of the fall. When they leave the plane the drag is small, so the resultant force is about 700 N down and they speed up. By terminal velocity the drag has grown to 700 N upwards. Weight is still 700 N down; drag is now 700 N up. The two arrows balance and the resultant is zero.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates state "heavier objects fall faster" without addressing terminal velocity or initial acceleration
    {
      id: 'ftv-mis-heavier-falls-faster',
      description:
        'Believing that heavier objects always fall faster, missing the difference between initial acceleration (same for all masses, ignoring drag) and terminal velocity (higher for heavier objects of the same shape).',
      triggerAnswer: 'heavier-falls-faster',
      correction:
        'In a vacuum, all masses fall with the same acceleration. In air, a heavier object of the same shape reaches a higher terminal velocity, since drag must grow more to match the larger weight.',
      reExplanation:
        'Two same-shaped balls (steel and aluminium) drop from a tower. Both start with about the same acceleration, because drag is tiny at low speeds. As they speed up, drag grows. The lighter aluminium ball reaches the matching drag at a lower speed; the heavier steel ball needs a higher speed for drag to catch up to its bigger weight. So the steel ball ends at a higher terminal velocity.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates assume drag is constant during a fall
    {
      id: 'ftv-mis-drag-constant',
      description:
        'Believing that air resistance is a fixed size during a fall, not depending on speed, so an object could never reach a steady terminal velocity.',
      triggerAnswer: 'drag-constant',
      correction:
        'Drag grows as a falling object speeds up. Once drag has grown to equal weight, the resultant force becomes zero and the object falls at a steady terminal velocity.',
      reExplanation:
        'Picture a raindrop just leaving a cloud. The drop is going slowly, so drag is small. As gravity speeds it up, drag grows; the faster the drop moves through the air, the harder the air pushes back. After a short time drag reaches the same size as the weight. From then on, the two arrows cancel and the drop falls at a steady 9 m/s onto the pavement.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates describe parachute opening as making the skydiver "weightless" or "lighter"
    {
      id: 'ftv-mis-parachute-weightless',
      description:
        'Believing that opening a parachute makes the skydiver weightless or lighter, missing that weight is unchanged and the parachute only raises drag.',
      triggerAnswer: 'parachute-weightless',
      correction:
        'A parachute does not change weight. It changes the shape that meets the air, so drag becomes much larger at any given speed. The parachute does not switch off gravity.',
      reExplanation:
        'Before the parachute opens, the skydiver is pulled down with about 700 N. After it opens, gravity still pulls with 700 N. What changes is the air resistance. The open canopy is a much bigger surface, so drag at any speed is much bigger than for the body alone. Drag now beats weight, the skydiver slows, then settles at a new terminal velocity where drag again equals 700 N.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on parachute deployment
    {
      id: 'ftv-mis-parachute-goes-up',
      description:
        'Believing that once the parachute opens and drag is larger than weight, the skydiver actually moves upwards through the air, rather than slowing down.',
      triggerAnswer: 'parachute-goes-up',
      correction:
        'An upward resultant force changes the velocity, not the direction of motion straight away. The skydiver is still moving downwards but slowing; they do not lift back up off the ground.',
      reExplanation:
        'Just after the chute opens, the skydiver is moving down at 55 m/s. Drag is now larger than weight, so the resultant force is upwards. That force makes their downward speed shrink, second by second. They keep moving downwards the whole time, but each second they cover less distance. Once drag has dropped back to match weight, the speed is now a steady 5 m/s, still downwards.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates equate "terminal velocity" with "zero speed" or "the object has stopped"
    {
      id: 'ftv-mis-terminal-zero-speed',
      description:
        'Mistaking terminal velocity for a stopped object, on the grounds that "the speed is no longer changing" sounds like the object has come to rest.',
      triggerAnswer: 'terminal-zero-speed',
      correction:
        'Terminal velocity is a steady falling speed, not zero. The resultant force is zero, but the velocity is still a downward number such as 55 m/s in freefall or 5 m/s under a parachute.',
      reExplanation:
        'A skydiver at terminal velocity is still falling and still passing the air below them. A speed-time graph of the jump shows a flat line at 55 m/s, then a sharp drop to a flat line at 5 m/s after the parachute opens. Both flat lines sit above the time axis; neither sits at zero. A stopped object would lie on the time axis itself.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesTerminalVelocityZoneNodes = [forcesTerminalVelocity]
