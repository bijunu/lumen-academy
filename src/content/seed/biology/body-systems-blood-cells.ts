import type { SkillNode } from '@/types/content'

// =============================================================================
// Red and White Blood Cells (Confident, biology-body-systems-blood-cells)
//
// Deepens what the earlier specialised-cells node touched on. Covers four
// blood components: red blood cells (erythrocytes), white blood cells
// (phagocytes and lymphocytes), platelets, and plasma. Calculation hooks:
// the ~700:1 RBC to WBC ratio, haemoglobin content per 100 ml, lifespan
// arithmetic, biconcave SA:V advantage. UK contexts: NHS Blood and
// Transplant, NHS pathology labs, iron-deficiency anaemia in teen girls,
// sickle-cell screening, British Heart Foundation, Wellcome Collection,
// the Glasgow public-health history of hand-washing.
// =============================================================================

const componentsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three solid parts of blood, drawn to the same scale</text>
  <rect x="20" y="50" width="560" height="320" rx="10" fill="#FEF2F2" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="140" cy="190" rx="70" ry="48" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="140" cy="190" rx="30" ry="14" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="140" y="270" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Red blood cell</text>
  <text x="140" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">about 7 micrometres</text>
  <text x="140" y="306" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">biconcave, no nucleus</text>
  <text x="140" y="322" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">about 5 million per cubic millimetre</text>
  <circle cx="320" cy="180" r="58" fill="#F8FAFC" stroke="#1E3A8A" stroke-width="2" />
  <circle cx="320" cy="180" r="22" fill="#7C3AED" stroke="#312E81" stroke-width="2" />
  <circle cx="305" cy="170" r="4" fill="#312E81" />
  <circle cx="332" cy="186" r="4" fill="#312E81" />
  <circle cx="316" cy="192" r="4" fill="#312E81" />
  <text x="320" y="270" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">White blood cell</text>
  <text x="320" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">about 12 micrometres</text>
  <text x="320" y="306" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">large nucleus, fights infection</text>
  <text x="320" y="322" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">about 7000 per cubic millimetre</text>
  <ellipse cx="480" cy="190" rx="14" ry="10" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="500" cy="200" rx="10" ry="7" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="465" cy="205" rx="11" ry="8" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <text x="480" y="270" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Platelets</text>
  <text x="480" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">about 2 micrometres</text>
  <text x="480" y="306" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">cell fragments, not whole cells</text>
  <text x="480" y="322" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">trigger clotting at a wound</text>
  <rect x="40" y="340" width="520" height="20" rx="4" fill="#FECACA" stroke="#7F1D1D" stroke-width="1" />
  <text x="300" y="355" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7F1D1D">All three components float in PLASMA, the straw-coloured liquid that makes up about 55 percent of whole blood</text>
</svg>
`.trim()

const smearSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A stained blood smear, as seen at an NHS pathology lab</text>
  <rect x="20" y="50" width="560" height="320" rx="160" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="80" cy="120" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="80" cy="120" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="160" cy="160" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="160" cy="160" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="240" cy="100" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="240" cy="100" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="120" cy="220" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="120" cy="220" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="200" cy="260" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="200" cy="260" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="320" cy="200" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="320" cy="200" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="400" cy="140" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="400" cy="140" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="480" cy="240" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="480" cy="240" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="450" cy="320" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="450" cy="320" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="290" cy="310" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="290" cy="310" rx="9" ry="6" fill="#FCA5A5" />
  <ellipse cx="60" cy="300" rx="22" ry="16" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.5" />
  <ellipse cx="60" cy="300" rx="9" ry="6" fill="#FCA5A5" />
  <circle cx="370" cy="270" r="26" fill="#E0E7FF" stroke="#312E81" stroke-width="2" />
  <circle cx="370" cy="270" r="14" fill="#6D28D9" stroke="#312E81" stroke-width="1.5" />
  <text x="396" y="274" font-family="sans-serif" font-size="11" fill="#312E81">white cell</text>
  <circle cx="510" cy="100" r="4" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <circle cx="520" cy="108" r="3" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <circle cx="500" cy="112" r="3" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <text x="540" y="118" text-anchor="end" font-family="sans-serif" font-size="11" fill="#92400E">platelets</text>
  <text x="300" y="385" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Red cells dominate the field of view; white cells are rare; platelets sit as tiny specks</text>
</svg>
`.trim()

const clottingSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">How a cut turns into a scab, step by step</text>
  <rect x="20" y="50" width="135" height="280" rx="10" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="2" />
  <text x="87" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#7F1D1D">Step 1</text>
  <text x="87" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A cut breaks</text>
  <text x="87" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">the skin</text>
  <rect x="40" y="130" width="94" height="40" fill="#FBCFE8" stroke="#831843" stroke-width="1.5" />
  <line x1="60" y1="140" x2="60" y2="180" stroke="#7F1D1D" stroke-width="3" />
  <line x1="110" y1="138" x2="110" y2="178" stroke="#7F1D1D" stroke-width="3" />
  <path d="M 70 175 Q 87 195 105 175" fill="none" stroke="#7F1D1D" stroke-width="2" />
  <text x="87" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Blood begins to</text>
  <text x="87" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">leak out</text>
  <rect x="170" y="50" width="135" height="280" rx="10" fill="#FFF7ED" stroke="#92400E" stroke-width="2" />
  <text x="237" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#92400E">Step 2</text>
  <text x="237" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Platelets stick</text>
  <text x="237" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">to the wound</text>
  <rect x="190" y="130" width="94" height="40" fill="#FBCFE8" stroke="#831843" stroke-width="1.5" />
  <circle cx="220" cy="155" r="6" fill="#F59E0B" stroke="#92400E" />
  <circle cx="235" cy="150" r="5" fill="#F59E0B" stroke="#92400E" />
  <circle cx="248" cy="158" r="5" fill="#F59E0B" stroke="#92400E" />
  <circle cx="232" cy="162" r="6" fill="#F59E0B" stroke="#92400E" />
  <text x="237" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">They clump and</text>
  <text x="237" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">send out signals</text>
  <rect x="320" y="50" width="135" height="280" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="387" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#92400E">Step 3</text>
  <text x="387" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A fibrin mesh</text>
  <text x="387" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">forms</text>
  <rect x="340" y="130" width="94" height="40" fill="#FBCFE8" stroke="#831843" stroke-width="1.5" />
  <line x1="345" y1="135" x2="430" y2="165" stroke="#1F2937" stroke-width="1" />
  <line x1="430" y1="135" x2="345" y2="165" stroke="#1F2937" stroke-width="1" />
  <line x1="350" y1="150" x2="430" y2="150" stroke="#1F2937" stroke-width="1" />
  <line x1="380" y1="135" x2="395" y2="165" stroke="#1F2937" stroke-width="1" />
  <circle cx="370" cy="148" r="4" fill="#DC2626" stroke="#7F1D1D" />
  <circle cx="405" cy="155" r="4" fill="#DC2626" stroke="#7F1D1D" />
  <text x="387" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Fibrin threads trap</text>
  <text x="387" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">red cells and platelets</text>
  <rect x="470" y="50" width="110" height="280" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2" />
  <text x="525" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#831843">Step 4</text>
  <text x="525" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Scab dries</text>
  <text x="525" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">and hardens</text>
  <rect x="480" y="130" width="90" height="40" fill="#7C2D12" stroke="#451A03" stroke-width="2" />
  <text x="525" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Wound sealed;</text>
  <text x="525" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">new skin can grow</text>
  <text x="300" y="370" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A scab is a fibrin mesh that has trapped cells and dried out, not a lump of dried blood</text>
