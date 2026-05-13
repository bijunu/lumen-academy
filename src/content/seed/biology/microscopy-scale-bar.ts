import type { SkillNode } from '@/types/content'

const scaleBarAnatomySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="34" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Anatomy of a scale bar on a micrograph</text>
  <rect x="60" y="70" width="480" height="220" rx="10" fill="#E0E7FF" stroke="#3730A3" stroke-width="3" />
  <ellipse cx="220" cy="180" rx="60" ry="40" fill="#FECACA" stroke="#991B1B" stroke-width="2" />
  <ellipse cx="220" cy="180" rx="14" ry="10" fill="#7F1D1D" stroke="#450A0A" stroke-width="2" />
  <ellipse cx="360" cy="200" rx="50" ry="32" fill="#FECACA" stroke="#991B1B" stroke-width="2" />
  <ellipse cx="360" cy="200" rx="12" ry="8" fill="#7F1D1D" stroke="#450A0A" stroke-width="2" />
  <ellipse cx="460" cy="150" rx="38" ry="26" fill="#FECACA" stroke="#991B1B" stroke-width="2" />
  <ellipse cx="460" cy="150" rx="10" ry="6" fill="#7F1D1D" stroke="#450A0A" stroke-width="2" />
  <text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Cheek cells, stained, x400 light microscope</text>
  <line x1="100" y1="270" x2="180" y2="270" stroke="#111827" stroke-width="6" />
  <text x="140" y="262" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#111827">100 µm</text>
  <rect x="80" y="310" width="440" height="70" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="335" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">The black bar is a known real distance on the slide.</text>
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Its label says what that distance is in micrometres or millimetres.</text>
  <text x="300" y="375" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#475569">No magnification number is needed to read it.</text>
</svg>
`.trim()

const unitLadderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="34" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The mm to µm to nm ladder</text>
  <rect x="40" y="80" width="160" height="80" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="120" y="115" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1 mm</text>
  <text x="120" y="145" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">millimetre</text>
  <text x="240" y="125" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#BE185D">x1000</text>
  <rect x="300" y="80" width="160" height="80" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="380" y="115" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1000 µm</text>
  <text x="380" y="145" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">micrometres</text>
  <text x="500" y="125" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#BE185D">x1000</text>
  <rect x="40" y="200" width="160" height="80" rx="8" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="120" y="235" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1 µm</text>
  <text x="120" y="265" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">micrometre</text>
  <text x="240" y="245" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#BE185D">x1000</text>
  <rect x="300" y="200" width="160" height="80" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="3" />
  <text x="380" y="235" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1000 nm</text>
  <text x="380" y="265" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">nanometres</text>
  <rect x="40" y="310" width="520" height="70" rx="8" fill="#E0E7FF" stroke="#3730A3" stroke-width="2" />
  <text x="300" y="335" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Down the ladder: multiply by 1000 at each step.</text>
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Up the ladder: divide by 1000 at each step.</text>
  <text x="300" y="375" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#475569">1 mm = 1000 µm = 1 000 000 nm</text>
</svg>
`.trim()

const cellBenchmarksSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Common biology size benchmarks</text>
  <line x1="80" y1="350" x2="540" y2="350" stroke="#111827" stroke-width="3" />
  <line x1="100" y1="345" x2="100" y2="355" stroke="#111827" stroke-width="3" />
  <line x1="220" y1="345" x2="220" y2="355" stroke="#111827" stroke-width="3" />
  <line x1="340" y1="345" x2="340" y2="355" stroke="#111827" stroke-width="3" />
  <line x1="460" y1="345" x2="460" y2="355" stroke="#111827" stroke-width="3" />
  <text x="100" y="375" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">10 nm</text>
  <text x="220" y="375" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">1 µm</text>
  <text x="340" y="375" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">10 µm</text>
  <text x="460" y="375" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">100 µm</text>
  <circle cx="120" cy="300" r="6" fill="#7C3AED" stroke="#3730A3" stroke-width="2" />
  <text x="120" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Ribosome</text>
  <text x="120" y="265" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">~25 nm</text>
  <ellipse cx="260" cy="260" rx="22" ry="9" fill="#FCA5A5" stroke="#991B1B" stroke-width="2" />
  <text x="260" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Mitochondrion</text>
  <text x="260" y="225" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">~2 µm long</text>
  <circle cx="335" cy="200" r="14" fill="#FEE2E2" stroke="#991B1B" stroke-width="2" />
  <text x="335" y="180" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Red blood cell</text>
  <text x="335" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">~8 µm wide</text>
  <ellipse cx="420" cy="140" rx="28" ry="22" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="420" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Cheek cell</text>
  <text x="420" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">~60 µm wide</text>
  <rect x="490" y="100" width="50" height="34" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <text x="515" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Onion cell</text>
  <text x="515" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">~150 µm long</text>
