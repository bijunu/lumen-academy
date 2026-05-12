import type { SkillNode } from '@/types/content'

const SOLENOID_FIELD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Field of a long solenoid: uniform inside, bar-magnet shape outside</text>

    <!-- Solenoid as a row of coil loops (ellipses) round a central axis -->
    <!-- Outer outline (long cylinder) -->
    <rect x="220" y="180" width="360" height="80" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Eight coil loops shown as small vertical ellipses -->
    <ellipse cx="240" cy="220" rx="10" ry="38" />
    <ellipse cx="285" cy="220" rx="10" ry="38" />
    <ellipse cx="330" cy="220" rx="10" ry="38" />
    <ellipse cx="375" cy="220" rx="10" ry="38" />
    <ellipse cx="420" cy="220" rx="10" ry="38" />
    <ellipse cx="465" cy="220" rx="10" ry="38" />
    <ellipse cx="510" cy="220" rx="10" ry="38" />
    <ellipse cx="555" cy="220" rx="10" ry="38" />

    <!-- Pole labels at each end -->
    <text x="200" y="225" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="600" y="225" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Uniform interior field (straight parallel arrows pointing left to right, i.e. N to S inside) -->
    <line x1="245" y1="200" x2="555" y2="200" stroke-width="1.6" />
    <polygon points="548,196 558,200 548,204" fill="currentColor" stroke="none" />
    <line x1="245" y1="220" x2="555" y2="220" stroke-width="1.6" />
    <polygon points="548,216 558,220 548,224" fill="currentColor" stroke="none" />
    <line x1="245" y1="240" x2="555" y2="240" stroke-width="1.6" />
    <polygon points="548,236 558,240 548,244" fill="currentColor" stroke="none" />

    <!-- Outside loops: from N (left) round to S (right), like a bar magnet -->
    <path d="M 220 200 C 220 130, 580 130, 580 200" />
    <polygon points="395,128 410,123 405,138" fill="currentColor" stroke="none" />
    <path d="M 220 180 C 220 90, 580 90, 580 180" />
    <polygon points="395,88 410,83 405,98" fill="currentColor" stroke="none" />

    <path d="M 220 260 C 220 330, 580 330, 580 260" />
    <polygon points="395,332 410,327 405,342" fill="currentColor" stroke="none" />
    <path d="M 220 280 C 220 370, 580 370, 580 280" />
    <polygon points="395,372 410,367 405,382" fill="currentColor" stroke="none" />

    <!-- Side labels -->
    <text x="110" y="220" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Inside: lines are straight,</text>
    <text x="110" y="238" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">parallel, evenly spaced</text>
    <text x="110" y="256" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(uniform field)</text>

    <text x="690" y="220" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Outside: looks like a</text>
    <text x="690" y="238" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">bar magnet (N to S)</text>
    <text x="690" y="256" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(weak, curves round)</text>

    <line x1="60" y1="395" x2="740" y2="395" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="418" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">A long solenoid acts like a bar magnet outside, but its inside field is uniform and strong.</text>
  </g>
