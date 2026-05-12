import type { SkillNode } from '@/types/content'

const DC_MOTOR_PARTS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Parts of a simple d.c. motor in a horseshoe magnet</text>

    <!-- Horseshoe magnet shaped as two flat pole pieces facing each other -->
    <rect x="120" y="140" width="60" height="180" />
    <rect x="120" y="140" width="60" height="60" fill="currentColor" opacity="0.3" />
    <text x="150" y="178" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="150" y="298" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pole piece</text>

    <rect x="620" y="140" width="60" height="180" />
    <rect x="620" y="260" width="60" height="60" fill="currentColor" opacity="0.3" />
    <text x="650" y="298" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="650" y="178" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pole piece</text>

    <!-- Field arrows N to S across the gap -->
    <line x1="190" y1="210" x2="610" y2="210" stroke-dasharray="4,4" stroke-width="1.4" />
    <polygon points="600,206 612,210 600,214" fill="currentColor" stroke="none" />
    <line x1="190" y1="250" x2="610" y2="250" stroke-dasharray="4,4" stroke-width="1.4" />
    <polygon points="600,246 612,250 600,254" fill="currentColor" stroke="none" />
    <text x="400" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">field B runs N to S across the gap</text>

    <!-- Rectangular coil (armature) seen end-on as a flat loop -->
    <rect x="300" y="190" width="200" height="80" stroke-width="3" />
    <text x="290" y="200" text-anchor="end" font-size="11" font-weight="700" stroke="none" fill="currentColor">side AB</text>
    <text x="510" y="200" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">side CD</text>
    <text x="400" y="232" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">coil (armature)</text>

    <!-- Forces on each side: up on AB, down on CD -->
    <line x1="310" y1="190" x2="310" y2="155" stroke-width="2.5" />
    <polygon points="306,160 310,150 314,160" fill="currentColor" stroke="none" />
    <text x="310" y="142" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">F up</text>

    <line x1="490" y1="270" x2="490" y2="305" stroke-width="2.5" />
    <polygon points="486,300 490,310 494,300" fill="currentColor" stroke="none" />
    <text x="490" y="325" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">F down</text>

    <!-- Axle and split-ring commutator at the bottom -->
    <line x1="400" y1="270" x2="400" y2="360" stroke-width="2" />
    <text x="412" y="295" text-anchor="start" font-size="11" stroke="none" fill="currentColor">axle</text>

    <circle cx="400" cy="370" r="22" stroke-width="2" />
    <line x1="400" y1="348" x2="400" y2="392" stroke-width="1.5" stroke-dasharray="3,2" />
    <text x="400" y="412" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">split-ring commutator</text>

    <!-- Brushes pressing on each half-ring -->
    <line x1="358" y1="370" x2="378" y2="370" stroke-width="3" />
    <text x="330" y="374" text-anchor="end" font-size="11" stroke="none" fill="currentColor">brush</text>
    <line x1="422" y1="370" x2="442" y2="370" stroke-width="3" />
    <text x="470" y="374" text-anchor="start" font-size="11" stroke="none" fill="currentColor">brush</text>

    <!-- Battery to brushes -->
    <line x1="330" y1="370" x2="290" y2="425" stroke-width="1.5" />
    <line x1="470" y1="370" x2="510" y2="425" stroke-width="1.5" />
    <line x1="270" y1="425" x2="530" y2="425" stroke-width="2" />
    <line x1="380" y1="418" x2="380" y2="432" stroke-width="3" />
    <line x1="410" y1="415" x2="410" y2="435" stroke-width="1.5" />
    <text x="400" y="450" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">d.c. battery</text>

    <!-- Rotation arrow -->
    <path d="M 540 230 A 60 60 0 0 1 540 290" stroke-width="2" />
    <polygon points="536,288 548,294 542,302" fill="currentColor" stroke="none" />
    <text x="565" y="265" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">coil spins</text>
  </g>
