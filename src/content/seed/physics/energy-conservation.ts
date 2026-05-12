import type { SkillNode } from '@/types/content'

const PENDULUM_SWING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A pendulum clock in Greenwich: same total energy at top and bottom</text>

    <!-- Pivot -->
    <line x1="200" y1="80" x2="600" y2="80" />
    <circle cx="400" cy="80" r="6" fill="currentColor" />

    <!-- Left swing (top of arc) -->
    <line x1="400" y1="80" x2="260" y2="240" stroke-dasharray="5,5" />
    <circle cx="260" cy="240" r="18" fill="currentColor" />
    <text x="180" y="200" font-size="13" font-weight="700" stroke="none" fill="currentColor">Top of swing</text>
    <text x="120" y="220" font-size="12" stroke="none" fill="currentColor">gravitational store: full</text>
    <text x="140" y="240" font-size="12" stroke="none" fill="currentColor">kinetic store: empty</text>
    <text x="150" y="260" font-size="12" stroke="none" fill="currentColor">total energy: 4 J</text>

    <!-- Bottom of swing -->
    <line x1="400" y1="80" x2="400" y2="280" stroke-dasharray="5,5" />
    <circle cx="400" cy="280" r="18" fill="currentColor" />
    <text x="420" y="320" font-size="13" font-weight="700" stroke="none" fill="currentColor">Bottom of swing</text>
    <text x="420" y="340" font-size="12" stroke="none" fill="currentColor">gravitational store: empty</text>
    <text x="420" y="360" font-size="12" stroke="none" fill="currentColor">kinetic store: full</text>
    <text x="420" y="380" font-size="12" stroke="none" fill="currentColor">total energy: 4 J</text>

    <!-- Right swing -->
    <line x1="400" y1="80" x2="540" y2="240" stroke-dasharray="5,5" />
    <circle cx="540" cy="240" r="18" fill="currentColor" />
    <text x="560" y="200" font-size="13" font-weight="700" stroke="none" fill="currentColor">Top again</text>
    <text x="560" y="220" font-size="12" stroke="none" fill="currentColor">gravitational store: full</text>
    <text x="560" y="240" font-size="12" stroke="none" fill="currentColor">kinetic store: empty</text>
    <text x="560" y="260" font-size="12" stroke="none" fill="currentColor">total energy: 4 J</text>
  </g>
`

const KETTLE_BAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A Sheffield kitchen kettle: 240 kJ in, 240 kJ out</text>

    <!-- Input bar -->
    <text x="160" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Energy in (before)</text>
    <rect x="60" y="100" width="200" height="40" fill="currentColor" />
    <text x="160" y="160" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Chemical store of the mains:</text>
    <text x="160" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">240 kJ</text>

    <!-- Arrow -->
    <line x1="280" y1="120" x2="360" y2="120" />
    <polygon points="352,112 368,120 352,128" fill="currentColor" stroke="none" />
    <text x="320" y="105" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">transfer</text>

    <!-- Output bar split -->
    <text x="560" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Energy out (after)</text>
    <rect x="380" y="100" width="170" height="40" fill="currentColor" />
    <rect x="550" y="100" width="20" height="40" fill="currentColor" fill-opacity="0.4" stroke="currentColor" />
    <text x="465" y="125" text-anchor="middle" font-size="12" stroke="none" fill="white" font-weight="700">useful 230 kJ</text>
    <text x="560" y="125" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">10</text>
    <text x="465" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Thermal store of water: 230 kJ</text>
    <text x="565" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Thermal store of</text>
    <text x="565" y="208" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">surroundings: 10 kJ</text>

    <text x="400" y="280" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total before = Total after</text>
    <text x="400" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">240 kJ in = 230 kJ useful + 10 kJ wasted = 240 kJ out</text>
    <text x="400" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">No energy disappears. The "wasted" 10 kJ is in the air and the kettle body.</text>
  </g>
`

