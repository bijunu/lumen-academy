import type { SkillNode } from '@/types/content'

const SCRAPYARD_CRANE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Scrap-yard crane: a switchable electromagnet on a chain</text>

    <!-- Crane arm at the top -->
    <line x1="80" y1="70" x2="720" y2="70" stroke-width="3" />
    <line x1="80" y1="70" x2="80" y2="120" stroke-width="3" />
    <line x1="720" y1="70" x2="720" y2="120" stroke-width="3" />
    <text x="400" y="62" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">crane arm</text>

    <!-- Chain dropping down to the electromagnet -->
    <line x1="400" y1="70" x2="400" y2="180" stroke-dasharray="6,4" stroke-width="2" />
    <text x="420" y="130" text-anchor="start" font-size="11" stroke="none" fill="currentColor">chain</text>

    <!-- Electromagnet block: iron core wrapped in a coil -->
    <rect x="320" y="180" width="160" height="60" />
    <rect x="320" y="180" width="160" height="60" fill="currentColor" opacity="0.15" />
    <text x="400" y="216" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">iron core + coil</text>

    <!-- Coil turns suggested by short vertical strokes along the underside -->
    <line x1="340" y1="240" x2="340" y2="252" stroke-width="2" />
    <line x1="360" y1="240" x2="360" y2="252" stroke-width="2" />
    <line x1="380" y1="240" x2="380" y2="252" stroke-width="2" />
    <line x1="400" y1="240" x2="400" y2="252" stroke-width="2" />
    <line x1="420" y1="240" x2="420" y2="252" stroke-width="2" />
    <line x1="440" y1="240" x2="440" y2="252" stroke-width="2" />
    <line x1="460" y1="240" x2="460" y2="252" stroke-width="2" />

    <!-- Switch and battery on the right -->
    <rect x="560" y="100" width="120" height="60" />
    <text x="620" y="125" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cab switch</text>
    <text x="620" y="142" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">ON: lift</text>
    <text x="620" y="155" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">OFF: drop</text>
    <line x1="560" y1="130" x2="480" y2="210" stroke-width="1.5" />
    <line x1="680" y1="130" x2="720" y2="160" stroke-width="1.5" />
    <line x1="720" y1="160" x2="720" y2="260" stroke-width="1.5" />
    <line x1="720" y1="260" x2="500" y2="260" stroke-width="1.5" />

    <!-- Pile of cars below: steel sticks, aluminium does not -->
    <rect x="300" y="280" width="80" height="30" />
    <text x="340" y="299" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">steel car</text>
    <line x1="340" y1="280" x2="340" y2="252" stroke-width="2" />
    <polygon points="336,254 340,248 344,254" fill="currentColor" stroke="none" />

    <rect x="420" y="280" width="80" height="30" />
    <text x="460" y="299" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">steel car</text>
    <line x1="460" y1="280" x2="460" y2="252" stroke-width="2" />
    <polygon points="456,254 460,248 464,254" fill="currentColor" stroke="none" />

    <rect x="540" y="320" width="80" height="30" stroke-dasharray="4,3" />
    <text x="580" y="339" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">aluminium can</text>
    <text x="580" y="358" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">(not picked up)</text>

    <!-- Ground line -->
    <line x1="60" y1="370" x2="740" y2="370" stroke-dasharray="3,3" stroke-width="1" />

    <text x="400" y="395" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Switching the current OFF drops every steel item at once. Only ferromagnetic metals stick.</text>
  </g>
