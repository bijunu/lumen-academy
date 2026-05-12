import type { SkillNode } from '@/types/content'

const ECHO_PATH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Echo path: the sound travels there and back</text>

    <!-- Ground line -->
    <line x1="60" y1="320" x2="740" y2="320" stroke-width="2" />
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">flat ground in a quarry</text>

    <!-- Person on the left -->
    <circle cx="130" cy="245" r="15" fill="currentColor" />
    <line x1="130" y1="260" x2="130" y2="305" stroke-width="3" />
    <line x1="130" y1="280" x2="115" y2="295" stroke-width="3" />
    <line x1="130" y1="280" x2="150" y2="295" stroke-width="3" />
    <line x1="130" y1="305" x2="118" y2="320" stroke-width="3" />
    <line x1="130" y1="305" x2="142" y2="320" stroke-width="3" />
    <text x="130" y="225" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">shouter</text>

    <!-- Quarry wall on the right -->
    <rect x="640" y="140" width="60" height="180" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
    <text x="670" y="130" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">quarry wall</text>

    <!-- Outgoing sound arrow -->
    <line x1="160" y1="240" x2="635" y2="240" stroke-width="3" />
    <polygon points="627,232 645,240 627,248" fill="currentColor" stroke="none" />
    <text x="400" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">shout travels out (one way)</text>

    <!-- Return sound arrow -->
    <line x1="635" y1="275" x2="160" y2="275" stroke-width="3" stroke-dasharray="6,6" />
    <polygon points="168,267 150,275 168,283" fill="currentColor" stroke="none" />
    <text x="400" y="295" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">echo travels back (one way)</text>

    <!-- Distance bracket -->
    <line x1="160" y1="370" x2="635" y2="370" stroke-width="2" />
    <polygon points="168,363 150,370 168,377" fill="currentColor" stroke="none" />
    <polygon points="627,363 645,370 627,377" fill="currentColor" stroke="none" />
    <text x="400" y="390" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">distance d to the wall (one way)</text>

    <!-- Key rule -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">total path = 2 d, so d = (speed x time) / 2</text>
  </g>
`

const SPEED_IN_MEDIA_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Speed of sound in different materials at room temperature</text>

    <!-- Air bar -->
    <text x="80" y="100" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Air</text>
    <rect x="80" y="110" width="60" height="30" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2" />
    <text x="160" y="130" text-anchor="start" font-size="13" stroke="none" fill="currentColor">about 343 m/s</text>
    <text x="160" y="148" text-anchor="start" font-size="11" stroke="none" fill="currentColor">(thin gas, particles spread apart)</text>

    <!-- Water bar -->
    <text x="80" y="190" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Water</text>
    <rect x="80" y="200" width="265" height="30" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2" />
    <text x="365" y="220" text-anchor="start" font-size="13" stroke="none" fill="currentColor">about 1500 m/s</text>
    <text x="365" y="238" text-anchor="start" font-size="11" stroke="none" fill="currentColor">(liquid, particles closer together)</text>

    <!-- Steel bar -->
    <text x="80" y="280" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Steel</text>
    <rect x="80" y="290" width="540" height="30" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2" />
    <text x="80" y="345" text-anchor="start" font-size="13" stroke="none" fill="currentColor">about 5000 m/s (solid, particles packed tightly together)</text>

    <!-- Rule -->
    <text x="400" y="380" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Tighter packing means the push passes on quicker, so sound is fastest in solids.</text>
  </g>
`

const THUNDER_LIGHTNING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Thunder rumble after the flash: estimating the storm distance</text>

    <!-- Ground -->
    <line x1="60" y1="320" x2="740" y2="320" stroke-width="2" />

    <!-- Cloud -->
    <ellipse cx="620" cy="120" rx="80" ry="30" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
    <ellipse cx="660" cy="105" rx="50" ry="25" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
    <text x="640" y="80" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">storm cloud</text>

    <!-- Lightning bolt -->
    <polyline points="620,150 605,200 625,200 605,260 615,250" stroke-width="3" />
    <text x="555" y="225" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">flash arrives almost instantly</text>

    <!-- Observer -->
    <circle cx="150" cy="265" r="12" fill="currentColor" />
    <line x1="150" y1="277" x2="150" y2="310" stroke-width="3" />
    <line x1="150" y1="290" x2="135" y2="305" stroke-width="3" />
    <line x1="150" y1="290" x2="165" y2="305" stroke-width="3" />
    <text x="150" y="245" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">you</text>

    <!-- Sound wave arrow -->
    <line x1="600" y1="230" x2="185" y2="265" stroke-width="2" stroke-dasharray="6,6" />
    <polygon points="195,257 175,267 197,272" fill="currentColor" stroke="none" />
    <text x="400" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">rumble travels at about 343 m/s, taking 3 s over 1 km</text>

    <!-- Rule -->
    <text x="400" y="365" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Rule of thumb: every 3 s of delay equals about 1 km to the storm.</text>
  </g>