const CLOSED_SYSTEM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Closed system: draw the box wide enough</text>

    <!-- Narrow box: just the ball -->
    <rect x="60" y="80" width="280" height="240" stroke-dasharray="6,6" />
    <text x="200" y="105" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Narrow box: just the ball</text>
    <circle cx="200" cy="180" r="20" fill="currentColor" />
    <line x1="200" y1="210" x2="200" y2="280" />
    <polygon points="192,272 200,290 208,272" fill="currentColor" stroke="none" />
    <text x="200" y="310" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Bounces lower each time.</text>
    <text x="200" y="328" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Looks like energy is lost.</text>

    <!-- Wide box: ball + court + air -->
    <rect x="430" y="80" width="320" height="240" />
    <text x="590" y="105" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Wide box: ball + court + air</text>
    <circle cx="590" cy="170" r="20" fill="currentColor" />
    <line x1="540" y1="220" x2="640" y2="220" />
    <text x="590" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">tennis court surface</text>
    <text x="540" y="265" font-size="11" stroke="none" fill="currentColor">air</text>
    <text x="640" y="265" font-size="11" stroke="none" fill="currentColor">air</text>
    <text x="590" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Total energy stays the same.</text>
    <text x="590" y="308" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">"Lost" energy now sits in</text>
    <text x="590" y="326" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal stores of air and court.</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A closed system has no energy going in or out across its boundary.</text>
  </g>
