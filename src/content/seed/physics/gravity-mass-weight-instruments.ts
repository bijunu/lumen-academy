import type { SkillNode } from '@/types/content'

const DIGITAL_SCALES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Greengrocer's digital scales</text>

    <!-- Bench -->
    <line x1="60" y1="320" x2="740" y2="320" />

    <!-- Scale base -->
    <rect x="220" y="220" width="360" height="100" fill="currentColor" />
    <!-- Display -->
    <rect x="270" y="240" width="180" height="60" fill="white" stroke="currentColor" />
    <text x="360" y="282" text-anchor="middle" font-size="28" font-weight="700" stroke="none" fill="currentColor">500 g</text>
    <!-- Buttons -->
    <rect x="480" y="248" width="30" height="20" fill="white" stroke="currentColor" />
    <rect x="520" y="248" width="30" height="20" fill="white" stroke="currentColor" />
    <text x="495" y="263" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">tare</text>
    <text x="535" y="263" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">unit</text>

    <!-- Pan with apples -->
    <rect x="280" y="180" width="240" height="14" fill="currentColor" />
    <circle cx="340" cy="160" r="22" fill="currentColor" />
    <circle cx="400" cy="158" r="24" fill="currentColor" />
    <circle cx="460" cy="162" r="20" fill="currentColor" />
    <text x="400" y="120" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">three apples on the pan</text>

    <!-- Caption block -->
    <text x="400" y="365" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">measures MASS</text>
    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">unit: grams (g) or kilograms (kg)</text>
  </g>
`

const NEWTON_METER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">School newton meter (spring scale)</text>

    <!-- Top hook -->
    <line x1="400" y1="70" x2="400" y2="90" />
    <circle cx="400" cy="65" r="10" />

    <!-- Body -->
    <rect x="360" y="90" width="80" height="220" fill="white" stroke="currentColor" />

    <!-- Scale markings inside -->
    <line x1="370" y1="120" x2="395" y2="120" /><text x="345" y="124" text-anchor="end" font-size="11" stroke="none" fill="currentColor">0 N</text>
    <line x1="370" y1="160" x2="395" y2="160" /><text x="345" y="164" text-anchor="end" font-size="11" stroke="none" fill="currentColor">2 N</text>
    <line x1="370" y1="200" x2="395" y2="200" /><text x="345" y="204" text-anchor="end" font-size="11" stroke="none" fill="currentColor">4 N</text>
    <line x1="370" y1="240" x2="395" y2="240" /><text x="345" y="244" text-anchor="end" font-size="11" stroke="none" fill="currentColor">6 N</text>
    <line x1="370" y1="280" x2="395" y2="280" /><text x="345" y="284" text-anchor="end" font-size="11" stroke="none" fill="currentColor">8 N</text>

    <!-- Pointer -->
    <line x1="400" y1="220" x2="430" y2="220" stroke-width="4" />
    <text x="470" y="225" font-size="14" font-weight="700" stroke="none" fill="currentColor">reads 5 N</text>

    <!-- Hook + mass at bottom -->
    <line x1="400" y1="310" x2="400" y2="330" />
    <circle cx="400" cy="335" r="6" />
    <rect x="375" y="345" width="50" height="40" fill="currentColor" />
    <text x="400" y="372" text-anchor="middle" font-size="11" stroke="none" fill="white">0.5 kg</text>

    <!-- Caption -->
    <text x="200" y="365" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">measures WEIGHT</text>
    <text x="200" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">unit: newtons (N)</text>
  </g>
`

