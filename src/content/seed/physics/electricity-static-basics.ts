import type { SkillNode } from '@/types/content'

const ATOM_TRANSFER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Rubbing two insulators: only electrons move</text>

    <!-- Before: balloon (left) and jumper (right), both neutral -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Before rubbing: both neutral</text>

    <!-- Balloon (before) -->
    <ellipse cx="120" cy="170" rx="55" ry="65" />
    <text x="120" y="260" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">balloon</text>
    <text x="100" y="155" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="138" y="155" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="100" y="195" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="138" y="195" font-size="13" stroke="none" fill="currentColor">-</text>

    <!-- Jumper (before) -->
    <rect x="240" y="120" width="110" height="110" rx="6" />
    <text x="295" y="260" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">school jumper</text>
    <text x="260" y="160" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="290" y="160" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="320" y="160" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="260" y="200" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="290" y="200" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="320" y="200" font-size="13" stroke="none" fill="currentColor">-</text>

    <!-- Arrow to "After" -->
    <line x1="380" y1="175" x2="440" y2="175" />
    <polygon points="432,167 448,175 432,183" fill="currentColor" stroke="none" />
    <text x="410" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">rub</text>

    <!-- After: balloon (left) and jumper (right) -->
    <text x="620" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">After rubbing: charged</text>

    <!-- Balloon (after): gained electrons, now negative -->
    <ellipse cx="540" cy="170" rx="55" ry="65" />
    <text x="540" y="260" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">balloon: negative</text>
    <text x="520" y="155" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="558" y="155" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="520" y="180" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="558" y="180" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="520" y="205" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="558" y="205" font-size="13" stroke="none" fill="currentColor">+</text>

    <!-- Jumper (after): lost electrons, now positive -->
    <rect x="660" y="120" width="110" height="110" rx="6" />
    <text x="715" y="260" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">jumper: positive</text>
    <text x="680" y="160" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="710" y="160" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="740" y="160" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="680" y="200" font-size="13" stroke="none" fill="currentColor">+</text>
    <text x="710" y="200" font-size="13" stroke="none" fill="currentColor">-</text>
    <text x="740" y="200" font-size="13" stroke="none" fill="currentColor">+</text>

    <!-- Bottom rule -->
    <text x="400" y="320" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Rubbing transfers electrons. Protons stay in their nuclei.</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The total charge of the two objects together is still zero.</text>
    <text x="400" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">No new charge was made; existing electrons just moved.</text>
  </g>
`

const FORCES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Like charges repel, unlike charges attract</text>

    <!-- Pair 1: two negative balloons, repel -->
    <text x="180" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Two negative balloons</text>
    <ellipse cx="120" cy="160" rx="35" ry="45" />
    <text x="120" y="165" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">-</text>
    <ellipse cx="240" cy="160" rx="35" ry="45" />
    <text x="240" y="165" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">-</text>
    <line x1="100" y1="220" x2="65" y2="240" />
    <polygon points="71,235 60,243 70,245" fill="currentColor" stroke="none" />
    <line x1="260" y1="220" x2="295" y2="240" />
    <polygon points="289,235 300,243 290,245" fill="currentColor" stroke="none" />
    <text x="180" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Repel: push apart</text>

    <!-- Pair 2: balloon (negative) and comb (positive), attract -->
    <text x="600" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Negative balloon and positive comb</text>
    <ellipse cx="540" cy="160" rx="35" ry="45" />
    <text x="540" y="165" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">-</text>
    <rect x="625" y="130" width="50" height="60" rx="4" />
    <text x="650" y="165" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">+</text>
    <line x1="575" y1="160" x2="610" y2="160" />
    <polygon points="604,154 614,160 604,166" fill="currentColor" stroke="none" />
    <line x1="625" y1="160" x2="595" y2="160" />
    <polygon points="601,154 591,160 601,166" fill="currentColor" stroke="none" />
    <text x="600" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Attract: pull together</text>

    <text x="400" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Forces act without touching. They reach across the gap.</text>
    <text x="400" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The closer the charged objects, the stronger the force.</text>
  </g>
`