</svg>
`.trim()

const onionScaleBarSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Reading a scale bar on a stained onion slide</text>
  <rect x="60" y="60" width="480" height="240" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <rect x="80" y="80" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <rect x="200" y="80" width="120" height="60" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <rect x="320" y="80" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <rect x="80" y="140" width="120" height="60" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <rect x="200" y="140" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <rect x="320" y="140" width="120" height="60" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <rect x="80" y="200" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <rect x="200" y="200" width="120" height="60" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <rect x="320" y="200" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <line x1="460" y1="280" x2="520" y2="280" stroke="#111827" stroke-width="6" />
  <text x="490" y="272" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#111827">50 µm</text>
  <rect x="80" y="320" width="440" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="300" y="343" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">One onion cell is about three bar lengths wide.</text>
  <text x="300" y="365" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Three lots of 50 µm gives an actual cell width of about 150 µm.</text>
</svg>
`.trim()

export const scaleBar: SkillNode = {
  id: 'biology-microscopy-scale-bar',
  title: 'Scale Bars and Unit Conversion',
  description:
    'Read a scale bar on a micrograph and convert between millimetres, micrometres, and nanometres so you can state the real size of a cell or structure in the right unit. Bars are everywhere in textbook images; learn to use them like a calibrated ruler rather than guessing from the magnification number.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-microscopy',
  zoneName: 'Microscopy',
  tier: 'confident',
  prerequisites: ['biology-microscopy-magnification'],
  curriculum: {
    ks3Objective:
      'Cells as the fundamental unit of living organisms, including how to observe, interpret and record cell structure using a light microscope; measurement to scale using a calibrated reference.',
    awardingBodies: {
      aqa: 'Required practical 1: Microscopy (GCSE Biology 8461). Scale bar use; conversion between mm, micrometres and nanometres.',
      edexcel:
        'CB1e Magnification and scale bars (GCSE Biology 1BI0, Topic 1). Use a scale bar to find the actual size of a structure.',
      ocr: 'B1.1.4 Using scale bars to determine actual sizes of cell structures (GCSE Biology A J247).',
    },
  },
  scenes: [
    {
      id: 'bmi-sb-bar-anatomy',
      title: 'What a Scale Bar Actually Tells You',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the micrograph to read what the scale bar does and what it does not do.',
      data: {
        svg: scaleBarAnatomySvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bmi-sb-hs-bar',
            x: 23,
            y: 68,
            label: 'The black bar',
            description:
              'A small line drawn beside the image. Its length on the page stands for a known real distance on the slide.',
          },
          {
            id: 'bmi-sb-hs-label',
            x: 23,
            y: 58,
            label: 'The label',
            description:
              'A number with a unit, such as 100 µm. This is the real distance the bar represents, not the bar length on the page.',
          },
          {
            id: 'bmi-sb-hs-image',
            x: 50,
            y: 40,
            label: 'The image',
            description:
              'Stained cheek cells under a light microscope. You measure parts of the image against the bar to find the real size.',
          },
          {
            id: 'bmi-sb-hs-no-mag',
            x: 50,
            y: 90,
            label: 'No magnification needed',
            description:
              'You do not need the microscope magnification to read a scale bar. The bar is calibrated on the page already.',
          },
        ],
      },
    },
    {
      id: 'bmi-sb-mm-um-ladder',
      title: 'The mm to µm to nm Ladder',
      type: 'labelled-diagram',
      instructions:
        'Click each rung of the ladder to see the conversion factor and how the units link.',
      data: {
        svg: unitLadderSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bmi-sb-ladder-mm',
            x: 20,
            y: 30,
            label: '1 mm',
            description:
              'A millimetre is one thousandth of a metre. Visible on a school ruler with the naked eye.',
          },
          {
            id: 'bmi-sb-ladder-um',
            x: 63,
            y: 30,
            label: '1000 µm',
            description:
              'A micrometre, written µm, is one thousandth of a millimetre. So 1 mm equals 1000 µm.',
          },
          {
            id: 'bmi-sb-ladder-nm',
            x: 63,
            y: 70,
            label: '1000 nm',
            description:
              'A nanometre is one thousandth of a micrometre. So 1 µm equals 1000 nm, and 1 mm equals 1 000 000 nm.',
          },
          {
            id: 'bmi-sb-ladder-rule',
            x: 50,
            y: 87,
            label: 'Direction rule',
            description:
              'Going to a smaller unit, multiply by 1000. Going to a bigger unit, divide by 1000.',
          },
        ],
      },
    },
    {
      id: 'bmi-sb-cell-benchmarks',
      title: 'Size Benchmarks for Cells and Structures',
      type: 'labelled-diagram',
      instructions:
        'Click each label on the size chart to see what the structure looks like and where it sits on the scale.',
      data: {
        svg: cellBenchmarksSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bmi-sb-bench-ribosome',
            x: 20,
            y: 70,
            label: 'Ribosome',
            description:
              'A protein-building particle, around 25 nm across. Too small for a school light microscope; needs electron microscopy.',
          },
          {
            id: 'bmi-sb-bench-mito',
            x: 43,
            y: 60,
            label: 'Mitochondrion',
            description:
              'About 2 µm long. Just visible as a tiny dot with the best school light microscopes; clear under electron microscopy.',
          },
          {
            id: 'bmi-sb-bench-rbc',
            x: 56,
            y: 45,
            label: 'Red blood cell',
            description:
              'About 8 µm across. A typical sight in a blood smear at an NHS pathology lab, stained pink.',
          },
          {
            id: 'bmi-sb-bench-cheek',
            x: 70,
            y: 30,
            label: 'Human cheek cell',
            description:
              'About 60 µm across. Easy to see at x400 on a school light microscope after staining with iodine or methylene blue.',
          },
          {
            id: 'bmi-sb-bench-onion',
            x: 86,
            y: 22,
            label: 'Onion epidermal cell',
            description:
              'About 150 µm long. Large and brick-shaped; one of the first slides Year 7 pupils prepare from a Boots own-brand slide kit.',
          },
        ],
      },
    },
    {
      id: 'bmi-sb-onion-reading',
      title: 'Reading a Bar on a Stained Onion Slide',
      type: 'labelled-diagram',
      instructions:
        'Click each label on this Royal Microscopical Society outreach micrograph to see how the bar is used to find the real cell width.',
      data: {
        svg: onionScaleBarSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bmi-sb-onion-bar',
            x: 82,
            y: 70,
            label: 'The 50 µm bar',
            description:
              'A line drawn beside the image. The label says it represents 50 micrometres of real distance on the slide.',
          },
          {
            id: 'bmi-sb-onion-cell',
            x: 30,
            y: 35,
            label: 'One onion cell',
            description:
              'A typical brick-shaped cell. Measure how many bar lengths fit across it to read its real width.',
          },
          {
            id: 'bmi-sb-onion-count',
            x: 50,
            y: 88,
            label: 'About three bars wide',
            description:
              'Each cell spans roughly three bar lengths. Three lots of 50 µm gives an actual width of about 150 µm.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bmi-sb-worked-1',
      title: 'Converting a cheek cell width from millimetres to micrometres',
      steps: [
        {
          explanation:
            'A pupil at a school in Cambridge measures a stained human cheek cell on a printed micrograph and notes the real width as 0.06 mm. They want it in micrometres so they can compare it to a textbook value.',
        },
        {
          explanation:
            'Choose the right direction on the ladder. Micrometres are smaller than millimetres, so the number of micrometres will be bigger. The rule is: going to a smaller unit, multiply by 1000.',
        },
        {
          explanation:
            'Substitute and work out the multiplication.',
          maths: '0.06 mm x 1000 = 60 µm',
        },
        {
          explanation:
            'Sense check against the size benchmarks. A typical human cheek cell is about 60 µm across, which matches.',
          maths: 'Cheek cell ~60 µm',
        },
        {
          explanation:
            'Write the final answer with the unit. The cell is 60 micrometres across.',
        },
      ],
    },
    {
      id: 'bmi-sb-worked-2',
      title: 'Converting a ribosome width from micrometres to nanometres',
      steps: [
        {
          explanation:
            'A textbook lists the diameter of a ribosome as 0.025 µm. A pupil wants the same figure in nanometres because that is how the JEOL electron-microscope rooms at Imperial College label their images.',
        },
        {
          explanation:
            'Nanometres are smaller than micrometres, so the number of nanometres will be bigger. Going to a smaller unit, multiply by 1000.',
        },
        {
          explanation:
            'Substitute and work out the multiplication.',
          maths: '0.025 µm x 1000 = 25 nm',
        },
        {
          explanation:
            'Sense check against the size benchmarks. A ribosome is around 25 nm, far below the limit of a school light microscope, which fits.',
          maths: 'Ribosome ~25 nm',
        },
        {
          explanation:
            'Write the final answer with the unit. The ribosome is about 25 nanometres across.',
        },
      ],
    },
    {
      id: 'bmi-sb-worked-3',
      title: 'Using a scale bar to find the real width of a stained onion cell',
      steps: [
        {
          explanation:
            'A Royal Microscopical Society outreach poster shows stained onion epidermal cells with a 50 µm scale bar in the corner. A pupil measures one cell and finds it spans three full bar lengths.',
        },
        {
          explanation:
            'No magnification value is needed. The bar already represents a known real distance on the slide, so you only need to count how many bar lengths fit the structure.',
        },
        {
          explanation:
            'Multiply the bar value by the count.',
          maths: '3 x 50 µm = 150 µm',
        },
        {
          explanation:
            'Sense check against the size benchmarks. Onion epidermal cells are typically around 150 µm long, so the reading is reasonable.',
          maths: 'Onion cell ~150 µm',
        },
        {
          explanation:
            'Write the final answer in the same unit as the bar label. The cell is about 150 micrometres wide.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'bmi-sb-q1',
      type: 'multiple-choice',
      stem: 'What does a scale bar on a micrograph tell you?',
      tier: 'core',
      options: [
        'The magnification used to take the image.',
        'A known real distance on the slide, drawn at the right length for that image.',
        'How thick the coverslip is in millimetres.',
        'The power of the eyepiece lens.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bmi-sb-mis-bar-is-mag',
    },
    {
      id: 'bmi-sb-q2',
      type: 'multiple-choice',
      stem: 'Which unit is the smallest?',
      tier: 'core',
      options: ['nanometre (nm)', 'micrometre (µm)', 'millimetre (mm)', 'metre (m)'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bmi-sb-mis-nm-bigger-than-um',
    },
    {
      id: 'bmi-sb-q3',
      type: 'multiple-choice',
      stem: 'How many micrometres are in one millimetre?',
      tier: 'core',
      options: ['10', '100', '1 000 000', '1000'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bmi-sb-mis-mm-equals-um',
    },
    {
      id: 'bmi-sb-q4',
      type: 'multiple-choice',
      stem: 'A poster from the Royal Microscopical Society shows a micrograph of a blood smear from an NHS pathology lab, with a 20 µm scale bar in the corner. What does the bar represent?',
      tier: 'core',
      options: [
        'The image is 20 micrometres wide on the page.',
        'The microscope used a magnification of x20.',
        'Each red blood cell in the picture is 20 micrometres across.',
        'On the slide, the bar length stands for 20 micrometres of real distance.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bmi-sb-mis-bar-is-mag',
    },
    {
      id: 'bmi-sb-q5',
      type: 'numeric-entry',
      stem: 'Convert 1 mm to micrometres.',
      tier: 'core',
      correctAnswer: 1000,
      unit: 'µm',
      xpValue: 10,
      hint: 'Going from mm to µm: multiply by 1000.',
    },
    {
      id: 'bmi-sb-q6',
      type: 'numeric-entry',
      stem: 'A red blood cell in a blood smear at an NHS pathology lab is 0.008 mm across. What is this in micrometres?',
      tier: 'core',
      correctAnswer: 8,
      unit: 'µm',
      xpValue: 10,
      hint: 'Multiply by 1000 to step down the ladder from mm to µm.',
      misconceptionId: 'bmi-sb-mis-mm-equals-um',
    },
    {
      id: 'bmi-sb-q7',
      type: 'numeric-entry',
      stem: 'A scale bar on a textbook image is labelled 100 µm. A cell in the image is exactly two bar lengths wide. What is the real width of the cell, in micrometres?',
      tier: 'core',
      correctAnswer: 200,
      unit: 'µm',
      xpValue: 15,
      hint: 'Multiply the bar value by the number of bar lengths the cell spans.',
    },
    {
      id: 'bmi-sb-q8',
      type: 'multiple-choice',
      stem: 'Two scale bars appear on two different images of the same kind of cell. One bar is drawn 10 mm long on the page, the other is drawn 25 mm long on the page. Both are labelled 100 µm. Which statement is correct?',
      tier: 'confident',
      options: [
        'The 25 mm bar means the image is more magnified.',
        'The 10 mm bar means the image is more magnified.',
        'Both bars represent the same real distance on the slide, regardless of bar length on the page.',
        'The 25 mm bar must be a mistake; scale bars are always 10 mm long.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bmi-sb-mis-bar-always-1cm',
    },
    {
      id: 'bmi-sb-q9',
      type: 'multiple-choice',
      stem: 'A pupil claims that to read a scale bar, you must first look up the magnification the microscope used. Which response is correct?',
      tier: 'confident',
      options: [
        'Correct. Scale bars cannot be read without the magnification.',
        'Incorrect. The bar already shows a calibrated real distance; the magnification is not needed.',
        'Correct, but only on electron-microscope images.',
        'Incorrect. You need the eyepiece power, not the total magnification.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bmi-sb-mis-need-magnification',
    },
    {
      id: 'bmi-sb-q10',
      type: 'numeric-entry',
      stem: 'A mitochondrion in a JEOL electron-microscope image from Cambridge is labelled as 2 µm long. What is this in nanometres?',
      tier: 'confident',
      correctAnswer: 2000,
      unit: 'nm',
      xpValue: 15,
      hint: 'Going from µm to nm: multiply by 1000.',
    },
    {
      id: 'bmi-sb-q11',
      type: 'numeric-entry',
      stem: 'On a stained onion-epidermis slide from a Boots own-brand kit, a scale bar represents 50 µm. One onion cell spans exactly three bar lengths. What is the real width of the cell, in micrometres?',
      tier: 'confident',
      correctAnswer: 150,
      unit: 'µm',
      xpValue: 15,
      hint: 'Three bar lengths means three lots of 50 µm.',
    },
    {
      id: 'bmi-sb-q12',
      type: 'numeric-entry',
      stem: 'A cheek cell is recorded in a lab book as 60 µm across. The pupil wants to write it in millimetres for a poster. What is 60 µm in millimetres?',
      tier: 'confident',
      correctAnswer: 0.06,
      tolerance: 0.001,
      unit: 'mm',
      xpValue: 15,
      hint: 'Going from µm to mm: divide by 1000.',
    },
    {
      id: 'bmi-sb-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes that "a longer scale bar on the page always means the image is more magnified."',
      tier: 'confident',
      statements: [
        {
          text: 'The claim is sound. Longer bar on the page means higher magnification.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. A scale bar shows a known real distance. Its length on the page depends on the image size, not how magnified the picture is.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bmi-sb-mis-longer-more-magnified',
    },
    {
      id: 'bmi-sb-q14',
      type: 'drag-order',
      stem: 'Place these steps in the right order, from first to last, for finding the real width of a cell using a scale bar.',
      tier: 'confident',
      items: [
        'Multiply the count by the value labelled on the bar.',
        'Read the unit and value labelled on the scale bar.',
        'Count how many bar lengths fit across the cell.',
        'Write the final answer with the same unit as the bar.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
    },
    {
      id: 'bmi-sb-q15',
      type: 'labelled-image',
      stem: 'Drag each label onto the matching feature of this micrograph with a scale bar. Some labels in the pool do not match anything in the image.',
      tier: 'confident',
      svg: scaleBarAnatomySvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'bmi-sb-q15-bar', x: 23, y: 68, correctLabel: 'The scale bar' },
        { id: 'bmi-sb-q15-label', x: 23, y: 58, correctLabel: '100 µm label' },
        { id: 'bmi-sb-q15-cells', x: 50, y: 40, correctLabel: 'Stained cheek cells' },
      ],
      labels: [
        'The scale bar',
        '100 µm label',
        'Stained cheek cells',
        'Magnification number',
        'Eyepiece graticule',
        'Coverslip',
      ],
      xpValue: 20,
    },
    {
      id: 'bmi-sb-q16',
      type: 'multiple-choice',
      stem: 'A textbook lists the size of a ribosome as 25 nm. Which Year 7 pupil correctly converts this to micrometres?',
      tier: 'challenge',
      options: [
        'Ben writes 0.025 µm because he divided by 1000.',
        'Aisha writes 25 000 µm because she multiplied by 1000.',
        'Chen writes 2.5 µm because he divided by 10.',
        'Dara writes 250 µm because she multiplied by 10.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'Nanometres are smaller than micrometres, so the number in micrometres should be smaller.',
      misconceptionId: 'bmi-sb-mis-mm-equals-um',
    },
    {
      id: 'bmi-sb-q17',
      type: 'multiple-choice',
      stem: 'A pupil claims that "all cells are between 1 and 10 micrometres across." Which response is correct?',
      tier: 'challenge',
      options: [
        'Correct, that is the rule for cell size.',
        'Incorrect. Cell size ranges from ribosomes at around 25 nanometres up to large plant cells over 100 micrometres, and some animal egg cells far larger.',
        'Correct for animal cells, but plant cells are smaller.',
        'Incorrect, but only because the upper limit should be 100 micrometres.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'bmi-sb-mis-cells-1-10-um',
    },
    {
      id: 'bmi-sb-q18',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the scale bar is the same as the magnification number, just shown as a line."',
      tier: 'challenge',
      statements: [
        {
          text: 'The claim is sound. A scale bar and a magnification number give the same information.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. The bar shows a real distance on the slide. The magnification is a ratio of image to real size. The two are linked but not the same.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'bmi-sb-mis-bar-is-mag',
    },
    {
      id: 'bmi-sb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculation of a real cell width from a scale bar.',
      tier: 'challenge',
      steps: [
        'A micrograph of a blood smear has a scale bar labelled 10 µm.',
        'The pupil measures and finds that one red blood cell spans almost exactly one bar length.',
        null,
        'Write the final answer with the unit: about 8 micrometres, which matches the textbook value for a red blood cell.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Read the cell width as roughly the bar value: just under 10 µm, giving about 8 µm because the cell is a bit shorter than the full bar.',
      xpValue: 20,
    },
    {
      id: 'bmi-sb-q20',
      type: 'data-extraction',
      stem: 'Which row in this table gives the correct conversion from the original to the new unit?',
      tier: 'challenge',
      dataSource:
        'A class records four conversions: A. 0.5 mm = 500 µm. B. 25 nm = 25 µm. C. 8 µm = 8 mm. D. 2 µm = 200 nm.',
      correctAnswer: 'A',
      xpValue: 20,
      hint: 'Step the value through the ladder one rung at a time. Each rung is a factor of 1000.',
      misconceptionId: 'bmi-sb-mis-mm-equals-um',
    },
    {
      id: 'bmi-sb-q21',
      type: 'multiple-choice',
      stem: 'A pupil at Imperial College Open Day looks at a JEOL electron-microscope image. A bar in the corner is labelled 200 nm and a virus particle spans one full bar length. What is the real width of the virus?',
      tier: 'challenge',
      options: ['200 mm', '200 µm', '0.2 µm', '0.0002 µm'],
      correctIndex: 2,
      xpValue: 20,
      hint: 'Write 200 nm in micrometres by dividing by 1000.',
    },
  ],
  misconceptions: [
    // Source: Royal Microscopical Society outreach guidance, "Reading a scale bar", and CLEAPSS guide L195 on microscopy practical skills, both of which state that a scale bar reports a real distance on the specimen and is not the magnification.
    {
      id: 'bmi-sb-mis-bar-is-mag',
      description:
        'A scale bar is the same as the magnification number, just drawn as a line.',
      triggerAnswer: 'bar-is-mag',
      correction:
        'Actually, a scale bar reports a real distance on the slide. The magnification is a ratio of image to actual size. The two are different ideas.',
      reExplanation:
        'A scale bar is a calibrated reference: a line of known length on the page that stands for a real distance on the specimen, like 100 µm. The magnification is how many times bigger the image is than the real thing. You can read sizes off the bar without ever knowing the magnification.',
    },
    // Source: AQA GCSE Biology Required Practical 1 (Microscopy) handbook and Best Evidence Science Teaching microscopy unit notes, both of which warn pupils that bar length on the page varies with figure size and crop.
    {
      id: 'bmi-sb-mis-bar-always-1cm',
      description: 'Scale bars are always 1 cm long on the page.',
      triggerAnswer: 'bar-always-1cm',
      correction:
        'In fact, a scale bar can be any length on the page. What matters is the value and unit on its label, not how long it looks.',
      reExplanation:
        'Authors draw the bar at whatever length fits the image. A 100 µm bar might be 10 mm long on one figure and 25 mm long on another, simply because the second figure is bigger or more cropped. Always read the label, not the line length, when working out a real size.',
    },
    // Source: AQA GCSE Biology Foundation tier Report on the Examination 2022 and Reiss & Tunnicliffe "Misconceptions in Biology", both noting Year 7 pupils often treat mm and µm as the same because both look small.
    {
      id: 'bmi-sb-mis-mm-equals-um',
      description: 'One millimetre and one micrometre are the same thing.',
      triggerAnswer: 'mm-equals-um',
      correction:
        'Actually, 1 mm is 1000 times bigger than 1 µm. Mixing them up changes any size by a factor of 1000.',
      reExplanation:
        'A millimetre is a small mark on a school ruler, visible to the naked eye. A micrometre is one thousandth of that, only visible under a microscope. The prefix matters: milli means one thousandth of a metre; micro means one millionth of a metre. Always read the unit on every number before you convert.',
    },
    // Source: Royal Microscopical Society outreach posters and OCR PAG B1 practical notes, both of which highlight that bar length on the page tracks figure size, not magnification.
    {
      id: 'bmi-sb-mis-longer-more-magnified',
      description:
        'A longer scale bar on the page means a more magnified image.',
      triggerAnswer: 'longer-bar-more-mag',
      correction:
        'In fact, the bar length on the page does not on its own tell you how magnified the image is. Read the label and compare it to features in the picture.',
      reExplanation:
        'A long bar can label a small real distance, like 100 µm, on a heavily zoomed picture. A short bar can label a much bigger distance, like 1 mm, on a low-power view. Without reading the label, the bar length on the page tells you nothing about magnification on its own.',
    },
    // Source: CLEAPSS guide L195 on microscopy practical skills and AQA Required Practical 1 (Microscopy) handbook, both stating the bar is read directly without needing the microscope magnification value.
    {
      id: 'bmi-sb-mis-need-magnification',
      description:
        'You need the microscope magnification number to read a scale bar.',
      triggerAnswer: 'need-mag-to-read-bar',
      correction:
        'Actually, the bar is calibrated for that image already. You only need the label and the count of bar lengths across the structure.',
      reExplanation:
        'A textbook image with a 50 µm bar already does the magnification work for you. To find a real size, count how many bar lengths fit the feature and multiply by 50 µm. The magnification value is helpful for other calculations, but it is not needed to read a bar.',
    },
    // Source: Reiss & Tunnicliffe "Misconceptions in Biology" and Best Evidence Science Teaching size-and-scale unit, which list "all cells are tiny" as a common Year 7 frame.
    {
      id: 'bmi-sb-mis-cells-1-10-um',
      description: 'All cells are within 1 to 10 micrometres across.',
      triggerAnswer: 'cells-1-to-10',
      correction:
        'In fact, cell size ranges widely: ribosomes at around 25 nanometres, red blood cells at 8 micrometres, onion cells over 100 micrometres, and some egg cells far larger still.',
      reExplanation:
        'Think of the size benchmark chart. Ribosomes sit far below the light-microscope limit at 25 nm. Red blood cells are around 8 µm. Cheek cells are roughly 60 µm. Onion epidermal cells stretch to 150 µm. A bird egg yolk is a single cell several centimetres wide, far outside any 1 to 10 µm window.',
    },
    // Source: OCR PAG B1 microscopy notes and AQA GCSE Biology specification 4.1.1.5 size and scale, which set out the staircase relationship between mm, µm, and nm.
    {
      id: 'bmi-sb-mis-nm-bigger-than-um',
      description:
        'A nanometre is bigger than a micrometre.',
      triggerAnswer: 'nm-bigger-than-um',
      correction:
        'Actually, a nanometre is smaller than a micrometre. 1 µm equals 1000 nm. Going from µm to nm, multiply by 1000.',
      reExplanation:
        'The unit ladder goes mm, then µm, then nm, each one a thousand times smaller than the one above. So nm is the smallest of the three commonly used in biology. A ribosome at 25 nm is far smaller than a mitochondrion at 2 µm, which is itself smaller than an onion cell at 150 µm.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