const BEAM_BALANCE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Pharmacist's beam balance</text>

    <!-- Stand -->
    <line x1="400" y1="120" x2="400" y2="320" />
    <rect x="340" y="320" width="120" height="20" fill="currentColor" />
    <polygon points="380,120 400,90 420,120" fill="currentColor" stroke="none" />

    <!-- Beam (level) -->
    <line x1="220" y1="140" x2="580" y2="140" />

    <!-- Left pan with sample -->
    <line x1="220" y1="140" x2="220" y2="200" />
    <line x1="180" y1="200" x2="260" y2="200" />
    <rect x="200" y="170" width="40" height="30" fill="currentColor" />
    <text x="220" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">sample</text>

    <!-- Right pan with reference masses -->
    <line x1="580" y1="140" x2="580" y2="200" />
    <line x1="540" y1="200" x2="620" y2="200" />
    <rect x="560" y="178" width="18" height="22" fill="currentColor" />
    <rect x="585" y="184" width="14" height="16" fill="currentColor" />
    <rect x="605" y="190" width="10" height="10" fill="currentColor" />
    <text x="580" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">10 g + 5 g + 2 g</text>

    <!-- Caption block -->
    <text x="400" y="265" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">compares MASSES on the two pans</text>
    <text x="400" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">when level, sample mass = 17 g</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">gravity acts on both pans equally, so the reading is the same on Earth or the Moon</text>
  </g>