`

const ELECTRIC_BELL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Electric bell: a self-interrupting electromagnet circuit</text>

    <!-- Battery + push switch on the left -->
    <rect x="60" y="120" width="60" height="40" />
    <text x="90" y="146" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">4 V</text>
    <line x1="120" y1="140" x2="170" y2="140" stroke-width="1.5" />
    <rect x="170" y="125" width="40" height="30" />
    <text x="190" y="146" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">push</text>

    <!-- Wire to the electromagnet -->
    <line x1="210" y1="140" x2="270" y2="140" stroke-width="1.5" />

    <!-- Electromagnet coil (two soft-iron poles) -->
    <rect x="280" y="110" width="80" height="60" />
    <text x="320" y="146" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">coil</text>
    <line x1="290" y1="170" x2="290" y2="182" stroke-width="2" />
    <line x1="310" y1="170" x2="310" y2="182" stroke-width="2" />
    <line x1="330" y1="170" x2="330" y2="182" stroke-width="2" />
    <line x1="350" y1="170" x2="350" y2="182" stroke-width="2" />

    <!-- Springy armature on the right side of the coil -->
    <line x1="360" y1="140" x2="430" y2="140" stroke-width="2.5" />
    <text x="395" y="132" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">armature (springy)</text>

    <!-- Hammer on the end of the armature, near the bell dome -->
    <circle cx="450" cy="140" r="10" stroke-width="2" />
    <text x="450" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">hammer</text>

    <!-- Bell dome on the far right -->
    <path d="M 470 110 C 480 90, 540 90, 550 110 L 550 160 L 470 160 Z" stroke-width="2" />
    <text x="510" y="135" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">bell</text>

    <!-- Interrupter contact: a small gap on the armature side that breaks when armature moves -->
    <circle cx="380" cy="190" r="4" fill="currentColor" stroke="none" />
    <circle cx="380" cy="205" r="4" fill="currentColor" stroke="none" />
    <line x1="380" y1="194" x2="380" y2="201" stroke-width="2" />
    <text x="350" y="220" text-anchor="end" font-size="10" stroke="none" fill="currentColor">interrupter</text>
    <text x="350" y="234" text-anchor="end" font-size="10" stroke="none" fill="currentColor">contact</text>

    <!-- Wire down from interrupter back to battery -->
    <line x1="380" y1="205" x2="380" y2="280" stroke-width="1.5" />
    <line x1="380" y1="280" x2="90" y2="280" stroke-width="1.5" />
    <line x1="90" y1="280" x2="90" y2="160" stroke-width="1.5" />

    <!-- Cycle labels along the bottom -->
    <line x1="60" y1="310" x2="740" y2="310" stroke-dasharray="3,3" stroke-width="1" />
    <text x="160" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">1. Current ON</text>
    <text x="160" y="350" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">coil becomes a magnet</text>
    <text x="320" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">2. Armature pulled</text>
    <text x="320" y="350" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">hammer hits bell: ding</text>
    <text x="480" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">3. Contact breaks</text>
    <text x="480" y="350" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">current cuts, coil weakens</text>
    <text x="640" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">4. Spring resets</text>
    <text x="640" y="350" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">contact remakes, repeat</text>

    <text x="400" y="380" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">The bell rings because the circuit cuts in and out, many times per second.</text>
  </g>
`

const RELAY_LOUDSPEAKER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Two more uses: relay (small switches large) and loudspeaker (signal vibrates cone)</text>

    <!-- Left half: relay -->
    <text x="200" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Relay in a car-starter circuit</text>

    <!-- Small control circuit -->
    <rect x="50" y="90" width="60" height="36" />
    <text x="80" y="112" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">key</text>
    <text x="80" y="142" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">small current</text>
    <text x="80" y="155" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~0.2 A</text>

    <line x1="110" y1="108" x2="170" y2="108" stroke-width="1.5" />
    <rect x="170" y="90" width="50" height="36" />
    <text x="195" y="112" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">coil</text>
    <line x1="220" y1="108" x2="280" y2="108" stroke-width="1.5" />
    <line x1="280" y1="108" x2="280" y2="170" stroke-width="1.5" />
    <line x1="280" y1="170" x2="50" y2="170" stroke-width="1.5" />
    <line x1="50" y1="170" x2="50" y2="126" stroke-width="1.5" />

    <!-- Switched contact pulled together by the coil -->
    <line x1="195" y1="190" x2="195" y2="210" stroke-width="2.5" />
    <text x="215" y="200" text-anchor="start" font-size="10" stroke="none" fill="currentColor">contact</text>

    <!-- Large load circuit -->
    <rect x="60" y="240" width="60" height="36" />
    <text x="90" y="262" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">12 V</text>
    <line x1="120" y1="258" x2="175" y2="258" stroke-width="2.5" />
    <line x1="195" y1="210" x2="195" y2="258" stroke-width="2.5" />
    <line x1="195" y1="258" x2="240" y2="258" stroke-width="2.5" />
    <rect x="240" y="240" width="80" height="36" />
    <text x="280" y="262" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">starter motor</text>
    <line x1="320" y1="258" x2="370" y2="258" stroke-width="2.5" />
    <line x1="370" y1="258" x2="370" y2="290" stroke-width="2.5" />
    <line x1="370" y1="290" x2="90" y2="290" stroke-width="2.5" />
    <line x1="90" y1="290" x2="90" y2="276" stroke-width="2.5" />
    <text x="200" y="316" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">large current ~200 A flows only when the coil closes the contact</text>

    <!-- Divider -->
    <line x1="400" y1="50" x2="400" y2="340" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Right half: loudspeaker -->
    <text x="600" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Loudspeaker in a hi-fi</text>

    <!-- Permanent magnet ring -->
    <rect x="500" y="160" width="40" height="60" />
    <rect x="500" y="160" width="40" height="60" fill="currentColor" opacity="0.2" />
    <text x="520" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">N</text>
    <rect x="640" y="160" width="40" height="60" />
    <rect x="640" y="160" width="40" height="60" fill="currentColor" opacity="0.2" />
    <text x="660" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="590" y="155" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">fixed permanent magnet</text>

    <!-- Coil between the poles, attached to a cone -->
    <rect x="555" y="170" width="70" height="40" />
    <text x="590" y="196" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">coil</text>

    <!-- Paper cone -->
    <path d="M 555 170 L 480 130 L 480 250 L 555 210 Z" stroke-width="2" />
    <text x="500" y="195" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">paper cone</text>

    <!-- Audio signal arrows on the right -->
    <line x1="700" y1="190" x2="730" y2="190" stroke-width="2" />
    <polygon points="724,185 734,190 724,195" fill="currentColor" stroke="none" />
    <text x="720" y="175" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">audio signal</text>
    <text x="720" y="215" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">into coil</text>

    <!-- Sound waves leaving the cone -->
    <path d="M 470 140 C 460 155, 460 225, 470 240" stroke-width="1.5" />
    <path d="M 455 130 C 440 150, 440 230, 455 250" stroke-width="1.2" />
    <path d="M 440 120 C 420 145, 420 235, 440 260" stroke-width="1" />
    <text x="430" y="290" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sound waves</text>

    <text x="600" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Signal pushes/pulls coil; cone vibrates; sound is made.</text>
  </g>
