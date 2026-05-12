import type { SkillNode } from '@/types/content'

const LEANING_TOWER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Galileo's thought: drop two balls of different mass from a tall tower</text>

    <!-- Tower -->
    <rect x="120" y="80" width="80" height="280" fill="currentColor" />
    <rect x="110" y="70" width="100" height="14" fill="currentColor" />
    <text x="160" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tall tower (Pisa)</text>

    <!-- Hand at the top releasing both -->
    <circle cx="170" cy="100" r="14" fill="currentColor" />
    <text x="170" y="60" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Released together</text>

    <!-- Heavy ball, mid-fall, on the left side -->
    <circle cx="300" cy="230" r="22" fill="currentColor" />
    <text x="300" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">heavy: 10 kg</text>

    <!-- Light ball, mid-fall, on the right side, at the SAME height -->
    <circle cx="500" cy="230" r="12" fill="currentColor" />
    <text x="500" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">light: 1 kg</text>

    <!-- Dashed level line showing both at same height -->
    <line x1="240" y1="230" x2="560" y2="230" stroke-dasharray="6 6" />
    <text x="620" y="234" font-size="12" stroke="none" fill="currentColor">same height</text>

    <!-- Ground -->
    <line x1="60" y1="360" x2="740" y2="360" />

    <!-- Reasoning box -->
    <text x="400" y="105" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">If both balls feel only gravity:</text>
    <text x="400" y="125" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">W = m x g, and a = W / m = g</text>
    <text x="400" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">m cancels, so a is the same for every mass: a = g</text>

    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">they reach the ground together, even though one is ten times heavier</text>
  </g>
`

const APOLLO_HAMMER_FEATHER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Apollo 15 on the Moon: hammer and feather dropped from the same height</text>

    <!-- Lunar surface, gently curved -->
    <path d="M 60 340 Q 400 320 740 340" />

    <!-- Astronaut on the left, simple stick figure -->
    <circle cx="180" cy="180" r="20" fill="currentColor" />
    <line x1="180" y1="200" x2="180" y2="260" />
    <line x1="180" y1="220" x2="150" y2="240" />
    <line x1="180" y1="220" x2="210" y2="240" />
    <line x1="180" y1="260" x2="160" y2="320" />
    <line x1="180" y1="260" x2="200" y2="320" />
    <text x="180" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Astronaut</text>

    <!-- Hammer, mid-fall -->
    <rect x="320" y="200" width="14" height="50" fill="currentColor" />
    <rect x="305" y="190" width="44" height="18" fill="currentColor" />
    <text x="327" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Hammer</text>

    <!-- Feather, mid-fall, at SAME height as hammer -->
    <path d="M 500 200 Q 510 220 500 250 Q 490 220 500 200 Z" fill="currentColor" />
    <line x1="500" y1="200" x2="500" y2="255" />
    <text x="500" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Feather</text>

    <!-- Level line -->
    <line x1="260" y1="225" x2="560" y2="225" stroke-dasharray="6 6" />
    <text x="620" y="229" font-size="12" stroke="none" fill="currentColor">same height</text>

    <!-- Caption -->
    <text x="400" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">No air on the Moon: only gravity acts.</text>
    <text x="400" y="120" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">a = g (about 1.6 N/kg) for BOTH objects.</text>
    <text x="400" y="140" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">They hit the lunar surface together.</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Astronaut Dave Scott did this live on the Moon during the 1971 Apollo 15 mission.</text>
  </g>
`