const PAPER_BITS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A charged comb lifts small bits of paper</text>

    <!-- Step 1: rub the comb in hair -->
    <text x="130" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">1. Rub the comb in dry hair</text>
    <rect x="100" y="100" width="60" height="80" rx="4" />
    <text x="130" y="145" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">comb</text>
    <text x="130" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">becomes negative</text>
    <text x="130" y="216" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(gains electrons)</text>

    <!-- Step 2: hold over paper bits -->
    <text x="400" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">2. Hold the comb just above small bits of paper</text>
    <rect x="370" y="100" width="60" height="80" rx="4" />
    <text x="400" y="145" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">-</text>
    <line x1="340" y1="240" x2="460" y2="240" />
    <rect x="350" y="225" width="14" height="10" />
    <rect x="378" y="225" width="14" height="10" />
    <rect x="406" y="225" width="14" height="10" />
    <rect x="434" y="225" width="14" height="10" />
    <text x="400" y="260" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">paper bits (neutral)</text>

    <!-- Step 3: bits jump up -->
    <text x="670" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">3. Paper bits jump to the comb</text>
    <rect x="640" y="100" width="60" height="80" rx="4" />
    <text x="670" y="145" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">-</text>
    <rect x="650" y="190" width="14" height="10" />
    <rect x="676" y="190" width="14" height="10" />
    <line x1="640" y1="220" x2="700" y2="220" stroke-dasharray="4,4" />
    <polygon points="660,205 660,193 654,199" fill="currentColor" stroke="none" />
    <text x="670" y="260" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">paper attracted</text>
    <text x="670" y="276" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">to charged comb</text>

    <text x="400" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The force acts across the gap; the comb does not need to touch each bit.</text>
    <text x="400" y="355" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">This is a non-contact force, just like gravity or magnetism.</text>
  </g>