`

export const gravityMassWeightInstruments: SkillNode = {
  id: 'physics-gravity-mass-weight-instruments',
  title: 'Mass, Weight and Measuring Instruments',
  description:
    'Two different quantities, two different families of instrument. Kitchen scales, digital balances and beam balances measure MASS in grams or kilograms. Newton meters (spring scales) measure WEIGHT in newtons. A spring scale stretches under the local pull of gravity, so its reading depends on g; take it to the Moon and it reads about a sixth as much. A beam balance compares the sample against a reference set of masses, and because gravity acts on both pans equally, the level point is the same on Earth, the Moon or any other world. Bathroom scales technically respond to weight but are calibrated to display kilograms, so on the Moon they would under-read your mass.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'challenge',
  prerequisites: ['physics-gravity-weight-calculation'],
  curriculum: {
    ks3Objective:
      'Gravity force, weight = mass x gravitational field strength (g), on Earth g = 10 N/kg, different on other planets and stars; the distinction between mass and weight and the instruments used to measure each.',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; units of mass (kg) and weight (N); use of newtonmeters and balances (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Mass and weight; units and measurement instruments (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; mass, weight and their measurement (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gmwi-scene-digital-scales',
      title: 'Digital Scales at the Greengrocer',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what a digital balance is doing when the display says 500 g.',
      data: {
        viewBox: '0 0 800 400',
        svg: DIGITAL_SCALES_SVG,
        hotspots: [
          {
            id: 'gmwi-ds-display',
            x: 45,
            y: 70,
            label: 'Display: 500 g',
            description:
              'The screen reads 500 g (half a kilogram). g here is the unit symbol for grams, not gravitational field strength.',
          },
          {
            id: 'gmwi-ds-pan',
            x: 50,
            y: 40,
            label: 'Pan with three apples',
            description:
              'Inside the base, a load cell senses how hard the pan is pushed down. The display shows the matching mass in grams.',
          },
          {
            id: 'gmwi-ds-quantity',
            x: 50,
            y: 90,
            label: 'Measures MASS',
            description:
              'Digital scales, kitchen scales and lab balances all report mass. The unit on the screen is g or kg, never newtons.',
          },
          {
            id: 'gmwi-ds-units',
            x: 50,
            y: 96,
            label: 'Units: g or kg',
            description:
              '500 g is 0.5 kg. Divide by 1000 to go from grams to kilograms. The shop and the science lab use the same instrument family.',
          },
        ],
      },
    },
    {
      id: 'gmwi-scene-newton-meter',
      title: 'School Newton Meter (Spring Scale)',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a spring scale measures the weight of a 0.5 kg mass on Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: NEWTON_METER_SVG,
        hotspots: [
          {
            id: 'gmwi-nm-hook',
            x: 50,
            y: 18,
            label: 'Top hook on a stand',
            description:
              'The newton meter hangs from a clamp stand. The spring inside is stretched by whatever load is on the bottom hook.',
          },
          {
            id: 'gmwi-nm-pointer',
            x: 55,
            y: 56,
            label: 'Pointer reads 5 N',
            description:
              'The scale is marked in newtons. A 0.5 kg mass on Earth has weight W = m x g = 0.5 x 10 = 5 N, and the pointer settles at 5 N.',
          },
          {
            id: 'gmwi-nm-load',
            x: 50,
            y: 88,
            label: 'Load: 0.5 kg mass',
            description:
              'The block has a mass of 0.5 kg. Its mass is the same whether the spring is on Earth or on the Moon.',
          },
          {
            id: 'gmwi-nm-quantity',
            x: 25,
            y: 92,
            label: 'Measures WEIGHT',
            description:
              'A spring scale measures the local pull of gravity on the load. Take it to the Moon and the same 0.5 kg block would only stretch the spring to about 0.8 N.',
          },
        ],
      },
    },
    {
      id: 'gmwi-scene-beam-balance',
      title: 'Pharmacist\'s Beam Balance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a two-pan balance compares an unknown sample against known reference masses.',
      data: {
        viewBox: '0 0 800 400',
        svg: BEAM_BALANCE_SVG,
        hotspots: [
          {
            id: 'gmwi-bb-pivot',
            x: 50,
            y: 30,
            label: 'Pivot at the centre',
            description:
              'A rigid beam sits on a sharp pivot. When the beam is level, the turning effects on the two sides are equal.',
          },
          {
            id: 'gmwi-bb-sample',
            x: 28,
            y: 56,
            label: 'Sample on the left pan',
            description:
              'The pharmacist is weighing out a small sample of powder. Its mass is unknown until the beam balances.',
          },
          {
            id: 'gmwi-bb-references',
            x: 72,
            y: 56,
            label: 'Reference masses on the right',
            description:
              'A 10 g, a 5 g and a 2 g brass mass have been added on the right. The beam is level, so the sample mass is 10 + 5 + 2 = 17 g.',
          },
          {
            id: 'gmwi-bb-why-universal',
            x: 50,
            y: 92,
            label: 'Same reading anywhere',
            description:
              'Gravity pulls on both pans with the same g. If g halves, both sides halve together, so the beam stays level at the same point. The reading is 17 g on Earth and 17 g on the Moon.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gmwi-worked-1',
      title: 'Greengrocer scales read 500 g: find the weight on Earth',
      steps: [
        {
          explanation:
            'Read what the instrument is telling you. Digital scales show MASS, so 500 g is a mass, not a weight. The screen never reads in newtons.',
        },
        {
          explanation:
            'Convert to kilograms before any W = m x g calculation. Mass in kilograms = 500 / 1000.',
          maths: 'm = 0.5 kg',
        },
        {
          explanation: 'Write down the rule for weight.',
          maths: 'W = m x g',
        },
        {
          explanation: 'Substitute the kilograms and Earth\'s g = 10 N/kg.',
          maths: 'W = 0.5 x 10',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 5 N',
        },
        {
          explanation:
            'State the answer with both quantities. The apples have a mass of 0.5 kg and a weight of 5 N on Earth. A school newton meter hung under them would settle on 5 N.',
        },
      ],
    },
    {
      id: 'gmwi-worked-2',
      title: 'A newton meter reads 8 N on Earth: find the mass on the load hook',
      steps: [
        {
          explanation:
            'Read what the instrument is telling you. A newton meter shows WEIGHT, so 8 N is the weight of the load on Earth, where g = 10 N/kg.',
        },
        {
          explanation: 'Write the rule and rearrange to make mass the subject.',
          maths: 'W = m x g, so m = W / g',
        },
        {
          explanation: 'Substitute the weight in newtons and g in N/kg.',
          maths: 'm = 8 / 10',
        },
        {
          explanation: 'Evaluate.',
          maths: 'm = 0.8 kg',
        },
        {
          explanation:
            'State the answer. The block has a mass of 0.8 kg. A pharmacist\'s beam balance would read 800 g for the same block. Note: the beam balance would still read 800 g on the Moon, but the newton meter on the Moon would only read about 1.3 N.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gmwi-q1',
      type: 'multiple-choice',
      stem: 'A pupil puts a pencil case on the kitchen scales at home and reads "320 g". What quantity have the scales measured?',
      tier: 'core',
      options: [
        'The mass of the pencil case, in grams.',
        'The weight of the pencil case, in grams.',
        'The volume of the pencil case, in grams.',
        'The force of gravity on the pencil case, in grams.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gmwi-mis-confuse-mass-weight',
      hint: 'Grams are a unit of mass. Weight is measured in newtons.',
    },
    {
      id: 'gmwi-q2',
      type: 'multiple-choice',
      stem: 'A school newton meter is used to hang a 0.5 kg block in a physics lesson. What does the dial of a newton meter measure?',
      tier: 'core',
      options: [
        'The volume of the block, in newtons.',
        'The mass of the block, in newtons.',
        'The weight of the block, in newtons.',
        'The density of the block, in newtons.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A newton meter contains a spring that is stretched by the pull of gravity on the load.',
    },
    {
      id: 'gmwi-q3',
      type: 'numeric-entry',
      stem: 'A 0.5 kg block hangs from a newton meter on Earth, where g = 10 N/kg. What does the newton meter read, in N?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'N',
      xpValue: 10,
      hint: 'Use W = m x g with m = 0.5 kg and g = 10 N/kg.',
    },
    {
      id: 'gmwi-q4',
      type: 'multiple-choice',
      stem: 'Which unit pairs each instrument with what its display normally shows?',
      tier: 'core',
      options: [
        'Kitchen scales: newtons. Newton meter: kilograms.',
        'Kitchen scales: kilograms. Newton meter: newtons.',
        'Kitchen scales: newtons. Beam balance: newtons.',
        'Newton meter: kilograms. Beam balance: kilograms.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gmwi-mis-confuse-mass-weight',
      hint: 'Scales and balances live in the mass family (kg, g). Newton meters live in the force family (N).',
    },
    {
      id: 'gmwi-q5',
      type: 'multiple-choice',
      stem: 'A pupil writes that the weight of a book is "0.4 kg". What is the fix?',
      tier: 'core',
      options: [
        'Leave it. kg is a perfectly good unit for weight.',
        'Change the number to 40, since weight is always 100 times mass.',
        'Change the unit to grams, because weight is always in grams.',
        'Change the unit to newtons. Weight is a force, so it lives in newtons (N), not kilograms.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gmwi-mis-weight-unit-kg',
      hint: 'Weight is a force. Force is measured in newtons.',
    },
    {
      id: 'gmwi-q6',
      type: 'numeric-entry',
      stem: 'A bag of carrots reads 250 g on the greengrocer\'s digital scales. Convert this to kilograms.',
      tier: 'core',
      correctAnswer: 0.25,
      unit: 'kg',
      xpValue: 10,
      misconceptionId: 'gmwi-mis-forget-grams-to-kg',
      hint: 'Divide grams by 1000 to get kilograms.',
    },
    {
      id: 'gmwi-q7',
      type: 'multiple-choice',
      stem: 'Apollo astronauts took everyday objects to the Moon. Which quantity stays the same on Earth and on the Moon?',
      tier: 'core',
      options: [
        'Weight, because the same object always has the same weight.',
        'Mass, because mass is the amount of matter in the object and does not depend on the local pull of gravity.',
        'Both mass and weight change in the same way.',
        'Neither stays the same.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Mass counts matter. Weight is a force that depends on g, and g is smaller on the Moon.',
    },
    {
      id: 'gmwi-q8',
      type: 'multiple-choice',
      stem: 'A pharmacist takes the same beam balance and the same 17 g powder sample from a London lab to a Moon base. What does the beam balance now read?',
      tier: 'confident',
      options: [
        '17 g, because both pans feel the smaller Moon gravity equally, so the balance point does not move.',
        '2.8 g, because every reading shrinks by the ratio of Moon gravity to Earth gravity.',
        '0 g, because beam balances do not work without Earth\'s gravity.',
        '102 g, because the lower gravity makes the sample feel six times heavier.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gmwi-mis-balance-shows-weight',
      hint: 'A beam balance compares masses. Gravity pulls equally on both pans, so a smaller g cancels out.',
    },
    {
      id: 'gmwi-q9',
      type: 'numeric-entry',
      stem: 'A school newton meter reads 5 N when a steel block hangs from its hook in a Bristol lab (g = 10 N/kg). What is the mass of the block, in kg?',
      tier: 'confident',
      correctAnswer: 0.5,
      unit: 'kg',
      xpValue: 15,
      hint: 'Rearrange W = m x g to m = W / g. Substitute W = 5 and g = 10.',
    },
    {
      id: 'gmwi-q10',
      type: 'multiple-choice',
      stem: 'A pupil reads online that "bathroom scales are calibrated to show mass in kilograms, even though they really respond to weight". Which sentence best explains what this means?',
      tier: 'confident',
      options: [
        'Bathroom scales are wrong; you should always use a beam balance at home.',
        'Bathroom scales secretly contain a beam, like a chemist\'s balance.',
        'A spring or strain gauge inside the scales senses your weight, and the screen divides by Earth\'s g = 10 N/kg to display the matching mass.',
        'Bathroom scales pick up your mass directly, the same way a beam balance does.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gmwi-mis-bathroom-scale-moon',
      hint: 'A spring inside the scales tells the scales your weight; the display does an automatic conversion using a fixed g.',
    },
    {
      id: 'gmwi-q11',
      type: 'multiple-choice',
      stem: 'A pupil wants to know the weight of a school textbook for a physics report. Which instrument should they reach for?',
      tier: 'confident',
      options: [
        'A pharmacist\'s beam balance, because both pans are calibrated in newtons.',
        'A digital kitchen scale, then read the number in newtons.',
        'A ruler and a stopwatch, because weight is distance per second.',
        'A newton meter (spring scale), because its dial reads directly in newtons.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gmwi-mis-newton-meter-vs-scales',
      hint: 'Weight is a force, so the dial should be marked in newtons.',
    },
    {
      id: 'gmwi-q12',
      type: 'numeric-entry',
      stem: 'A greengrocer\'s digital scales show 500 g for a bag of apples. Use g = 10 N/kg to work out the weight of the apples on Earth, in N.',
      tier: 'confident',
      correctAnswer: 5,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'gmwi-mis-forget-grams-to-kg',
      hint: 'Convert 500 g to 0.5 kg first, then use W = m x g.',
    },
    {
      id: 'gmwi-q13',
      type: 'spot-misconception',
      stem: 'Olu writes, "A beam balance, like the pharmacist uses, measures the weight of the sample because both pans feel gravity."',
      tier: 'confident',
      statements: [
        {
          text: 'Olu is right. A beam balance measures weight; that is why both pans feel gravity.',
          isMisconception: true,
        },
        {
          text: 'Olu is not right. A beam balance compares the sample mass against a known reference mass. Gravity pulls on both pans equally, so the value it gives is a mass (in g or kg), not a weight in newtons.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gmwi-mis-balance-shows-weight',
    },
    {
      id: 'gmwi-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "The newton meter would read the same on the Moon as on Earth, because the block is still the same block."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The newton meter reading depends only on what is on the hook, not on where you are.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. A newton meter measures weight, which depends on the local g. On the Moon (g is about 1.6 N/kg), the same block stretches the spring less, so the dial reads about a sixth of the Earth value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gmwi-mis-spring-same-moon',
    },
    {
      id: 'gmwi-q15',
      type: 'drag-order',
      stem: 'Order the steps for finding the WEIGHT of a bag of flour that has been put on greengrocer\'s digital scales.',
      tier: 'confident',
      items: [
        'Use W = m x g with g = 10 N/kg to work out the weight in newtons.',
        'Read the mass on the display, in grams or kilograms.',
        'Convert the mass to kilograms if the screen shows grams (divide by 1000).',
        'State the answer in newtons, and remember that the scale itself never reads weight directly.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      misconceptionId: 'gmwi-mis-newton-meter-vs-scales',
      hint: 'Scales give a mass reading. Convert to kilograms, then apply W = m x g.',
    },
    {
      id: 'gmwi-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil works out what a 0.5 kg block would read on a newton meter on the Moon, where g is about 1.6 N/kg.',
      tier: 'challenge',
      steps: [
        'List the quantities: m = 0.5 kg, g (Moon) = 1.6 N/kg.',
        'Pick the rule: a newton meter shows weight, so use W = m x g.',
        'Substitute the Moon value of g, not the Earth value: W = 0.5 x 1.6.',
        null,
        'State the answer: the newton meter on the Moon would read 0.8 N for the same block that reads 5 N on Earth.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Evaluate: W = 0.5 x 1.6 = 0.8 N.',
      xpValue: 20,
      misconceptionId: 'gmwi-mis-spring-same-moon',
    },
    {
      id: 'gmwi-q17',
      type: 'numeric-entry',
      stem: 'A British astronaut on Mars (g is about 3.7 N/kg) hangs a piece of kit on a newton meter. The dial reads 7.4 N. What is the mass of the kit, in kg?',
      tier: 'challenge',
      correctAnswer: 2,
      unit: 'kg',
      xpValue: 20,
      hint: 'Rearrange W = m x g to m = W / g. Use W = 7.4 N and g = 3.7 N/kg.',
    },
    {
      id: 'gmwi-q18',
      type: 'multiple-choice',
      stem: 'A pupil takes a sealed 2 kg sandbag from a Cardiff classroom to a Moon base. They put it on bathroom scales (calibrated for Earth) and hang it from a newton meter. What pair of readings would the instruments show on the Moon?',
      tier: 'challenge',
      options: [
        'Bathroom scales: about 0.32 kg (under-reads). Newton meter: about 3.2 N (about a sixth of the Earth weight).',
        'Bathroom scales: 2 kg. Newton meter: 20 N. Both are the same as on Earth.',
        'Bathroom scales: 2 kg. Newton meter: 0 N, because the spring will not stretch.',
        'Bathroom scales: 12 kg, because objects feel heavier on the Moon. Newton meter: 120 N.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'gmwi-mis-bathroom-scale-moon',
      hint: 'Both instruments respond to weight. On the Moon, g is about a sixth of Earth\'s, so both reduce by the same ratio.',
    },
    {
      id: 'gmwi-q19',
      type: 'multiple-choice',
      stem: 'Which instrument would give the SAME numerical reading for a 50 g lab sample on Earth and on the Moon?',
      tier: 'challenge',
      options: [
        'A pharmacist\'s beam balance, because it compares the sample against reference masses and gravity acts equally on both pans.',
        'A school newton meter, because it has a spring inside.',
        'A bathroom scale, because it is calibrated to display mass.',
        'A kitchen spring scale, because grams are gravity-independent.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'gmwi-mis-balance-shows-weight',
      hint: 'Anything that uses a spring depends on g. A two-pan balance cancels g out.',
    },
    {
      id: 'gmwi-q20',
      type: 'numeric-entry',
      stem: 'A box of textbooks reads 1500 g on the school digital balance. Use g = 10 N/kg to work out the weight of the box on Earth, in N.',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'N',
      xpValue: 20,
      misconceptionId: 'gmwi-mis-forget-grams-to-kg',
      hint: 'Convert 1500 g to 1.5 kg first, then use W = m x g.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, where many candidates wrote weight in kilograms or used "weight" and "mass" interchangeably on labelled diagrams of scales.
    {
      id: 'gmwi-mis-confuse-mass-weight',
      description:
        'Treating mass and weight as the same quantity, so reading a kitchen-scale value in grams as if it were a weight.',
      triggerAnswer: 'confuse-mass-weight',
      correction:
        'Mass and weight are different. Mass is in g or kg and stays the same anywhere. Weight is a force, in newtons, and depends on g.',
      reExplanation:
        'A 500 g bag of apples has a mass of 500 g (or 0.5 kg). On Earth its weight is W = 0.5 x 10 = 5 N. On the Moon the mass is still 500 g, but the weight drops to about 0.8 N. Kitchen scales report MASS; a newton meter reports WEIGHT. The unit on the display tells you which quantity is being measured.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates explained a beam balance as "measuring weight" rather than comparing masses, missing why the reading is unchanged on the Moon.
    {
      id: 'gmwi-mis-balance-shows-weight',
      description:
        'Believing a two-pan beam balance measures weight, so its reading would change on the Moon the same way a spring scale\'s does.',
      triggerAnswer: 'balance-shows-weight',
      correction:
        'A beam balance compares masses on its two pans. Gravity acts equally on both, so a smaller g cancels out. The reading is the same on Earth or the Moon.',
      reExplanation:
        'The left pan holds the sample; the right pan holds known reference masses. The beam levels when turning effects on each side are equal: m1 x g = m2 x g, so m1 = m2. The g cancels. Move to the Moon and g shrinks on both pans together, so the balance point stays at the same reference masses. A spring scale has no second pan and reads less.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that a newton meter would read the same on the Moon because "the object is the same", missing that a spring scale reading depends on g.
    {
      id: 'gmwi-mis-spring-same-moon',
      description:
        'Thinking a newton meter (spring scale) reads the same on the Moon as on Earth because the load is the same object.',
      triggerAnswer: 'spring-same-moon',
      correction:
        'A spring scale measures weight, not mass. Weight is m x g, so a smaller Moon g gives a smaller reading for the same load.',
      reExplanation:
        'A spring inside a newton meter stretches under the pull of gravity on the load. On Earth, a 0.5 kg block stretches the spring to 5 N. On the Moon g is about 1.6 N/kg, so the same block only pulls down with 0.8 N. Same block, same mass, but the dial reads less because gravity is weaker.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates claimed bathroom scales would still read true "mass in kilograms" on the Moon, missing the Earth-g calibration step.
    {
      id: 'gmwi-mis-bathroom-scale-moon',
      description:
        'Believing bathroom scales would still read your true mass on the Moon, because they "measure mass in kg".',
      triggerAnswer: 'bathroom-scale-moon',
      correction:
        'Bathroom scales sense weight via a spring or strain gauge, then divide by Earth\'s g to display kilograms. On the Moon they under-read because they still assume Earth g.',
      reExplanation:
        'A bathroom scale has a stiff spring or load cell that responds to weight in newtons. To make the display friendly, the readout software divides by g = 10 N/kg to show kg. On the Moon, your weight drops to a sixth, but the software still divides by 10. So a 60 kg person on the Moon would see about 10 kg, even though their real mass is unchanged.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates used 500 (in grams) directly in W = m x g rather than converting to kilograms, getting an answer 1000 times too large.
    {
      id: 'gmwi-mis-forget-grams-to-kg',
      description:
        'Using a mass given in grams directly in W = m x g without converting to kilograms first.',
      triggerAnswer: 'forget-grams-to-kg',
      correction:
        'W = m x g needs mass in kilograms. Divide grams by 1000 first, then multiply by g in N/kg.',
      reExplanation:
        'A 500 g bag of apples is 0.5 kg, not 500 kg. Use 0.5 in W = m x g: W = 0.5 x 10 = 5 N. Skipping the conversion gives W = 500 x 10 = 5000 N, which would be the weight of half a tonne of apples. The unit on the digital scale is the cue: g is grams; divide by 1000 first.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates were marked down for stating weight in kilograms even when the number was right, conflating the force unit with the mass unit.
    {
      id: 'gmwi-mis-weight-unit-kg',
      description:
        'Writing the weight of an object in kilograms, missing that weight is a force and lives in newtons.',
      triggerAnswer: 'weight-unit-kg',
      correction:
        'Weight is a force, so its unit is newtons (N), not kilograms. Use kg for mass, N for weight, and N/kg for g.',
      reExplanation:
        'A 0.4 kg book has a mass of 0.4 kg and a weight of W = 0.4 x 10 = 4 N on Earth. Writing "the weight is 0.4 kg" mixes the two ideas: the number is the mass and the unit is the mass unit. Force has its own unit, the newton, named after Isaac Newton. Mass: kg. Weight: N. g: N/kg.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1F, candidates selected a beam balance to measure weight or a newton meter to measure mass, picking instruments by name rather than by what each one actually responds to.
    {
      id: 'gmwi-mis-newton-meter-vs-scales',
      description:
        'Choosing the wrong instrument for the job: reaching for a beam balance when asked for a weight, or for a newton meter when asked for a mass.',
      triggerAnswer: 'newton-meter-vs-scales',
      correction:
        'For mass, use a balance or digital scale (kg or g). For weight, use a newton meter (spring scale) that reads in newtons.',
      reExplanation:
        'Two families of instrument. Family one: kitchen scales, digital balances, beam balances. They report MASS in g or kg. Family two: newton meter, spring scale, force meter. They report WEIGHT in N. Read the question, then pick by quantity, not by what the instrument is called. To go from one to the other, use W = m x g.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityMassWeightInstrumentsZoneNodes = [gravityMassWeightInstruments]