</svg>
`.trim()

export const bloodCells: SkillNode = {
  id: 'biology-body-systems-blood-cells',
  title: 'Red and White Blood Cells',
  description:
    'Open a Year 7 NHS pathology lab and meet the four parts of blood: red blood cells that carry oxygen, white blood cells that fight pathogens, platelets that trigger clotting, and plasma that holds them all. Learn why a red blood cell is biconcave and nucleus-free, why phagocytes engulf bacteria while lymphocytes make antibodies, and why a scab is a fibrin mesh and not just dried blood. Numbers anchor the story: about 5 million red cells per cubic millimetre next to about 7000 white cells gives a ratio of about 700 to 1.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'confident',
  prerequisites: ['biology-body-systems-circulatory', 'biology-cells-specialised-cells'],
  curriculum: {
    ks3Objective:
      'The role of red blood cells in carrying oxygen; the role of white blood cells in defending against pathogens; observation of blood components, including red cells, white cells, platelets and plasma.',
    awardingBodies: {
      aqa: '4.2.2.2 Red and white blood cells; adaptations of red blood cells (GCSE Biology 8461)',
      edexcel: 'CB2c Blood cells; composition and function (GCSE Biology 1BI0, Topic 2)',
      ocr: 'B2.1.2 Blood composition; red and white blood cells, platelets, plasma (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bbs-bc-rbc-vs-wbc',
      title: 'Red Cell, White Cell, Platelet: Side by Side',
      type: 'labelled-diagram',
      instructions:
        'Click each component to read its size, count per cubic millimetre, and what it does in the body.',
      data: {
        svg: componentsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-bc-cmp-rbc',
            x: 23,
            y: 48,
            label: 'Red blood cell (erythrocyte)',
            description:
              'A red blood cell is about 7 micrometres across, biconcave (dimpled both sides), and has no nucleus. About 5 million sit in every cubic millimetre of blood. Its job is to carry oxygen from the lungs to every other cell in the body. The red pigment haemoglobin grabs the oxygen.',
          },
          {
            id: 'bbs-bc-cmp-wbc',
            x: 53,
            y: 45,
            label: 'White blood cell (leucocyte)',
            description:
              'A white blood cell is about 12 micrometres across, much bigger than a red cell, and keeps its large nucleus. Only about 7000 sit in every cubic millimetre of blood, so they are rare on a smear. Their job is to defend the body against pathogens, by engulfing them (phagocytes) or by making antibodies (lymphocytes).',
          },
          {
            id: 'bbs-bc-cmp-platelet',
            x: 80,
            y: 48,
            label: 'Platelets',
            description:
              'Platelets are tiny cell fragments, about 2 micrometres across. They are not whole cells: they are bits pinched off from much larger parent cells in the bone marrow. Their job is to trigger clotting at a wound site so the body stops bleeding.',
          },
          {
            id: 'bbs-bc-cmp-plasma',
            x: 50,
            y: 87,
            label: 'Plasma',
            description:
              'Plasma is the straw-coloured liquid that all three components float in. It makes up about 55 percent of whole blood by volume. Plasma also carries dissolved nutrients, hormones, and waste carbon dioxide around the body.',
          },
        ],
      },
    },
    {
      id: 'bbs-bc-blood-smear',
      title: 'Reading a Stained Blood Smear',
      type: 'labelled-diagram',
      instructions:
        'Click the markers to read what you see on a real stained smear at an NHS pathology lab.',
      data: {
        svg: smearSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-bc-sm-rbc-field',
            x: 25,
            y: 38,
            label: 'Field of red cells',
            description:
              'Most of the smear is red cells, because about 5 million of them sit in every cubic millimetre. They show as flat pink discs with a paler centre where the biconcave dimple lets more light through.',
          },
          {
            id: 'bbs-bc-sm-wbc',
            x: 65,
            y: 65,
            label: 'A single white blood cell',
            description:
              'On a smear, a white cell stands out: bigger than a red cell, with a deeply stained nucleus showing as a dark purple blob. There are only about 7000 white cells per cubic millimetre, so finding one means scanning past hundreds of red cells.',
          },
          {
            id: 'bbs-bc-sm-platelets',
            x: 85,
            y: 28,
            label: 'Platelets as tiny specks',
            description:
              'Platelets show as small orange or pink specks between the red cells. They are about 2 micrometres across, smaller than a red cell, and stain less strongly because they are fragments, not whole cells with a nucleus.',
          },
          {
            id: 'bbs-bc-sm-ratio',
            x: 50,
            y: 95,
            label: 'The 700 to 1 ratio',
            description:
              'About 5 million red cells per cubic millimetre divided by about 7000 white cells gives roughly 700 to 1. A pathology technician must scan many fields of view to be sure of the white-cell count.',
          },
        ],
      },
    },
    {
      id: 'bbs-bc-clotting',
      title: 'From Cut to Scab: Clotting in Four Steps',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to follow the four steps that turn a fresh cut into a scab that lets new skin grow underneath.',
      data: {
        svg: clottingSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-bc-clt-cut',
            x: 14,
            y: 35,
            label: 'Step 1: a cut breaks the skin',
            description:
              'A scrape on the knee or a cut from a kitchen knife breaks the skin, opening blood vessels. Blood begins to leak out. Without a clotting response, even a small wound could keep bleeding for hours.',
          },
          {
            id: 'bbs-bc-clt-platelets',
            x: 40,
            y: 35,
            label: 'Step 2: platelets stick to the wound',
            description:
              'Platelets in the blood detect the broken vessel wall and stick to the edge. They clump together and send out chemical signals that pull more platelets in. This is the first plug, but it is fragile on its own.',
          },
          {
            id: 'bbs-bc-clt-fibrin',
            x: 67,
            y: 35,
            label: 'Step 3: a fibrin mesh forms',
            description:
              'The platelet signals switch on a protein in the plasma to make fibrin, a long stringy molecule. Fibrin threads weave a mesh across the wound, trapping red blood cells, more platelets, and any other passing bits.',
          },
          {
            id: 'bbs-bc-clt-scab',
            x: 88,
            y: 35,
            label: 'Step 4: the scab dries and hardens',
            description:
              'The fibrin mesh and trapped cells dry out and harden into a scab. The scab is not a lump of dried blood; it is the fibrin mesh that has shrunk and stiffened. New skin grows underneath, and the scab eventually falls off.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bbs-bc-worked-1',
      title: 'Working out the red to white blood cell ratio in a sample',
      steps: [
        {
          explanation:
            'Question: at an NHS pathology lab in Manchester, a technician counts the cells in a blood sample. She finds about 5 million red blood cells per cubic millimetre and about 7000 white blood cells per cubic millimetre. Roughly how many red blood cells are there for each white blood cell?',
        },
        {
          explanation:
            'Step 1: write the counts down using the same unit (cells per cubic millimetre). Red cells: 5 000 000. White cells: 7000.',
          maths: 'red = 5 000 000, white = 7000',
        },
        {
          explanation:
            'Step 2: a ratio of red to white is found by dividing the red count by the white count.',
          maths: 'ratio = red / white',
        },
        {
          explanation:
            'Step 3: do the division. 5 000 000 divided by 7000. First cancel the trailing zeros on both top and bottom: 5 000 000 / 7000 is the same as 5000 / 7.',
          maths: '5 000 000 / 7000 = 5000 / 7',
        },
        {
          explanation:
            'Step 4: 5000 / 7 is about 714. Round to a sensible round number to report a ratio.',
          maths: '5000 / 7 = 714.28..., round to about 700',
        },
        {
          explanation:
            'Step 5: state the answer with units. The ratio of red to white blood cells is roughly 700 to 1. For every white blood cell on the smear, the technician expects to see about 700 red blood cells. This is why white cells look rare under the microscope.',
          maths: 'red : white = about 700 : 1',
        },
      ],
    },
    {
      id: 'bbs-bc-worked-2',
      title: 'Why a biconcave red blood cell has a higher SA:V than a sphere',
      steps: [
        {
          explanation:
            'Question: a textbook says a red blood cell is biconcave (dimpled on both sides) instead of spherical. Show why this gives the cell a higher surface area to volume ratio than a sphere of the same volume, and link it back to its job.',
        },
        {
          explanation:
            'Step 1: recall what surface area to volume ratio (SA:V) means. SA:V is the surface area of the cell divided by its volume. A higher SA:V means more outside surface for every unit of inside, so gases can move in and out faster.',
          maths: 'SA:V = surface area / volume',
        },
        {
          explanation:
            'Step 2: think about a sphere first. Of all the shapes with a given volume, a sphere has the SMALLEST surface area. That is why bubbles and water drops pull into spheres on their own.',
          maths: 'sphere = lowest possible SA for a fixed volume',
        },
        {
          explanation:
            'Step 3: now push the middle of the sphere in on both sides to make a biconcave disc. The volume stays roughly the same, but the dimples add extra surface where the cell membrane curves inward. That extra surface raises SA without raising V.',
          maths: 'biconcave: SA goes up, V about the same, so SA:V rises',
        },
        {
          explanation:
            'Step 4: link this back to the job. A red blood cell has to grab oxygen in the lungs and release it in the tissues at speed. A higher SA:V means oxygen has more membrane to cross per unit volume of cell, so it moves in and out faster than for a spherical cell.',
        },
        {
          explanation:
            'Step 5: read off the rule. Biconcave shape is an adaptation. The cell has gained gas-exchange speed at the cost of the simplest possible shape. Combined with the missing nucleus (which leaves more room for haemoglobin), it gives the red cell two stacked structure-function fits.',
          maths: 'biconcave + no nucleus = max oxygen carried per cell',
        },
      ],
    },
    {
      id: 'bbs-bc-worked-3',
      title: 'Working out haemoglobin grams in a teen patient',
      steps: [
        {
          explanation:
            'Question: at an NHS clinic in Leeds, a healthy Year 7 girl has 13 grams of haemoglobin per 100 millilitres of blood. Her total blood volume is about 4000 millilitres. Roughly how many grams of haemoglobin does she carry in total?',
        },
        {
          explanation:
            'Step 1: set up the maths. She has 13 grams in every 100 ml. We want the grams in 4000 ml.',
          maths: 'rate = 13 g per 100 ml',
        },
        {
          explanation:
            'Step 2: find out how many 100 ml portions fit into 4000 ml. Divide 4000 by 100.',
          maths: '4000 / 100 = 40 portions of 100 ml',
        },
        {
          explanation:
            'Step 3: multiply the rate by the number of portions to get the total grams.',
          maths: 'total = 13 g x 40 = 520 g',
        },
        {
          explanation:
            'Step 4: state the answer. She carries about 520 grams of haemoglobin in total. That is over half a kilogram of one single pigment, locked inside her red blood cells, all dedicated to grabbing oxygen.',
          maths: 'about 520 g of haemoglobin in 4000 ml of blood',
        },
        {
          explanation:
            'Step 5: read off the health note. The NHS healthy range for teen girls is roughly 12 to 16 grams per 100 ml. Below 12 is called iron-deficiency anaemia, a common teen-girl problem in the UK, and is treated with iron-rich foods or supplements because iron sits at the centre of every haemoglobin molecule.',
          maths: 'healthy teen girl range: 12 to 16 g per 100 ml',
        },
      ],
    },
  ],
  questions: [
    // CORE (7) ---------------------------------------------------------------
    {
      id: 'bbs-bc-q1',
      type: 'multiple-choice',
      stem: 'What is the main job of a red blood cell?',
      tier: 'core',
      options: [
        'To fight pathogens that enter the body',
        'To carry oxygen from the lungs to every other cell in the body',
        'To trigger clotting at a wound site',
        'To make new bone in the marrow',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bbs-bc-mis-wbc-carries-o2',
    },
    {
      id: 'bbs-bc-q2',
      type: 'multiple-choice',
      stem: 'Which red pigment inside red blood cells actually binds the oxygen?',
      tier: 'core',
      options: ['Haemoglobin', 'Chlorophyll', 'Keratin', 'Insulin'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'bbs-bc-q3',
      type: 'multiple-choice',
      stem: 'What is the main job of a white blood cell?',
      tier: 'core',
      options: [
        'To carry oxygen around the body',
        'To carry waste carbon dioxide back to the lungs',
        'To defend the body against pathogens',
        'To make new red blood cells in the bone marrow',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bbs-bc-mis-wbc-carries-o2',
    },
    {
      id: 'bbs-bc-q4',
      type: 'numeric-entry',
      stem: 'Roughly how many red blood cells are there in 1 cubic millimetre of healthy blood? Give your answer in millions (so 5 means 5 million).',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'A textbook count for healthy adult blood is about 5 million red cells per cubic millimetre.',
    },
    {
      id: 'bbs-bc-q5',
      type: 'drag-order',
      stem: 'Put the four steps of clotting at a wound in the correct ORDER, from first to last.',
      tier: 'core',
      items: [
        'Platelets stick to the broken vessel and clump together',
        'A cut breaks the skin and a blood vessel',
        'The fibrin mesh dries and hardens into a scab',
        'A fibrin protein mesh forms and traps cells',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
      misconceptionId: 'bbs-bc-mis-scab-dried-blood',
    },
    {
      id: 'bbs-bc-q6',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at an NHS Blood and Transplant give-blood event asks what plasma is. Which is the BEST answer?',
      tier: 'core',
      options: [
        'A type of red blood cell with extra haemoglobin',
        'A large white blood cell that engulfs pathogens',
        'A protein mesh that forms when a wound clots',
        'The straw-coloured liquid that carries red cells, white cells, platelets, dissolved nutrients, hormones, and waste carbon dioxide',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bbs-bc-mis-blood-mostly-rbc',
    },
    {
      id: 'bbs-bc-q7',
      type: 'multiple-choice',
      stem: 'Which TWO main types of white blood cell does a Year 7 syllabus expect you to know?',
      tier: 'core',
      options: [
        'Phagocytes (which engulf pathogens) and lymphocytes (which make antibodies)',
        'Erythrocytes and platelets',
        'Osteocytes and chondrocytes',
        'Neurons and myocytes',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bbs-bc-mis-all-wbc-same',
    },
    // CONFIDENT (7) ----------------------------------------------------------
    {
      id: 'bbs-bc-q8',
      type: 'numeric-entry',
      stem: 'A pathology slide shows about 5 million red blood cells and about 7000 white blood cells per cubic millimetre. Work out the ratio of red cells to white cells, rounded to the nearest hundred. Give your answer as a whole number (so 700 means 700 to 1).',
      tier: 'confident',
      correctAnswer: 700,
      xpValue: 15,
      hint: 'Divide 5 000 000 by 7000. Simplify by cancelling the trailing zeros first.',
    },
    {
      id: 'bbs-bc-q9',
      type: 'multiple-choice',
      stem: 'Why does a mature red blood cell have NO nucleus?',
      tier: 'confident',
      options: [
        'Because it is dead and has rotted away',
        'Because the nucleus is moved to the white blood cells for safekeeping',
        'Because losing the nucleus leaves more room for haemoglobin, so each cell can carry more oxygen',
        'Because red blood cells were never animal cells in the first place',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bbs-bc-mis-rbc-has-nucleus',
    },
    {
      id: 'bbs-bc-q10',
      type: 'numeric-entry',
      stem: 'A red blood cell lives for about 120 days. Across a year of 360 days, roughly how many TIMES is one batch of red blood cells fully replaced? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Divide 360 by 120.',
    },
    {
      id: 'bbs-bc-q11',
      type: 'multiple-choice',
      stem: 'A British Heart Foundation poster says: "A red blood cell is biconcave for a reason." Which explanation matches the structure to its function?',
      tier: 'confident',
      options: [
        'The dimples let red cells stack into long rods, like coins',
        'The dimples store extra DNA in place of a nucleus',
        'The biconcave shape stops white cells from attacking the red cells',
        'The biconcave shape raises the surface area to volume ratio, so oxygen moves in and out faster than for a sphere of the same volume',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bbs-bc-mis-rbc-has-nucleus',
    },
    {
      id: 'bbs-bc-q12',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil watches a Wellcome Collection animation of clotting and asks what platelets actually ARE. Which is the BEST answer?',
      tier: 'confident',
      options: [
        'Whole cells the same size as a red blood cell, with a small nucleus',
        'Cell FRAGMENTS pinched off from much larger parent cells in the bone marrow; they have no nucleus and trigger clotting at wound sites',
        'A liquid protein that fills the gaps between cells',
        'A type of white blood cell that makes antibodies',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bbs-bc-mis-platelets-cells',
    },
    {
      id: 'bbs-bc-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Work out how many grams of haemoglobin are in 200 ml of blood at a healthy 14 g per 100 ml."',
      tier: 'confident',
      steps: [
        'Read the rate from the question: 14 g of haemoglobin per 100 ml of blood',
        'Note the blood volume: 200 ml',
        'Find how many 100 ml portions fit in 200 ml: 200 / 100 = 2',
        null,
        'State the answer with the unit: about 28 g of haemoglobin in 200 ml of blood',
      ],
      missingStepIndex: 3,
      correctStep: 'Multiply the rate by the number of portions: 14 g x 2 = 28 g',
      xpValue: 20,
    },
    {
      id: 'bbs-bc-q14',
      type: 'numeric-entry',
      stem: 'About what percentage of whole blood by volume is plasma? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 55,
      xpValue: 15,
      hint: 'Whole blood is roughly 55 percent plasma and 45 percent cells.',
      misconceptionId: 'bbs-bc-mis-blood-mostly-rbc',
    },
    // CHALLENGE (6) ----------------------------------------------------------
    {
      id: 'bbs-bc-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes in her practical book: "A scab is just dried blood. The red colour proves it." Which line is the correct response?',
      tier: 'challenge',
      statements: [
        {
          text: 'She is right: a scab is just blood that has dried into a crust on top of a cut, and the red colour is the dried blood itself.',
          isMisconception: true,
        },
        {
          text: 'She is wrong: a scab is a fibrin protein MESH that has trapped red cells and platelets and then dried out. The red colour comes from the trapped red cells, not from blood drying as a liquid.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bbs-bc-mis-scab-dried-blood',
    },
    {
      id: 'bbs-bc-q16',
      type: 'numeric-entry',
      stem: 'An NHS clinician records that a healthy Year 7 girl has 12 grams of haemoglobin per 100 ml of blood. Her total blood volume is 4500 ml. How many grams of haemoglobin does she carry in TOTAL? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 540,
      xpValue: 25,
      hint: 'Find how many 100 ml portions fit into 4500 ml (4500 / 100 = 45), then multiply by 12 g.',
    },
    {
      id: 'bbs-bc-q17',
      type: 'multiple-choice',
      stem: 'An NHS vaccination poster says the jab "trains" white blood cells. Which type of white blood cell does the training mainly target, and what do they make?',
      tier: 'challenge',
      options: [
        'Lymphocytes: they make antibodies that lock on to the pathogen',
        'Phagocytes: they make haemoglobin',
        'Red blood cells: they make platelets',
        'Platelets: they make fibrin',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'bbs-bc-mis-all-wbc-same',
    },
    {
      id: 'bbs-bc-q18',
      type: 'spot-misconception',
      stem: 'Tom writes: "Blood is made in the heart, because the heart pumps it."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right: the heart is where new blood cells are made.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong: the heart only pumps the blood. New red cells, white cells, and platelets are made in the bone marrow, especially inside long bones, ribs, sternum and pelvis.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bbs-bc-mis-blood-made-in-heart',
    },
    {
      id: 'bbs-bc-q19',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at a Glasgow public-health museum reads that hand-washing cut hospital deaths long before antibiotics. Which white blood cell explanation matches the role of hand-washing best?',
      tier: 'challenge',
      options: [
        'Hand-washing puts more red blood cells into the body',
        'Hand-washing means fewer pathogens enter the body, so phagocytes have fewer microbes to engulf and lymphocytes have less work to do',
        'Hand-washing turns red blood cells into white blood cells',
        'Hand-washing thickens the plasma so clots form faster',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'bbs-bc-mis-wbc-carries-o2',
    },
    {
      id: 'bbs-bc-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pathology technician is asked: "A 0.05 cubic millimetre drop of blood contains how many WHITE blood cells, given a count of 7000 per cubic millimetre?"',
      tier: 'challenge',
      steps: [
        'Read the count: 7000 white blood cells per cubic millimetre',
        'Read the drop volume: 0.05 cubic millimetres',
        'Set up the maths: total cells = count per cubic mm x volume in cubic mm',
        null,
        'State the answer: about 350 white blood cells in the drop',
      ],
      missingStepIndex: 3,
      correctStep: 'Substitute and multiply: 7000 x 0.05 = 350',
      xpValue: 30,
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on cells and the human body: pupils "stated that red blood cells contain a nucleus like other animal cells". Reinforced by Edexcel GCSE Biology 1BI0 specification (Topic 2, CB2c) which lists "no nucleus" as a specified adaptation of red blood cells.
    {
      id: 'bbs-bc-mis-rbc-has-nucleus',
      description:
        'A red blood cell has a nucleus, the same as every other animal cell.',
      triggerAnswer: 'rbc-has-nucleus',
      correction:
        'No. A mature red blood cell has lost its nucleus during maturation in the bone marrow. The empty space leaves more room for haemoglobin, so each cell carries more oxygen.',
      reExplanation:
        'Every animal body cell starts with a nucleus, but the red blood cell is an exception. As it matures in the bone marrow it pushes its nucleus out before entering the blood. The empty space holds more haemoglobin, so each cell carries more oxygen. The trade-off is that the cell cannot repair itself, so it lasts only about 120 days before the spleen recycles it and the bone marrow makes a fresh batch.',
    },
    // Source: AQA GCSE Biology examiner report June 2019 (8461/1F) Q05 on blood: candidates "wrote that white blood cells transport oxygen". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on blood components.
    {
      id: 'bbs-bc-mis-wbc-carries-o2',
      description:
        'White blood cells carry oxygen around the body, the same way as red blood cells.',
      triggerAnswer: 'wbc-carries-o2',
      correction:
        'No. Red blood cells carry oxygen because they contain haemoglobin. White blood cells do not contain haemoglobin and their job is to defend the body against pathogens.',
      reExplanation:
        'The two cell types do different jobs. Red blood cells are packed with haemoglobin, the red pigment that grabs oxygen in the lungs and releases it in the tissues. White blood cells have no haemoglobin, which is why they look pale on a stained smear. Their job is defence: phagocytes engulf pathogens, and lymphocytes make antibodies that lock on to invaders. Mixing the two jobs up is one of the most common Year 7 errors.',
    },
    // Source: OCR GCSE Biology examiner report June 2020 (J247/01) Q06 on blood: candidates "treated all white blood cells as one type, with no distinction between phagocytes and lymphocytes". Reinforced by Reiss and Tunnicliffe Biology Teaching review on common misconceptions, which lists "white blood cells all do the same thing" as a frequent Year 7 to Year 9 error.
    {
      id: 'bbs-bc-mis-all-wbc-same',
      description:
        'All white blood cells do the same job: they just fight germs.',
      triggerAnswer: 'all-wbc-same',
      correction:
        'No. At Year 7 level there are two main types you need: phagocytes that engulf pathogens, and lymphocytes that make antibodies which lock on to invaders. They work in different ways.',
      reExplanation:
        'Phagocytes flow towards a site of infection and surround the pathogen, taking it inside and breaking it down. They are the first responders. Lymphocytes work differently: they make antibodies, which are tiny proteins shaped to fit one specific pathogen, sticking to it so other defenders can finish the job. NHS vaccinations train lymphocytes to make the right antibodies in advance, which is why a jab against measles does not protect against flu.',
    },
    // Source: British Society for Haematology educational resource on platelets: notes that pupils "frequently assume platelets are whole cells; in fact they are anucleate cell fragments". Reinforced by AQA GCSE Biology specification 8461 section 4.2.2.2, which describes platelets as "cell fragments".
    {
      id: 'bbs-bc-mis-platelets-cells',
      description:
        'Platelets are tiny whole cells, the same as red and white blood cells, just smaller.',
      triggerAnswer: 'platelets-cells',
      correction:
        'No. Platelets are cell FRAGMENTS, not whole cells. They are bits pinched off from much larger parent cells in the bone marrow, and they have no nucleus of their own.',
      reExplanation:
        'A whole cell has a membrane and a nucleus. A platelet has only the outer fragment of membrane with some signalling chemicals inside; it never had a nucleus. The parent cell in the bone marrow shatters in a controlled way, scattering thousands of platelets into the blood. Their job is clotting: they stick to broken vessels, clump together, and signal a fibrin mesh to form. The fragment trick lets the body keep many more sentinels on patrol.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on healing and clotting: pupils described a scab as "blood that has dried into a crust". Reinforced by NHS Blood and Transplant teaching resources on clotting, which explicitly correct the "dried blood" view in favour of the fibrin-mesh model.
    {
      id: 'bbs-bc-mis-scab-dried-blood',
      description:
        'A scab is just blood that has dried into a crust on top of a cut.',
      triggerAnswer: 'scab-dried-blood',
      correction:
        'No. A scab is a fibrin protein MESH that has trapped red cells and platelets and then dried out. Blood on its own does not set into a scab; the fibrin mesh is what does the work.',
      reExplanation:
        'When platelets stick to a wound they release signals that switch on a plasma protein to make fibrin. Fibrin is a long stringy molecule that weaves a net across the wound, trapping red cells, more platelets, and debris. The net then shrinks and dries to form a scab. The red colour comes from the trapped red cells, not from blood drying. Without fibrin there would be no scab, no matter how much blood pooled.',
    },
    // Source: AQA GCSE Biology examiner report June 2021 (8461/2F) Q07 on blood composition: candidates "answered that blood is mostly red blood cells by volume". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic, plasma item.
    {
      id: 'bbs-bc-mis-blood-mostly-rbc',
      description:
        'Blood is mostly red blood cells by volume.',
      triggerAnswer: 'blood-mostly-rbc',
      correction:
        'No. Whole blood is roughly 55 percent plasma and 45 percent cells by volume. Plasma, the straw-coloured liquid, is the biggest single component.',
      reExplanation:
        'Spin a tube of blood in a centrifuge and the parts separate by density. The bottom 45 percent is a packed layer of red cells, with a thin pale ring of white cells and platelets above it. The upper 55 percent is straw-coloured plasma, which carries the cells plus dissolved nutrients, hormones, and waste carbon dioxide. Blood looks red because of the red cells, but by volume plasma is the larger part.',
    },
    // Source: OCR GCSE Biology examiner report June 2019 (J247/01) Q08 on blood formation: candidates "wrote that blood is made in the heart". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on circulation and blood formation.
    {
      id: 'bbs-bc-mis-blood-made-in-heart',
      description:
        'Blood is made in the heart, because the heart is full of blood.',
      triggerAnswer: 'blood-made-in-heart',
      correction:
        'No. The heart only pumps blood. New red cells, white cells, and platelets are made in the BONE MARROW, especially inside long bones, ribs, the sternum, and the pelvis.',
      reExplanation:
        'Bone marrow is a soft tissue inside many bones. It contains stem cells that divide and turn into the three blood components. Red cells lose their nucleus on the way out, white cells keep theirs, and platelets are shed as fragments from giant parent cells. The heart, by contrast, is a muscular pump. It holds blood briefly between beats and pushes it on. Blood is constantly being replaced from the bones, not from the heart.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
