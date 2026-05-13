import type { SkillNode } from '@/types/content'

export const resolution: SkillNode = {
  id: 'biology-microscopy-resolution',
  title: 'Resolution and the Limits of Light Microscopy',
  description:
    'See why a school light microscope can show a whole cell clearly but cannot pick out the tiny structures inside it. RESOLUTION is the smallest distance between two points at which they still look like two separate points and not one blurry blob. The light microscope hits a hard floor at about 200 nm (0.2 micrometres) because the wavelength of visible light bounds it. Year 7 biologists use this idea to explain everyday lab limits: a mitochondrion at 2 micrometres is well above the limit and shows up; a ribosome at 25 nm is well below and stays invisible no matter how much you turn the magnification up. Magnification and resolution are NOT the same: magnification makes the image bigger, resolution decides whether that bigger image is sharp or just a blurred-up version of the same patch.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-microscopy',
  zoneName: 'Microscopy',
  tier: 'confident',
  prerequisites: ['biology-microscopy-light-microscope'],
  curriculum: {
    ks3Objective:
      'How to observe, interpret and record cell structure using a light microscope; the limits of what can be distinguished with a school microscope.',
    awardingBodies: {
      aqa: '4.1.1.3 Magnification, resolution and the limits of light microscopy (GCSE Biology 8461)',
      edexcel: 'CB1e Resolution; why electron microscopes are needed for ultra-small structures (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1.4 The relationship between magnification, resolution and the practical limits of light microscopy (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bmi-re-two-dots',
      title: 'Two Dots, One Dot: What Resolution Means',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a far-apart pair of dots (resolved as two) with a close-together pair (blurred into one). The school microscope cannot tell them apart below about 200 nm.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">RESOLUTION: CAN YOU STILL SEE TWO POINTS, OR HAVE THEY BLURRED INTO ONE?</text><g><rect x="20" y="40" width="150" height="70" rx="6" fill="#FFFFFF" stroke="#14532D" stroke-width="1.6"/><text x="95" y="56" text-anchor="middle" font-size="8" font-weight="700" fill="#14532D">FAR APART (above 200 nm)</text><circle cx="65" cy="82" r="6" fill="#1D4ED8"/><circle cx="125" cy="82" r="6" fill="#1D4ED8"/><text x="95" y="104" text-anchor="middle" font-size="7" fill="#14532D">two clear separate points</text></g><g><rect x="190" y="40" width="150" height="70" rx="6" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="1.6"/><text x="265" y="56" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">TOO CLOSE (below 200 nm)</text><ellipse cx="265" cy="82" rx="14" ry="7" fill="#DC2626" opacity="0.45"/><circle cx="262" cy="82" r="5" fill="#DC2626"/><circle cx="268" cy="82" r="5" fill="#DC2626"/><text x="265" y="104" text-anchor="middle" font-size="7" fill="#7F1D1D">they blur into one blob</text></g><g><line x1="40" y1="138" x2="320" y2="138" stroke="#1E3A8A" stroke-width="1.2"/><line x1="40" y1="134" x2="40" y2="142" stroke="#1E3A8A"/><line x1="320" y1="134" x2="320" y2="142" stroke="#1E3A8A"/><text x="180" y="132" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">SAME WIDTH ON SCREEN, DIFFERENT REAL-WORLD GAPS</text><text x="180" y="154" text-anchor="middle" font-size="7" fill="#1E3A8A">left pair: real gap about 1 micrometre (1000 nm)</text><text x="180" y="166" text-anchor="middle" font-size="7" fill="#1E3A8A">right pair: real gap about 100 nm (below the limit)</text></g><g><rect x="40" y="180" width="280" height="28" rx="4" fill="#FEF3C7" stroke="#92400E"/><text x="180" y="196" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">SCHOOL LIGHT MICROSCOPE RESOLUTION LIMIT: ABOUT 200 nm</text><text x="180" y="205" text-anchor="middle" font-size="6" fill="#92400E">below this gap, two points always look like one, no matter the magnification</text></g></svg>',
        hotspots: [
          {
            id: 'bmi-re-td-far',
            x: 27,
            y: 33,
            label: 'Far apart: two dots stay separate',
            description:
              'Each blue dot stands for one tiny point of detail on a slide. When the real gap between them is well above 200 nm, the school microscope shows them clearly as two. This is what we mean by saying the pair is RESOLVED.',
          },
          {
            id: 'bmi-re-td-close',
            x: 74,
            y: 33,
            label: 'Too close: dots blur into one',
            description:
              'Here the two red dots sit only about 100 nm apart, below the resolution limit. The image overlaps so the pair looks like a single fuzzy blob. Turning the magnification up does not help: it just makes the same blob bigger.',
          },
          {
            id: 'bmi-re-td-limit',
            x: 50,
            y: 87,
            label: 'The 200 nm limit',
            description:
              'About 200 nm (0.2 micrometres) is the smallest gap a school light microscope can resolve. The number comes from the wavelength of visible light, not from the lens quality. A better bulb or a more expensive eyepiece does not lower this floor.',
          },
          {
            id: 'bmi-re-td-key',
            x: 50,
            y: 65,
            label: 'Resolution is a real-world gap, not a screen gap',
            description:
              'Both pairs look the same width on the screen because the image is enlarged the same way. What matters is the real gap on the slide. If that real gap is below 200 nm, no amount of zoom turns the blob back into two points.',
          },
        ],
      },
    },
    {
      id: 'bmi-re-light-limit',
      title: 'What You Can See: Cell Sizes Against the 200 nm Floor',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the size ladder. Structures ABOVE the dashed line (200 nm) can be picked out under a school light microscope. Structures BELOW the line cannot.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">SIZE LADDER OF CELL PARTS (log scale, drawn small to large)</text><line x1="80" y1="40" x2="80" y2="200" stroke="#1E3A8A" stroke-width="1.4"/><line x1="76" y1="40" x2="84" y2="40" stroke="#1E3A8A"/><line x1="76" y1="200" x2="84" y2="200" stroke="#1E3A8A"/><text x="56" y="44" text-anchor="end" font-size="7" fill="#1E3A8A">100 micrometres</text><text x="56" y="80" text-anchor="end" font-size="7" fill="#1E3A8A">10 micrometres</text><text x="56" y="116" text-anchor="end" font-size="7" fill="#1E3A8A">1 micrometre</text><text x="56" y="152" text-anchor="end" font-size="7" fill="#1E3A8A">100 nm</text><text x="56" y="188" text-anchor="end" font-size="7" fill="#1E3A8A">10 nm</text><line x1="76" y1="80" x2="84" y2="80" stroke="#1E3A8A"/><line x1="76" y1="116" x2="84" y2="116" stroke="#1E3A8A"/><line x1="76" y1="152" x2="84" y2="152" stroke="#1E3A8A"/><line x1="76" y1="188" x2="84" y2="188" stroke="#1E3A8A"/><line x1="80" y1="134" x2="340" y2="134" stroke="#DC2626" stroke-width="1.4" stroke-dasharray="4 3"/><text x="335" y="130" text-anchor="end" font-size="8" font-weight="700" fill="#7F1D1D">SCHOOL LIGHT MICROSCOPE LIMIT: about 200 nm</text><g><circle cx="120" cy="56" r="6" fill="#86EFAC" stroke="#14532D"/><text x="140" y="58" font-size="7" fill="#14532D">human cheek cell, about 60 micrometres (visible)</text></g><g><circle cx="120" cy="92" r="5" fill="#86EFAC" stroke="#14532D"/><text x="140" y="94" font-size="7" fill="#14532D">plant cell, about 30 micrometres (visible)</text></g><g><circle cx="120" cy="116" r="4" fill="#86EFAC" stroke="#14532D"/><text x="140" y="118" font-size="7" fill="#14532D">mitochondrion, about 2 micrometres (just visible)</text></g><g><circle cx="120" cy="146" r="3" fill="#FCA5A5" stroke="#7F1D1D"/><text x="140" y="148" font-size="7" fill="#7F1D1D">virus, about 100 nm (below limit, not visible)</text></g><g><circle cx="120" cy="172" r="3" fill="#FCA5A5" stroke="#7F1D1D"/><text x="140" y="174" font-size="7" fill="#7F1D1D">ribosome, about 25 nm (well below limit, invisible)</text></g><g><rect x="240" y="48" width="100" height="16" rx="3" fill="#DCFCE7" stroke="#15803D"/><text x="290" y="60" text-anchor="middle" font-size="7" font-weight="700" fill="#14532D">VISIBLE BAND</text><rect x="240" y="160" width="100" height="16" rx="3" fill="#FEE2E2" stroke="#7F1D1D"/><text x="290" y="172" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">BELOW THE LIMIT</text></g></svg>',
        hotspots: [
          {
            id: 'bmi-re-ll-cheek',
            x: 33,
            y: 25,
            label: 'Cheek cell, about 60 micrometres',
            description:
              'A whole human cheek cell is about 60 micrometres across, which is 300 times the resolution limit. It shows up clearly under a school microscope at low power, with the nucleus visible as a darker dot inside.',
          },
          {
            id: 'bmi-re-ll-mito',
            x: 33,
            y: 53,
            label: 'Mitochondrion, about 2 micrometres',
            description:
              'A mitochondrion is about 2 micrometres long, which is 10 times the 200 nm floor. It is right at the edge of what the high-power objective on a school microscope can resolve as a separate shape inside the cell.',
          },
          {
            id: 'bmi-re-ll-line',
            x: 50,
            y: 61,
            label: 'The 200 nm line: hard floor',
            description:
              'The red dashed line sits at about 200 nm (0.2 micrometres). Anything ABOVE it can be resolved as a separate shape under a school light microscope. Anything BELOW it stays invisible no matter how strong the eyepiece is.',
          },
          {
            id: 'bmi-re-ll-virus',
            x: 33,
            y: 66,
            label: 'Virus, about 100 nm',
            description:
              'A typical virus is about 100 nm across, which is half the resolution limit. It is well below the dashed line, so a school light microscope cannot pick it out. Electron microscopes were built partly to see structures at this size.',
          },
          {
            id: 'bmi-re-ll-ribosome',
            x: 33,
            y: 78,
            label: 'Ribosome, about 25 nm',
            description:
              'A ribosome is about 25 nm across, which is 8 times smaller than the resolution limit. Light cannot resolve points this close together. To see ribosomes you need an electron microscope, which uses electrons with a far shorter wavelength.',
          },
        ],
      },
    },
    {
      id: 'bmi-re-mag-vs-res',
      title: 'Magnification is Not Resolution',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the same patch of slide enlarged twice. More magnification past the resolution limit does NOT reveal new detail; it just enlarges the blur.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">SAME PATCH, MORE ZOOM: DETAIL DOES NOT INCREASE PAST THE LIMIT</text><g><rect x="20" y="40" width="100" height="100" rx="6" fill="#FFFFFF" stroke="#1E3A8A"/><text x="70" y="56" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">x40 OBJECTIVE</text><circle cx="50" cy="90" r="6" fill="#1D4ED8"/><circle cx="90" cy="90" r="6" fill="#1D4ED8"/><text x="70" y="124" text-anchor="middle" font-size="7" fill="#1E3A8A">two dots resolved</text><text x="70" y="134" text-anchor="middle" font-size="7" fill="#1E3A8A">(real gap above 200 nm)</text></g><g><rect x="140" y="40" width="100" height="100" rx="6" fill="#FFFFFF" stroke="#7F1D1D"/><text x="190" y="56" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">x400 (10x ZOOM)</text><ellipse cx="190" cy="90" rx="22" ry="11" fill="#DC2626" opacity="0.4"/><circle cx="180" cy="90" r="9" fill="#DC2626"/><circle cx="200" cy="90" r="9" fill="#DC2626"/><text x="190" y="124" text-anchor="middle" font-size="7" fill="#7F1D1D">still one blob, just bigger</text><text x="190" y="134" text-anchor="middle" font-size="7" fill="#7F1D1D">(real gap below 200 nm)</text></g><g><rect x="260" y="40" width="80" height="100" rx="6" fill="#FEF3C7" stroke="#92400E"/><text x="300" y="58" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">RULE</text><text x="300" y="76" text-anchor="middle" font-size="7" fill="#7F1D1D">MAGNIFICATION:</text><text x="300" y="86" text-anchor="middle" font-size="6" fill="#92400E">how much bigger the</text><text x="300" y="96" text-anchor="middle" font-size="6" fill="#92400E">image looks</text><text x="300" y="112" text-anchor="middle" font-size="7" fill="#7F1D1D">RESOLUTION:</text><text x="300" y="122" text-anchor="middle" font-size="6" fill="#92400E">how close two points</text><text x="300" y="132" text-anchor="middle" font-size="6" fill="#92400E">can be and still split</text></g><g><rect x="40" y="160" width="280" height="40" rx="6" fill="#FFFFFF" stroke="#1E3A8A"/><text x="180" y="178" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">EMPTY MAGNIFICATION</text><text x="180" y="192" text-anchor="middle" font-size="7" fill="#1E3A8A">past the 200 nm resolution floor, more zoom only enlarges the same blur</text></g></svg>',
        hotspots: [
          {
            id: 'bmi-re-mr-x40',
            x: 19,
            y: 41,
            label: 'x40 objective: two points resolved',
            description:
              'At x40, two real points on the slide that sit about 1 micrometre apart show up as two clear dots. The school microscope resolves them because the real gap is well above the 200 nm floor.',
          },
          {
            id: 'bmi-re-mr-x400',
            x: 53,
            y: 41,
            label: 'x400: still one blob, just bigger',
            description:
              'At x400 the same patch is 10 times bigger on screen, but the two points have moved BELOW the 200 nm floor of what the system can resolve. They have merged into one blurred blob. More zoom does not add detail past the floor.',
          },
          {
            id: 'bmi-re-mr-rule',
            x: 83,
            y: 41,
            label: 'Magnification vs resolution',
            description:
              'MAGNIFICATION is how much bigger the image looks compared with the real specimen. RESOLUTION is how close two real points can be on the slide and still be told apart. They are different ideas: you can have one without the other.',
          },
          {
            id: 'bmi-re-mr-empty',
            x: 50,
            y: 82,
            label: 'Empty magnification',
            description:
              'When you push the magnification past what the resolution can support, the bigger image carries no new detail. Biologists call this empty magnification: the picture is larger but no sharper. The light microscope hits empty magnification past about x1500.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bmi-re-worked-1',
      title: 'Comparing two cell structures to the 200 nm resolution limit',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil at a Birmingham grammar school is looking at an animal cell under the high-power objective of a school light microscope. She wants to know which of these two structures she should be able to see as a separate shape, and which will stay invisible: a mitochondrion (about 2 micrometres long) and a ribosome (about 25 nm across).',
        },
        {
          explanation:
            'Step 1: write the resolution floor in the same units as the structures. The school light microscope can resolve points that are about 200 nm apart. In micrometres that is 0.2 micrometres.',
          maths: 'limit = 200 nm = 0.2 micrometres',
        },
        {
          explanation:
            'Step 2: convert both structures into the same unit so we can compare. Mitochondrion is already in micrometres at 2 micrometres. Ribosome is 25 nm. Convert 25 nm into micrometres: divide by 1000 because 1 micrometre = 1000 nm.',
          maths: '25 nm / 1000 = 0.025 micrometres',
        },
        {
          explanation:
            'Step 3: compare each to the 0.2 micrometre limit. The mitochondrion at 2 micrometres is 10 times BIGGER than the limit. The ribosome at 0.025 micrometres is 8 times SMALLER than the limit.',
          maths: '2 / 0.2 = 10, 0.2 / 0.025 = 8',
        },
        {
          explanation:
            'Step 4: state which is visible. Anything bigger than the 0.2 micrometre floor can be resolved as a separate shape, so the mitochondrion shows up as a tiny rod inside the cell. Anything smaller than the floor cannot be resolved, so the ribosome stays invisible no matter how much you turn up the magnification.',
        },
        {
          explanation:
            'Step 5: read off the rule. To see the ribosome the pupil would need a microscope with a much shorter wavelength, which is what an electron microscope provides. A school light microscope hits a hard floor at about 200 nm because of the wavelength of visible light.',
          maths: 'visible: about 2 micrometres > 0.2 micrometres; invisible: 0.025 micrometres < 0.2 micrometres',
        },
      ],
    },
    {
      id: 'bmi-re-worked-2',
      title: 'Why doubling the magnification past the limit does not help',
      steps: [
        {
          explanation:
            'Question: in a Cambridge biochemistry teaching lab, a pupil is told that a school microscope can resolve points down to about 200 nm. Two tiny features on a slide sit 150 nm apart. The pupil tries x100, then x400, then x1000, then x2000. At which magnification does she finally see the pair as two separate points, and why?',
        },
        {
          explanation:
            'Step 1: compare the real gap with the resolution floor. The features are 150 nm apart. The floor is 200 nm. 150 nm is BELOW the floor.',
          maths: '150 nm < 200 nm',
        },
        {
          explanation:
            'Step 2: ask what magnification changes. Magnification controls how big the image looks; it does not change the floor. The floor is set by the wavelength of visible light, not by the lens.',
          maths: 'floor = function of wavelength, not magnification',
        },
        {
          explanation:
            'Step 3: state the answer. At every magnification she tried, the two features look like one blob, because the real gap is below the floor. The blob just gets bigger at higher magnification.',
        },
        {
          explanation:
            'Step 4: name the effect. Past the resolution limit, extra magnification gives a larger picture with no new detail. Biologists call this empty magnification. School light microscopes hit it past about x1500.',
        },
        {
          explanation:
            'Step 5: state the fix. To resolve a 150 nm gap she would need an instrument with a shorter wavelength or a different imaging method, such as an electron microscope. Turning the school eyepiece higher cannot do it.',
          maths: 'needs shorter wavelength to drop the floor below 150 nm',
        },
      ],
    },
    {
      id: 'bmi-re-worked-3',
      title: 'Converting between micrometres and nanometres for the resolution check',
      steps: [
        {
          explanation:
            'Question: an NHS pathology technician puts a slide under a high-power objective. A structure on the slide is 0.5 micrometres across. Will the school-grade microscope she practised on at sixth form resolve it as a separate shape against the 200 nm floor?',
        },
        {
          explanation:
            'Step 1: convert both numbers to the same unit. Easiest is to put everything in nanometres because the floor is already given in nanometres.',
          maths: '1 micrometre = 1000 nm',
        },
        {
          explanation:
            'Step 2: convert the structure size. 0.5 micrometres x 1000 = 500 nm.',
          maths: '0.5 micrometres x 1000 = 500 nm',
        },
        {
          explanation:
            'Step 3: compare. The structure is 500 nm; the floor is 200 nm. 500 nm is BIGGER than 200 nm, so the structure sits above the floor.',
          maths: '500 nm > 200 nm',
        },
        {
          explanation:
            'Step 4: state the answer. Yes, a school light microscope should resolve a 500 nm structure as a separate shape, because it is above the resolution floor. The shape will be small but the system can still tell it apart from the bits next to it.',
        },
        {
          explanation:
            'Step 5: cross-check by the other direction. 200 nm in micrometres is 200 / 1000 = 0.2 micrometres. The structure at 0.5 micrometres is more than twice 0.2 micrometres, so the answer holds. The conversion does not change which is bigger; it just lets us compare like-for-like.',
          maths: '200 / 1000 = 0.2 micrometres, and 0.5 micrometres > 0.2 micrometres',
        },
      ],
    },
  ],
  questions: [
    // CORE (7) ----------------------------------------------------------------
    {
      id: 'bmi-re-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes RESOLUTION in microscopy?',
      tier: 'core',
      options: [
        'How much bigger the image is compared with the real specimen',
        'The smallest distance between two points at which they still look like two separate points',
        'How bright the bulb under the stage shines',
        'The number of objective lenses on the nosepiece',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bmi-re-mis-mag-equals-res',
    },
    {
      id: 'bmi-re-q2',
      type: 'multiple-choice',
      stem: 'What is the approximate resolution limit of a school light microscope?',
      tier: 'core',
      options: [
        'About 200 millimetres',
        'About 200 micrometres',
        'About 200 nm',
        'About 200 metres',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bmi-re-mis-no-limit',
    },
    {
      id: 'bmi-re-q3',
      type: 'numeric-entry',
      stem: 'How many nanometres are there in 1 micrometre? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 1000,
      xpValue: 10,
      hint: '1 micrometre is one thousandth of a millimetre, and 1 nanometre is one thousandth of a micrometre.',
    },
    {
      id: 'bmi-re-q4',
      type: 'numeric-entry',
      stem: 'Write the 200 nm resolution limit of a school light microscope in MICROMETRES. Give your answer as a decimal.',
      tier: 'core',
      correctAnswer: 0.2,
      xpValue: 10,
      hint: '1 micrometre = 1000 nm, so divide 200 by 1000.',
    },
    {
      id: 'bmi-re-q5',
      type: 'drag-order',
      stem: 'Put these four structures in order from SMALLEST to LARGEST.',
      tier: 'core',
      items: [
        'Plant cell (about 30 micrometres)',
        'Ribosome (about 25 nm)',
        'Mitochondrion (about 2 micrometres)',
        'Virus (about 100 nm)',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
    },
    {
      id: 'bmi-re-q6',
      type: 'multiple-choice',
      stem: 'A pupil in a school lab looks at a cheek-cell slide under a light microscope. Which of these is most likely VISIBLE as a separate shape?',
      tier: 'core',
      options: [
        'A ribosome at about 25 nm',
        'A small virus at about 100 nm',
        'A single hydrogen atom',
        'A whole cheek cell at about 60 micrometres',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bmi-re-mis-can-see-anything',
    },
    {
      id: 'bmi-re-q7',
      type: 'spot-misconception',
      stem: 'Ben says: "Magnification and resolution are the same thing. They both mean how much detail you can see."',
      tier: 'core',
      statements: [
        {
          text: 'Ben is right. The two words mean the same thing in microscopy.',
          isMisconception: true,
        },
        {
          text: 'Ben is wrong. Magnification is how much bigger the image looks. Resolution is the smallest gap between two points that still shows as two. You can have a big image that is still blurry.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bmi-re-mis-mag-equals-res',
    },
    // CONFIDENT (8) -----------------------------------------------------------
    {
      id: 'bmi-re-q8',
      type: 'numeric-entry',
      stem: 'A school light microscope has a resolution limit of 200 nm. A ribosome is about 25 nm across. How many TIMES smaller than the resolution limit is one ribosome? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      hint: 'Divide the limit by the ribosome size: 200 / 25.',
      misconceptionId: 'bmi-re-mis-can-see-anything',
    },
    {
      id: 'bmi-re-q9',
      type: 'numeric-entry',
      stem: 'A mitochondrion is about 2 micrometres long. How many TIMES bigger than the 200 nm resolution limit is one mitochondrion? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 10,
      xpValue: 15,
      hint: 'Convert to the same unit first: 2 micrometres = 2000 nm. Then divide by 200.',
    },
    {
      id: 'bmi-re-q10',
      type: 'multiple-choice',
      stem: 'A pupil pushes a school microscope past x1500 magnification with a stronger eyepiece. The picture is much bigger, but no new detail appears. What is the BEST name for this?',
      tier: 'confident',
      options: [
        'Empty magnification: extra zoom past the resolution limit does not add detail',
        'Full magnification: the microscope is now working at its best',
        'Negative magnification: the image is reversed',
        'Reflective magnification: the bulb is too bright',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bmi-re-mis-zoom-more-detail',
    },
    {
      id: 'bmi-re-q11',
      type: 'multiple-choice',
      stem: 'Which structure is the main reason biologists need an ELECTRON microscope rather than a school light microscope?',
      tier: 'confident',
      options: [
        'A whole onion cell at about 50 micrometres',
        'A red blood cell at about 7 micrometres',
        'A leaf chloroplast at about 5 micrometres',
        'A ribosome at about 25 nm',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bmi-re-mis-no-limit',
    },
    {
      id: 'bmi-re-q12',
      type: 'multiple-choice',
      stem: 'A pupil at a Royal Microscopical Society outreach event asks: "If I turn the bulb under the stage up to maximum brightness, will my school microscope resolve smaller details?" What is the best reply?',
      tier: 'confident',
      options: [
        'Yes: more light always means more resolution',
        'Yes, but only for plant cells',
        'No: resolution is set by the wavelength of visible light, not by how bright the bulb is. A brighter bulb makes the view easier to see, but it does not change the 200 nm floor',
        'No: a brighter bulb actually lowers the resolution by half',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bmi-re-mis-bright-bulb',
    },
    {
      id: 'bmi-re-q13',
      type: 'numeric-entry',
      stem: 'A textbook lists a typical virus at about 100 nm across. In MICROMETRES, what is its size? Give your answer as a decimal.',
      tier: 'confident',
      correctAnswer: 0.1,
      xpValue: 15,
      hint: '1 micrometre = 1000 nm, so divide 100 by 1000.',
    },
    {
      id: 'bmi-re-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Convert the 200 nm resolution limit of a school light microscope into micrometres."',
      tier: 'confident',
      steps: [
        'Recall the unit relation: 1 micrometre = 1000 nm',
        'Set up the conversion as a division: divide the size in nm by 1000',
        null,
        'Substitute: 200 / 1000 = 0.2',
        'State the answer with the unit: 200 nm = 0.2 micrometres',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the rule to the resolution limit: limit in micrometres = 200 / 1000',
      xpValue: 20,
    },
    {
      id: 'bmi-re-q15',
      type: 'drag-order',
      stem: 'Put these four lengths in order from SMALLEST to LARGEST.',
      tier: 'confident',
      items: [
        '1 micrometre',
        '200 nm',
        '50 nm',
        '10 micrometres',
      ],
      correctOrder: [2, 1, 0, 3],
      xpValue: 15,
    },
    // CHALLENGE (5) -----------------------------------------------------------
    {
      id: 'bmi-re-q16',
      type: 'multiple-choice',
      stem: 'A Year 7 biologist at a Cambridge biochemistry teaching lab claims: "My school microscope is set to x1000 total magnification, so I will see ribosomes clearly inside the cell." Which is the BEST correction?',
      tier: 'challenge',
      options: [
        'She is right; x1000 is plenty',
        'She is right, but only for plant ribosomes',
        'She is wrong because x1000 is too LOW; she needs x4000 on a school microscope',
        'She is wrong because magnification cannot beat the resolution floor. Ribosomes at about 25 nm sit well below the 200 nm floor, so they stay invisible at any magnification on a school light microscope',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'bmi-re-mis-zoom-more-detail',
    },
    {
      id: 'bmi-re-q17',
      type: 'numeric-entry',
      stem: 'A school microscope resolves points down to about 200 nm. A pathology slide shows two tiny features that sit 0.15 micrometres apart. In nanometres, what is the gap between them? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 150,
      xpValue: 25,
      hint: 'Convert micrometres to nanometres by multiplying by 1000: 0.15 x 1000.',
      misconceptionId: 'bmi-re-mis-resolution-subjective',
    },
    {
      id: 'bmi-re-q18',
      type: 'multiple-choice',
      stem: 'Two tiny features on a slide sit 150 nm apart. A pupil tries x100, then x400, then x1000 on her school microscope. At which magnification do the two features first show up as TWO separate points?',
      tier: 'challenge',
      options: [
        'x100',
        'x400',
        'x1000',
        'None: 150 nm is below the 200 nm floor, so the features stay as one blob at every magnification',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'bmi-re-mis-zoom-more-detail',
    },
    {
      id: 'bmi-re-q19',
      type: 'spot-misconception',
      stem: 'Priya writes in her practical book: "Resolution just means how clear the image looks to me. If the picture looks sharp, resolution is high."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right: resolution is the subjective sharpness of the picture.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong: resolution has a precise meaning. It is the smallest real-world distance between two points at which the microscope still shows them as two. It is a property of the instrument, not of how the image feels.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bmi-re-mis-resolution-subjective',
    },
    {
      id: 'bmi-re-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "A chloroplast is about 5 micrometres across. How many TIMES bigger than the 200 nm resolution limit is this?"',
      tier: 'challenge',
      steps: [
        'Convert both numbers to the same unit; nanometres is easiest because the limit is already in nm',
        'Convert 5 micrometres to nm: multiply by 1000',
        '5 x 1000 = 5000 nm',
        null,
        'State the answer: a chloroplast is 25 times bigger than the resolution limit, so it shows up clearly under a school microscope',
      ],
      missingStepIndex: 3,
      correctStep:
        'Divide the chloroplast size in nm by the limit in nm: 5000 / 200 = 25',
      xpValue: 30,
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on microscopy: pupils "used the words magnification and resolution interchangeably". Reinforced by AQA GCSE Biology examiner report June 2019 (8461/1F) Q03 on microscopy, where candidates "did not distinguish between magnification and resolution".
    {
      id: 'bmi-re-mis-mag-equals-res',
      description:
        'Magnification and resolution mean the same thing in microscopy.',
      triggerAnswer: 'mag-equals-res',
      correction:
        'They are different. Magnification is how much bigger the image looks than the real specimen. Resolution is the smallest real-world gap between two points that the microscope can still show as two.',
      reExplanation:
        'Picture the same patch of slide enlarged twice: once at x40 and once at x400. Both pictures show the same patch, just at different sizes. If two tiny dots on the slide sit closer than the resolution limit, they look like one blurred blob in BOTH images, no matter the magnification. Magnification answers "how big does it look on the screen". Resolution answers "how close can two real points get and still be told apart". Different ideas, different jobs.',
    },
    // Source: CLEAPSS Science Publication PS90 Microscopy guidance: pupils "often believe higher magnification always shows more detail, regardless of the optical limit of light microscopes". Reinforced by Royal Microscopical Society outreach FAQ for schools (rms.org.uk) which specifically calls this out as a teaching point.
    {
      id: 'bmi-re-mis-zoom-more-detail',
      description:
        'Higher magnification always reveals more detail, no matter what.',
      triggerAnswer: 'zoom-more-detail',
      correction:
        'Past the resolution limit, more magnification only enlarges the same blur. The light microscope hits this floor at about 200 nm. Biologists call extra zoom past that point empty magnification.',
      reExplanation:
        'Below 200 nm the image of two points overlaps so the system shows one fuzzy blob. Turning the magnification higher makes that blob bigger on screen, but it does not pull the points apart. Think of zooming in on a low-resolution photo on your phone: the picture gets bigger but no sharper, because the detail was never captured. The same applies to a school microscope past about x1500.',
    },
    // Source: Edexcel GCSE Biology examiner report June 2021 (1BI0/1F) Q05 on microscopy: candidates "thought any structure could be seen with a school light microscope if magnified enough". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on cell structure, item on visibility of sub-cellular parts.
    {
      id: 'bmi-re-mis-no-limit',
      description:
        'A school light microscope can show anything you want if you magnify enough.',
      triggerAnswer: 'no-limit',
      correction:
        'No. The light microscope has a hard floor at about 200 nm set by the wavelength of visible light. Structures smaller than that floor stay invisible at any magnification.',
      reExplanation:
        'Visible light travels in waves about 400 to 700 nm long. To resolve two points the light has to fit a wave between them, so any gap below about half a wavelength is lost. That gives the roughly 200 nm floor. No school microscope can beat it. To see smaller things you need a probe with a shorter wavelength, which is what an electron microscope provides. The floor is a property of light, not of the lens quality.',
    },
    // Source: OCR GCSE Biology examiner report June 2019 (J247/01) Q04 on microscopy: candidates "wrote that viruses and ribosomes can be observed with a school light microscope". Reinforced by CLEAPSS Science Publication PS90 Microscopy, sample-image notes section.
    {
      id: 'bmi-re-mis-can-see-anything',
      description:
        'You can see viruses or ribosomes with a school light microscope if you use the highest objective.',
      triggerAnswer: 'can-see-anything',
      correction:
        'No. Viruses (about 100 nm) and ribosomes (about 25 nm) both sit BELOW the 200 nm resolution floor of a school light microscope. Neither shows up as a separate shape, even at the highest objective.',
      reExplanation:
        'Compare the sizes to the floor. A virus at 100 nm is half the floor. A ribosome at 25 nm is one-eighth of the floor. Both are too small for visible light to tell apart from the bits around them, so they appear as no shape. Whole cells (tens of micrometres) and large organelles like mitochondria (about 2 micrometres) sit above the floor and show up clearly. The line between visible and invisible sits at about 200 nm.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on microscopy: pupils "described resolution as how clear the image looks to the viewer", treating it as a subjective feel rather than a measurable distance. Reinforced by AQA GCSE Biology examiner report June 2020 (8461/2F) Q06 on microscopy definitions.
    {
      id: 'bmi-re-mis-resolution-subjective',
      description:
        'Resolution means how clear or sharp the image feels to me when I look down the eyepiece.',
      triggerAnswer: 'resolution-subjective',
      correction:
        'Resolution has a precise meaning: the smallest real-world distance between two points at which the microscope still shows them as two. It is a measurable property, not a feel.',
      reExplanation:
        'A picture can look sharp and still have low resolution. If two real points on the slide sit closer than the resolution limit, they merge into one blob, but that blob can still look crisply drawn on the screen. Resolution is set by the instrument and the light it uses, not by how the image strikes the viewer. It is given as a number in nanometres or micrometres so that two microscopes can be compared like-for-like.',
    },
    // Source: Royal Microscopical Society outreach FAQ for schools (rms.org.uk): explicitly addresses the "turn the bulb up to see smaller things" misconception in Q&A. Reinforced by CLEAPSS Science Publication PS90 Microscopy, troubleshooting section on illumination versus resolution.
    {
      id: 'bmi-re-mis-bright-bulb',
      description:
        'Turning the bulb under the stage up to maximum brightness improves the resolution of a school light microscope.',
      triggerAnswer: 'bright-bulb',
      correction:
        'No. A brighter bulb makes the view easier to see but does not change the resolution floor. The floor is set by the wavelength of visible light, not by how bright the lamp shines.',
      reExplanation:
        'Light brightness is a separate setting from resolution. A bright lamp helps the cells stand out against the background and makes drawing easier, which is why teachers set the iris diaphragm for comfort. But the smallest gap the system can resolve is fixed by the wavelength of the visible light passing through, at about 200 nm. To drop that floor you would need to swap visible light for something with a shorter wavelength, which a school microscope cannot do.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