`

export const wavesSpeedOfSound: SkillNode = {
  id: 'physics-waves-speed-of-sound',
  title: 'Speed of Sound and Echoes',
  description:
    'Sound travels at about 343 m/s in air at room temperature, around 1500 m/s in water, and roughly 5000 m/s in steel. The tighter the particles are packed, the quicker each push passes on to the next particle. An echo is a sound that has reflected off a wall, a cliff, or the seabed and travelled back to the listener. Because the sound has gone there and back, the total path is twice the distance to the surface, so distance = (speed x time) / 2. UK examples sit naturally with the rule: a thunder rumble three seconds after the lightning flash means the storm is about a kilometre away, and a sonar pulse on a Channel ferry uses the same timing trick to map the seabed.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Echoes, reflection and absorption of sound; the speed of sound in air, in water, in solids.',
    awardingBodies: {
      aqa: '4.6.2.3 Sound waves; speed of sound in air (approx 340 m/s); echo timing (GCSE Physics 8463)',
      edexcel:
        'Topic 4.1 Sound waves; speed of sound, time and distance from echoes (GCSE Physics 1PH0)',
      ocr: 'P5.2 Sound and ultrasound; speed of sound and use of echoes for distance measurement (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'ss-scene-echo-path',
      title: 'The Echo Path: There and Back',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the echo equation has a divide by 2 in it.',
      data: {
        viewBox: '0 0 800 400',
        svg: ECHO_PATH_SVG,
        hotspots: [
          {
            id: 'ss-echo-shouter',
            x: 16,
            y: 60,
            label: 'Shouter and listener (same person)',
            description:
              'In a quarry echo, the person who shouts is also the person who listens. The sound starts at their mouth and returns to their ears, so the time we measure is for the whole round trip.',
          },
          {
            id: 'ss-echo-wall',
            x: 84,
            y: 50,
            label: 'Reflecting surface',
            description:
              'A hard, flat wall reflects the sound back without absorbing much of it. Rough or soft surfaces, like a curtain, soak up the sound and give little or no echo.',
          },
          {
            id: 'ss-echo-outbound',
            x: 50,
            y: 55,
            label: 'Outbound path: one distance d',
            description:
              'The shout first covers the distance d from the shouter to the wall. This is the one way distance you are trying to find.',
          },
          {
            id: 'ss-echo-return',
            x: 50,
            y: 75,
            label: 'Return path: another distance d',
            description:
              'After bouncing off the wall, the sound travels the same distance d back to the listener. The total path is 2 d, not just d.',
          },
          {
            id: 'ss-echo-rule',
            x: 50,
            y: 20,
            label: 'Echo distance rule',
            description:
              'Total distance travelled = speed x time. Because that total is 2 d, divide by 2 to get the one way distance: d = (speed x time) / 2.',
          },
        ],
      },
    },
    {
      id: 'ss-scene-media',
      title: 'Sound Speed in Air, Water, and Steel',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how speed of sound changes between gases, liquids, and solids.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPEED_IN_MEDIA_SVG,
        hotspots: [
          {
            id: 'ss-media-air',
            x: 15,
            y: 30,
            label: 'Air: about 343 m/s',
            description:
              'At room temperature, sound travels through air at roughly 343 m/s. In a gas, the particles are spread apart, so each push has further to travel before it hits the next particle.',
          },
          {
            id: 'ss-media-water',
            x: 25,
            y: 53,
            label: 'Water: about 1500 m/s',
            description:
              'Sound travels much quicker through water, around 1500 m/s. The molecules sit closer together in a liquid, so the disturbance is handed on without much delay. Channel ferries use sonar that relies on this.',
          },
          {
            id: 'ss-media-steel',
            x: 45,
            y: 78,
            label: 'Steel: about 5000 m/s',
            description:
              'In a solid like steel, the particles are packed tightly and held in place by strong bonds, so a push is passed on at once. Sound travels at roughly 5000 m/s.',
          },
          {
            id: 'ss-media-rule',
            x: 50,
            y: 95,
            label: 'Solid > liquid > gas',
            description:
              'The general pattern is that sound is slowest in gases, quicker in liquids, and quickest in solids. Speed depends on how the medium is packed together, not on the loudness of the sound.',
          },
        ],
      },
    },
    {
      id: 'ss-scene-thunder',
      title: 'Thunder, Lightning, and the 3 s Rule',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the gap between a lightning flash and a thunder rumble tells you the storm distance.',
      data: {
        viewBox: '0 0 800 400',
        svg: THUNDER_LIGHTNING_SVG,
        hotspots: [
          {
            id: 'ss-thunder-flash',
            x: 75,
            y: 30,
            label: 'Lightning: light arrives at once',
            description:
              'Light travels at about 300 000 000 m/s. Across a few kilometres, the flash reaches your eyes almost instantly, so you can use the moment of the flash as the start of the clock.',
          },
          {
            id: 'ss-thunder-rumble',
            x: 50,
            y: 50,
            label: 'Thunder: sound is much slower',
            description:
              'The rumble travels through the air at only 343 m/s. That is a million times slower than the light, so there is a clear gap between flash and bang.',
          },
          {
            id: 'ss-thunder-rule',
            x: 50,
            y: 90,
            label: 'Three seconds = about 1 km',
            description:
              'In 3 s, sound covers about 343 x 3 = 1029 m, near enough 1 km. So count the seconds between flash and rumble, divide by three, and you have the storm distance in kilometres.',
          },
          {
            id: 'ss-thunder-observer',
            x: 19,
            y: 65,
            label: 'You as the listener',
            description:
              'You start timing the instant you see the flash and stop when the rumble reaches you. The longer the gap, the further away the storm.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ss-worked-1',
      title: 'Echo in a Yorkshire quarry: distance from a 0.50 s return',
      steps: [
        {
          explanation:
            'Set out the situation. A walker in a Yorkshire quarry shouts and hears the echo return 0.50 s later. The speed of sound in air is 343 m/s. We want the distance to the quarry wall.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'speed = 343 m/s, time = 0.50 s, distance d = ?',
        },
        {
          explanation:
            'Use the echo rule. The sound goes to the wall and back, so the total path is 2 d, giving d = (speed x time) / 2.',
          maths: 'd = (speed x time) / 2',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'd = (343 x 0.50) / 2',
        },
        {
          explanation: 'Evaluate the top first, then divide.',
          maths: 'd = 171.5 / 2 = 85.75 m',
        },
        {
          explanation:
            'State the answer with the unit. The wall is about 86 m away. Sanity check: in 0.5 s sound covers around 170 m, but that is a round trip, so the one way distance should be half that, which fits.',
        },
      ],
    },
    {
      id: 'ss-worked-2',
      title: 'Channel ferry sonar: depth of water from a 0.40 s ping',
      steps: [
        {
          explanation:
            'Set out the situation. A Channel ferry sends a sonar pulse straight down and the echo returns 0.40 s later. The speed of sound in sea water is about 1500 m/s. We want the depth of the water below the ferry.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'speed = 1500 m/s, time = 0.40 s, depth d = ?',
        },
        {
          explanation:
            'Use the echo rule. The pulse travels down to the seabed and back up, so the total path is 2 d.',
          maths: 'd = (speed x time) / 2',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'd = (1500 x 0.40) / 2',
        },
        {
          explanation: 'Work out the multiplication, then halve.',
          maths: 'd = 600 / 2 = 300 m',
        },
        {
          explanation:
            'State the answer. The seabed is about 300 m below the ferry. The Dover Strait is a few tens of metres deep, so 300 m would be deeper water further out in the Channel, which sounds sensible for a sonar reading.',
        },
      ],
    },
    {
      id: 'ss-worked-3',
      title: 'Storm distance: thunder arriving after a 6 s gap',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in a Bristol garden sees a lightning flash and the thunder rumble reaches them 6.0 s later. Light arrives almost instantly, so the 6 s is the time the sound took. The speed of sound in air is 343 m/s.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'speed = 343 m/s, time = 6.0 s, distance d = ?',
        },
        {
          explanation:
            'Pick the right rule. This is one way travel from the storm to the listener, not an echo, so there is no divide by 2.',
          maths: 'd = speed x time',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'd = 343 x 6.0',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'd = 2058 m, which is about 2.1 km',
        },
        {
          explanation:
            'State the answer. The storm is about 2.1 km away. The 3 s per kilometre rule of thumb agrees: 6 s divided by 3 s per kilometre gives 2 km, matching the careful calculation.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ss-q1',
      type: 'multiple-choice',
      stem: 'What is the approximate speed of sound in air at room temperature?',
      tier: 'core',
      options: [
        'About 343 m/s',
        'About 30 m/s',
        'About 3000 m/s',
        'About 300 000 000 m/s (the speed of light)',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ss-mis-speed-units-mix',
      hint: 'Sound is much slower than light. Think about how long it takes a rumble of thunder to cover a kilometre.',
    },
    {
      id: 'ss-q2',
      type: 'multiple-choice',
      stem: 'In which of these materials does sound travel quickest?',
      tier: 'core',
      options: [
        'Air',
        'Water',
        'Steel',
        'It is the same in all three.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ss-mis-air-quickest',
      hint: 'The more tightly packed the particles, the quicker the push is passed on.',
    },
    {
      id: 'ss-q3',
      type: 'multiple-choice',
      stem: 'A pupil shouts at a quarry wall and the echo returns 0.50 s later. Why must they divide by 2 when working out the distance?',
      tier: 'core',
      options: [
        'Because the sound slows down on the way back.',
        'Because the speed of sound is half the speed of light.',
        'Because the sound travels to the wall and back, so the total path is twice the distance.',
        'Because they want metres rather than kilometres.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ss-mis-no-divide',
      hint: 'Trace the route of the sound on the diagram. How many one way trips fit into the time?',
    },
    {
      id: 'ss-q4',
      type: 'numeric-entry',
      stem: 'A walker shouts at a cliff and the echo returns after 2.0 s. The speed of sound in air is 343 m/s. How far away is the cliff, in m?',
      tier: 'core',
      correctAnswer: 343,
      tolerance: 1,
      unit: 'm',
      xpValue: 10,
      hint: 'd = (speed x time) / 2 = (343 x 2.0) / 2.',
    },
    {
      id: 'ss-q5',
      type: 'multiple-choice',
      stem: 'A swimmer in a Brighton harbour bangs two metal bars under the water. What happens to the speed of sound compared with the same bang above the water surface?',
      tier: 'core',
      options: [
        'The sound is slower in the water than in the air above.',
        'The sound is much quicker in the water than in the air above.',
        'The sound is roughly the same speed in water and in air.',
        'No sound travels in water at all.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ss-mis-air-quickest',
      hint: 'Water particles are much closer together than air particles.',
    },
    {
      id: 'ss-q6',
      type: 'multiple-choice',
      stem: 'A flash of lightning is seen and the thunder rumble arrives 3 s later. Roughly how far away is the storm?',
      tier: 'core',
      options: [
        'About 100 m',
        'About 10 km',
        'About 100 km',
        'About 1 km',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Sound travels about 343 m every second. In 3 s it covers around 1000 m.',
    },
    {
      id: 'ss-q7',
      type: 'numeric-entry',
      stem: 'A coach driver in Cardiff sees the brake lights flash on the coach ahead and the horn sound reaches them 1.0 s later. Light arrives almost instantly. Taking the speed of sound as 343 m/s, how far ahead is the coach, in m?',
      tier: 'core',
      correctAnswer: 343,
      tolerance: 1,
      unit: 'm',
      xpValue: 10,
      hint: 'One way travel: d = speed x time. No divide by 2 because there is no echo.',
    },
    {
      id: 'ss-q8',
      type: 'numeric-entry',
      stem: 'A diver hears a 1.20 s echo from the sea floor after a sonar ping. The speed of sound in sea water is 1500 m/s. How deep is the sea floor, in m?',
      tier: 'confident',
      correctAnswer: 900,
      tolerance: 5,
      unit: 'm',
      xpValue: 15,
      misconceptionId: 'ss-mis-no-divide',
      hint: 'Echo, so use d = (speed x time) / 2 = (1500 x 1.20) / 2.',
    },
    {
      id: 'ss-q9',
      type: 'numeric-entry',
      stem: 'A pupil claps once in front of a sports hall wall in Leeds. The echo arrives 0.20 s later. Taking the speed of sound as 343 m/s, how far away is the wall, in m? Give your answer to the nearest whole metre.',
      tier: 'confident',
      correctAnswer: 34,
      tolerance: 1,
      unit: 'm',
      xpValue: 15,
      hint: 'd = (343 x 0.20) / 2 = 34.3, round to the nearest m.',
    },
    {
      id: 'ss-q10',
      type: 'multiple-choice',
      stem: 'A Year 7 class sees a lightning flash and starts counting. The thunder arrives 9 s later. About how far away is the storm?',
      tier: 'confident',
      options: [
        'About 1 km, because every gap means 1 km.',
        'About 3 km, using the rule that every 3 s of delay equals about 1 km.',
        'About 9 km, because the gap is 9 s.',
        'About 27 km, multiplying the 9 s by 3.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ss-mis-3s-rule',
      hint: 'Sound covers about 1 km in 3 s. Divide the delay by 3 to get the distance in km.',
    },
    {
      id: 'ss-q11',
      type: 'numeric-entry',
      stem: 'A ship measures the depth of the sea using sonar. The pulse returns 0.80 s after it was sent. The speed of sound in sea water is 1500 m/s. How deep is the sea floor below the ship, in m?',
      tier: 'confident',
      correctAnswer: 600,
      tolerance: 5,
      unit: 'm',
      xpValue: 15,
      hint: 'd = (speed x time) / 2 = (1500 x 0.80) / 2.',
    },
    {
      id: 'ss-q12',
      type: 'multiple-choice',
      stem: 'Why does a flash of lightning seem to arrive before the thunder rumble that made it?',
      tier: 'confident',
      options: [
        'Light is much quicker than sound, so the light reaches you almost at once while the sound takes time to travel.',
        'The thunder is made later than the flash, separately.',
        'The sound is reflected and the light is not, so the path is longer.',
        'Sound only travels through cloud, while light travels through air.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ss-mis-light-sound-same',
      hint: 'Compare the speed of light (about 300 000 000 m/s) with the speed of sound in air.',
    },
    {
      id: 'ss-q13',
      type: 'spot-misconception',
      stem: 'Aisha measures a 0.40 s echo from a quarry wall and calculates the distance using d = speed x time.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "d = 343 x 0.40 = 137 m, so the wall is 137 m away." This is the right approach for an echo.',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "I forgot the sound has gone there and back, so the total path is 2 d. I should use d = (343 x 0.40) / 2 = 68.6 m." This is the right approach for an echo.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ss-mis-no-divide',
    },
    {
      id: 'ss-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the distance to a cliff from an echo time.',
      tier: 'confident',
      items: [
        'Halve the total path to get the one way distance: d = (speed x time) / 2.',
        'State the answer with a unit (m), and sanity check the size.',
        'Write down the speed of sound (343 m/s in air) and the measured echo time in s.',
        'Work out the total path travelled by the sound: total = speed x time.',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 15,
      hint: 'Gather the values, calculate the total path, halve it, then state the answer.',
    },
    {
      id: 'ss-q15',
      type: 'multiple-choice',
      stem: 'A pupil claims that sound and light travel at the same speed because both seem to arrive at once from a nearby clap. Which statement best corrects this idea?',
      tier: 'confident',
      options: [
        'Light travels at about 300 000 000 m/s, around a million times quicker than sound, so over short distances the gap is tiny but the speeds are very different.',
        'Light is only a little quicker, so over short distances the gap is too small to notice.',
        'Sound is actually quicker than light over short distances.',
        'Light and sound are different waves so we cannot compare their speeds at all.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ss-mis-light-sound-same',
      hint: 'Compare the two speeds as numbers, not just by what you can perceive.',
    },
    {
      id: 'ss-q16',
      type: 'numeric-entry',
      stem: 'A Channel ferry pings the seabed with sonar and the echo returns 0.20 s later. Sound travels at 1500 m/s in sea water. How deep is the seabed beneath the ferry, in m?',
      tier: 'challenge',
      correctAnswer: 150,
      tolerance: 2,
      unit: 'm',
      xpValue: 20,
      hint: 'Use d = (speed x time) / 2 with the speed of sound in water.',
    },
    {
      id: 'ss-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the distance to a quarry wall after a 0.30 s echo. The speed of sound in air is 343 m/s.',
      tier: 'challenge',
      steps: [
        'Write the data: speed = 343 m/s, time = 0.30 s, d = ?',
        'Pick the right rule. This is an echo, so the path is there and back: d = (speed x time) / 2.',
        'Work out the total path travelled by the sound: total = 343 x 0.30 = 102.9 m.',
        null,
        'State the answer with a unit: the wall is about 51 m away. Sanity check: 0.30 s is a short echo, so a few tens of metres is sensible.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Halve the total path to get the one way distance: d = 102.9 / 2 = 51.45 m, which rounds to about 51 m.',
      xpValue: 20,
    },
    {
      id: 'ss-q18',
      type: 'spot-misconception',
      stem: 'Tom hears thunder 12 s after the flash. He wants to know the storm distance.',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom says: "Sound travels there and back, so the storm is at (343 x 12) / 2 = 2058 m away, about 2 km." This handles the situation correctly.',
          isMisconception: true,
        },
        {
          text: 'Tom says: "The thunder only travels from the storm to me, not back, so there is no divide by 2. d = 343 x 12 = 4116 m, about 4 km. The 3 s per kilometre rule agrees: 12 / 3 = 4 km." This handles the situation correctly.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'ss-mis-no-divide',
    },
    {
      id: 'ss-q19',
      type: 'numeric-entry',
      stem: 'A railway worker taps a steel rail in a Crewe siding. A pupil with their ear on the rail 1500 m away hears the tap arrive through the steel after 0.30 s. What is the speed of sound in the steel rail, in m/s?',
      tier: 'challenge',
      correctAnswer: 5000,
      tolerance: 50,
      unit: 'm/s',
      xpValue: 20,
      hint: 'speed = distance / time. There is no echo here, the sound travels one way along the rail.',
    },
    {
      id: 'ss-q20',
      type: 'multiple-choice',
      stem: 'Two pupils stand 100 m apart on a Norwich playing field. One pupil bangs a drum sharply at the moment a stopwatch starts. The other pupil stops the stopwatch when the bang arrives. Which reading is most sensible?',
      tier: 'challenge',
      options: [
        '0.29 s (using d / speed of sound = 100 / 343)',
        '0.0003 s (using the speed of light by mistake)',
        '3.4 s (multiplying by 343 instead of dividing)',
        '0 s, because sound from a drum arrives instantly.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'ss-mis-loudness-changes-speed',
      hint: 'Use time = distance / speed with the speed of sound in air. The pupils are 100 m apart. A loud bang travels at the same speed as a quiet one.',
    },
    {
      id: 'ss-q21',
      type: 'multiple-choice',
      stem: 'A pupil in a Sheffield car park whistles sharply. They hear an echo from the wall of the building 0.40 s later. Taking the speed of sound as 343 m/s, which calculation gives the correct distance to the wall?',
      tier: 'challenge',
      options: [
        '343 x 0.40 = 137 m, treating it as one way travel.',
        '(343 x 0.40) / 2 = about 69 m, halving because the sound went there and back.',
        '343 / 0.40 = 858 m, dividing speed by time.',
        '0.40 / 343 = 0.0012 m, dividing time by speed.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ss-mis-no-divide',
      hint: 'Echo means the path is 2 d, so d = (speed x time) / 2.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote "sound travels quickest in air" when ranking media.
    {
      id: 'ss-mis-air-quickest',
      description:
        'Thinking that sound is quickest in air because air feels light and easy to move through, and slower in solids because they feel hard.',
      triggerAnswer: 'air-quickest',
      correction:
        'Sound is quickest where the particles are packed most tightly: solid > liquid > gas. In air it is about 343 m/s, in water about 1500 m/s, in steel about 5000 m/s.',
      reExplanation:
        'Sound travels because one particle pushes the next. In air the particles are spread apart, so each push has further to travel. In a liquid the particles touch their neighbours, and in a solid they are locked in place with strong bonds. The push is passed on almost at once, which is why a tap on a steel rail is heard along the rail before it arrives through the air.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates used d = speed x time for echoes, forgetting to halve the path.
    {
      id: 'ss-mis-no-divide',
      description:
        'Using d = speed x time directly for an echo, ignoring that the sound has travelled there and back.',
      triggerAnswer: 'no-divide-echo',
      correction:
        'An echo means the sound has covered the distance twice, once out and once back. The total path is 2 d, so d = (speed x time) / 2.',
      reExplanation:
        'Picture a shouter facing a wall. The shout covers the distance d, hits the wall, then comes back the same d to the ear. The clock measures both legs, so the time matches 2 d, not d. Forgetting to halve doubles the answer. Quick check: a 0.5 s echo at 343 m/s gives 343 x 0.5 = 171.5 m, but the wall is only 85.75 m away (171.5 / 2).',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, J259/02, candidates wrote that lightning makes no sound and thunder is unrelated.
    {
      id: 'ss-mis-light-sound-same',
      description:
        'Treating light and sound as if they travel at similar speeds, so the flash and bang from the same event should arrive together.',
      triggerAnswer: 'light-sound-same-speed',
      correction:
        'Light travels at about 300 000 000 m/s and sound at about 343 m/s in air. Light is roughly a million times quicker, so the bang lags behind the flash whenever the source is more than a few metres away.',
      reExplanation:
        'A lightning strike makes the flash and the thunder at the same moment in the cloud. The flash reaches your eyes in a few millionths of a second, but the thunder, at 343 m/s, takes 3 s to cover 1 km. So the flash arrives first, and the gap is a clue to the distance. The same effect explains why a fireworks bang follows the burst of colour.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates used a "3 km per second" rule of thumb, missing the factor.
    {
      id: 'ss-mis-3s-rule',
      description:
        'Mis-stating the storm distance rule of thumb, for example saying 1 s of delay equals 1 km or that every second of delay equals 3 km.',
      triggerAnswer: 'three-second-rule-wrong',
      correction:
        'Every 3 s of delay between flash and rumble means the storm is about 1 km away. Divide the gap in seconds by three to get the distance in kilometres.',
      reExplanation:
        'Sound travels at about 343 m/s, so in 3 s it covers around 343 x 3 = 1029 m, near enough 1 km. A 6 s gap therefore means about 2 km, a 9 s gap about 3 km, and so on. The rule lets you estimate the distance in your head without using a calculator, but it is worth checking with d = speed x time when the numbers are awkward.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates confused speed of sound with speed of light when ranking values.
    {
      id: 'ss-mis-speed-units-mix',
      description:
        'Confusing the size of the speed of sound with the speed of light, picking values like 3000 m/s or 300 000 m/s for sound in air.',
      triggerAnswer: 'speed-of-sound-too-large',
      correction:
        'The speed of sound in air is roughly 343 m/s, which is a few hundred metres per second. Light is around a million times quicker, at about 300 000 000 m/s.',
      reExplanation:
        'A handy benchmark: 343 m/s is roughly the speed of a fighter jet. Light, by contrast, could circle the Earth seven times in one second. Pick the value that fits: sound in air is in the hundreds of m/s, sound in water is around a thousand, and sound in steel is a few thousand. Anything in the millions belongs to light, not sound.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, J259/02, candidates wrote that loud sounds travel quicker than quiet sounds.
    {
      id: 'ss-mis-loudness-changes-speed',
      description:
        'Believing that a louder sound travels through the air more rapidly than a quiet one, mixing loudness up with speed.',
      triggerAnswer: 'loudness-changes-speed',
      correction:
        'Loudness depends on the amplitude of the wave, not the speed. A loud bang and a quiet whisper both travel through the same air at about 343 m/s.',
      reExplanation:
        'If loudness changed speed, an orchestra would smear, with loud beats arriving before quiet ones. In reality every note arrives at the same speed, so the music stays in time. Speed of sound depends on the medium (air, water, steel) and its temperature, not on the source. A whisper and a shout across the same room take the same time to reach you.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesSpeedOfSoundZoneNodes = [wavesSpeedOfSound]