`

const RIGHT_HAND_RULE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Right-hand grip rule: straight wire vs solenoid</text>

    <!-- Left half: straight current-carrying wire with circular field lines -->
    <text x="200" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Straight wire: field lines are circles</text>

    <!-- Vertical wire -->
    <line x1="200" y1="90" x2="200" y2="290" stroke-width="3" />
    <polygon points="195,95 200,80 205,95" fill="currentColor" stroke="none" />
    <text x="180" y="80" text-anchor="end" font-size="11" stroke="none" fill="currentColor">I</text>

    <!-- Three concentric circles round the wire (field) -->
    <circle cx="200" cy="190" r="40" stroke-width="1.6" />
    <circle cx="200" cy="190" r="60" stroke-width="1.6" />
    <circle cx="200" cy="190" r="80" stroke-width="1.6" />

    <!-- Arrow heads on each circle, showing anticlockwise when viewed from above (current up) -->
    <polygon points="240,186 240,194 248,190" fill="currentColor" stroke="none" />
    <polygon points="260,186 260,194 268,190" fill="currentColor" stroke="none" />
    <polygon points="280,186 280,194 288,190" fill="currentColor" stroke="none" />

    <!-- Right-hand reminder -->
    <text x="200" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Thumb along current, fingers curl</text>
    <text x="200" y="336" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">in the direction of the field.</text>

    <!-- Right half: solenoid view from one end (current direction in loops) -->
    <text x="600" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Solenoid end-on: anticlockwise = N pole</text>

    <!-- Big circle as the coil end, with curved arrows showing anticlockwise current -->
    <circle cx="600" cy="190" r="70" stroke-width="2" />

    <!-- Anticlockwise arrows on the loop -->
    <path d="M 670 190 A 70 70 0 0 1 600 260" />
    <polygon points="605,260 595,265 605,272" fill="currentColor" stroke="none" />
    <path d="M 600 260 A 70 70 0 0 1 530 190" />
    <polygon points="530,195 525,182 540,188" fill="currentColor" stroke="none" />
    <path d="M 530 190 A 70 70 0 0 1 600 120" />
    <polygon points="595,120 605,115 595,108" fill="currentColor" stroke="none" />

    <!-- N pole label in the middle (pointing out of the page toward viewer) -->
    <text x="600" y="196" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="600" y="218" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(field points out toward you)</text>

    <text x="600" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Curl right-hand fingers with the current,</text>
    <text x="600" y="336" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">thumb points to the N pole.</text>

    <line x1="60" y1="370" x2="740" y2="370" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="392" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Use the right hand for conventional current. Reverse the current and the poles swap.</text>
  </g>
`

const POLE_FINDING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Finding the poles of a solenoid (school lab demo)</text>

    <!-- Cardboard tube with insulated wire wound round it -->
    <rect x="180" y="170" width="440" height="80" stroke-dasharray="3,3" stroke-width="1" />
    <text x="400" y="265" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cardboard tube (insulator)</text>

    <!-- Coil loops (10 of them) -->
    <ellipse cx="200" cy="210" rx="8" ry="38" />
    <ellipse cx="240" cy="210" rx="8" ry="38" />
    <ellipse cx="280" cy="210" rx="8" ry="38" />
    <ellipse cx="320" cy="210" rx="8" ry="38" />
    <ellipse cx="360" cy="210" rx="8" ry="38" />
    <ellipse cx="400" cy="210" rx="8" ry="38" />
    <ellipse cx="440" cy="210" rx="8" ry="38" />
    <ellipse cx="480" cy="210" rx="8" ry="38" />
    <ellipse cx="520" cy="210" rx="8" ry="38" />
    <ellipse cx="560" cy="210" rx="8" ry="38" />
    <ellipse cx="600" cy="210" rx="8" ry="38" />

    <!-- Current path leads on the left side: from battery up over the top -->
    <line x1="120" y1="320" x2="120" y2="170" stroke-width="2" />
    <line x1="120" y1="170" x2="200" y2="170" stroke-width="2" />
    <polygon points="135,170 125,165 125,175" fill="currentColor" stroke="none" />

    <line x1="680" y1="170" x2="600" y2="170" stroke-width="2" />
    <line x1="680" y1="170" x2="680" y2="320" stroke-width="2" />

    <!-- Battery box -->
    <rect x="100" y="320" width="40" height="40" stroke-width="2" />
    <line x1="120" y1="325" x2="120" y2="355" />
    <text x="120" y="378" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">+</text>
    <line x1="660" y1="320" x2="700" y2="320" stroke-width="2" />
    <line x1="660" y1="355" x2="700" y2="355" stroke-width="2" />
    <rect x="660" y="320" width="40" height="40" stroke-width="2" />
    <text x="680" y="378" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">-</text>

    <!-- Pole labels -->
    <text x="160" y="215" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="640" y="215" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Annotation arrows -->
    <text x="120" y="100" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">View the left end:</text>
    <text x="120" y="118" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current flows</text>
    <text x="120" y="134" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">anticlockwise -> N</text>

    <text x="680" y="100" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">View the right end:</text>
    <text x="680" y="118" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current flows</text>
    <text x="680" y="134" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">clockwise -> S</text>

    <text x="400" y="405" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Swap the battery leads and both labels flip: left becomes S, right becomes N.</text>
  </g>