`

export const magnetismElectromagnetUses: SkillNode = {
  id: 'physics-magnetism-electromagnet-uses',
  title: 'Uses of Electromagnets',
  description:
    'Electromagnets are coils that become magnetic only when current flows. That switchability is what makes them useful in the real world. A scrap-yard crane is a giant electromagnet on a chain: turn it on to lift heavy steel cars, turn it off to drop them in a sorted heap, and aluminium drink cans stay behind because they are not ferromagnetic. An electric bell uses a self-interrupting circuit: each time the coil pulls the armature, the circuit breaks, the coil weakens, a spring snaps the armature back, the contact remakes, and the cycle repeats many times per second to ring the bell. A relay lets a small current control a much larger one, so a low-voltage key switch in a car cabin can safely close the heavy 200 A circuit that runs the starter motor. A loudspeaker uses a small coil sitting in the gap of a permanent magnet: an audio signal in the coil pushes and pulls a paper cone, which vibrates the air and makes sound. Hospital MRI scanners use very strong superconducting solenoids for medical imaging. By the end of this node, you can match each use to its key idea, explain why an electromagnet beats a permanent magnet for cranes and relays, and reason about the currents involved.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'challenge',
  prerequisites: ['physics-magnetism-strengthening-electromagnets'],
  curriculum: {
    ks3Objective:
      'Electromagnets; everyday and industrial uses including scrap-yard cranes, electric bells and doorbells, relays and loudspeakers. Switchability is the key reason for using an electromagnet rather than a permanent magnet.',
    awardingBodies: {
      aqa: '4.7.2.1 Electromagnetism; applications of electromagnets in switching and lifting devices (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.11 to 7.12 uses of electromagnets including relays and circuit breakers (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; practical applications of electromagnets, including cranes and bells (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1 (applications of electromagnets, especially lifting and switching devices), accessed 2026-05-12; standard scrap-yard description given in CGP KS3 Physics Complete Revision and Practice (2022) electromagnet uses spread.
    {
      id: 'pmeu-scrapyard-crane',
      title: 'Scrap-yard crane: a switchable lifter',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the parts of a scrap-yard electromagnet and what happens when the switch is flicked.',
      data: {
        viewBox: '0 0 800 410',
        svg: SCRAPYARD_CRANE_SVG,
        hotspots: [
          {
            id: 'pmeu-crane-core-coil',
            x: 50,
            y: 51,
            label: 'Iron core wrapped in a coil',
            description:
              'The lifting head is a thick iron core wound with hundreds of turns of insulated wire. When current flows in the coil, the soft-iron core becomes a very strong temporary magnet; when the current stops, the magnetism almost vanishes.',
          },
          {
            id: 'pmeu-crane-switch',
            x: 78,
            y: 32,
            label: 'Cab switch: ON lifts, OFF drops',
            description:
              'The driver flicks one switch in the cab. ON sends a heavy current through the coil and turns the head into a magnet; OFF cuts the current and every steel item lets go at once, dropping into a sorted heap below.',
          },
          {
            id: 'pmeu-crane-steel-aluminium',
            x: 72,
            y: 82,
            label: 'Only ferromagnetic metals stick',
            description:
              'Steel car bodies are mostly iron, so they are ferromagnetic and stick. Aluminium drink cans are not ferromagnetic; they stay on the ground even with the magnet on. That is how a scrap yard sorts metals.',
          },
          {
            id: 'pmeu-crane-vs-permanent',
            x: 50,
            y: 95,
            label: 'Why not a permanent magnet?',
            description:
              'A permanent magnet would pick up the cars just as well, but it could never let go. The whole point of the crane is to release the load on demand. Switchability is what makes the electromagnet the right tool here.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.2 (electric bells as a practical electromagnet application); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022) electromagnet uses spread.
    {
      id: 'pmeu-electric-bell',
      title: 'Electric bell: the self-interrupting circuit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk through one ring of an electric bell: four stages that repeat many times per second.',
      data: {
        viewBox: '0 0 800 400',
        svg: ELECTRIC_BELL_SVG,
        hotspots: [
          {
            id: 'pmeu-bell-stage-1',
            x: 20,
            y: 84,
            label: 'Stage 1: current ON, coil magnetised',
            description:
              'Press the doorbell push and a 4 V battery sends a small current through the coil. The coil becomes a temporary magnet and attracts the springy iron armature on its right.',
          },
          {
            id: 'pmeu-bell-stage-2',
            x: 40,
            y: 84,
            label: 'Stage 2: armature pulled, hammer hits bell',
            description:
              'The armature swings toward the coil, dragging the hammer with it. The hammer hits the bell dome and you hear one "ding". That ding is one mechanical cycle of the circuit.',
          },
          {
            id: 'pmeu-bell-stage-3',
            x: 60,
            y: 84,
            label: 'Stage 3: contact breaks, coil weakens',
            description:
              'As the armature moves, it pulls away from the small interrupter contact below the coil. The circuit breaks. With no current flowing, the iron core loses its magnetism almost instantly.',
          },
          {
            id: 'pmeu-bell-stage-4',
            x: 80,
            y: 84,
            label: 'Stage 4: spring resets, the cycle repeats',
            description:
              'The armature is springy. With no pull from the coil, it snaps back to its rest position. The interrupter contact closes again, the circuit remakes, the coil magnetises, the hammer is pulled toward the bell, and the next ding sounds. The cycle repeats many times per second while the push is held.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.11 to 7.12 relays and loudspeakers as practical electromagnet uses), accessed 2026-05-12; loudspeaker structure from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmeu-relay-loudspeaker',
      title: 'Relay and loudspeaker side by side',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a relay (small switches large) with a loudspeaker (signal vibrates a cone).',
      data: {
        viewBox: '0 0 800 350',
        svg: RELAY_LOUDSPEAKER_SVG,
        hotspots: [
          {
            id: 'pmeu-relay-small-circuit',
            x: 25,
            y: 35,
            label: 'Relay: small control circuit',
            description:
              'Turning the car key sends a small current (about 0.2 A) through the coil of the relay. The coil becomes a weak magnet and pulls a small iron arm onto a switched contact.',
          },
          {
            id: 'pmeu-relay-large-circuit',
            x: 25,
            y: 78,
            label: 'Relay: large switched circuit',
            description:
              'Closing that contact connects the 12 V starter circuit, which carries hundreds of amps to spin the engine. The big current only flows once the small one has done its work: low-voltage in the cabin, high-current in the engine bay.',
          },
          {
            id: 'pmeu-loudspeaker-magnet',
            x: 75,
            y: 50,
            label: 'Loudspeaker: fixed permanent magnet',
            description:
              'A loudspeaker has a strong permanent magnet with a narrow gap between its N and S poles. The field in that gap is strong and roughly uniform.',
          },
          {
            id: 'pmeu-loudspeaker-coil-cone',
            x: 60,
            y: 62,
            label: 'Loudspeaker: coil and cone',
            description:
              'A small coil sits in the gap and is glued to a paper cone. The audio signal is an alternating current in the coil. The coil is pushed and pulled by the permanent field, the cone vibrates with it, and the moving cone shoves the air to make sound.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1; KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmeu-worked-1',
      title: 'Tracing a car-starter relay step by step',
      steps: [
        {
          explanation:
            'Set out the situation. A driver turns the key in a UK family hatchback. The key is wired to a small relay coil; the relay contact connects the 12 V battery to the starter motor.',
        },
        {
          explanation:
            'Stage 1: the small current. Turning the key closes a low-voltage path through the relay coil. About 0.2 A flows from the battery through the key and coil.',
          maths: 'small current = 0.2 A',
        },
        {
          explanation:
            'Stage 2: the coil becomes a magnet. The 0.2 A through hundreds of turns is enough to magnetise a tiny iron core inside the relay. The core pulls a small iron arm down onto a contact.',
        },
        {
          explanation:
            'Stage 3: the large current flows. With the contact closed, the heavy starter circuit is now complete. About 200 A surges through the starter motor.',
          maths: 'large current = 200 A; ratio = 200 / 0.2 = 1000',
        },
        {
          explanation:
            'Stage 4: the engine starts. Once the engine is running, the driver lets go of the key, the small current stops, the coil loses its magnetism, the contact springs open, and the 200 A path is broken.',
        },
        {
          explanation:
            'State the answer. The cabin only ever carries 0.2 A; the heavy 200 A current is one thousand times larger and stays in the engine bay. That is why a relay is safer than running the heavy current straight to the cabin key.',
        },
      ],
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.2 (electric bell mechanism); KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmeu-worked-2',
      title: 'Counting "dings" per second from an electric bell',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil holds down a doorbell push for 4 s. They count 20 dings in that time. Work out how many dings per second.',
        },
        {
          explanation:
            'Identify the calculation. Dings per second is the number of dings divided by the time, in seconds.',
          maths: 'rate = number / time',
        },
        {
          explanation:
            'Substitute the values. There are 20 dings in 4 s.',
          maths: 'rate = 20 / 4',
        },
        {
          explanation:
            'Work it out. 20 divided by 4 is 5.',
          maths: 'rate = 5 dings per second',
        },
        {
          explanation:
            'State the answer. The bell rings at 5 dings per second. Each ding is one full cycle of: coil pulls armature, contact breaks, spring resets. So the circuit cuts in and out 5 times every second.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmeu-q1',
      type: 'multiple-choice',
      stem: 'A scrap-yard crane uses a giant electromagnet on a chain. Why is an electromagnet used rather than a strong permanent magnet?',
      tier: 'core',
      options: [
        'Permanent magnets are heavier than electromagnets.',
        'A permanent magnet cannot be switched off, so it could not drop the load on demand.',
        'Permanent magnets only work in cold weather.',
        'Electromagnets are cheaper than every other type of magnet.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmeu-mis-permanent-better',
      hint: 'Think about what happens at the end of a lift: the crane needs to let go of the steel.',
    },
    {
      id: 'pmeu-q2',
      type: 'multiple-choice',
      stem: 'A scrap-yard crane is switched on over a pile that contains steel car bodies and aluminium drink cans. What happens?',
      tier: 'core',
      options: [
        'Both the steel and the aluminium are lifted.',
        'Only the aluminium is lifted.',
        'Only the steel is lifted; the aluminium stays on the ground.',
        'Nothing is lifted; electromagnets do not pull on metals.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmeu-mis-lifts-all-metal',
      hint: 'Only ferromagnetic metals stick to a magnet. Aluminium is not ferromagnetic.',
    },
    {
      id: 'pmeu-q3',
      type: 'multiple-choice',
      stem: 'In an electric bell, what role does the spring on the armature play?',
      tier: 'core',
      options: [
        'It stores the sound between dings.',
        'It generates the current that drives the coil.',
        'It pushes the armature back to its rest position when the coil loses its magnetism, so the contact remakes and the next cycle starts.',
        'It heats up to ring the bell.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmeu-mis-bell-steady-current',
      hint: 'The bell needs the contact to remake before each new ding. Something has to pull the armature back.',
    },
    {
      id: 'pmeu-q4',
      type: 'multiple-choice',
      stem: 'A relay is described as "a small switch using a small current to control a much larger current". Which everyday device uses a relay this way?',
      tier: 'core',
      options: [
        'A torch with a single bulb.',
        'A car-starter circuit: the cabin key carries a small current, the starter motor carries a much larger current.',
        'A wall clock running on a single battery.',
        'A bicycle dynamo lamp.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmeu-mis-relay-large-does-work',
      hint: 'A relay separates the safe cabin side from the heavy engine-bay side of the circuit.',
    },
    {
      id: 'pmeu-q5',
      type: 'multiple-choice',
      stem: 'A loudspeaker contains both a coil and a permanent magnet. Which statement is correct?',
      tier: 'core',
      options: [
        'It uses only a permanent magnet.',
        'It uses only an electromagnetic coil.',
        'The permanent magnet sits in the gap and the coil is the fixed part.',
        'The permanent magnet is fixed, and the coil moves inside the gap, attached to a paper cone.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmeu-mis-speaker-permanent-only',
      hint: 'Sound needs something to move. The fixed magnet supplies the field; the coil is the moving part.',
    },
    {
      id: 'pmeu-q6',
      type: 'numeric-entry',
      stem: 'A scrap-yard electromagnet typically draws about 24 A on full power. A doorbell coil typically draws about 0.6 A. How many times larger is the scrap-magnet current than the doorbell current? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 40,
      unit: 'times',
      xpValue: 10,
      hint: 'Divide the bigger current by the smaller: 24 / 0.6.',
    },
    {
      id: 'pmeu-q7',
      type: 'numeric-entry',
      stem: 'A UK pupil holds down a doorbell push for 3 s and counts 18 dings. How many dings per second is the bell ringing at? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 6,
      unit: 'dings per second',
      xpValue: 10,
      hint: 'Rate = number of dings divided by time. 18 / 3.',
    },
    {
      id: 'pmeu-q8',
      type: 'multiple-choice',
      stem: 'In the electric-bell circuit, what is the role of the interrupter contact?',
      tier: 'confident',
      options: [
        'It supplies extra current to the bell.',
        'It breaks the circuit each time the armature swings toward the coil, so the coil loses its magnetism and the spring can reset.',
        'It silences the bell.',
        'It changes the colour of the bell.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmeu-mis-bell-steady-current',
      hint: 'Without the contact cutting out, the armature would just stick to the coil and the bell would only give one ding.',
    },
    {
      id: 'pmeu-q9',
      type: 'multiple-choice',
      stem: 'A loudspeaker is wired to a hi-fi amplifier. The signal travelling along the wire is best described as:',
      tier: 'confident',
      options: [
        'A steady direct current.',
        'An alternating current whose pattern matches the sound waveform, so the coil moves back and forth in step with the sound.',
        'A very high steady current that heats the coil.',
        'No current at all; loudspeakers work by squeezing the cone mechanically.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmeu-mis-speaker-permanent-only',
      hint: 'The coil has to push and pull in step with the sound. A steady current cannot do that.',
    },
    {
      id: 'pmeu-q10',
      type: 'multiple-choice',
      stem: 'In a car-starter relay, the key carries a small current and the starter motor carries a much larger current. Which current does the actual mechanical work of spinning the engine?',
      tier: 'confident',
      options: [
        'The small current through the key.',
        'Neither; the engine spins on its own.',
        'The large current through the starter motor.',
        'Both equally.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmeu-mis-relay-large-does-work',
      hint: 'The small current only closes a switch. The big current downstream is the one that drives the motor.',
    },
    {
      id: 'pmeu-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil explains how an MRI scanner at an NHS hospital makes its very strong magnetic field, compared with a school doorbell coil.',
      tier: 'confident',
      steps: [
        'A doorbell coil is made of ordinary insulated copper wire wound on a small iron core.',
        'An MRI scanner uses a much bigger solenoid because it needs a far stronger and more uniform field for medical imaging.',
        null,
        'With almost no resistance, the coil can carry huge currents without overheating, producing fields hundreds of times stronger than any school electromagnet.',
        'That very strong, uniform field is what gives MRI its clear pictures of soft tissue inside the body.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The MRI solenoid is cooled to very low temperatures using liquid helium, which makes its special wire superconducting (almost no electrical resistance).',
      xpValue: 15,
      misconceptionId: 'pmeu-mis-mri-ordinary',
    },
    {
      id: 'pmeu-q12',
      type: 'numeric-entry',
      stem: 'A car-starter relay coil draws 0.4 A from the cabin key circuit. The starter motor it switches on draws 200 A from the main battery. How many times larger is the switched-load current than the coil current? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 500,
      unit: 'times',
      xpValue: 15,
      misconceptionId: 'pmeu-mis-relay-large-does-work',
      hint: 'Divide the big current by the small one: 200 / 0.4.',
    },
    {
      id: 'pmeu-q13',
      type: 'numeric-entry',
      stem: 'A scrap-yard electromagnet can lift up to 1200 kg of steel. A small car body has a mass of 800 kg. Working at full lift, how many such car bodies can the crane lift at once? Round down to a whole number, since the crane cannot lift a partial car.',
      tier: 'confident',
      correctAnswer: 1,
      unit: 'cars',
      xpValue: 15,
      hint: 'Divide the crane lift by the car mass: 1200 / 800 = 1.5. You cannot lift half a car, so round down.',
    },
    {
      id: 'pmeu-q14',
      type: 'drag-order',
      stem: 'Put these four stages of one electric-bell cycle in the correct order, starting from when the push button is first pressed.',
      tier: 'confident',
      items: [
        'The interrupter contact breaks, current stops, the coil loses its magnetism.',
        'Current flows through the coil and the coil becomes a temporary magnet.',
        'The spring snaps the armature back to its rest position and the interrupter contact remakes.',
        'The armature is pulled toward the coil and the hammer strikes the bell.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'The push starts the current first. The coil pulls before the contact breaks. The spring acts only once the coil has gone weak.',
    },
    {
      id: 'pmeu-q15',
      type: 'spot-misconception',
      stem: 'Two pupils are explaining how a scrap-yard crane sorts metals.',
      tier: 'confident',
      statements: [
        {
          text: 'Pupil A says: "The electromagnet on the crane lifts every metal object in the heap, including aluminium drink cans and copper pipe, because all metals are magnetic." This is wrong; only ferromagnetic metals like iron and steel stick to a magnet.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "The crane lifts the steel car bodies because iron is ferromagnetic. The aluminium drink cans and copper pipe stay in the heap because they are not ferromagnetic. Switching the magnet off drops the steel in a separate pile." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmeu-mis-lifts-all-metal',
    },
    {
      id: 'pmeu-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked to explain how a car-starter relay works, from turning the key to the starter motor spinning.',
      tier: 'challenge',
      steps: [
        'The driver turns the key in the cabin, sending a small current of about 0.2 A through the relay coil.',
        'The relay coil becomes a temporary magnet and attracts a small iron arm down onto a switched contact.',
        null,
        'The starter motor draws around 200 A from the main battery and spins the engine over.',
        'When the driver lets go of the key, the small current stops, the coil loses its magnetism, the contact springs open, and the heavy 200 A circuit is broken.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Closing the switched contact completes the heavy 12 V circuit between the main battery and the starter motor.',
      xpValue: 20,
    },
    {
      id: 'pmeu-q17',
      type: 'numeric-entry',
      stem: 'A relay coil draws 0.5 A. The heavy circuit it switches on carries 25 A. How many times larger is the switched current than the control current? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 50,
      unit: 'times',
      xpValue: 20,
      misconceptionId: 'pmeu-mis-relay-large-does-work',
      hint: 'Divide the switched current by the coil current: 25 / 0.5.',
    },
    {
      id: 'pmeu-q18',
      type: 'multiple-choice',
      stem: 'A pupil claims: "An electric bell rings because the current flows steadily through the coil, holding the hammer firmly on the bell." Why is this wrong?',
      tier: 'challenge',
      options: [
        'A steady current would magnetise the coil once, pull the armature in, and hold it there. The bell would give one ding and then stay silent. The repeated ringing only happens because the circuit cuts in and out as the armature moves.',
        'The pupil is right; bells ring with a steady current.',
        'Bells do not use coils at all; they use a permanent magnet only.',
        'The current changes by itself with no contact involved.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pmeu-mis-bell-steady-current',
      hint: 'Hold the armature still and you only get one ding. Many dings per second need many cycles per second.',
    },
    {
      id: 'pmeu-q19',
      type: 'spot-misconception',
      stem: 'Two pupils are arguing about whether electromagnets or permanent magnets are "better".',
      tier: 'challenge',
      statements: [
        {
          text: 'Pupil A says: "Permanent magnets are always better than electromagnets because they do not need a power supply, and they keep working when the electricity is off." This misses the point; many real jobs (cranes, relays, doorbells, loudspeakers) need a magnet that can be switched on and off or that follows a changing signal, which only an electromagnet can do.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "Each type has its job. Permanent magnets are great when you want a steady pull with no power supply, like a fridge magnet. Electromagnets are better when you need to switch the pull on and off (scrap-yard crane, relay) or follow a varying signal (loudspeaker). The trade-off is that electromagnets need a current." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmeu-mis-permanent-better',
    },
    {
      id: 'pmeu-q20',
      type: 'multiple-choice',
      stem: 'A friend claims: "An MRI scanner is just a really big version of the electromagnet you used in class today, with the same iron core and the same coil of wire." Why is this not quite right?',
      tier: 'challenge',
      options: [
        'MRI scanners do not use coils at all; they use a permanent magnet.',
        'MRI scanners use superconducting coils, kept very cold so they carry huge currents without overheating, producing fields far stronger than any ordinary iron-core electromagnet could.',
        'MRI scanners use sound waves, not magnetism.',
        'The classroom electromagnet is bigger and stronger than any MRI scanner.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmeu-mis-mri-ordinary',
      hint: 'An ordinary iron-core coil could not carry enough current without burning out. MRI needs a special trick to push huge currents through the wire.',
    },
    {
      id: 'pmeu-q21',
      type: 'numeric-entry',
      stem: 'A doorbell rings at 8 dings per second while the push is held. The pupil holds the push for 5 s. How many full dings should they hear in that time? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 40,
      unit: 'dings',
      xpValue: 20,
      hint: 'Multiply the rate by the time: 8 times 5.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that a scrap-yard crane lifts every kind of metal in the heap, including aluminium and copper.
    {
      id: 'pmeu-mis-lifts-all-metal',
      description:
        'Believing that a scrap-yard electromagnet lifts every kind of metal, including aluminium and copper.',
      triggerAnswer: 'lifts-all-metal',
      correction:
        'Only ferromagnetic metals stick to a magnet. Iron, steel, nickel and cobalt are ferromagnetic; aluminium and copper are not, so they stay in the heap.',
      reExplanation:
        'A scrap-yard crane is not a general metal grabber; it is a sorting tool. Steel car bodies stick because iron is ferromagnetic, and the magnet picks them out of the pile. Aluminium drink cans and copper pipe are not ferromagnetic, so they stay on the ground even with the magnet on full power. That is precisely why a scrap yard uses this method to sort steel from the rest.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates wrote that an electric bell rings because a steady current keeps flowing through the coil.
    {
      id: 'pmeu-mis-bell-steady-current',
      description:
        'Believing an electric bell rings because a steady current keeps flowing through the coil.',
      triggerAnswer: 'bell-steady-current',
      correction:
        'The bell rings because the circuit cuts in and out. Each cycle: coil pulls the armature, the contact breaks, the coil weakens, the spring resets the contact, and the next ding begins.',
      reExplanation:
        'A steady current would magnetise the coil once, pull the armature in, and hold it there. You would get one ding and silence. Many dings per second require many on-off cycles per second, which is what the interrupter contact provides. Each ring you hear is one full cycle of the circuit closing and opening.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates said the large current in a relay does the lifting work, missing that the small current only closes a switch.
    {
      id: 'pmeu-mis-relay-large-does-work',
      description:
        'Believing the small control current in a relay does the mechanical work, when in fact it only closes a switch.',
      triggerAnswer: 'relay-small-does-work',
      correction:
        'In a relay the small current only magnetises a coil that closes a switch. The large switched current downstream is the one that does the real work.',
      reExplanation:
        'Think of it as two circuits sharing one switch. The small current (about 0.2 A in a car) gives the relay coil just enough field to pull a tiny iron arm down. That contact closes the heavy circuit, and the big current (around 200 A) is what actually spins the starter motor. Low-voltage in the cabin, high-current in the engine bay: that separation is the whole point.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates wrote that loudspeakers use only a permanent magnet, missing the moving coil.
    {
      id: 'pmeu-mis-speaker-permanent-only',
      description:
        'Believing a loudspeaker uses only a permanent magnet, with no current-carrying coil involved.',
      triggerAnswer: 'speaker-permanent-only',
      correction:
        'A loudspeaker uses both: a fixed permanent magnet to supply a strong steady field, and a moving coil carrying the audio signal, glued to a paper cone.',
      reExplanation:
        'The permanent magnet on its own does nothing useful for sound; it just sits there. The audio signal is an alternating current sent through the small coil that sits in the gap between the N and S poles. That current makes the coil push and pull within the steady field, and the cone vibrates with the coil, shoving air to make sound.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that MRI scanners use ordinary iron-core electromagnets like a school doorbell.
    {
      id: 'pmeu-mis-mri-ordinary',
      description:
        'Believing MRI scanners use ordinary iron-core electromagnets like a school doorbell coil.',
      triggerAnswer: 'mri-ordinary',
      correction:
        'MRI scanners use superconducting solenoids, kept very cold so the coil has almost no resistance and can carry huge currents to make a very strong field.',
      reExplanation:
        'An ordinary iron-core coil cannot carry enough current to make the very strong fields an MRI scan needs; the wire would overheat. Cooling a special wire down to near absolute zero removes its resistance, so a huge current can flow with no heating. That is what gives MRI its very strong, uniform field for clear medical images.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that permanent magnets are always better than electromagnets, missing the role of switchability.
    {
      id: 'pmeu-mis-permanent-better',
      description:
        'Believing that permanent magnets are always better than electromagnets because they need no power supply.',
      triggerAnswer: 'permanent-better',
      correction:
        'Each type fits a different job. Permanent magnets are great for steady pulls with no power, but they cannot be switched off. Electromagnets win whenever the pull must turn on, turn off, or follow a signal.',
      reExplanation:
        'A scrap-yard crane needs to release its load on demand, so a permanent magnet is hopeless. A relay needs to switch a large current on and off, so a permanent magnet is hopeless. A loudspeaker needs the pull to follow an audio signal, so a permanent magnet alone is hopeless. Choose the magnet that matches the job; switchability is what makes electromagnets the right choice in all these cases.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismElectromagnetUsesZoneNodes = [magnetismElectromagnetUses]