`

const MOTOR_CONTROLS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Changing the motor: how to speed up, slow down, or reverse</text>

    <!-- Three panels in a row -->
    <!-- Panel 1: more current -->
    <rect x="40" y="60" width="220" height="220" stroke-width="1.5" />
    <text x="150" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Speed up: more current</text>
    <line x1="90" y1="120" x2="210" y2="120" stroke-width="2" />
    <line x1="100" y1="115" x2="100" y2="125" stroke-width="3" />
    <line x1="110" y1="112" x2="110" y2="128" stroke-width="1.5" />
    <text x="150" y="145" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">use a higher voltage</text>
    <text x="150" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">or a fresh battery</text>
    <line x1="100" y1="190" x2="200" y2="190" stroke-width="2.5" />
    <polygon points="195,186 207,190 195,194" fill="currentColor" stroke="none" />
    <text x="150" y="215" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">larger current I</text>
    <text x="150" y="232" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">→ larger force F</text>
    <text x="150" y="252" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">on each side of the coil,</text>
    <text x="150" y="268" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">so the coil spins quicker</text>

    <!-- Panel 2: stronger magnet / more turns -->
    <rect x="290" y="60" width="220" height="220" stroke-width="1.5" />
    <text x="400" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Speed up: stronger magnet</text>
    <text x="400" y="102" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">or more turns on the coil</text>
    <rect x="320" y="125" width="160" height="22" />
    <rect x="320" y="125" width="80" height="22" fill="currentColor" opacity="0.3" />
    <text x="360" y="141" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="440" y="141" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="400" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">stronger field B</text>
    <rect x="340" y="190" width="120" height="30" stroke-width="2" />
    <line x1="346" y1="195" x2="454" y2="195" stroke-width="1" />
    <line x1="346" y1="200" x2="454" y2="200" stroke-width="1" />
    <line x1="346" y1="205" x2="454" y2="205" stroke-width="1" />
    <line x1="346" y1="210" x2="454" y2="210" stroke-width="1" />
    <text x="400" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">more turns N add their</text>
    <text x="400" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">forces; coil spins quicker</text>

    <!-- Panel 3: reverse direction -->
    <rect x="540" y="60" width="220" height="220" stroke-width="1.5" />
    <text x="650" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Reverse direction</text>
    <text x="600" y="125" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Swap battery terminals:</text>
    <line x1="570" y1="140" x2="630" y2="140" stroke-width="2" />
    <line x1="580" y1="135" x2="580" y2="145" stroke-width="3" />
    <line x1="590" y1="132" x2="590" y2="148" stroke-width="1.5" />
    <text x="600" y="165" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current direction flips</text>
    <line x1="685" y1="135" x2="685" y2="170" stroke-width="2" stroke-dasharray="2,3" />
    <text x="700" y="125" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">OR swap the</text>
    <text x="700" y="140" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">N and S magnets:</text>
    <text x="700" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">field direction flips</text>
    <path d="M 580 220 A 30 30 0 0 1 620 220" stroke-width="2" />
    <polygon points="618,216 626,222 620,228" fill="currentColor" stroke="none" />
    <text x="600" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">becomes</text>
    <path d="M 720 220 A 30 30 0 0 0 680 220" stroke-width="2" />
    <polygon points="680,228 674,222 682,216" fill="currentColor" stroke="none" />
    <text x="700" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">coil spins the other way</text>

    <!-- Footer -->
    <line x1="40" y1="305" x2="760" y2="305" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="330" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Speed depends on current, field strength, and number of turns.</text>
    <text x="400" y="348" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Direction depends on the current direction relative to the field.</text>
  </g>
`

const COMMUTATOR_ACTION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Split-ring commutator: how it keeps the turning force in the same sense</text>

    <!-- Frame 1: start position, current flows A to B in left side -->
    <text x="160" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Frame 1: start</text>
    <rect x="100" y="90" width="120" height="80" stroke-width="2" />
    <text x="90" y="100" text-anchor="end" font-size="10" stroke="none" fill="currentColor">A</text>
    <text x="230" y="100" text-anchor="start" font-size="10" stroke="none" fill="currentColor">D</text>
    <text x="90" y="178" text-anchor="end" font-size="10" stroke="none" fill="currentColor">B</text>
    <text x="230" y="178" text-anchor="start" font-size="10" stroke="none" fill="currentColor">C</text>
    <!-- Current arrows: left side down (A to B), right side up (C to D) -->
    <line x1="110" y1="100" x2="110" y2="160" stroke-width="2.5" />
    <polygon points="106,155 110,165 114,155" fill="currentColor" stroke="none" />
    <line x1="210" y1="160" x2="210" y2="100" stroke-width="2.5" />
    <polygon points="206,105 210,95 214,105" fill="currentColor" stroke="none" />
    <text x="160" y="195" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">left side feels F up; right side F down</text>
    <text x="160" y="210" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">coil starts to turn clockwise</text>

    <!-- Frame 2: quarter turn -->
    <text x="400" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Frame 2: quarter turn</text>
    <rect x="370" y="100" width="60" height="80" stroke-width="2" transform="rotate(45 400 140)" />
    <text x="400" y="195" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sides cross between the poles</text>
    <text x="400" y="210" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">just past here the brushes</text>
    <text x="400" y="223" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">touch the OTHER half-rings</text>

    <!-- Frame 3: half turn, current direction in the coil has flipped -->
    <text x="640" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Frame 3: after half turn</text>
    <rect x="580" y="90" width="120" height="80" stroke-width="2" />
    <text x="570" y="100" text-anchor="end" font-size="10" stroke="none" fill="currentColor">B</text>
    <text x="710" y="100" text-anchor="start" font-size="10" stroke="none" fill="currentColor">C</text>
    <text x="570" y="178" text-anchor="end" font-size="10" stroke="none" fill="currentColor">A</text>
    <text x="710" y="178" text-anchor="start" font-size="10" stroke="none" fill="currentColor">D</text>
    <!-- Current direction in the coil now reversed by the commutator -->
    <line x1="590" y1="160" x2="590" y2="100" stroke-width="2.5" />
    <polygon points="586,105 590,95 594,105" fill="currentColor" stroke="none" />
    <line x1="690" y1="100" x2="690" y2="160" stroke-width="2.5" />
    <polygon points="686,155 690,165 694,155" fill="currentColor" stroke="none" />
    <text x="640" y="195" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">side that was on the left is now on the right</text>
    <text x="640" y="210" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">force on each side still pushes</text>
    <text x="640" y="223" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">the coil clockwise: keeps spinning</text>

    <!-- Summary -->
    <line x1="60" y1="260" x2="740" y2="260" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Twice per rotation the brushes swap which half-ring they touch.</text>
    <text x="400" y="303" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">This reverses the current in the coil at the right instant,</text>
    <text x="400" y="321" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">so the turning effect stays in the same rotational sense.</text>
    <text x="400" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Without the split, the coil would feel a reversing torque every half turn and just rock back and forth.</text>
  </g>