`

export const energyConservation: SkillNode = {
  id: 'physics-energy-conservation',
  title: 'Conservation of Energy',
  description:
    'Energy is never created or destroyed. In a closed system, the total energy stored before a transfer is the same as the total energy stored after. When energy seems to "disappear", it has moved to a store you might have missed, often the thermal store of the surroundings. A pendulum at the top of its swing has the same total energy as at the bottom; a kettle that puts 240 kJ in transfers 240 kJ out, even if 10 kJ ends up warming the kitchen. Draw the system boundary wide enough and the total always balances.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-transfers'],
  curriculum: {
    ks3Objective:
      'Conservation of energy in a closed system; the total energy stored before and after a transfer is the same.',
    awardingBodies: {
      aqa: '4.1.2.1 Energy transfers in a system; conservation of energy principle (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.7-4.8 Conservation of energy in a closed system (GCSE Physics 1PH0)',
      ocr: 'P1.2 Conservation of energy in a closed system; total energy before equals total energy after (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pec-scene-pendulum',
      title: 'A Pendulum Clock in Greenwich',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a pendulum bob through a swing. The total energy is the same at every point.',
      data: {
        viewBox: '0 0 800 400',
        svg: PENDULUM_SWING_SVG,
        hotspots: [
          {
            id: 'pec-pendulum-top-left',
            x: 25,
            y: 60,
            label: 'Top of swing: gravitational store full',
            description:
              'At the top of its swing, the bob is high and not moving. The gravitational store is full, holding all 4 J. The kinetic store is empty because v = 0 m/s for an instant.',
          },
          {
            id: 'pec-pendulum-bottom',
            x: 50,
            y: 75,
            label: 'Bottom of swing: kinetic store full',
            description:
              'At the lowest point, the bob is moving sharply through the bottom. The gravitational store is empty (lowest height) and the kinetic store now holds all 4 J. The total is still 4 J.',
          },
          {
            id: 'pec-pendulum-top-right',
            x: 75,
            y: 60,
            label: 'Top again: back to gravitational',
            description:
              'The bob swings up the other side and pauses for an instant at the top right. The 4 J is back in the gravitational store. Energy has been swapped between two stores, not created and not destroyed.',
          },
          {
            id: 'pec-pendulum-rule',
            x: 50,
            y: 15,
            label: 'Rule: total energy stays the same',
            description:
              'Total energy before = total energy after. In an ideal pendulum the same 4 J moves between gravitational and kinetic stores forever. A real pendulum slowly loses energy to thermal stores of the air and pivot, but the total still balances if you count those.',
          },
        ],
      },
    },
    {
      id: 'pec-scene-kettle',
      title: 'A Sheffield Kettle: 240 kJ In, 240 kJ Out',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the energy balance of a kettle that takes 240 kJ from the mains and warms a litre of water.',
      data: {
        viewBox: '0 0 800 400',
        svg: KETTLE_BAR_SVG,
        hotspots: [
          {
            id: 'pec-kettle-in',
            x: 20,
            y: 30,
            label: '240 kJ in from the chemical store',
            description:
              'The kettle draws 240 kJ from the chemical store of the mains supply (gas turbines, coal, wind). This is the total energy entering the system during one boil.',
          },
          {
            id: 'pec-kettle-useful',
            x: 58,
            y: 35,
            label: '230 kJ useful: thermal store of water',
            description:
              'Most of the 240 kJ ends up in the thermal store of the water. That is the useful output, the bit that does the job of making your cuppa.',
          },
          {
            id: 'pec-kettle-wasted',
            x: 72,
            y: 50,
            label: '10 kJ wasted: thermal store of surroundings',
            description:
              'The remaining 10 kJ warms the kettle body and the air in the kitchen. We call this "wasted" because it does not boil the water, but it is not lost. It still sits in a thermal store.',
          },
          {
            id: 'pec-kettle-balance',
            x: 50,
            y: 75,
            label: 'Total in = total out',
            description:
              '240 kJ in equals 230 kJ useful plus 10 kJ wasted, which adds to 240 kJ out. No energy disappears. The conservation of energy is the bookkeeping rule that always balances.',
          },
        ],
      },
    },
    {
      id: 'pec-scene-closed-system',
      title: 'Drawing the Closed System Boundary',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare two boundaries around a bouncing ball at Wimbledon. The wider boundary is the closed system.',
      data: {
        viewBox: '0 0 800 400',
        svg: CLOSED_SYSTEM_SVG,
        hotspots: [
          {
            id: 'pec-closed-narrow',
            x: 25,
            y: 50,
            label: 'Narrow box: just the ball',
            description:
              'If your system contains only the ball, energy seems to leave it on each bounce. The ball climbs less each time. Inside this narrow boundary, conservation appears to fail.',
          },
          {
            id: 'pec-closed-wide',
            x: 70,
            y: 50,
            label: 'Wide box: ball, court, and air',
            description:
              'Widen the boundary to include the tennis court and the surrounding air. Now the energy that left the ball is inside the system, sitting in the thermal stores of the air and court. Total energy is constant.',
          },
          {
            id: 'pec-closed-flow',
            x: 70,
            y: 85,
            label: '"Lost" energy went somewhere',
            description:
              'On each bounce, a small amount of kinetic store transfers to thermal stores of the air and court (and a tiny bit of sound). The energy did not vanish, it changed which store it sits in.',
          },
          {
            id: 'pec-closed-rule',
            x: 50,
            y: 95,
            label: 'Closed system: no flow across the boundary',
            description:
              'A closed system has nothing crossing its boundary. Total energy in equals total energy out, which equals zero. So the total energy inside stays the same. Draw the box wide enough and conservation always holds.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pec-worked-1',
      title: 'A pendulum bob: 4 J at the top, what at the bottom?',
      steps: [
        {
          explanation:
            'Set out the situation. A pendulum bob is held at the top of its swing with 4 J in its gravitational store and 0 J of kinetic store. We want the total energy at the bottom of the swing, where the bob is moving sharply through the lowest point.',
        },
        {
          explanation:
            'State the principle. The conservation of energy says the total energy stored before a transfer equals the total energy stored after, in a closed system.',
          maths: 'total energy before = total energy after',
        },
        {
          explanation:
            'Add the stores at the top of the swing to get the total energy before.',
          maths: 'E_before = 4 J (gravitational) + 0 J (kinetic) = 4 J',
        },
        {
          explanation:
            'Apply conservation. The total at the bottom must equal the total at the top, so the total at the bottom is also 4 J.',
          maths: 'E_after = 4 J',
        },
        {
          explanation:
            'Split that total between the stores at the bottom. At the lowest point the bob is at its lowest height, so the gravitational store is 0 J. The 4 J must therefore sit in the kinetic store.',
          maths: 'kinetic store at bottom = 4 J - 0 J = 4 J',
        },
        {
          explanation:
            'State the answer. At the bottom of the swing, the kinetic store holds 4 J, and the total energy of the bob is still 4 J. Energy has been swapped between stores; the total has not changed.',
        },
      ],
    },
    {
      id: 'pec-worked-2',
      title: 'A kettle in Sheffield: 240 kJ in, 10 kJ wasted, how much useful?',
      steps: [
        {
          explanation:
            'Set out the situation. A kettle draws 240 kJ from the chemical store of the mains during one boil. 10 kJ ends up in the thermal stores of the kettle body and the kitchen air. We want the useful energy delivered to the thermal store of the water.',
        },
        {
          explanation:
            'State the principle. Conservation of energy says the total energy in equals the total energy out, when we count every store.',
          maths: 'E_in = E_useful + E_wasted',
        },
        {
          explanation:
            'Rearrange for the useful energy. Subtract the wasted energy from both sides.',
          maths: 'E_useful = E_in - E_wasted',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'E_useful = 240 kJ - 10 kJ',
        },
        {
          explanation: 'Evaluate.',
          maths: 'E_useful = 230 kJ',
        },
        {
          explanation:
            'State the answer and check. 230 kJ is delivered to the thermal store of the water, and 10 kJ ends up in the thermal stores of the surroundings. 230 + 10 = 240, which matches the 240 kJ that went in. Total before equals total after, so conservation holds.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pec-q1',
      type: 'multiple-choice',
      stem: 'Which sentence states the conservation of energy?',
      tier: 'core',
      options: [
        'In a closed system, the total energy stored before a transfer is the same as the total energy stored after.',
        'Energy can be created when needed and destroyed when not needed.',
        'Energy only moves in mechanical situations.',
        'A heavier object always has more energy than a lighter one.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pec-mis-energy-can-be-created',
      hint: 'Before equals after, in a closed system. Nothing is created, nothing is destroyed.',
    },
    {
      id: 'pec-q2',
      type: 'multiple-choice',
      stem: 'A pupil says "When a torch battery goes flat, the energy is destroyed." Which response is right?',
      tier: 'core',
      options: [
        'Correct, batteries destroy energy as they run out.',
        'Correct, only mechanical energy is conserved.',
        'Not correct. The battery actually gains energy as it goes flat.',
        'Not correct. The chemical store of the battery has emptied. The energy has been transferred to thermal stores (warm bulb, warm air) and a useful light output, not destroyed.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pec-mis-energy-disappears',
      hint: 'The chemical store empties. The energy has moved to thermal and light outputs, not gone away.',
    },
    {
      id: 'pec-q3',
      type: 'multiple-choice',
      stem: 'What is a "closed system" in the conservation of energy?',
      tier: 'core',
      options: [
        'A system that is shut inside a sealed box.',
        'A system that is locked at night.',
        'A system with no energy crossing its boundary, so the total energy inside stays the same.',
        'A system that contains only one energy store.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pec-mis-closed-means-sealed',
      hint: 'The "closed" bit is about energy flow across the boundary, not about doors and lids.',
    },
    {
      id: 'pec-q4',
      type: 'numeric-entry',
      stem: 'A pendulum bob holds 6 J in its gravitational store at the top of its swing, with 0 J of kinetic store. Ignoring losses, what is the total energy of the bob at the bottom of the swing, in J?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'J',
      xpValue: 10,
      hint: 'Conservation of energy: total before equals total after.',
    },
    {
      id: 'pec-q5',
      type: 'numeric-entry',
      stem: 'A kettle takes 200 kJ from the mains. 15 kJ ends up in the thermal stores of the surroundings (kettle body and kitchen air). How much useful energy is delivered to the thermal store of the water, in kJ?',
      tier: 'core',
      correctAnswer: 185,
      unit: 'kJ',
      xpValue: 10,
      hint: 'E_useful = E_in - E_wasted = 200 - 15.',
    },
    {
      id: 'pec-q6',
      type: 'multiple-choice',
      stem: 'A pupil in Cornwall pushes a child on a swing. After many swings without further pushes, the swing rises less and less. Which sentence best describes what is happening to the energy?',
      tier: 'core',
      options: [
        'The total energy is staying the same; some has been transferred to the thermal stores of the air and the swing pivot.',
        'Energy is being destroyed by the air.',
        'Energy is being created in the swing chains.',
        'The energy was never really there.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pec-mis-friction-breaks-conservation',
      hint: 'Conservation still applies. Friction at the pivot and drag from the air both transfer energy into thermal stores.',
    },
    {
      id: 'pec-q7',
      type: 'numeric-entry',
      stem: 'A torch transfers 50 J from its chemical store. 8 J of light is given out usefully. How much energy ends up in thermal stores (warm bulb, warm air, warm hand), in J? Assume the torch is a closed system.',
      tier: 'core',
      correctAnswer: 42,
      unit: 'J',
      xpValue: 10,
      hint: 'E_in = E_useful + E_wasted. So E_wasted = 50 - 8.',
    },
    {
      id: 'pec-q8',
      type: 'multiple-choice',
      stem: 'A tennis ball bounces on the Wimbledon court and reaches a lower height each time. A pupil says, "This breaks conservation of energy." Which sentence is the best reply?',
      tier: 'confident',
      options: [
        'They are right. Conservation only works for pendulums.',
        'They are right. Bouncing balls always destroy a bit of energy.',
        'They are wrong. If you draw the system wide enough to include the ball, the court and the air, the total energy is conserved; the "lost" energy is in thermal stores.',
        'They are wrong, but only because the ball still has gravity in it.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pec-mis-friction-breaks-conservation',
      hint: 'Widen the system boundary. The "missing" energy is in the thermal stores of the air and the court.',
    },
    {
      id: 'pec-q9',
      type: 'numeric-entry',
      stem: 'A child on a Cornwall swing holds 80 J in the gravitational store at the top of one swing. At the bottom, the kinetic store holds 72 J. How much energy has been transferred to thermal stores of the air and pivot during that half-swing, in J? Assume a closed system that includes the air and pivot.',
      tier: 'confident',
      correctAnswer: 8,
      unit: 'J',
      xpValue: 15,
      misconceptionId: 'pec-mis-friction-breaks-conservation',
      hint: 'Total before = total after. 80 = 72 + thermal, so thermal = 80 - 72.',
    },
    {
      id: 'pec-q10',
      type: 'numeric-entry',
      stem: 'A Sheffield kitchen kettle transfers 240 kJ during one boil. The thermal store of the water gains 230 kJ. How much energy ends up in the thermal stores of the surroundings (kettle body and kitchen air), in kJ?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'kJ',
      xpValue: 15,
      hint: 'E_in = E_useful + E_wasted. So E_wasted = 240 - 230.',
    },
    {
      id: 'pec-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes, "A battery creates energy and then sends it round the circuit." What is the best correction?',
      tier: 'confident',
      options: [
        'The wording is fine.',
        'The battery destroys energy as it works.',
        'The battery splits energy in half.',
        'The battery does not create energy. It transfers energy from its chemical store to the components in the circuit. No new energy appears.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pec-mis-energy-can-be-created',
      hint: 'Batteries are transferrers, not creators. The chemical store empties as energy moves elsewhere.',
    },
    {
      id: 'pec-q12',
      type: 'multiple-choice',
      stem: 'A pendulum in Greenwich has 4 J in its gravitational store at the top. Halfway through its swing, the gravitational store holds 1.5 J. Ignoring losses, how much is in the kinetic store at that halfway point?',
      tier: 'confident',
      options: [
        '4 J, because conservation gives that.',
        '2.5 J, because the total must still be 4 J and 4 - 1.5 = 2.5.',
        '1.5 J, because both stores match.',
        '5.5 J, because the stores add up.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pec-mis-energy-disappears',
      hint: 'Total energy before = total energy after = 4 J. The two stores share the 4 J between them.',
    },
    {
      id: 'pec-q13',
      type: 'spot-misconception',
      stem: 'Priya says, "When a swing has friction at its pivot, conservation of energy no longer applies."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Friction always breaks conservation of energy.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Conservation still applies. Friction transfers energy to thermal stores of the pivot and air; the total still balances if you count those stores.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pec-mis-friction-breaks-conservation',
    },
    {
      id: 'pec-q14',
      type: 'numeric-entry',
      stem: 'An electric heater transfers 1000 J from the mains. The useful output is 900 J in the thermal store of a room. Assuming the heater is a closed system, what is the total energy transferred to all stores after, in J?',
      tier: 'confident',
      correctAnswer: 1000,
      unit: 'J',
      xpValue: 15,
      misconceptionId: 'pec-mis-only-useful-counts',
      hint: 'Conservation: total in = total out. 900 J useful + the wasted bit must add to 1000 J.',
    },
    {
      id: 'pec-q15',
      type: 'multiple-choice',
      stem: 'A pupil says, "Conservation of energy only applies to moving objects, not to kettles or torches." Which sentence is the best reply?',
      tier: 'confident',
      options: [
        'Not correct. Conservation of energy applies to every transfer: pendulums, kettles, torches, chemical reactions, all of them. Total before equals total after.',
        'Correct, only mechanics obeys conservation.',
        'Correct, kettles run on a different rule.',
        'Not correct, but only for kettles.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pec-mis-mechanical-only',
      hint: 'Conservation is a general rule. It is not limited to mechanical contexts.',
    },
    {
      id: 'pec-q16',
      type: 'spot-misconception',
      stem: 'Marcus says, "A kettle delivers 230 kJ of useful energy and wastes 10 kJ. So the total energy the kettle handles is just 230 kJ."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. Only the useful 230 kJ counts as the total.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. The total energy handled is 240 kJ, which equals 230 kJ useful plus 10 kJ wasted. Conservation counts every store, not just the useful one.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pec-mis-only-useful-counts',
    },
    {
      id: 'pec-q17',
      type: 'numeric-entry',
      stem: 'A roller coaster cart at the top of a hill in Blackpool holds 50 kJ in the gravitational store and 5 kJ in the kinetic store. At the bottom of the dip, the gravitational store has fallen to 0 kJ and 4 kJ has been transferred to thermal stores of the air and rails. How much energy is in the kinetic store at the bottom, in kJ? Treat the whole hill, cart, rails and air as a closed system.',
      tier: 'challenge',
      correctAnswer: 51,
      unit: 'kJ',
      xpValue: 20,
      hint: 'Total before = total after. 50 + 5 = 0 + kinetic_after + 4. Solve for kinetic_after.',
    },
    {
      id: 'pec-q18',
      type: 'drag-order',
      stem: 'Put the steps in the right order for using conservation of energy to find a missing store.',
      tier: 'challenge',
      items: [
        'Solve for the unknown store and state the answer in joules (or kJ).',
        'Add the stores before the transfer to get the total energy before.',
        'Write the equation: total before = total after, listing every store on each side.',
        'Decide what counts as the closed system, so that nothing crosses the boundary.',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 20,
      hint: 'Pick the boundary first, then add the before stores, then equate the totals, then solve.',
    },
    {
      id: 'pec-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the wasted energy when an electric kettle transfers 180 kJ in and delivers 165 kJ usefully to the thermal store of the water.',
      tier: 'challenge',
      steps: [
        'Set out the energies: E_in = 180 kJ, E_useful = 165 kJ, E_wasted = ?',
        'State the principle of conservation: total in = total out, so E_in = E_useful + E_wasted.',
        'Rearrange for the wasted energy by subtracting the useful energy from both sides.',
        null,
        'Evaluate the arithmetic: E_wasted = 15 kJ.',
        'State the answer: 15 kJ ends up in thermal stores of the kettle body and kitchen air, while 165 kJ heats the water. Total = 180 kJ, which matches the input.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into the rearranged equation: E_wasted = E_in - E_useful = 180 - 165.',
      xpValue: 20,
    },
    {
      id: 'pec-q20',
      type: 'multiple-choice',
      stem: 'A pupil holds a small bouncy ball on a Wimbledon court. They release it and watch the bounces grow shorter. Which closed system gives the cleanest statement that total energy is conserved?',
      tier: 'challenge',
      options: [
        'Just the ball, because the ball is what is bouncing.',
        'The ball plus the hand of the pupil, because the hand is involved.',
        'The ball plus the court surface plus the surrounding air, because the "lost" energy ends up in thermal stores of those.',
        'Just the air, because air resistance does the work.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pec-mis-closed-means-sealed',
      hint: 'Widen the boundary until no energy crosses it. The court and air are where the thermal stores live.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that "wasted" energy is lost or destroyed, missing that it has been transferred to thermal stores of the surroundings.
    {
      id: 'pec-mis-energy-disappears',
      description:
        'Believing that energy disappears or is destroyed when it is wasted, missing that it has been transferred to a thermal store of the surroundings.',
      triggerAnswer: 'energy-disappears',
      correction:
        'Wasted energy is not destroyed. It has been transferred to a thermal store of the surroundings, such as the warm kettle body or the warm air in the kitchen.',
      reExplanation:
        'When a torch shines, 50 J of chemical store empties, 8 J leaves as useful light and the other 42 J warms the bulb, the air and your hand. Add them up and you still have 50 J. Energy that seems to vanish has moved to a thermal store you might not have written down. Widen the system boundary and the total always balances.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates wrote that conservation of energy fails when friction or air resistance is present.
    {
      id: 'pec-mis-friction-breaks-conservation',
      description:
        'Claiming that conservation of energy does not apply when friction or air resistance is present, missing that those forces simply transfer energy to thermal stores.',
      triggerAnswer: 'friction-breaks-conservation',
      correction:
        'Conservation still applies when friction is present. Friction transfers energy to thermal stores of the rubbing surfaces and the air, so total before still equals total after.',
      reExplanation:
        'A child on a Cornwall swing starts with 80 J in the gravitational store at the top. At the bottom of the next swing, 72 J sits in the kinetic store and 8 J is in the thermal stores of the air and pivot. 72 + 8 = 80. The "lost" 8 J is not destroyed; it has just moved into stores you might forget to count.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates described batteries as "creating" energy rather than transferring from a chemical store.
    {
      id: 'pec-mis-energy-can-be-created',
      description:
        'Saying that a battery or other source creates energy from nothing, missing that it transfers energy from a chemical store into the circuit.',
      triggerAnswer: 'energy-can-be-created',
      correction:
        'Batteries do not create energy. They transfer energy from a chemical store into the circuit, so the chemical store empties as the bulb and wires gain energy.',
      reExplanation:
        'Think of a torch battery as a tank with 100 J of chemical store. When you switch the torch on, energy flows from that tank into the bulb and wires. Each second, the tank holds a little less and the rest of the circuit holds a little more. Nothing is being made. When the chemical store is empty, the battery is flat.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote "closed system" as meaning sealed in a box, missing the precise meaning of no energy crossing the boundary.
    {
      id: 'pec-mis-closed-means-sealed',
      description:
        'Treating a closed system as one shut inside a sealed lid, missing that the term means no energy crossing the system boundary.',
      triggerAnswer: 'closed-means-sealed',
      correction:
        'A closed system is one with no energy flowing across its boundary. The boundary is a choice you make, not a physical lid. Pick it wide enough and conservation always holds.',
      reExplanation:
        'A bouncing tennis ball is not a closed system on its own, because energy leaves it on each bounce. But if you draw the system to include the ball, the court and the surrounding air, no energy crosses that wider boundary, and the total energy inside is constant. The "closed" bit is about energy flow, not about doors and lids.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates only counted the useful output when working with conservation, ignoring the wasted thermal output.
    {
      id: 'pec-mis-only-useful-counts',
      description:
        'Counting only the useful energy output and ignoring the wasted thermal output when applying conservation of energy.',
      triggerAnswer: 'only-useful-counts',
      correction:
        'Conservation of energy counts every store, useful and wasted. Total in = useful out + wasted out, and the two outputs together must match the input.',
      reExplanation:
        'A 1000 J electric heater might deliver 900 J usefully to the thermal store of the room. The other 100 J still exists; it warms the wires, the casing and the air near the heater. To apply conservation, add the useful output and the wasted output: 900 + 100 = 1000, which matches the input. Drop either and the bookkeeping fails.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates limited conservation of energy to mechanical situations such as falling balls and pendulums, missing that it applies to every transfer.
    {
      id: 'pec-mis-mechanical-only',
      description:
        'Limiting conservation of energy to mechanical contexts such as falling balls and pendulums, missing that it applies to every kind of energy transfer.',
      triggerAnswer: 'mechanical-only',
      correction:
        'Conservation of energy applies to every transfer: kettles, torches, chemical reactions and pendulums alike. Total energy before always equals total energy after.',
      reExplanation:
        'A pendulum, a kettle and a torch all obey the same rule. The pendulum swaps gravitational store for kinetic store; the kettle moves chemical store to thermal stores; the torch moves chemical store to thermal and light outputs. In every case, total before equals total after. The rule is general, not just a mechanics rule.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyConservationZoneNodes = [energyConservation]