`

export const electricityStaticBasics: SkillNode = {
  id: 'physics-electricity-static-basics',
  title: 'Static Electricity Basics',
  description:
    'Rubbing two insulators together transfers electrons from one to the other. The object that gains electrons becomes negatively charged and the object that loses them becomes positively charged; protons stay put inside their nuclei. Like charges repel and unlike charges attract, with the force acting across a gap as a non-contact force. Classic UK examples include a balloon rubbed on a school jumper sticking to a wall, a comb picking up small bits of paper after being run through dry hair, and the cling of clothes pulled out of a tumble dryer.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-circuit-symbols'],
  curriculum: {
    ks3Objective:
      'Static electricity: charging of insulators by friction; forces between charged objects (attraction and repulsion); non-contact forces.',
    awardingBodies: {
      aqa: '4.2.5.1 Static charge; insulators charged by friction; forces between charged objects (GCSE Physics 8463)',
      edexcel:
        'Topic 2.21-2.23 Static electricity; charging by friction; attraction and repulsion (GCSE Physics 1PH0)',
      ocr: 'P4.1 Static and charge; charging by friction; attraction and repulsion (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-sb-scene-electron-transfer',
      title: 'Rubbing a Balloon on a Jumper',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow what happens to the electrons when a balloon is rubbed on a school jumper.',
      data: {
        viewBox: '0 0 800 400',
        svg: ATOM_TRANSFER_SVG,
        hotspots: [
          {
            id: 'pe-sb-h-before',
            x: 30,
            y: 18,
            label: 'Before rubbing: both neutral',
            description:
              'The balloon and the jumper each hold equal numbers of positive protons and negative electrons. The total charge on each one is zero.',
          },
          {
            id: 'pe-sb-h-rub',
            x: 52,
            y: 44,
            label: 'Rub them together',
            description:
              'Pressing the balloon against the jumper and rubbing transfers some electrons from the jumper onto the balloon. Protons do not move; they are locked in the nuclei of the atoms.',
          },
          {
            id: 'pe-sb-h-balloon-after',
            x: 67,
            y: 18,
            label: 'Balloon: negative (gained electrons)',
            description:
              'The balloon now holds extra electrons. There are more negative charges than positive ones, so it is negatively charged overall.',
          },
          {
            id: 'pe-sb-h-jumper-after',
            x: 90,
            y: 18,
            label: 'Jumper: positive (lost electrons)',
            description:
              'The jumper has lost the same electrons. It now has more protons than electrons, so it is positively charged overall.',
          },
          {
            id: 'pe-sb-h-rule',
            x: 50,
            y: 82,
            label: 'Rule: electrons move, protons stay',
            description:
              'Rubbing never makes new charge. It only moves existing electrons from one object to the other. The pair together is still neutral.',
          },
        ],
      },
    },
    {
      id: 'pe-sb-scene-forces',
      title: 'Like Charges Repel, Unlike Charges Attract',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how charged objects push or pull each other across a gap.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORCES_SVG,
        hotspots: [
          {
            id: 'pe-sb-h-repel',
            x: 22,
            y: 20,
            label: 'Two negative balloons repel',
            description:
              'Hang two balloons that you have rubbed on a jumper. Both became negatively charged. They push each other away because like charges repel.',
          },
          {
            id: 'pe-sb-h-attract',
            x: 75,
            y: 20,
            label: 'Negative balloon and positive comb attract',
            description:
              'A balloon (negative) and a comb (positive) pull towards each other. Unlike charges attract.',
          },
          {
            id: 'pe-sb-h-non-contact',
            x: 50,
            y: 85,
            label: 'Non-contact force',
            description:
              'The push or pull acts across a gap. The charged objects do not have to touch. The closer they are, the stronger the force feels.',
          },
        ],
      },
    },
    {
      id: 'pe-sb-scene-paper-bits',
      title: 'A Comb Lifts Tiny Bits of Paper',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the demo to follow why a charged comb attracts small bits of paper.',
      data: {
        viewBox: '0 0 800 400',
        svg: PAPER_BITS_SVG,
        hotspots: [
          {
            id: 'pe-sb-h-rub-comb',
            x: 16,
            y: 30,
            label: 'Rub the comb in dry hair',
            description:
              'Running a plastic comb through dry hair transfers electrons onto the comb. The comb becomes negatively charged.',
          },
          {
            id: 'pe-sb-h-hold-over',
            x: 50,
            y: 55,
            label: 'Hold it over the paper bits',
            description:
              'Move the comb close to a row of small bits of paper on a desk. The paper bits start out neutral and are not stuck down.',
          },
          {
            id: 'pe-sb-h-jump',
            x: 84,
            y: 47,
            label: 'Bits jump up to the comb',
            description:
              'The charged comb pulls on the paper bits across the gap. Light bits jump up and stick to the comb. The force is electrostatic, and it acts without touching.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-sb-worked-1',
      title: 'Why a rubbed balloon sticks to a wall',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil rubs a balloon on their school jumper and presses the balloon against a classroom wall. The balloon stays in place for a while.',
        },
        {
          explanation:
            'Apply the rubbing rule. When two insulators are rubbed together, electrons move from one onto the other. Protons do not move; only electrons do.',
        },
        {
          explanation:
            'Identify the direction of transfer. For a balloon on a wool jumper, electrons move from the jumper onto the balloon.',
          maths: 'electrons: jumper to balloon',
        },
        {
          explanation:
            'State the charge on each object. The balloon now has extra electrons, so it is negatively charged. The jumper has lost the same electrons, so it is positively charged.',
        },
        {
          explanation:
            'Explain the wall force. The negative balloon attracts the wall across the small gap, because charged objects pull on nearby neutral surfaces. This electrostatic pull holds the balloon up against gravity.',
        },
        {
          explanation:
            'State the answer. The balloon sticks because rubbing made it negative, and that negative charge pulls it against the wall as a non-contact force.',
        },
      ],
    },
    {
      id: 'pe-sb-worked-2',
      title: 'Counting electrons on a charged balloon',
      steps: [
        {
          explanation:
            'Set out the situation. A balloon is rubbed on a jumper and gains a total of 12 extra electrons. Each electron carries one unit of negative charge. We want the number of extra electrons on the balloon, and the change in protons on the balloon.',
        },
        {
          explanation:
            'Apply the rubbing rule. Only electrons are transferred. Protons stay inside the nuclei of the jumper atoms and inside the nuclei of the balloon atoms.',
        },
        {
          explanation:
            'Count the change in electrons on the balloon. The balloon gained 12 electrons.',
          maths: 'extra electrons = 12',
        },
        {
          explanation:
            'Count the change in protons on the balloon. Protons do not move during rubbing, so the count is unchanged.',
          maths: 'change in protons = 0',
        },
        {
          explanation:
            'State the answer. The balloon now has 12 extra electrons and the same number of protons it started with. The 12 extra negatives make the balloon negatively charged overall.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-sb-q1',
      type: 'multiple-choice',
      stem: 'A balloon is rubbed on a school jumper and becomes negatively charged. Which particles have been transferred during the rubbing?',
      tier: 'core',
      options: [
        'Electrons, from the jumper onto the balloon',
        'Protons, from the jumper onto the balloon',
        'Both electrons and protons, in equal numbers',
        'Neutrons, from the jumper onto the balloon',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-protons-move',
      hint: 'Protons sit inside the nuclei and do not move during rubbing. Only one kind of particle is transferred.',
    },
    {
      id: 'pe-sb-q2',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Two balloons are each rubbed on a wool jumper and hung on strings near each other. Explain what they do, using charges.',
      tier: 'confident',
      steps: [
        'Each balloon is rubbed on the same kind of jumper, so each balloon gains extra electrons from the wool.',
        'Both balloons now hold extra electrons, so both end up with a negative charge.',
        null,
        'The push acts across the gap as a non-contact force, so the two balloons swing apart on their strings.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The two balloons hold the same kind of charge, so they repel each other; like charges repel.',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-like-attract',
    },
    {
      id: 'pe-sb-q3',
      type: 'numeric-entry',
      stem: 'A balloon is rubbed on a jumper and gains 8 extra electrons. How many protons does it gain during the rubbing?',
      tier: 'core',
      correctAnswer: 0,
      unit: '',
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-protons-move',
      hint: 'Protons are locked inside the nuclei. Only electrons move during rubbing.',
    },
    {
      id: 'pe-sb-q4',
      type: 'numeric-entry',
      stem: 'A polythene rod is rubbed with a duster and gains 15 extra electrons. By how many grams does the mass shown on a school balance for the rod change, to the nearest gram? An electron is far too light for a classroom balance to weigh.',
      tier: 'confident',
      correctAnswer: 0,
      unit: 'g',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-charge-is-mass',
      hint: 'Electrons have a tiny mass. A school balance reads to the nearest gram, so the change in reading is zero.',
    },
    {
      id: 'pe-sb-q5',
      type: 'numeric-entry',
      stem: 'Before rubbing, a balloon and a jumper together hold a total charge of 0 units. The balloon gains 10 negative units of charge during the rubbing. What is the charge on the jumper after rubbing, in units? Use a negative sign if the charge is negative.',
      tier: 'confident',
      correctAnswer: 10,
      unit: '',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
      hint: 'The total charge of the pair is conserved at 0. If one side becomes -10, the other side must balance it.',
    },
    {
      id: 'pe-sb-q6',
      type: 'numeric-entry',
      stem: 'Two charged spheres in a school lab demo are placed at three different separations and the force on each one is measured: at 4 cm the force is 9 units, at 2 cm it is much stronger, and at 8 cm it is much weaker. The spheres never touch. At which separation, in cm, is the force the strongest?',
      tier: 'confident',
      correctAnswer: 2,
      unit: 'cm',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-needs-contact',
      hint: 'The closer two charged objects sit, the stronger the push or pull between them, even across a gap.',
    },
    {
      id: 'pe-sb-q7',
      type: 'spot-misconception',
      stem: 'Aisha says: "When I rub a balloon on my jumper, the rubbing creates brand new charge that did not exist before."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The rubbing makes fresh charge appear on the balloon out of nothing.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Rubbing does not create charge. It transfers electrons that were already there from the jumper onto the balloon, leaving the jumper positive and the balloon negative.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
    },
    {
      id: 'pe-sb-q8',
      type: 'drag-order',
      stem: 'A pupil wants to build up a static charge on a rod. Put the steps in order so that the rod will end up holding a static charge, not letting it flow away through the hand.',
      tier: 'challenge',
      items: [
        'The plastic rod now holds a lasting negative charge that can pick up small bits of paper.',
        'Pick a plastic rod, because plastic is an insulator and will hold the charge in place.',
        'Hold the rod in a dry cloth, not in a bare hand, so the charge cannot leak away through the body to earth.',
        'Rub the rod briskly with the cloth so that electrons transfer from the cloth onto the rod.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      misconceptionId: 'pe-sb-mis-any-material',
      hint: 'Think about which materials hold charge, what your hand would do, and what the rubbing transfers.',
    },
    {
      id: 'pe-sb-q9',
      type: 'multiple-choice',
      stem: 'Two negatively charged balloons hang on strings near each other. What do they do?',
      tier: 'core',
      options: [
        'They attract each other and swing together.',
        'They repel each other and swing apart, because like charges repel.',
        'They stay still, because charged objects do not exert forces across a gap.',
        'They swap charges instantly and become neutral.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-like-attract',
      hint: 'Both balloons hold the same sign of charge. Like signs push apart.',
    },
    {
      id: 'pe-sb-q10',
      type: 'multiple-choice',
      stem: 'A pupil pulls clothes out of a UK tumble dryer and feels a small shock from the jumper. What is happening?',
      tier: 'core',
      options: [
        'The clothes have been heated, and the warmth feels like a shock.',
        'The dryer leaks mains current onto the clothes.',
        'Rubbing inside the drum transferred electrons between the clothes; the build-up of static charge discharges through the hand.',
        'The clothes have lost mass during drying and become unstable.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
      hint: 'Tumbling clothes against each other rubs them together. Static charges build up and can discharge.',
    },
    {
      id: 'pe-sb-q11',
      type: 'multiple-choice',
      stem: 'A negatively charged comb is held a small way above a row of paper bits on a desk. The paper bits jump up to the comb without the comb touching them. This force is best described as:',
      tier: 'core',
      options: [
        'A contact force, because the comb has to land on the paper first.',
        'A gravitational force from the comb.',
        'Magnetism, because plastics are magnetic.',
        'A non-contact electrostatic force, acting across the gap between charged comb and paper.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-needs-contact',
      hint: 'The force reaches across a gap without touching, like gravity or magnetism.',
    },
    {
      id: 'pe-sb-q12',
      type: 'multiple-choice',
      stem: 'A pupil rubs a balloon on a jumper. Which of these is the best statement about the total charge of the balloon and jumper together, before and after the rubbing?',
      tier: 'core',
      options: [
        'It rises, because the rubbing creates new negative charge.',
        'It falls, because the rubbing destroys some positive charge.',
        'It stays at zero, because rubbing only moves electrons between the two objects without creating or destroying any charge.',
        'It becomes negative, because the balloon is negative.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
      hint: 'Conservation of charge: rubbing only transfers electrons; the pair together is still neutral.',
    },
    {
      id: 'pe-sb-q13',
      type: 'multiple-choice',
      stem: 'Why does the classic comb-and-paper demo use a plastic comb rather than a metal one held in a bare hand?',
      tier: 'core',
      options: [
        'A metal comb is too heavy to use in the demo.',
        'Metal does not let charge build up because metals are insulators.',
        'A plastic comb is an insulator and holds the static charge; charge on a metal comb would flow through the hand to earth.',
        'A plastic comb is a conductor, so it spreads the charge evenly.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-sb-mis-any-material',
      hint: 'Conductors let charge flow away through the hand to earth. Insulators hold the charge in place.',
    },
    {
      id: 'pe-sb-q14',
      type: 'multiple-choice',
      stem: 'A jumper loses 3 × 10⁹ electrons onto a balloon during rubbing. How many electrons does the balloon gain?',
      tier: 'confident',
      options: [
        '3 × 10⁹; the same number, by conservation of charge.',
        '0; the balloon does not gain any electrons.',
        '1.5 × 10⁹; half of what the jumper lost.',
        '6 × 10⁹; double, because the balloon gains electrons twice.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
      hint: 'Conservation of charge: every electron lost by the jumper is gained by the balloon.',
    },
    {
      id: 'pe-sb-q15',
      type: 'numeric-entry',
      stem: 'Two equally charged spheres at a separation of 4 cm exert a force of 16 units on each other. If the spheres are moved closer together, the force grows; if they are moved further apart, it shrinks. The set of separations tested is 2 cm, 4 cm, 6 cm, 8 cm and 10 cm. At which separation, in cm, is the force the weakest?',
      tier: 'confident',
      correctAnswer: 10,
      tolerance: 0.05,
      unit: 'cm',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-needs-contact',
      hint: 'Greater separation gives a weaker force across the gap.',
    },
    {
      id: 'pe-sb-q16',
      type: 'numeric-entry',
      stem: 'Before rubbing, a plastic rod and a duster together hold 0 units of charge. After rubbing, the duster carries -6 units of charge. What charge, in units, does the rod now carry? Use a positive sign if positive.',
      tier: 'confident',
      correctAnswer: 6,
      tolerance: 0,
      unit: '',
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-rubbing-creates-charge',
      hint: 'The total charge of the pair is conserved at 0. If one side is -6, the other must be +6.',
    },
    {
      id: 'pe-sb-q17',
      type: 'multiple-choice',
      stem: 'Two pupils each rub a balloon on the same wool jumper, then bring the two balloons close together. What do the balloons do?',
      tier: 'confident',
      options: [
        'They attract each other, because they were rubbed on the same jumper.',
        'They repel each other; both balloons gained electrons from the wool, so both are negative, and like charges repel.',
        'One balloon attracts and the other repels at random.',
        'Nothing, because they are both insulators.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-sb-mis-like-attract',
      hint: 'Both balloons gain electrons from the wool, so both end up with the same kind of charge.',
    },
    {
      id: 'pe-sb-q18',
      type: 'numeric-entry',
      stem: 'A pupil rubs a balloon and counts that it gains 25 extra electrons. How many extra negative units of charge does the balloon now hold, in units (one electron = one negative unit)?',
      tier: 'challenge',
      correctAnswer: 25,
      tolerance: 0,
      unit: '',
      xpValue: 20,
      misconceptionId: 'pe-sb-mis-charge-is-mass',
      hint: 'Each extra electron carries one negative unit of charge. Mass barely changes; what changes is the total charge.',
    },
    {
      id: 'pe-sb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a neutral wall attracts a negatively charged balloon, so the balloon sticks to it after being rubbed on a jumper.',
      tier: 'challenge',
      steps: [
        'Start from the situation: a balloon has been rubbed on a jumper and now carries a small negative charge.',
        'State the rule: like charges repel and unlike charges attract; the force is a non-contact force across a gap.',
        'Describe the wall: it is overall neutral but its atoms have negative electrons and positive nuclei.',
        null,
        'The slight separation of charge inside the wall leaves a tiny positive layer near the balloon, which attracts the negative balloon.',
        'State the answer: the balloon is held to the wall by an electrostatic pull across the gap, strong enough to support its small weight.',
      ],
      missingStepIndex: 3,
      correctStep: 'The negative balloon repels electrons in the wall surface just below it, pushing them slightly away from the surface.',
      xpValue: 20,
      misconceptionId: 'pe-sb-mis-needs-contact',
    },
    {
      id: 'pe-sb-q20',
      type: 'drag-order',
      stem: 'Put the steps in order to explain why a polythene rod, rubbed with a duster, then held near a thin stream of tap water, bends the water sideways.',
      tier: 'challenge',
      items: [
        'The water bends sideways towards the rod, because the polar water molecules are pulled by the charged rod across the gap.',
        'A polythene rod is rubbed briskly with a duster; electrons transfer onto the rod and it becomes negatively charged.',
        'The charged rod sets up a non-contact electrostatic force that reaches into the stream of water.',
        'Water molecules are polar: each one has a slight positive side and a slight negative side, so they line up in the electric field.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Charge the rod, set up a force across the gap, line up the water molecules, then describe the bend.',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, "Electric circuits and static electricity" diagnostic question set, KS3 item where pupils write that "protons move from the jumper onto the balloon" when describing charging by friction.
    {
      id: 'pe-sb-mis-protons-move',
      description:
        'When two insulators are rubbed together, both protons and electrons move from one onto the other.',
      triggerAnswer: 'protons-move',
      correction:
        'In fact only electrons move during rubbing. Protons sit inside the nuclei of atoms and cannot leave them by rubbing.',
      reExplanation:
        'Picture an atom as a tight central core (the nucleus) holding protons and neutrons, with electrons in a fuzzy cloud around it. The cloud is the bit you can disturb. Rubbing peels off a few outer electrons and drops them onto the other surface. The nuclei stay put, so no protons move. The object that gains electrons becomes negative; the one that loses them becomes positive.',
    },
    // Source: Driver R., Squires A., Rushworth P., Wood-Robinson V. (1994), "Making Sense of Secondary Science: Research into Children's Ideas", Routledge, pages on static electricity: many learners describe rubbing as creating new charge rather than transferring existing electrons.
    {
      id: 'pe-sb-mis-rubbing-creates-charge',
      description:
        'Rubbing two objects together creates brand new charge that was not there before.',
      triggerAnswer: 'rubbing-creates-charge',
      correction:
        'In fact no new charge is made. Rubbing only moves existing electrons from one surface to the other. The total charge of the pair stays the same as before.',
      reExplanation:
        'Before rubbing, the balloon and the jumper each have equal numbers of protons and electrons, so each is neutral. Rubbing shifts a few electrons from the jumper onto the balloon. The balloon now has extra electrons and is negative; the jumper has lost the same electrons and is positive. The two charges balance, so the pair together is still neutral.',
    },
    // Source: AQA GCSE Physics 8463 examiner reports, Paper 2 Foundation tier 2019, candidates often wrote that two balloons rubbed on the same jumper would stick together, missing the like-repels-like rule.
    {
      id: 'pe-sb-mis-like-attract',
      description:
        'Two objects that have been charged by the same rubbing both end up sticking to each other.',
      triggerAnswer: 'like-attract',
      correction:
        'In fact two objects with the same kind of charge push each other apart. Like charges repel; only unlike charges attract.',
      reExplanation:
        'Rub two balloons on the same jumper and both pick up extra electrons, so both are negatively charged. Hang them on strings side by side and they swing apart. Replace one with a positive comb and the balloon and comb pull together instead. The rule is simple: same sign pushes away, opposite signs pull in.',
    },
    // Source: Driver R. et al. (1994), "Making Sense of Secondary Science", Routledge: a common pupil view is that the electrostatic force needs the two objects to touch, missing that it acts across a gap as a non-contact force.
    {
      id: 'pe-sb-mis-needs-contact',
      description:
        'A charged object can only pull on or push on another object once they are touching.',
      triggerAnswer: 'needs-contact',
      correction:
        'In fact the electrostatic force is a non-contact force. It acts across a gap, in the same way that gravity and magnetism do.',
      reExplanation:
        'Hold a charged comb a small way above a row of paper bits and the bits jump up to it before the comb has even reached them. The pull travels across the gap. The same is true of two balloons hung close to each other: they swing apart while still well separated. Charged objects do not have to touch for the force to act.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner reports, Paper J259/02 2021, candidates wrote that a balloon "gets less heavy" when it becomes negative, or that it "gains mass" when it loses electrons, missing the role of charge.
    {
      id: 'pe-sb-mis-charge-is-mass',
      description:
        'An object that gains electrons becomes heavier, and one that loses electrons becomes lighter, in a way you can feel.',
      triggerAnswer: 'charge-is-mass',
      correction:
        'In fact the change in mass from a few extra electrons is far too small to notice. What changes is the overall charge on the object, not its weight.',
      reExplanation:
        'An electron has a tiny mass, around two thousand times less than a proton. Rubbing a balloon shifts only a small number of electrons across, so the mass change is far below what any school balance could pick up. The big change is that the balloon is now negatively charged, which is why it sticks to a wall and pulls on bits of paper.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, "Static electricity" diagnostic set: pupils often write that conductors like a metal rod can be charged just by rubbing them in the hand, missing that the charge would flow away to earth.
    {
      id: 'pe-sb-mis-any-material',
      description:
        'Rubbing any material at all, including a metal rod held in a bare hand, will leave it with a static charge.',
      triggerAnswer: 'any-material',
      correction:
        'In fact rubbing only leaves a lasting charge on insulators. A metal rod held in your hand is a conductor, so any charge would flow away to earth through your body.',
      reExplanation:
        'Insulators like balloons, plastic combs, polythene rods and woollen jumpers do not let charge flow easily, so any electrons rubbed onto them stay put. Conductors like copper or steel let charge flow through them, so a charge moves away through your hand and to earth as soon as it builds up. That is why the classic demos use plastic rods, balloons and combs rather than metal ones.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityStaticBasicsZoneNodes = [electricityStaticBasics]