`

export const magnetismDcMotor: SkillNode = {
  id: 'physics-magnetism-dc-motor',
  title: 'The Simple DC Motor',
  description:
    'A direct current motor turns electrical energy into rotation. The recipe is short: place a rectangular coil between the poles of a permanent magnet, send a current through it, and the two long sides of the coil feel forces in opposite directions (the motor effect on each side). One side is pushed up, the other is pushed down, and the coil spins about its axle. After a half-turn the sides swap places, and without help the turning force would reverse and the coil would just rock back and forth. The split-ring commutator and a pair of carbon brushes solve this: twice per rotation they reverse the direction of the current in the coil, so the force on each side always pushes the coil round the same way. Speed up the motor by raising the current, using a stronger magnet, or adding more turns to the coil. Reverse it by swapping the battery terminals or the magnets. By the end of this node, you can name the parts of a simple d.c. motor, explain what the commutator does in plain language, and predict what changes when each part is altered.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'challenge',
  prerequisites: ['physics-magnetism-motor-effect'],
  curriculum: {
    ks3Objective:
      'D.C. motors, principles only; how a current-carrying coil in a magnetic field is made to rotate, role of the split-ring commutator.',
    awardingBodies: {
      aqa: '4.7.2.2 Electric motors; turning effect on a coil, function of the commutator (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.16-7.17 the d.c. motor and the split-ring commutator (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; structure and operation of a simple d.c. motor (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.2 (electric motors, turning effect on a coil); standard KS3 motor diagram in CGP KS3 Physics Complete Revision and Practice (2022), simple d.c. motor plate.
    {
      id: 'pmdm-parts',
      title: 'Parts of a simple d.c. motor',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to name the part and what it does in a simple d.c. motor.',
      data: {
        viewBox: '0 0 800 470',
        svg: DC_MOTOR_PARTS_SVG,
        hotspots: [
          {
            id: 'pmdm-parts-magnet',
            x: 18,
            y: 50,
            label: 'Permanent magnet provides the field',
            description:
              'Two flat pole pieces (one N, one S) face each other across a gap. A roughly uniform magnetic field runs from the N pole across to the S pole. This is the field that pushes on the current-carrying coil.',
          },
          {
            id: 'pmdm-parts-coil',
            x: 50,
            y: 50,
            label: 'Coil (armature) carries the current',
            description:
              'A rectangular loop of insulated copper wire sits in the gap. When the battery is connected, current flows round the loop. The two long sides lie in the magnetic field and feel forces in opposite directions, so the coil twists about its axle.',
          },
          {
            id: 'pmdm-parts-forces',
            x: 65,
            y: 32,
            label: 'Opposite forces on the two sides',
            description:
              'On one long side the current flows one way, on the other side it flows the opposite way. The motor effect gives each side a force, and because the currents are opposite, the forces are opposite. The pair of forces is a couple, which makes the coil rotate.',
          },
          {
            id: 'pmdm-parts-commutator',
            x: 50,
            y: 88,
            label: 'Split-ring commutator and brushes',
            description:
              'A copper ring split into two half-rings is fixed to the axle. Two carbon brushes press lightly on it and carry current from the battery. As the coil turns, the brushes swap which half they touch, reversing the current in the coil at the right moment so it keeps spinning the same way.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.16-7.17 the d.c. motor and the split-ring commutator); standard KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmdm-commutator-action',
      title: 'What the split-ring commutator does across one rotation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the coil through one half-turn and see why the split-ring matters.',
      data: {
        viewBox: '0 0 800 370',
        svg: COMMUTATOR_ACTION_SVG,
        hotspots: [
          {
            id: 'pmdm-comm-frame1',
            x: 20,
            y: 22,
            label: 'Frame 1: coil starts horizontal',
            description:
              'Current flows down on the left side of the coil (A to B) and up on the right (C to D). The motor effect pushes the left side up and the right side down. The coil starts to rotate clockwise.',
          },
          {
            id: 'pmdm-comm-frame2',
            x: 50,
            y: 22,
            label: 'Frame 2: coil reaches vertical',
            description:
              'As the coil swings through the vertical, the sides cross over and the gap between the two half-rings passes under the brushes. The current is momentarily cut and the coil coasts on its own momentum through this dead point.',
          },
          {
            id: 'pmdm-comm-frame3',
            x: 80,
            y: 22,
            label: 'Frame 3: brushes swap half-rings',
            description:
              'Just past the vertical, each brush now touches the opposite half-ring, so the current in the coil is reversed. The side that is now on the left has the current flowing in the same direction as before in that part of the field, so the force still pushes it up. The coil keeps turning clockwise.',
          },
          {
            id: 'pmdm-comm-summary',
            x: 50,
            y: 88,
            label: 'Why the split-ring matters',
            description:
              'Without the split, the same wire would always carry the same current direction, and after the coil flipped over the force would also flip and try to push the coil back. The split-ring reverses the current twice per rotation, keeping the turning force pointing the same way round.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.2 (structure and operation of a simple d.c. motor: factors that change speed and direction); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmdm-controls',
      title: 'How to speed up, slow down, or reverse the motor',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see which design changes alter the speed and direction of a simple d.c. motor.',
      data: {
        viewBox: '0 0 800 370',
        svg: MOTOR_CONTROLS_SVG,
        hotspots: [
          {
            id: 'pmdm-controls-current',
            x: 19,
            y: 22,
            label: 'Larger current → larger force on each side',
            description:
              'The force on each side of the coil is proportional to the current. Doubling the current (by using a higher voltage or a fresher battery) doubles the force on each side, so the turning effect doubles and the coil spins quicker.',
          },
          {
            id: 'pmdm-controls-magnet-turns',
            x: 50,
            y: 22,
            label: 'Stronger magnet or more turns → larger force',
            description:
              'A stronger permanent magnet gives a larger field B; the force on each side scales with B. Adding more turns to the coil multiplies the force by the number of turns N, since each turn adds its own share. Either change gives a faster motor.',
          },
          {
            id: 'pmdm-controls-reverse-battery',
            x: 81,
            y: 38,
            label: 'Swap battery terminals to reverse direction',
            description:
              'Reversing the battery flips the current direction everywhere in the circuit. The forces on each side of the coil also flip, so the coil now turns the other way. UK car electric-window switches use this trick to drive the window up or down.',
          },
          {
            id: 'pmdm-controls-reverse-magnet',
            x: 81,
            y: 68,
            label: 'Swap N and S to reverse direction',
            description:
              'Alternatively, flip the magnet so the N is on the right and the S on the left. The current direction is unchanged, but the field direction is reversed, so the forces on the coil are reversed and the rotation goes the other way.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.2; standard KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmdm-worked-1',
      title: 'Tracing the current round the coil during one full rotation',
      steps: [
        {
          explanation:
            'Set out the situation. A simple d.c. motor has a rectangular coil ABCD between a N pole on the left and a S pole on the right. The battery is connected so that at the start, current flows down side AB and up side CD.',
        },
        {
          explanation:
            'Apply the motor effect at the start. Side AB carries current downward in a field that runs left to right, so it feels an upward force. Side CD carries current upward in the same field, so it feels a downward force. The pair of forces is a couple; the coil starts to spin clockwise.',
          maths: 'F on AB up, F on CD down → couple → clockwise spin',
        },
        {
          explanation:
            'Reach the vertical. After a quarter turn the coil is vertical. The split-ring gap now lines up with the brushes for a brief instant, so no current flows. The coil coasts through this dead point on its momentum.',
        },
        {
          explanation:
            'Pass the half-turn. Just past vertical the brushes touch the OTHER half-ring, so the current direction in the coil is reversed. Side AB (now on the right) carries current upward; side CD (now on the left) carries current downward.',
          maths: 'commutator reverses I in the coil at every half rotation',
        },
        {
          explanation:
            'Re-apply the motor effect. With the new current direction, side AB on the right now feels a downward force and side CD on the left feels an upward force. The couple still points clockwise, so the coil continues to spin the same way.',
        },
        {
          explanation:
            'State the result. The current in the coil flips direction once per half rotation (twice per full rotation), and as a result the turning force stays in the same rotational sense; the motor runs steadily.',
        },
      ],
    },
    // Source: AQA GCSE Physics 8463 specification 4.7.2.2 and Edexcel GCSE Physics 1PH0 Topic 7 (factors that change a motor\'s speed); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmdm-worked-2',
      title: 'How a UK pupil could make a model motor spin quicker',
      steps: [
        {
          explanation:
            'Set out the situation. A UK Year 7 pupil builds a model d.c. motor from a hardware-shop kit. The starting setup has a 20-turn coil, a single 1.5 V cell driving 0.2 A through the coil, and a small ceramic horseshoe magnet. The coil spins at 4 rotations per second.',
        },
        {
          explanation:
            'Identify what controls the speed. The force on each side of the coil is F = N x B x I x L, where N is the number of turns, B the field strength, I the current, and L the length of one side. A larger force gives a larger turning effect and a quicker spin.',
          maths: 'F = N x B x I x L (per side)',
        },
        {
          explanation:
            'Plan three changes. Add a second cell in series to double the voltage (and so roughly double the current to 0.4 A). Swap the ceramic magnet for a stronger neodymium magnet, doubling the field B. Rewind the coil with 40 turns instead of 20, doubling N.',
        },
        {
          explanation:
            'Estimate the new force. Each change multiplies the force on each side by 2, so the combined effect multiplies the force by 2 x 2 x 2 = 8. The turning effect on the coil is also 8 times larger.',
          maths: '2 x 2 x 2 = 8',
        },
        {
          explanation:
            'Predict the new speed. Treating speed as roughly proportional to the turning force at light loads, the coil now spins at about 8 x 4 = 32 rotations per second.',
          maths: '4 x 8 = 32 rotations per second',
        },
        {
          explanation:
            'Sanity check. Real motors level off at a top speed set by friction in the bearings and the back-EMF in the coil. The prediction shows the trend but the actual top speed in a Year 7 build would be a little lower. The pupil could measure it with a stopwatch and a marker dot on the axle.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmdm-q1',
      type: 'multiple-choice',
      stem: 'In a simple d.c. motor, which part actually spins when the current flows?',
      tier: 'core',
      options: [
        'The permanent magnet spins; the coil stays still.',
        'The coil (armature) spins; the magnet is fixed.',
        'The brushes spin; the coil stays still.',
        'The battery spins; everything else is fixed.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmdm-mis-magnet-spins',
      hint: 'The current-carrying loop feels the force from the field. The magnet sits in place.',
    },
    {
      id: 'pmdm-q2',
      type: 'multiple-choice',
      stem: 'Why does the coil in a d.c. motor experience a turning effect, rather than just being pushed sideways?',
      tier: 'core',
      options: [
        'The two long sides of the coil carry current in opposite directions, so they feel opposite forces, and a pair of opposite forces twists the coil.',
        'The magnet is shaped to push the coil round.',
        'The coil is heated by the current, which makes it spin.',
        'The brushes physically push the coil round each time they touch it.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmdm-mis-brushes-push',
      hint: 'Think about what direction the current flows on the left side of the loop compared with the right side.',
    },
    {
      id: 'pmdm-q3',
      type: 'multiple-choice',
      stem: 'What is the job of the split-ring commutator in a d.c. motor?',
      tier: 'core',
      options: [
        'To stop the current flowing if the motor gets hot.',
        'To reverse the direction of the current in the coil every half rotation, so the force on each side keeps pointing the same way round.',
        'To turn the steady direct current from the battery into alternating current that powers the coil.',
        'To act as the bearing the coil spins on.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmdm-mis-needs-ac',
      hint: 'It has the word "commute" in it, meaning to swap. What is being swapped is the current direction.',
    },
    {
      id: 'pmdm-q4',
      type: 'multiple-choice',
      stem: 'In a simple d.c. motor a learner swaps the two terminals of the battery over. What happens?',
      tier: 'core',
      options: [
        'The motor stops working.',
        'The motor speeds up.',
        'The coil spins in the opposite direction.',
        'The coil heats up but does not turn.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmdm-mis-swap-stops',
      hint: 'Swapping the battery reverses the current everywhere, so each side feels the opposite force.',
    },
    {
      id: 'pmdm-q5',
      type: 'multiple-choice',
      stem: 'Which of these does NOT make a simple d.c. motor spin faster?',
      tier: 'core',
      options: [
        'Increasing the current through the coil.',
        'Using a stronger permanent magnet.',
        'Adding more turns to the coil.',
        'Painting the coil a darker colour.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The force on each side depends on the current, the field strength, and the number of turns. Colour is irrelevant.',
    },
    {
      id: 'pmdm-q6',
      type: 'multiple-choice',
      stem: 'A cordless drill from a UK hardware shop runs on a battery and contains a small d.c. motor. Why is a d.c. motor a sensible choice for a battery-powered tool?',
      tier: 'core',
      options: [
        'Because batteries provide direct current, which a d.c. motor is designed to run on.',
        'Because batteries provide alternating current, and only d.c. motors can use alternating current.',
        'Because d.c. motors do not need a magnetic field.',
        'Because d.c. motors only spin when plugged into the UK mains.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'What kind of current comes out of a battery: d.c. or a.c.?',
    },
    {
      id: 'pmdm-q7',
      type: 'numeric-entry',
      stem: 'A pupil doubles the current flowing through the coil of a simple d.c. motor, keeping the magnet and the number of turns the same. The force on each side of the coil is directly proportional to the current. By what factor does the force on each side change? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 2,
      unit: 'times',
      xpValue: 10,
      hint: 'Direct proportion: if you double one quantity, the other doubles.',
    },
    {
      id: 'pmdm-q8',
      type: 'multiple-choice',
      stem: 'A simple d.c. motor uses a coil with 20 turns. A pupil rebuilds it with 60 turns, keeping the current, the magnet, and the size of the loop the same. The force on each side of the coil is proportional to the number of turns. What happens to the total turning force on the coil?',
      tier: 'confident',
      options: [
        'It is halved.',
        'It stays the same.',
        'It triples.',
        'It is divided by three.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Each extra turn adds its own force. Sixty turns is three times twenty.',
    },
    {
      id: 'pmdm-q9',
      type: 'multiple-choice',
      stem: 'In a d.c. motor the coil is positioned exactly vertical (sides AB and CD lined up one above the other along the field direction). The brushes happen to sit in the gap between the two half-rings. What is happening?',
      tier: 'confident',
      options: [
        'The motor runs at top speed at this instant.',
        'No current flows in the coil at this instant; the coil coasts through on its momentum.',
        'The current is at its largest; the coil receives its biggest push.',
        'The battery is short-circuited.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'When the brushes line up with the split, neither half-ring is connected to the brush, so no current can flow.',
    },
    {
      id: 'pmdm-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims they could replace the split-ring commutator in their d.c. motor with a single solid copper ring. What would happen if they did?',
      tier: 'confident',
      options: [
        'The motor would still spin in the same direction forever.',
        'The motor would spin at double the rotation rate.',
        'After a half-turn the current direction in the coil would no longer reverse, so the turning force would flip and the coil would just rock back and forth (or stall).',
        'The coil would melt instantly.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmdm-mis-no-commutator-spins',
      hint: 'Without the split, the same wire always touches the same brush, so the current in the coil never reverses.',
    },
    {
      id: 'pmdm-q11',
      type: 'multiple-choice',
      stem: 'In a UK car the electric-window mechanism uses a small d.c. motor connected to the 12 V battery. To make the window go down instead of up, the switch is wired so that pressing it in the other position swaps the two wires going to the motor. Why does that reverse the direction of motion?',
      tier: 'confident',
      options: [
        'Because the motor heats up when the wires are swapped.',
        'Because swapping the wires reverses the direction of the current in the coil, which reverses the force on each side and so reverses the rotation.',
        'Because the battery becomes weaker.',
        'Because the magnetic field disappears.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Reversing the current direction at the input is the same as swapping the battery terminals.',
    },
    {
      id: 'pmdm-q12',
      type: 'numeric-entry',
      stem: 'A simple d.c. motor coil has 25 turns and carries a current of 0.4 A. The force on a 4 cm long side of the coil is given by F = B I L for one turn, multiplied by the number of turns N. With a field B of 0.2 T, work out the force on side AB. Give your answer in newtons to 2 decimal places.',
      tier: 'confident',
      correctAnswer: 0.08,
      tolerance: 0.01,
      unit: 'N',
      xpValue: 15,
      hint: 'F = N x B x I x L = 25 x 0.2 x 0.4 x 0.04. Multiply step by step.',
    },
    {
      id: 'pmdm-q13',
      type: 'numeric-entry',
      stem: 'A small d.c. motor completes 5 full rotations in 1 second. The split-ring commutator reverses the current direction twice per rotation. How many current reversals happen in this 1 second?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'reversals',
      xpValue: 15,
      misconceptionId: 'pmdm-mis-current-one-way',
      hint: 'Multiply the number of rotations by 2 (one reversal per half rotation).',
    },
    {
      id: 'pmdm-q14',
      type: 'drag-order',
      stem: 'Put these events in the order they happen during one full rotation of a simple d.c. motor coil, starting from the coil sitting horizontally with current flowing.',
      tier: 'confident',
      items: [
        'Brushes swap which half-ring they touch; current direction in the coil reverses.',
        'Coil starts horizontal; current flows; sides feel opposite forces.',
        'Coil reaches the vertical; brushes line up with the gap, current is momentarily zero.',
        'Coil continues to spin clockwise; force on each side still points the same way round.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Start: horizontal coil with current. Then it reaches vertical (gap), brushes swap, and it keeps spinning.',
    },
    {
      id: 'pmdm-q15',
      type: 'spot-misconception',
      stem: 'Two pupils are discussing what would happen if you removed the split-ring commutator from a d.c. motor and replaced it with two solid slip-rings (one per end of the coil), so the current direction never reverses.',
      tier: 'challenge',
      statements: [
        {
          text: 'Pupil A says: "The coil would still spin freely in the same direction forever, because the current is steady." This is wrong; without reversal, after a half-turn each side has swapped position and the force on it now points the wrong way, so the coil would oscillate or stall instead of rotating.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "After a half-turn each side of the coil has swapped places. With the current direction unchanged, the force on each side flips relative to the room, so the coil tries to twist back. It rocks back and forth and never makes a full rotation." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmdm-mis-no-commutator-spins',
    },
    {
      id: 'pmdm-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining how a simple d.c. motor keeps spinning the same way.',
      tier: 'challenge',
      steps: [
        'Current flows round the coil; the two long sides carry current in opposite directions.',
        'In the magnetic field, the two sides feel opposite forces, forming a couple that twists the coil.',
        'The coil rotates and after a quarter turn passes through the vertical, where the brushes briefly touch neither half-ring.',
        null,
        'With the current in the coil now reversed, the force on each side still pushes the coil round in the same direction, so it keeps rotating steadily.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Just past the vertical the brushes swap to the OTHER half-rings, which reverses the current direction in the coil.',
      xpValue: 20,
    },
    {
      id: 'pmdm-q17',
      type: 'numeric-entry',
      stem: 'A pupil sets up a simple d.c. motor and finds that the coil completes 4 full rotations per second. They then double the current AND replace the magnet with one twice as strong, leaving the coil the same. Friction is small enough to ignore at these speeds, and the rotation rate scales in direct proportion to the product of current and field strength. How many full rotations per second does the coil now complete? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 16,
      unit: 'rotations per second',
      xpValue: 20,
      hint: 'Two factors of 2 multiply: 2 x 2 = 4. Then 4 x 4 = 16.',
    },
    {
      id: 'pmdm-q18',
      type: 'numeric-entry',
      stem: 'In a model d.c. motor used by a UK Year 7 pupil, side AB of the coil feels a force of 0.06 N upward. Side CD, carrying the same size of current in the opposite direction in the same field, feels a force of the same size downward. The two sides are 5 cm apart across the coil. The total turning effect (moment of the couple) is the force on one side multiplied by the distance between the two sides. Work out the moment in newton-metres to 3 decimal places.',
      tier: 'challenge',
      correctAnswer: 0.003,
      tolerance: 0.0005,
      unit: 'N m',
      xpValue: 20,
      hint: 'Moment = F x d = 0.06 x 0.05. Convert 5 cm to 0.05 m first.',
    },
    {
      id: 'pmdm-q19',
      type: 'spot-misconception',
      stem: 'Two pupils are talking about whether a LEGO Powered Up d.c. motor would keep speeding up forever if the current were left on.',
      tier: 'challenge',
      statements: [
        {
          text: 'Pupil A says: "Yes, because the force on the coil never stops pushing, so the motor must keep accelerating for as long as the battery lasts." This is wrong; the motor settles at a steady top speed once the opposing effects (friction in the bearings and back-EMF from the spinning coil) balance the driving force.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "It speeds up at first, but as the coil spins quicker it generates a small voltage that opposes the battery (a back-EMF), and there is friction in the bearings. The motor settles at a top speed where the net turning force is zero." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmdm-mis-infinite-speedup',
    },
    {
      id: 'pmdm-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a simple d.c. motor cannot just be wired up to the UK mains supply in place of its battery without other changes to the design.',
      tier: 'challenge',
      steps: [
        'A d.c. motor uses a steady direct current that always flows the same way through the brushes.',
        'The split-ring commutator inside the motor reverses the current in the coil twice per rotation, so the turning force keeps pointing the same way round.',
        'UK mains electricity is alternating current; the supply current changes direction 50 times each second.',
        null,
        'An a.c. motor is designed differently; it uses plain slip-rings (no split) and relies on the changing supply current itself to keep the turning force consistent.',
      ],
      missingStepIndex: 3,
      correctStep:
        'If you plugged a d.c. motor into a.c. mains, both the supply AND the commutator would reverse the current, which would either cancel out the reversal or give a confusing pulsing turn rather than a smooth one-way spin.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that the permanent magnet rotates in a d.c. motor rather than the coil.
    {
      id: 'pmdm-mis-magnet-spins',
      description:
        'Believing the permanent magnet spins in a d.c. motor, rather than the current-carrying coil.',
      triggerAnswer: 'magnet-spins',
      correction:
        'In a simple d.c. motor the coil (armature) spins about its axle. The permanent magnet is fixed in place; it just supplies the field.',
      reExplanation:
        'A force only acts on a wire when it carries a current in a magnetic field. The coil is the wire, so the coil feels the force and rotates. The magnet has no current flowing through it, so it does not move. Picture a horseshoe magnet bolted to the bench, with a small loop of wire balanced on an axle in the gap; the loop is what twists.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates wrote that without a commutator the coil would still rotate continuously in one direction.
    {
      id: 'pmdm-mis-no-commutator-spins',
      description:
        'Believing the coil would keep spinning the same way without a split-ring commutator, with just plain rings.',
      triggerAnswer: 'no-commutator-still-spins',
      correction:
        'Without the split, the current direction in the coil never reverses. After half a turn the sides have swapped, and the force now twists the coil back the other way. It rocks or stalls instead of rotating.',
      reExplanation:
        'The split-ring is what lets a steady direct current give a one-way turning effect. The brushes swap which half-ring they touch as the coil flips over, reversing the current in the coil at just the right instant so the force always pushes the side that is on the left upward and the side on the right downward.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates believed swapping the battery terminals would stop a d.c. motor rather than reverse it.
    {
      id: 'pmdm-mis-swap-stops',
      description:
        'Believing that swapping the battery terminals stops a d.c. motor.',
      triggerAnswer: 'swap-stops',
      correction:
        'Swapping the battery terminals reverses the direction of the current everywhere in the circuit, which reverses the force on each side of the coil. The motor still runs; it just spins the other way.',
      reExplanation:
        'A d.c. motor cares about the direction of the current relative to the field. Reverse one and you reverse the other; the motor effect still works. UK car electric-window switches use exactly this trick: the up and down positions swap which wire is the positive terminal at the motor.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates wrote that d.c. motors must use alternating current, confusing them with a.c. motors.
    {
      id: 'pmdm-mis-needs-ac',
      description:
        'Believing a d.c. motor runs on alternating current, or that the commutator turns d.c. into a.c. inside the motor.',
      triggerAnswer: 'needs-ac',
      correction:
        'A d.c. motor runs on direct current straight from a battery. The split-ring commutator reverses the current direction inside the coil twice per rotation; the current from the battery itself does not alternate.',
      reExplanation:
        'Think of it from the battery\'s point of view. The current always leaves the same terminal. Inside the coil, the commutator swaps which end of the coil is connected to that terminal each half rotation, so the current in the wire flips direction even though the supply does not. A.c. motors use a different design (slip-rings, no split).',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that a d.c. motor would keep accelerating indefinitely while the current was on.
    {
      id: 'pmdm-mis-infinite-speedup',
      description:
        'Believing a d.c. motor would speed up forever if the current were left on, ignoring friction and back-EMF.',
      triggerAnswer: 'speeds-forever',
      correction:
        'Real motors reach a steady top speed. Friction in the bearings and a back-EMF generated by the spinning coil oppose the rotation, so the net turning force falls to zero at the top speed.',
      reExplanation:
        'As the coil speeds up, it cuts through field lines and a small voltage is induced in it that opposes the supply. The effective current drops, the force drops, and the motor settles. Adding a load (such as pressing on an electric toothbrush head) increases the opposing torque and the steady speed drops further.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that the brushes physically push the coil round, rather than just supplying current to it.
    {
      id: 'pmdm-mis-brushes-push',
      description:
        'Believing the carbon brushes physically push or strike the coil to make it rotate.',
      triggerAnswer: 'brushes-push',
      correction:
        'The brushes do not push the coil. Their only job is to keep electrical contact between the battery and the spinning split-ring commutator, so current can flow into and out of the coil.',
      reExplanation:
        'Brushes press lightly so they slide on the half-rings without losing contact. The push that turns the coil comes from the motor effect on each side of the coil, not from the brushes. If the brushes were any thicker than needed, they would only add friction and slow the motor down.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that the current in a d.c. motor coil always flows the same way round, ignoring the action of the commutator.
    {
      id: 'pmdm-mis-current-one-way',
      description:
        'Believing the current goes round the coil in the same direction the whole time the motor is running.',
      triggerAnswer: 'current-one-way',
      correction:
        'Inside the coil, the current direction is reversed by the split-ring commutator twice per full rotation. The current from the battery is steady; the commutator does the reversing inside the spinning loop.',
      reExplanation:
        'Watch one labelled side of the coil, say AB. As the coil turns through half a rotation, the brushes hand AB across to the other half-ring, so the current direction in AB itself flips. This is the whole point of the split-ring: it keeps the force on each side pointing the right way round, even as the wire physically swaps sides.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismDcMotorZoneNodes = [magnetismDcMotor]