`

export const magnetismSolenoidField: SkillNode = {
  id: 'physics-magnetism-solenoid-field',
  title: 'Field of a Solenoid',
  description:
    'A solenoid is a long coil of insulated wire. When current flows through it, the wire produces a magnetic field with a special shape: outside, the lines run from one end to the other and look just like the field round a bar magnet; inside, the lines are straight, parallel and evenly spaced, which is what physicists call a uniform field. The two ends of the solenoid behave as a N pole and a S pole. To work out which end is which, use the right-hand grip rule. Curl the fingers of your right hand round the solenoid in the direction of conventional current, and your thumb points to the N pole. Equivalently, look at one end face: if the current circulates anticlockwise, that end is the N pole; if it runs clockwise, that end is the S pole. Reverse the current and the poles swap. This idea matters for real devices, from school lab demos with a cardboard tube to industrial MRI scanners, relays in UK cars and central-heating valves.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'challenge',
  prerequisites: ['physics-magnetism-strengthening-electromagnets'],
  curriculum: {
    ks3Objective:
      'Goes beyond KS3; extension of the magnetic effect of a current to the field shape of a solenoid and finding its poles using the right-hand grip rule.',
    awardingBodies: {
      aqa: '4.7.2.1 Electromagnetism; field pattern of a solenoid resembles a bar magnet, with a strong uniform field inside (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.9-7.10 field around a current-carrying wire and a solenoid, locating the poles using the right-hand grip rule (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; solenoid field pattern and pole identification (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1 (field pattern of a solenoid, uniform field inside, bar-magnet pattern outside), accessed 2026-05-12; standard wording in CGP GCSE Physics Complete Revision and Practice (2022), solenoid field plate.
    {
      id: 'pmsf-solenoid-pattern',
      title: 'A solenoid: uniform inside, bar-magnet shape outside',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the two key features of the solenoid field.',
      data: {
        viewBox: '0 0 800 440',
        svg: SOLENOID_FIELD_SVG,
        hotspots: [
          {
            id: 'pmsf-inside',
            x: 14,
            y: 53,
            label: 'Inside: uniform field',
            description:
              'Along the middle of a long solenoid the field lines are straight, parallel and evenly spaced. The field has the same strength and direction at every point inside. This is a uniform field, the kind a bar magnet does not produce in its interior.',
          },
          {
            id: 'pmsf-outside',
            x: 86,
            y: 53,
            label: 'Outside: looks like a bar magnet',
            description:
              'Just outside the solenoid, the field lines curve from one end round to the other, just like the field of a bar magnet. One end of the solenoid acts as the N pole and the other as the S pole. The field outside is weaker than the field inside.',
          },
          {
            id: 'pmsf-poles',
            x: 28,
            y: 51,
            label: 'N pole at this end',
            description:
              'Use the right-hand grip rule to find the N pole: curl the fingers of your right hand round the solenoid in the direction of conventional current; your thumb then points to the N pole. Equivalently, look at this end face and check if the current flows anticlockwise.',
          },
          {
            id: 'pmsf-symmetry',
            x: 50,
            y: 94,
            label: 'Reverse the current to swap the poles',
            description:
              'The N and S labels are set by which way the current goes round the coils. Swap the battery leads round, and both labels flip: the end that was N becomes S, and the other end becomes N. Turning the solenoid round does not swap them.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.9-7.10 field round a current-carrying straight wire and a solenoid, right-hand grip rule), accessed 2026-05-12; KS4 wording in CGP GCSE Physics Complete Revision and Practice (2022).
    {
      id: 'pmsf-right-hand-rule',
      title: 'Right-hand grip rule: straight wire vs solenoid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how the right-hand grip rule applies to a straight wire and to a solenoid.',
      data: {
        viewBox: '0 0 800 400',
        svg: RIGHT_HAND_RULE_SVG,
        hotspots: [
          {
            id: 'pmsf-straight-wire',
            x: 25,
            y: 16,
            label: 'Straight wire: field lines are circles',
            description:
              'A current-carrying straight wire has a field of concentric circles round it. Point the thumb of your right hand along the direction of conventional current; your fingers then curl in the direction of the field lines round the wire.',
          },
          {
            id: 'pmsf-solenoid-grip',
            x: 75,
            y: 16,
            label: 'Solenoid: curl fingers with the current',
            description:
              'For a solenoid, curl the fingers of your right hand round the coil in the direction the current flows. Your thumb now points along the axis, toward the N pole of the solenoid. If your thumb points left, that end is the N pole.',
          },
          {
            id: 'pmsf-end-on',
            x: 75,
            y: 47,
            label: 'Anticlockwise end = N pole',
            description:
              'Looking at one end of the solenoid face on, work out the direction of current in the loops. Anticlockwise circulation, viewed from your eye, marks an N pole. Clockwise circulation marks an S pole. Memory aid: the letter N has anticlockwise strokes, S has clockwise strokes.',
          },
          {
            id: 'pmsf-conventional-current',
            x: 50,
            y: 94,
            label: 'Use the right hand for conventional current',
            description:
              'The right-hand grip rule uses conventional current (positive to negative outside the cell). Some books use the left hand for electron flow, which runs the other way. At KS3 and GCSE in the UK we use conventional current and the right hand.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.2 (locating the poles of a solenoid; school-lab demonstration), accessed 2026-05-12; demonstration method in CGP GCSE Physics Complete Revision and Practice (2022).
    {
      id: 'pmsf-lab-demo',
      title: 'Finding the poles in a school lab demo',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a pupil works out the poles of a solenoid wound on a cardboard tube.',
      data: {
        viewBox: '0 0 800 420',
        svg: POLE_FINDING_SVG,
        hotspots: [
          {
            id: 'pmsf-tube',
            x: 50,
            y: 50,
            label: 'Cardboard tube and insulated wire',
            description:
              'A typical school lab solenoid is made by winding insulated copper wire neatly round a cardboard tube. The tube is an insulator, so it does not short out the coils. Connect the two ends of the wire to a low-voltage battery pack.',
          },
          {
            id: 'pmsf-left-end',
            x: 15,
            y: 30,
            label: 'Left end: anticlockwise -> N',
            description:
              'Stand at the left end of the tube and check the direction of current in that end loop. If the current circulates anticlockwise as you see it, that end is the N pole. Confirm with the right-hand grip rule: thumb points out of the left end.',
          },
          {
            id: 'pmsf-right-end',
            x: 85,
            y: 30,
            label: 'Right end: clockwise -> S',
            description:
              'Walk round to the other end and look back along the axis. The same current now appears to flow clockwise as you see it from this side, marking the right end as the S pole. Both labels are set; you can test with a plotting compass.',
          },
          {
            id: 'pmsf-reverse',
            x: 50,
            y: 96,
            label: 'Swap leads to swap the poles',
            description:
              'To check this is genuine, reverse the battery leads. The N and S labels flip: the end that was N becomes S, and the end that was S becomes N. A plotting compass placed at each end shows the swap clearly.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1; standard worked-example pattern in CGP GCSE Physics Complete Revision and Practice (2022).
    {
      id: 'pmsf-worked-1',
      title: 'Identifying the N pole of a solenoid (end-on view)',
      steps: [
        {
          explanation:
            'Set out the situation. A Year 7 pupil winds insulated wire round a cardboard tube. Looking at the right-hand end of the tube, they see the current circulating anticlockwise in the coils. Which end is the N pole?',
        },
        {
          explanation:
            'Choose the right tool. There are two equivalent options: the right-hand grip rule, or the end-on letter check (N has anticlockwise strokes, S has clockwise strokes).',
        },
        {
          explanation:
            'Apply the end-on check. The current is anticlockwise on the right-hand end face, so that end matches the letter N. The right-hand end is the N pole.',
          maths: 'anticlockwise current at this end -> N pole',
        },
        {
          explanation:
            'Cross-check with the grip rule. Curl the fingers of your right hand round the tube in the direction of the current. Your thumb points to the right, out of the right-hand end of the tube. The thumb points to the N pole, so again the right end is N.',
        },
        {
          explanation:
            'State the answer. The right-hand end of the solenoid is the N pole; the left end is therefore the S pole. If the pupil reversed the battery leads, both labels would swap.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.9-7.10 field strength inside a solenoid; recap of factors for n and I); CGP GCSE Physics Complete Revision and Practice (2022).
    {
      id: 'pmsf-worked-2',
      title: 'Calculating turns per centimetre on a school-lab solenoid',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil winds 240 turns of insulated wire evenly along a 12 cm cardboard tube. They want to know the turns per centimetre (a measure of how tightly the coil is wound).',
        },
        {
          explanation:
            'Recall the link. The field inside a solenoid is roughly proportional to n, the number of turns per unit length, multiplied by the current. So a tight winding (large n) gives a stronger inside field at the same current.',
          maths: 'B inside is proportional to n times I',
        },
        {
          explanation:
            'Divide turns by length. n = 240 turns divided by 12 cm = 20 turns per cm.',
          maths: 'n = 240 / 12 = 20 turns per cm',
        },
        {
          explanation:
            'Check the units. The pupil could also report this as 2000 turns per metre, which is the unit used in most GCSE textbooks. Both numbers describe the same coil.',
          maths: '20 turns per cm = 2000 turns per metre',
        },
        {
          explanation:
            'State the answer. The coil has 20 turns per cm. If the pupil rewinds the same wire on a 6 cm tube instead, n doubles to 40 turns per cm, and (at the same current) the inside field roughly doubles too.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmsf-q1',
      type: 'multiple-choice',
      stem: 'A solenoid is best described as which of the following?',
      tier: 'core',
      options: [
        'A single straight current-carrying wire.',
        'A long coil of insulated wire that produces a magnetic field when current flows through it.',
        'A permanent bar magnet with no wire.',
        'A short, flat piece of iron with no coil.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Think of a school lab demo: insulated wire wound many times round a cardboard tube.',
    },
    {
      id: 'pmsf-q2',
      type: 'multiple-choice',
      stem: 'The field lines just outside a long solenoid (away from the ends) look most like the field of which object?',
      tier: 'core',
      options: [
        'A bar magnet.',
        'A single positive electric charge.',
        'A flat sheet of iron with no current.',
        'A bowl of water.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmsf-mis-solenoid-vs-barmagnet-inside',
      hint: 'Outside the coil, the lines curve from one end round to the other, just like for a bar magnet.',
    },
    {
      id: 'pmsf-q3',
      type: 'multiple-choice',
      stem: 'Inside a long solenoid, away from the ends, the magnetic field is:',
      tier: 'core',
      options: [
        'zero everywhere.',
        'curving sharply and reversing direction at the centre.',
        'uniform: straight, parallel, evenly spaced lines.',
        'the same shape as the field inside a bar magnet.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmsf-mis-solenoid-vs-barmagnet-inside',
      hint: 'Uniform means the lines are straight and evenly spaced, with the same strength at every point.',
    },
    {
      id: 'pmsf-q4',
      type: 'multiple-choice',
      stem: 'You look at one end face of a solenoid. The current flows round the loops anticlockwise as you see it. Which pole is that end?',
      tier: 'core',
      options: [
        'S pole.',
        'Neither N nor S; it has no pole.',
        'Both poles at once.',
        'N pole.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmsf-mis-left-hand-rule',
      hint: 'Memory aid: N has anticlockwise strokes; anticlockwise current at an end marks an N pole.',
    },
    {
      id: 'pmsf-q5',
      type: 'numeric-entry',
      stem: 'Use the end-on rule. Code the direction as 1 for anticlockwise -> N pole, 2 for clockwise -> S pole, 3 for no pole. You look at the left end of a school lab solenoid and see the current flowing clockwise. Enter the code for that end.',
      tier: 'core',
      correctAnswer: 2,
      unit: '(code)',
      xpValue: 10,
      misconceptionId: 'pmsf-mis-flip-coil-swaps-poles',
      hint: 'Clockwise circulation viewed end-on marks the S pole. The code for that is 2.',
    },
    {
      id: 'pmsf-q6',
      type: 'numeric-entry',
      stem: 'A pupil winds 200 turns of insulated wire neatly along a 10 cm cardboard tube to make a solenoid. What is the number of turns per centimetre? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 20,
      unit: 'turns per cm',
      xpValue: 10,
      hint: 'Divide the total number of turns by the length in cm: 200 / 10.',
    },
    {
      id: 'pmsf-q7',
      type: 'multiple-choice',
      stem: 'A pupil has built a solenoid and labelled its left end as the N pole. They then reverse the battery leads (so the current now flows the opposite way round each coil). What happens to the labels?',
      tier: 'confident',
      options: [
        'Nothing changes; N stays on the left.',
        'Both poles vanish; the solenoid has no poles now.',
        'The labels swap: the left end becomes S, the right end becomes N.',
        'Both ends become N at the same time.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmsf-mis-flip-coil-swaps-poles',
      hint: 'Pole labels are set by the direction of the current, not by which way the tube is facing.',
    },
    {
      id: 'pmsf-q8',
      type: 'multiple-choice',
      stem: 'Round a single current-carrying straight wire (not a coil), what shape do the magnetic field lines take?',
      tier: 'confident',
      options: [
        'Straight lines along the wire.',
        'Concentric circles round the wire, in planes at right angles to the wire.',
        'Long loops that look like a bar magnet field.',
        'The wire has no magnetic field unless it is bent into a loop.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmsf-mis-straight-wire-no-field',
      hint: 'Use the right-hand grip rule: thumb along the current, fingers curl as circles round the wire.',
    },
    {
      id: 'pmsf-q9',
      type: 'multiple-choice',
      stem: 'Which hand is used with the grip rule when working with conventional current in a solenoid?',
      tier: 'confident',
      options: [
        'The left hand, every time.',
        'Either hand; it makes no difference.',
        'The right hand: curl the fingers in the direction of conventional current; the thumb points to the N pole.',
        'Both hands together, fingers interlocked.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmsf-mis-left-hand-rule',
      hint: 'Conventional current and the right hand go together. Left hand is sometimes used for electron flow.',
    },
    {
      id: 'pmsf-q10',
      type: 'numeric-entry',
      stem: 'A second solenoid is wound with 360 turns over a 9 cm length. What is the number of turns per centimetre? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 40,
      unit: 'turns per cm',
      xpValue: 15,
      hint: '360 turns spread over 9 cm: divide 360 by 9.',
    },
    {
      id: 'pmsf-q11',
      type: 'numeric-entry',
      stem: 'An MRI scanner solenoid uses a very tight winding to give a strong uniform inside field. A teaching model has 5000 turns spread evenly over a 50 cm length of former. What is the number of turns per centimetre? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 100,
      unit: 'turns per cm',
      xpValue: 15,
      hint: '5000 turns over 50 cm: divide 5000 by 50.',
    },
    {
      id: 'pmsf-q12',
      type: 'numeric-entry',
      stem: 'A pupil looks at the right-hand end of a solenoid and sees the current flowing anticlockwise. Use the code 1 = anticlockwise (N), 2 = clockwise (S), 3 = no pole. Enter the code that matches the right-hand end.',
      tier: 'confident',
      correctAnswer: 1,
      unit: '(code)',
      xpValue: 15,
      hint: 'Anticlockwise circulation at an end face marks an N pole. The code for that is 1.',
    },
    {
      id: 'pmsf-q13',
      type: 'drag-order',
      stem: 'Put the steps in order for working out the N pole of a solenoid using the right-hand grip rule.',
      tier: 'confident',
      items: [
        'Identify the N pole as the end your thumb points toward.',
        'Place your right hand round the solenoid.',
        'Check the direction of conventional current in the wire.',
        'Curl your fingers in the direction of the current.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'First you need to know which way the current goes, then position your hand, curl the fingers, and read off the thumb.',
    },
    {
      id: 'pmsf-q14',
      type: 'spot-misconception',
      stem: 'Two pupils are debating where the field inside a solenoid runs.',
      tier: 'confident',
      statements: [
        {
          text: 'Pupil A says: "Inside a solenoid the field lines run from the S pole to the N pole, because that is the opposite of outside, and that is just how it works." This is wrong; you do not pick the direction inside by flipping the rule. Use the right-hand grip rule with the current, and the field inside runs from the S pole end toward the N pole end as a result, but only because the current sets it.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "Inside the solenoid the field lines are straight, parallel and evenly spaced (uniform). The direction is set by the right-hand grip rule applied to the current in the loops, not by a separate inside-outside rule." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmsf-mis-field-runs-s-to-n-inside',
    },
    {
      id: 'pmsf-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the N pole of a solenoid using the right-hand grip rule.',
      tier: 'challenge',
      steps: [
        'Check the direction of conventional current in the coil wire.',
        'Place your right hand round the coil.',
        null,
        'Read off the direction your thumb points along the axis.',
        'That end of the solenoid is the N pole; the other end is the S pole.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Curl the fingers of your right hand round the coil in the same direction as the conventional current.',
      xpValue: 20,
      hint: 'The step between placing your hand and reading off the thumb is about curling the fingers.',
    },
    {
      id: 'pmsf-q16',
      type: 'multiple-choice',
      stem: 'A pupil claims: "The field outside a long solenoid is zero, because all the field is inside the coil." Why is this wrong?',
      tier: 'challenge',
      options: [
        'The pupil is right; the outside field is exactly zero.',
        'The field outside a long solenoid is weak, but not zero: the lines must curve round from one end to the other to form complete loops, so there has to be some field outside.',
        'The field outside is actually stronger than the field inside.',
        'Solenoids have no magnetic field anywhere, inside or outside.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmsf-mis-outside-field-zero',
      hint: 'Field lines always form closed loops. If the lines run one way inside, they must curve back outside to complete the loop.',
    },
    {
      id: 'pmsf-q17',
      type: 'multiple-choice',
      stem: 'A school lab solenoid carries 1 A and gives a roughly uniform inside field. A pupil reasons: "If I keep doubling the current, the field will keep doubling forever." What is the limit they have missed?',
      tier: 'challenge',
      options: [
        'There is no limit; the field really does double forever with current.',
        'The wire heats up as current rises; at some point it gets too hot, the resistance changes and eventually the insulation could fail, so you cannot raise the current without limit.',
        'The wire becomes lighter as current rises, so the coil floats away.',
        'The solenoid stops being a solenoid at high current.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmsf-mis-current-no-limit',
      hint: 'Real wires have resistance and can only carry so much current before they overheat.',
    },
    {
      id: 'pmsf-q18',
      type: 'numeric-entry',
      stem: 'A pupil winds 480 turns of insulated wire over a 12 cm length of cardboard tube. They then unwind the wire and rewind it over a 6 cm length of the same tube (using the same wire, so still 480 turns). What is the new number of turns per centimetre? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 80,
      unit: 'turns per cm',
      xpValue: 20,
      hint: 'Same total turns, half the length: 480 turns divided by 6 cm.',
    },
    {
      id: 'pmsf-q19',
      type: 'spot-misconception',
      stem: 'A pupil writes about how to change the N and S labels on a solenoid.',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil writes: "To swap the N and S labels on my solenoid, I just lift it up and put it down the other way round. The end that was on the right is now on the left, so the labels have swapped." This is wrong; the labels are set by the direction of current in the loops, not by which way the tube is facing in the room. Turning the tube round does not change which end is N.',
          isMisconception: true,
        },
        {
          text: 'The pupil writes: "To swap the N and S labels on my solenoid, I reverse the battery leads so the current now flows the other way round each coil. By the right-hand grip rule, my thumb now points to the other end, which is now the N pole." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmsf-mis-flip-coil-swaps-poles',
    },
    {
      id: 'pmsf-q20',
      type: 'multiple-choice',
      stem: 'A pupil compares the inside of a long solenoid with the inside of a bar magnet of the same size and shape. Which statement best captures the key difference?',
      tier: 'challenge',
      options: [
        'There is no difference; both interiors have a uniform field running from N to S.',
        'Inside the solenoid the field is uniform (straight, parallel, evenly spaced), while inside a bar magnet the field is set by the aligned atomic magnets in the iron and is not described in the same simple uniform way at KS3.',
        'Inside the bar magnet the field is uniform; inside the solenoid the field is zero.',
        'Both interiors have zero field; only the outside has any field at all.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmsf-mis-solenoid-vs-barmagnet-inside',
      hint: 'A solenoid has a clear uniform interior; a bar magnet interior is more complex because of the atomic magnets in the iron.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that the field inside a solenoid runs from S to N as a separate rule, rather than as a consequence of the right-hand grip rule.
    {
      id: 'pmsf-mis-field-runs-s-to-n-inside',
      description:
        'Believing the field inside a solenoid runs from S to N as a flipped version of the outside-magnet rule, without using the grip rule.',
      triggerAnswer: 'inside-s-to-n-by-rule',
      correction:
        'Use the right-hand grip rule with the current to set the field direction inside. The lines do then run from the S pole end toward the N pole end, but only because the current is what fixes the direction.',
      reExplanation:
        'A solenoid is not the same shape as a single bar magnet inside, so do not copy a flipped rule across. Curl the fingers of your right hand round the coil in the direction of current; the thumb points to the N pole. The straight uniform lines inside then run along the axis toward that N pole as a result.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates wrote that the inside of a bar magnet has the same uniform field as the inside of a solenoid.
    {
      id: 'pmsf-mis-solenoid-vs-barmagnet-inside',
      description:
        'Believing the inside of a bar magnet has the same uniform field as the inside of a solenoid.',
      triggerAnswer: 'bar-magnet-uniform-inside',
      correction:
        'Only the long solenoid has a clearly uniform interior field. A bar magnet interior is set by the aligned atomic magnets in the iron and is not treated as a simple uniform field at KS3.',
      reExplanation:
        'The look-alike between a solenoid and a bar magnet holds outside the magnet only. Inside, a long solenoid has straight, parallel, evenly spaced lines (a uniform field). A bar magnet interior is full of aligned domains; there is a field there, but it is not the simple uniform pattern of a solenoid.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that the left-hand rule should be used to find the N pole of a solenoid carrying conventional current.
    {
      id: 'pmsf-mis-left-hand-rule',
      description:
        'Using the left hand with the grip rule for conventional current in a solenoid, or assuming either hand works.',
      triggerAnswer: 'left-hand-grip-rule',
      correction:
        'Use the right hand for conventional current. Curl the fingers in the direction of the current; the thumb then points to the N pole.',
      reExplanation:
        'The two hands give opposite answers, so it matters which one you pick. In UK GCSE physics the convention is: right hand goes with conventional current (positive to negative outside the cell). Left-hand rules exist for electron flow or for the motor effect, but the solenoid grip rule uses the right hand.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates wrote that turning a solenoid round in the room swaps its N and S labels.
    {
      id: 'pmsf-mis-flip-coil-swaps-poles',
      description:
        'Believing the N and S labels on a solenoid swap when you lift the coil up and turn it round in the room.',
      triggerAnswer: 'flip-coil-to-swap-poles',
      correction:
        'The labels are set by the direction of current in the coils, not by which way the tube is facing. To swap N and S, reverse the battery leads so the current goes the other way.',
      reExplanation:
        'Pick up the solenoid and turn it round and the N pole still travels with the same end; you have just moved it across the room. To make a different end the N pole you must change the current direction. Reversing the battery leads does that, and a plotting compass at each end then shows the swap.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that the field outside a long solenoid is exactly zero, ignoring that field lines must form closed loops.
    {
      id: 'pmsf-mis-outside-field-zero',
      description:
        'Believing the field outside a long solenoid is exactly zero, with no lines outside the coil.',
      triggerAnswer: 'outside-zero-field',
      correction:
        'The field outside a long solenoid is weak but not zero. The lines that run inside must curve round outside to complete each closed loop.',
      reExplanation:
        'Magnetic field lines never start or stop in mid-air; they form closed loops. Inside a solenoid the lines run along the axis. To make a loop they have to curve out of one end, round the outside and back into the other end. That gives a bar-magnet shape outside, weaker than the inside field but not zero.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates wrote that doubling current always doubles solenoid field strength without limit.
    {
      id: 'pmsf-mis-current-no-limit',
      description:
        'Believing that current in a solenoid can be raised without limit, with the inside field doubling each time current doubles.',
      triggerAnswer: 'current-doubles-forever',
      correction:
        'A real wire has resistance and gets hotter as current rises. There is a practical limit: too much current overheats the wire and damages the insulation.',
      reExplanation:
        'The simple link B is proportional to n times I assumes the wire can carry the current safely. In practice each wire has a rated current. Going above it heats the wire, raises its resistance, and can melt the insulation or trip a fuse. Real designs (school coils, car relays, MRI scanners) all set a safe maximum current.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that a straight current-carrying wire has no magnetic field unless it is bent into a coil.
    {
      id: 'pmsf-mis-straight-wire-no-field',
      description:
        'Believing a straight current-carrying wire has no magnetic field round it; field is only present in coils.',
      triggerAnswer: 'straight-wire-no-field',
      correction:
        'A straight current-carrying wire does have a magnetic field. The lines form concentric circles round the wire, set by the right-hand grip rule with the thumb along the current.',
      reExplanation:
        'Hold a current-carrying wire near a plotting compass and the compass swings: that is the field of the wire. The lines are circles centred on the wire, in planes at right angles to it. Coiling the wire into many loops stacks these little circular fields into the long solenoid pattern we have been studying.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismSolenoidFieldZoneNodes = [magnetismSolenoidField]