const VACUUM_TUBE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">School lab: feather and ball bearing in a vacuum tube</text>

    <!-- Tube on the LEFT: air inside -->
    <rect x="120" y="80" width="120" height="240" fill="none" stroke="currentColor" stroke-width="3" />
    <text x="180" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Air inside</text>
    <!-- Ball bearing near the bottom -->
    <circle cx="155" cy="280" r="8" fill="currentColor" />
    <text x="155" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">ball</text>
    <!-- Feather near the top, still drifting -->
    <path d="M 210 130 Q 220 150 210 180 Q 200 150 210 130 Z" fill="currentColor" />
    <line x1="210" y1="130" x2="210" y2="185" />
    <text x="210" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">feather</text>
    <text x="180" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Air resistance slows</text>
    <text x="180" y="368" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">the feather more.</text>

    <!-- Tube on the RIGHT: vacuum (pump attached) -->
    <rect x="500" y="80" width="120" height="240" fill="none" stroke="currentColor" stroke-width="3" />
    <text x="560" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Air pumped out</text>
    <!-- Both objects at the SAME height -->
    <circle cx="535" cy="200" r="8" fill="currentColor" />
    <text x="535" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">ball</text>
    <path d="M 590 190 Q 600 210 590 235 Q 580 210 590 190 Z" fill="currentColor" />
    <line x1="590" y1="190" x2="590" y2="237" />
    <text x="590" y="252" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">feather</text>
    <!-- Pump symbol -->
    <line x1="620" y1="280" x2="680" y2="280" />
    <rect x="680" y="265" width="40" height="30" fill="currentColor" />
    <text x="700" y="312" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pump</text>
    <text x="560" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same acceleration:</text>
    <text x="560" y="368" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">they fall side by side.</text>

    <!-- Centre divider arrow -->
    <line x1="300" y1="200" x2="460" y2="200" stroke-dasharray="6 6" />
    <text x="380" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">remove the air</text>
  </g>
`

export const gravityVacuumFall: SkillNode = {
  id: 'physics-gravity-vacuum-fall',
  title: 'Why Objects Fall Together in a Vacuum',
  description:
    'In a vacuum the only force on a falling object is gravity. From W = m x g and a = W / m, the mass cancels and a = g, so every object accelerates at the same rate regardless of mass. A feather and a hammer dropped from the same height in a vacuum reach the ground together, as Apollo 15 astronaut Dave Scott demonstrated on the Moon in 1971. On Earth, air resistance opposes motion through the air; lighter, less streamlined shapes feel relatively more air resistance compared to their weight, so they fall more slowly than a compact, heavy shape. Pump the air out of a vacuum tube and the difference disappears.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Gravity force; non-contact forces; resistance to motion of air and water; comparing the effect of air resistance and gravity on falling objects.',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; 4.5.6.2.3 Acceleration in free fall, role of air resistance (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight; 1.29-1.30 Falling objects and air resistance (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; falling objects, air resistance and free fall in a vacuum (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gvf-scene-leaning-tower',
      title: "Galileo's Tower Thought Experiment",
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the argument that two balls of different mass, dropped at once with only gravity acting, reach the ground together.',
      data: {
        viewBox: '0 0 800 400',
        svg: LEANING_TOWER_SVG,
        hotspots: [
          {
            id: 'gvf-lt-heavy',
            x: 38,
            y: 58,
            label: 'Heavy ball: 10 kg',
            description:
              'A heavier ball has a larger weight W. Its weight is W = m x g = 10 x 10 = 100 N on Earth. The pull of gravity on it is bigger than the pull on the light ball.',
          },
          {
            id: 'gvf-lt-light',
            x: 63,
            y: 58,
            label: 'Light ball: 1 kg',
            description:
              'The lighter ball has a smaller weight: W = m x g = 1 x 10 = 10 N. Its weight is ten times less than the heavy ball.',
          },
          {
            id: 'gvf-lt-cancel',
            x: 50,
            y: 26,
            label: 'Why the mass cancels',
            description:
              'Acceleration is force divided by mass. The only force here is weight, so a = W / m = (m x g) / m = g. The m on top and the m below cancel, leaving a = g for every mass.',
          },
          {
            id: 'gvf-lt-result',
            x: 50,
            y: 36,
            label: 'Same acceleration, same time to fall',
            description:
              'Both balls accelerate at a = g (about 10 m/s squared on Earth, if there is no air to resist them). Starting from the same height, they cover the same distance in the same time and land together.',
          },
        ],
      },
    },
    {
      id: 'gvf-scene-apollo',
      title: 'Apollo 15: Hammer and Feather',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read why a hammer and a feather, dropped together on the Moon, hit the lunar surface at the same instant.',
      data: {
        viewBox: '0 0 800 400',
        svg: APOLLO_HAMMER_FEATHER_SVG,
        hotspots: [
          {
            id: 'gvf-ap-no-air',
            x: 50,
            y: 26,
            label: 'No air on the Moon',
            description:
              'The Moon has no atmosphere to speak of, so there is no air to push back on either object. The only force is the pull of lunar gravity.',
          },
          {
            id: 'gvf-ap-hammer',
            x: 41,
            y: 60,
            label: 'Hammer: about 1.3 kg',
            description:
              'The hammer is much heavier than the feather, but on the Moon its acceleration is still a = g (about 1.6 N/kg, the value of g on the Moon). Heavy or light, every object falls at the same rate when only gravity acts.',
          },
          {
            id: 'gvf-ap-feather',
            x: 63,
            y: 60,
            label: 'Feather: about 30 g',
            description:
              'Released from the same height as the hammer, the feather also accelerates at a = g. There is no air to slow it, so it does not drift or float.',
          },
          {
            id: 'gvf-ap-result',
            x: 50,
            y: 92,
            label: 'They land together',
            description:
              'Dave Scott released them together on live television in 1971. Both reached the lunar surface at the same instant, exactly as Galileo had argued nearly four centuries earlier.',
          },
        ],
      },
    },
    {
      id: 'gvf-scene-vacuum-tube',
      title: 'School Vacuum Tube',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a feather and a ball bearing in a sealed glass tube, first with air, then with the air pumped out.',
      data: {
        viewBox: '0 0 800 400',
        svg: VACUUM_TUBE_SVG,
        hotspots: [
          {
            id: 'gvf-vt-air-tube',
            x: 23,
            y: 18,
            label: 'Tube with air',
            description:
              'In a normal lab tube, the ball bearing reaches the bottom while the feather is still drifting near the top. Air pushes back on both objects, but the feather is much lighter for its surface area, so air resistance slows it far more.',
          },
          {
            id: 'gvf-vt-vacuum',
            x: 70,
            y: 18,
            label: 'Tube with the air pumped out',
            description:
              'A vacuum pump removes the air. Now there is nothing to push back on either object. The only force on each is its weight, and weight divided by mass gives a = g for both.',
          },
          {
            id: 'gvf-vt-removed',
            x: 48,
            y: 50,
            label: 'Remove the air, remove the difference',
            description:
              'Pump the air out of the tube and the difference between the feather and the ball bearing disappears. They fall side by side and land at the same instant. Let air back in and the feather is held back again.',
          },
          {
            id: 'gvf-vt-why-feather',
            x: 23,
            y: 88,
            label: 'Why the feather drifts in air',
            description:
              'Air resistance grows with surface area and speed. A feather has a lot of surface area for its tiny mass, so the air can hold it up. A ball bearing has little surface area for its mass, so air barely slows it.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gvf-worked-1',
      title: 'Why a feather and a hammer fall together in a vacuum',
      steps: [
        {
          explanation:
            'Pick out the objects. A hammer (1.3 kg) and a feather (30 g, which is 0.030 kg) are dropped together in a vacuum on the Moon, where g = 1.6 N/kg. Show that both have the same acceleration.',
        },
        {
          explanation:
            'Find the weight of each object using W = m x g. The hammer has more weight, but bigger weight does not on its own mean bigger acceleration.',
          maths: 'W_hammer = 1.3 x 1.6 = 2.08 N; W_feather = 0.030 x 1.6 = 0.048 N',
        },
        {
          explanation:
            'In a vacuum, the only force acting on each object is its weight. Acceleration is force divided by mass, so a = W / m for each.',
          maths: 'a = W / m',
        },
        {
          explanation:
            'Substitute the algebra: W is m x g, so the formula becomes a = (m x g) / m. The m on the top and the m on the bottom cancel out, no matter the value of m.',
          maths: 'a = (m x g) / m = g',
        },
        {
          explanation:
            'Evaluate. On the Moon, g = 1.6 N/kg, so a = 1.6 m/s squared for the hammer and for the feather. The acceleration does not depend on the mass at all.',
          maths: 'a_hammer = a_feather = 1.6 m/s squared',
        },
        {
          explanation:
            'State the answer in words. With only gravity acting, every object accelerates at a = g. The hammer and the feather, released together, reach the lunar surface at the same instant.',
        },
      ],
    },
    {
      id: 'gvf-worked-2',
      title: 'Why the hammer hits the ground first on Earth',
      steps: [
        {
          explanation:
            'Set the scene. Drop the same hammer and feather from a first-floor window in a Manchester school. This time there is air all around them.',
        },
        {
          explanation:
            'List the forces on each object. Gravity still pulls each one down with a force W = m x g. Air resistance pushes each one upwards, against the motion through the air.',
        },
        {
          explanation:
            'Compare air resistance to weight. The hammer has a big weight and a small surface area, so air resistance is tiny next to its weight. The feather has a tiny weight and a large surface area, so air resistance is close to its weight almost straight away.',
        },
        {
          explanation:
            'Work out the resultant force for each, using "down minus up".',
          maths: 'F_net = W - air resistance',
        },
        {
          explanation:
            'For the hammer, F_net is nearly the full weight, so a is close to g, and the hammer keeps speeding up. For the feather, F_net soon drops to near zero, so a also drops to near zero, and the feather then drifts down at a slow steady speed.',
        },
        {
          explanation:
            'State the answer. With air present, the hammer arrives well before the feather. The difference is not gravity; gravity acts on both. The difference is how much air resistance slows each shape compared to its weight.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gvf-q1',
      type: 'multiple-choice',
      stem: 'A hammer and a feather are released from the same height inside a sealed tube with the air pumped out. Which sentence best describes what happens?',
      tier: 'core',
      options: [
        'The hammer reaches the bottom first because it is heavier.',
        'The feather reaches the bottom first because it is lighter and not held down.',
        'Both reach the bottom at the same instant.',
        'Neither moves, because there is no air to push them down.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gvf-mis-heavier-falls-faster',
      hint: 'In a vacuum the only force on each object is its weight. Acceleration is W / m, and m cancels.',
    },
    {
      id: 'gvf-q2',
      type: 'multiple-choice',
      stem: 'In a vacuum, the only force on a falling object is its weight. What does this tell you about the acceleration of any falling object?',
      tier: 'core',
      options: [
        'a = g, the same for every mass.',
        'a = W, in newtons.',
        'a = m, so heavier objects accelerate more.',
        'a = 0, because there is no air.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Start from a = F / m with F = W = m x g. The m cancels.',
    },
    {
      id: 'gvf-q3',
      type: 'multiple-choice',
      stem: 'On the Moon a hammer and a feather are dropped from the same height by an astronaut. Why do they hit the lunar surface together?',
      tier: 'core',
      options: [
        'There is no gravity on the Moon, so neither pulls down.',
        'Lunar gravity is stronger on the feather, balancing the masses.',
        'The astronaut released the feather a moment before the hammer.',
        'The Moon has no atmosphere, so there is no air resistance; only gravity acts, and a = g for every mass.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gvf-mis-no-gravity-moon',
      hint: 'There IS gravity on the Moon (g is about 1.6 N/kg). The key fact is that the Moon has almost no atmosphere.',
    },
    {
      id: 'gvf-q4',
      type: 'multiple-choice',
      stem: 'On Earth, a paper-thin sheet of A4 paper drifts slowly to the floor, while the textbook next to it drops straight down. Which sentence best explains the difference?',
      tier: 'core',
      options: [
        'Gravity pulls the textbook harder because it is denser.',
        'The paper has no weight at room temperature.',
        'Air resistance is close to the weight of the paper, so its resultant force is small and its acceleration is small. Air resistance is tiny next to the weight of the textbook, so its resultant force is close to the full weight and a is close to g.',
        'The textbook makes its own vacuum as it falls.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gvf-mis-gravity-different-on-shapes',
      hint: 'Gravity pulls both. The difference is how big air resistance is compared to each weight.',
    },
    {
      id: 'gvf-q5',
      type: 'multiple-choice',
      stem: 'A pupil writes, "There is no gravity in space, so things float." Which statement is the best correction?',
      tier: 'core',
      options: [
        'Right. Once you leave the atmosphere there is no gravity at all.',
        'Gravity only works through the air, so removing the air switches it off.',
        'Gravity only acts on living things, so astronauts float but their hammers do not.',
        'Gravity reaches everywhere; what changes is the air. Objects on the Moon and on the ISS are still pulled by gravity, but with no air, falling looks very different.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gvf-mis-no-gravity-moon',
      hint: 'The Moon has gravity (g = 1.6 N/kg) and orbits feel gravity too. What is missing in space is the air.',
    },
    {
      id: 'gvf-q6',
      type: 'numeric-entry',
      stem: 'A 2 kg metal cube is dropped inside a vacuum chamber on Earth, where g = 10 N/kg. What is its acceleration, in m/s squared?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'm/s squared',
      xpValue: 10,
      hint: 'In a vacuum, the only force is W = m x g. Use a = W / m, or just remember a = g.',
    },
    {
      id: 'gvf-q7',
      type: 'numeric-entry',
      stem: 'A 0.5 kg apple is dropped alongside the 2 kg cube in the same vacuum chamber on Earth, where g = 10 N/kg. What is the acceleration of the apple, in m/s squared?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'm/s squared',
      xpValue: 15,
      misconceptionId: 'gvf-mis-heavier-falls-faster',
      hint: 'a = W / m = (m x g) / m = g. The mass cancels, so the answer is the same as for the cube.',
    },
    {
      id: 'gvf-q8',
      type: 'numeric-entry',
      stem: 'A hammer of mass 1.3 kg is released in a vacuum on the Moon, where g = 1.6 N/kg. What is the weight of the hammer, in N?',
      tier: 'confident',
      correctAnswer: 2.08,
      unit: 'N',
      xpValue: 15,
      hint: 'Use W = m x g with m = 1.3 kg and g = 1.6 N/kg.',
    },
    {
      id: 'gvf-q9',
      type: 'numeric-entry',
      stem: 'The same hammer (1.3 kg) is released in a vacuum on the Moon, where g = 1.6 N/kg. What is its acceleration, in m/s squared?',
      tier: 'confident',
      correctAnswer: 1.6,
      unit: 'm/s squared',
      xpValue: 15,
      hint: 'In a vacuum a = g. The mass of the hammer does not matter.',
    },
    {
      id: 'gvf-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims, "A 10 kg ball has ten times the weight of a 1 kg ball, so in a vacuum it must accelerate ten times faster." What is the best response?',
      tier: 'confident',
      options: [
        'The pupil is right. Bigger weight always means bigger acceleration.',
        'The pupil has the weights right but missed that a = W / m. The heavier ball also has ten times the mass, so the ratio W / m is the same. Both accelerate at a = g.',
        'The pupil is right, but the factor is twice, not ten times.',
        'The heavier ball would accelerate less, because its mass slows it down.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gvf-mis-heavier-falls-faster',
      hint: 'A bigger weight does not mean a bigger acceleration on its own. Divide weight by mass first.',
    },
    {
      id: 'gvf-q11',
      type: 'multiple-choice',
      stem: 'Inside a vacuum tube on Earth, a feather and a ball bearing are released together from the top. Which graph of velocity against time best matches them?',
      tier: 'confident',
      options: [
        'A single straight line starting at zero, the same for both objects.',
        'Two straight lines starting at zero. The ball bearing line is steeper than the feather line.',
        'Two curves that flatten out at different terminal velocities.',
        'A horizontal line at zero for the feather and a sloped line for the ball bearing.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'In a vacuum both accelerate at a = g. Same a means same straight line on a velocity-time graph.',
    },
    {
      id: 'gvf-q12',
      type: 'multiple-choice',
      stem: 'A pupil says, "Pumping the air out makes the tube heavier, so the feather falls quicker because the tube pulls it down." Which response is right?',
      tier: 'confident',
      options: [
        'A vacuum is the absence of air. It has no weight and pulls nothing. The feather falls at a = g because air resistance is gone, not because something else is pulling on it.',
        'The pupil is right. A vacuum has its own weight that pulls falling objects.',
        'A vacuum pulls only on light objects like the feather.',
        'The tube becomes heavier and pulls the ball bearing instead.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gvf-mis-vacuum-pulls',
      hint: 'A vacuum just means no air. Nothing new appears to pull anything.',
    },
    {
      id: 'gvf-q13',
      type: 'multiple-choice',
      stem: 'On Earth, a parachutist opens their parachute and steadies at a constant downward velocity. Which sentence best describes the forces?',
      tier: 'challenge',
      options: [
        'Gravity has switched off, so only air resistance acts.',
        'Air resistance has grown until it equals the weight. The resultant force is zero, so the velocity stays constant.',
        'The parachute lifts the parachutist, so gravity reverses.',
        'In open air there is no gravity below the clouds.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gvf-mis-air-resistance-adds-to-gravity',
      hint: 'Air resistance opposes motion. When it balances weight, the resultant force is zero and the velocity stops changing.',
    },
    {
      id: 'gvf-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "The hammer hit the lunar surface first because it weighs more than the feather. Heavier things always fall faster."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Heavier objects always fall faster, on the Moon or anywhere.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. On the Moon there is no air to slow the feather. With only gravity acting, a = W / m = g for both, so they landed together.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gvf-mis-heavier-falls-faster',
    },
    {
      id: 'gvf-q15',
      type: 'spot-misconception',
      stem: 'Jack says, "There is no gravity on the Moon. That is why the astronauts bounce around when they walk."',
      tier: 'confident',
      statements: [
        {
          text: 'Jack is right. The Moon has no gravity, only the Earth does.',
          isMisconception: true,
        },
        {
          text: 'Jack is not right. The Moon has gravity (g = 1.6 N/kg), about a sixth of the value on Earth. The astronauts feel lighter, but they are still pulled down.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gvf-mis-no-gravity-moon',
    },
    {
      id: 'gvf-q16',
      type: 'drag-order',
      stem: 'Put the steps in the right order for arguing that a heavy and a light object fall together in a vacuum.',
      tier: 'challenge',
      items: [
        'Divide the resultant force by the mass to get the acceleration: a = W / m.',
        'Identify the only force on each object: its weight, W.',
        'Write the weight using the formula W = m x g, so a = (m x g) / m.',
        'Cancel the m on the top and the m on the bottom, leaving a = g for every mass.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
      hint: 'Start by naming the only force, then divide by mass, then substitute W = m x g, then cancel.',
    },
    {
      id: 'gvf-q17',
      type: 'drag-order',
      stem: 'A class wants to demonstrate that a feather and a ball bearing fall together when the air is removed. Put the steps for the demo in order.',
      tier: 'challenge',
      items: [
        'Pump the air out of the tube using the vacuum pump.',
        'Place a feather and a small ball bearing inside a clear sealed tube.',
        'Invert the tube in a single smooth motion so the two objects fall at once from the top.',
        'Observe that both reach the bottom at the same instant; let the air back in and repeat to see the feather drift.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
      hint: 'You need the objects inside first, then a vacuum, then a fair release, then an observation that you can compare.',
    },
    {
      id: 'gvf-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is showing why a 2 kg cube and a 0.5 kg apple have the same acceleration in a vacuum on Earth.',
      tier: 'challenge',
      steps: [
        'List the only force on each object: the weight W = m x g.',
        'Write acceleration as resultant force divided by mass: a = W / m.',
        'Substitute the formula for weight into the acceleration: a = (m x g) / m.',
        null,
        'State the answer: a = g = 10 m/s squared on Earth, the same for the cube and the apple. The mass of the object does not appear in the answer.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Cancel the m on the top of the fraction with the m on the bottom: a = g.',
      xpValue: 20,
      misconceptionId: 'gvf-mis-vacuum-a-depends-on-mass',
    },
    {
      id: 'gvf-q19',
      type: 'numeric-entry',
      stem: 'On Mars, g = 3.7 N/kg. A small science rover (mass 180 kg) drops a 0.25 kg pebble inside a sealed chamber from which the Martian air has been pumped. What is the acceleration of the pebble, in m/s squared?',
      tier: 'challenge',
      correctAnswer: 3.7,
      unit: 'm/s squared',
      xpValue: 20,
      hint: 'In a vacuum a = g, regardless of mass. The 180 kg of the rover is there to distract you.',
    },
    {
      id: 'gvf-q20',
      type: 'multiple-choice',
      stem: 'A skydiver and a small pebble are released together from a balloon over rural Kent. After a few seconds the skydiver is moving faster than the pebble. Which sentence gives the fairest reason?',
      tier: 'challenge',
      options: [
        'Gravity has chosen the skydiver; only one object accelerates at a time.',
        'The skydiver has a larger weight compared to their air resistance at the same speed, so their resultant force stays larger and they keep gaining speed past the pebble.',
        'The pebble has more gravity than the skydiver because it is denser.',
        'Air resistance only acts on objects with arms and legs.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gvf-mis-air-resistance-adds-to-gravity',
      hint: 'Both feel air resistance. Compare the relative size of air resistance to each object\'s weight to see which one keeps speeding up for longer.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates routinely stated that a heavier object falls faster, even when air resistance was absent in the stem.
    {
      id: 'gvf-mis-heavier-falls-faster',
      description:
        'Believing that heavier objects always fall faster than lighter ones, even when only gravity is acting on them.',
      triggerAnswer: 'heavier-falls-faster',
      correction:
        'When only gravity acts, a = W / m = g, the same for every mass. Heavier objects feel a bigger weight, but they also have more mass to push.',
      reExplanation:
        'In a vacuum, a 10 kg ball has ten times the weight of a 1 kg ball, but also ten times the mass. The ratio W / m is the same for both, so both accelerate at a = g. They cover the same distance in the same time and land together. Heavier only means a bigger pull, not a bigger acceleration on its own.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that astronauts on the Moon are weightless because there is no gravity, missing the role of the atmosphere.
    {
      id: 'gvf-mis-no-gravity-moon',
      description:
        'Believing that there is no gravity on the Moon or in space, so any floating or slow falling is because gravity is absent rather than air being absent.',
      triggerAnswer: 'no-gravity-moon',
      correction:
        'The Moon has gravity (g = 1.6 N/kg). What it lacks is an atmosphere. Without air there is no air resistance, so objects fall at a = g instead of being slowed.',
      reExplanation:
        'Astronauts on the Moon are still pulled down by lunar gravity; they just feel a sixth of their Earth weight. The hammer and feather of Apollo 15 fell together because the Moon has almost no air, not because gravity was missing. Orbiting astronauts feel gravity too; they only seem weightless because they and their craft are in free fall together.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates described a vacuum as something that "pulls" or "sucks" objects, conflating absence of pressure with an attractive force.
    {
      id: 'gvf-mis-vacuum-pulls',
      description:
        'Treating a vacuum as if it actively pulls or sucks objects, rather than simply being a region with no air to push back.',
      triggerAnswer: 'vacuum-pulls',
      correction:
        'A vacuum is just the absence of air. It has no mass, no weight, and exerts no force. Removing air removes air resistance, but it does not add any new pull.',
      reExplanation:
        'When the air is pumped out of a tube, no new force appears. What changes is the force that was already there: air resistance drops to zero. The feather then accelerates at a = g because only its weight acts, not because a vacuum is pulling it. Sealed crisp packets bulge in a low-pressure cabin for the same reason: the inside pressure pushes out, the vacuum does not pull.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that gravity pulls heavier or denser objects more strongly per kg, treating gravity as shape-sensitive.
    {
      id: 'gvf-mis-gravity-different-on-shapes',
      description:
        'Treating gravity as if it pulls flat or wide shapes less strongly per kilogram than compact shapes, so blaming the difference in falling on gravity rather than on air resistance.',
      triggerAnswer: 'gravity-different-on-shapes',
      correction:
        'Gravity gives every object on Earth the same g per kg. Falls differ because of air resistance, which depends on shape and speed, not because gravity treats shapes differently.',
      reExplanation:
        'A flat sheet of A4 and a tightly screwed-up ball of the same paper have the same mass and the same weight. Yet the sheet drifts and the ball drops. Gravity is identical. The difference is air resistance: the flat sheet pushes against far more air, so its resultant force is small, while the ball cuts through and its resultant force stays close to its full weight.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that air resistance "adds to gravity" rather than opposing motion through the air.
    {
      id: 'gvf-mis-air-resistance-adds-to-gravity',
      description:
        'Treating air resistance as a force that adds to gravity, rather than as a force that opposes motion through the air.',
      triggerAnswer: 'air-resistance-adds-to-gravity',
      correction:
        'Air resistance always opposes the motion of the object through the air. On a falling object it points upwards, against the weight, so the resultant force is W minus air resistance.',
      reExplanation:
        'A parachutist falls with weight pulling down and air resistance pushing up. The resultant force is the difference. As the parachutist speeds up, air resistance grows; when it equals the weight, the resultant force is zero and the velocity stays constant. If air resistance added to gravity, the parachutist would keep accelerating, which is not what we see.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates wrote that the acceleration of a falling object in vacuum depends on its mass, even after deriving a = W/m and W = mg.
    {
      id: 'gvf-mis-vacuum-a-depends-on-mass',
      description:
        'After deriving a = W / m with W = m x g in a vacuum, still believing that the acceleration value depends on the mass of the object.',
      triggerAnswer: 'vacuum-a-depends-on-mass',
      correction:
        'Substitute W = m x g into a = W / m to get a = (m x g) / m. The m cancels, leaving a = g for every mass.',
      reExplanation:
        'For a 0.5 kg apple on Earth in vacuum: W = 0.5 x 10 = 5 N, and a = 5 / 0.5 = 10 m/s squared. For a 2 kg cube: W = 2 x 10 = 20 N, and a = 20 / 2 = 10 m/s squared. The 10 keeps appearing because m cancels. The acceleration depends on g, not on the mass.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityVacuumFallZoneNodes = [gravityVacuumFall]
