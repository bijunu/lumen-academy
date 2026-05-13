import type { SkillNode } from '@/types/content'

const temVsSemSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">TEM vs SEM: two electron microscopes, two kinds of picture</text>
  <rect x="30" y="50" width="260" height="300" rx="10" fill="#E0E7FF" stroke="#3730A3" stroke-width="3" />
  <text x="160" y="76" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#1E3A8A">TEM (Transmission)</text>
  <text x="160" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Electrons pass THROUGH a thin slice</text>
  <ellipse cx="160" cy="200" rx="100" ry="70" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
  <ellipse cx="130" cy="195" rx="22" ry="14" fill="#A78BFA" stroke="#4C1D95" stroke-width="1.5" />
  <text x="130" y="199" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">mitochondrion</text>
  <ellipse cx="190" cy="210" rx="18" ry="11" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1.5" />
  <text x="190" y="213" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">nucleus edge</text>
  <circle cx="170" cy="170" r="3" fill="#1F2937" />
  <circle cx="155" cy="225" r="3" fill="#1F2937" />
  <circle cx="200" cy="180" r="3" fill="#1F2937" />
  <text x="160" y="300" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">2D slice, sub-cellular detail</text>
  <text x="160" y="316" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">resolution down to about 0.1 nm</text>
  <text x="160" y="332" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">grayscale; false colour added later</text>
  <rect x="310" y="50" width="260" height="300" rx="10" fill="#FCE7F3" stroke="#9D174D" stroke-width="3" />
  <text x="440" y="76" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#9D174D">SEM (Scanning)</text>
  <text x="440" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Electrons scan the SURFACE</text>
  <g transform="translate(440,210)">
    <ellipse cx="0" cy="0" rx="80" ry="55" fill="#F9A8D4" stroke="#831843" stroke-width="2" />
    <circle cx="-30" cy="-15" r="14" fill="#7F1D1D" stroke="#450A0A" stroke-width="1.5" />
    <circle cx="-30" cy="-15" r="6" fill="#FCA5A5" />
    <circle cx="30" cy="-15" r="14" fill="#7F1D1D" stroke="#450A0A" stroke-width="1.5" />
    <circle cx="30" cy="-15" r="6" fill="#FCA5A5" />
    <line x1="-50" y1="20" x2="-44" y2="34" stroke="#451A03" stroke-width="2" />
    <line x1="-30" y1="25" x2="-26" y2="40" stroke="#451A03" stroke-width="2" />
    <line x1="0" y1="28" x2="2" y2="44" stroke="#451A03" stroke-width="2" />
    <line x1="30" y1="25" x2="32" y2="40" stroke="#451A03" stroke-width="2" />
    <line x1="50" y1="20" x2="52" y2="34" stroke="#451A03" stroke-width="2" />
  </g>
  <text x="440" y="300" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">3D-looking surface view</text>
  <text x="440" y="316" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">resolution about 1 to 3 nm</text>
  <text x="440" y="332" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">grayscale; false colour added later</text>
  <text x="300" y="372" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Same insect eye, different probes: through-slice (TEM) vs surface-scan (SEM)</text>
</svg>
`.trim()

const resolutionLadderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">Resolution ladder: light vs SEM vs TEM</text>
  <line x1="100" y1="60" x2="100" y2="330" stroke="#111827" stroke-width="3" />
  <line x1="96" y1="60" x2="104" y2="60" stroke="#111827" stroke-width="3" />
  <line x1="96" y1="150" x2="104" y2="150" stroke="#111827" stroke-width="3" />
  <line x1="96" y1="240" x2="104" y2="240" stroke="#111827" stroke-width="3" />
  <line x1="96" y1="330" x2="104" y2="330" stroke="#111827" stroke-width="3" />
  <text x="86" y="64" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#7F1D1D">light: 200 nm</text>
  <text x="86" y="154" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#9D174D">SEM: 1 to 3 nm</text>
  <text x="86" y="244" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">TEM: 0.1 nm</text>
  <text x="86" y="334" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">smaller</text>
  <rect x="140" y="50" width="420" height="40" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="350" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">light limit (200 nm): mitochondrion just visible, ribosome NOT visible</text>
  <rect x="140" y="140" width="420" height="40" rx="6" fill="#F9A8D4" stroke="#9D174D" stroke-width="2" />
  <text x="350" y="166" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">SEM band (1 to 3 nm): virus and ribosome surface visible</text>
  <rect x="140" y="230" width="420" height="40" rx="6" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="2" />
  <text x="350" y="256" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">TEM band (0.1 nm): inner mitochondrial membrane visible</text>
  <circle cx="280" cy="320" r="6" fill="#7C3AED" stroke="#3730A3" stroke-width="1.5" />
  <text x="280" y="345" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">ribosome</text>
  <text x="280" y="357" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">25 nm</text>
  <ellipse cx="380" cy="320" rx="14" ry="6" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1.5" />
  <text x="380" y="345" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">mitochondrion</text>
  <text x="380" y="357" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">2 µm = 2000 nm</text>
  <circle cx="480" cy="320" r="3" fill="#FED7AA" stroke="#9A3412" stroke-width="1.5" />
  <text x="480" y="345" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">virus</text>
  <text x="480" y="357" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">100 nm</text>
</svg>
`.trim()

const jeolRoomSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">Inside a JEOL electron-microscope room at a UK university</text>
  <rect x="40" y="50" width="520" height="320" rx="10" fill="#F1F5F9" stroke="#475569" stroke-width="3" />
  <rect x="220" y="90" width="160" height="240" rx="6" fill="#CBD5E1" stroke="#1F2937" stroke-width="3" />
  <text x="300" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1F2937">JEOL column</text>
  <rect x="250" y="125" width="100" height="40" fill="#94A3B8" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="148" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">electron gun</text>
  <rect x="250" y="170" width="100" height="30" fill="#64748B" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFFFFF">magnetic lenses</text>
  <rect x="250" y="205" width="100" height="30" fill="#475569" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="225" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFFFFF">vacuum chamber</text>
  <rect x="250" y="240" width="100" height="30" fill="#94A3B8" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="260" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">sample stage</text>
  <rect x="250" y="275" width="100" height="40" fill="#64748B" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="300" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFFFFF">detector</text>
  <rect x="60" y="180" width="130" height="90" rx="4" fill="#1F2937" stroke="#0F172A" stroke-width="2" />
  <rect x="70" y="190" width="110" height="65" fill="#0EA5E9" />
  <ellipse cx="125" cy="222" rx="30" ry="20" fill="#0F172A" stroke="#FFFFFF" stroke-width="1" />
  <text x="125" y="285" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">computer screen</text>
  <rect x="60" y="290" width="130" height="40" rx="4" fill="#94A3B8" stroke="#1F2937" stroke-width="2" />
  <text x="125" y="313" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">control desk</text>
  <rect x="410" y="180" width="130" height="150" rx="4" fill="#E2E8F0" stroke="#475569" stroke-width="2" />
  <text x="475" y="205" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#1F2937">specimen prep</text>
  <text x="475" y="225" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">slice to ~70 nm</text>
  <text x="475" y="240" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">stain with heavy</text>
  <text x="475" y="252" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">metals (TEM)</text>
  <text x="475" y="272" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">or coat in gold</text>
  <text x="475" y="284" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1F2937">(SEM)</text>
  <text x="475" y="305" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7F1D1D">sample is killed</text>
  <text x="475" y="317" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7F1D1D">by vacuum + stain</text>
  <text x="300" y="360" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Wolfson Bioimaging Facility, Bristol: a typical UK university EM suite</text>
</svg>
`.trim()

export const electronMicroscopes: SkillNode = {
  id: 'biology-microscopy-electron-microscopes',
  title: 'Electron Microscopes: TEM and SEM',
  description:
    'School light microscopes hit a hard floor at about 200 nm because visible light has a wavelength near 500 nm. To see anything smaller, biologists swap the light for a beam of electrons, which behave as a much shorter-wavelength probe and drop the resolution floor by hundreds of times. Two electron-microscope styles dominate UK university imaging suites. Transmission electron microscopes (TEM) fire electrons THROUGH an ultra-thin slice and produce a 2D black-and-white image, resolution down to about 0.1 nm, fine enough to show the inner membrane of a mitochondrion. Scanning electron microscopes (SEM) scan the SURFACE of a sample coated in gold and build a 3D-looking image, resolution about 1 to 3 nm, perfect for showing a fly compound eye or the surface of a pollen grain. Both kill the sample: the column sits under vacuum and the staining or coating step is fatal. Year 7 biologists need to know which tool to pick for which job, why electron microscopes are not just stronger light microscopes, and how the resolution ladder slots ribosomes, viruses, and mitochondria into visible or invisible bands.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-microscopy',
  zoneName: 'Microscopy',
  tier: 'challenge',
  prerequisites: ['biology-microscopy-resolution'],
  curriculum: {
    ks3Objective:
      'Year 7 grammar-school stretch beyond KS3; introduces the imaging tool that revealed sub-cellular structure. Builds on light-microscope resolution by contrasting the wavelength-bound 200 nm floor of visible light with the much shorter electron-beam wavelength.',
    awardingBodies: {
      aqa: '4.1.1.3 Transmission and scanning electron microscopy; how higher resolution reveals sub-cellular structures (GCSE Biology 8461).',
      edexcel:
        'CB1e Electron microscopy and its role in revealing ultra-structure (GCSE Biology 1BI0, Topic 1).',
      ocr: 'B1.1b Electron microscopes: TEM vs SEM (GCSE Biology A J247).',
    },
  },
  scenes: [
    {
      id: 'bmi-em-tem-vs-sem',
      title: 'TEM vs SEM: Two Probes, Two Pictures',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a transmission electron microscope (through a thin slice) with a scanning electron microscope (across the surface). Both give grayscale images; any colour you see in textbooks is added later.',
      data: {
        viewBox: '0 0 600 400',
        svg: temVsSemSvg,
        hotspots: [
          {
            id: 'bmi-em-tvs-tem',
            x: 27,
            y: 50,
            label: 'TEM: through a thin slice',
            description:
              'A transmission electron microscope fires electrons THROUGH an ultra-thin slice of sample, around 70 nm thick. Darker areas absorbed more electrons because the heavy-metal stain stuck there. The result is a 2D black-and-white image, with resolution down to about 0.1 nm. Fine enough to show the inner folds of a mitochondrion.',
          },
          {
            id: 'bmi-em-tvs-sem',
            x: 73,
            y: 50,
            label: 'SEM: across the surface',
            description:
              'A scanning electron microscope sweeps a focused electron beam across the SURFACE of a sample coated in gold or platinum. A detector picks up electrons knocked off the surface, line by line. The output is a 3D-looking image of texture and shape, resolution about 1 to 3 nm. Good for whole pollen grains, insect eyes, or pathogen surfaces.',
          },
          {
            id: 'bmi-em-tvs-colour',
            x: 50,
            y: 85,
            label: 'Both are grayscale at source',
            description:
              'Electron detectors record electron counts, not light wavelengths. The raw images that come out of a TEM or SEM are in shades of grey. The dramatic colours in BBC science programmes are added by the imaging team after the fact, to highlight specific structures for an audience.',
          },
          {
            id: 'bmi-em-tvs-same-sample',
            x: 50,
            y: 95,
            label: 'Same kind of sample, different views',
            description:
              'A fly head can be imaged on both. TEM needs a thin slice through the head, showing the inside of one cell at high detail. SEM uses the whole head, gold-coated, showing the outside of the compound eye in 3D-looking false colour. Same biology; different question.',
          },
        ],
      },
    },
    {
      id: 'bmi-em-resolution-ladder',
      title: 'The Resolution Ladder: 200 nm to 0.1 nm',
      type: 'labelled-diagram',
      instructions:
        'Click each band to see what each microscope can resolve. Structures land in the band of the smallest-resolution tool that beats their size.',
      data: {
        viewBox: '0 0 600 400',
        svg: resolutionLadderSvg,
        hotspots: [
          {
            id: 'bmi-em-rl-light',
            x: 60,
            y: 18,
            label: 'Light microscope: 200 nm floor',
            description:
              'A school light microscope can resolve points down to about 200 nm. Above this floor, structures like whole cells (60 µm) and mitochondria (2 µm) show up as distinct shapes. Below it, viruses (100 nm) and ribosomes (25 nm) stay invisible at any magnification, because visible light cannot fit between them.',
          },
          {
            id: 'bmi-em-rl-sem',
            x: 60,
            y: 40,
            label: 'SEM: 1 to 3 nm',
            description:
              'A scanning electron microscope drops the floor to about 1 to 3 nm. Viruses (100 nm) and the outside of ribosomes (25 nm) become visible as surface features. SEM is the standard tool for imaging the textures of pollen grains, insect surfaces, and pathogen coats in UK university bioimaging suites.',
          },
          {
            id: 'bmi-em-rl-tem',
            x: 60,
            y: 60,
            label: 'TEM: about 0.1 nm',
            description:
              'A transmission electron microscope drops the floor to roughly 0.1 nm. This is fine enough to show the inner folds of a mitochondrion and the layered structure of cell membranes inside an ultra-thin slice. TEM is what biologists reach for when they need to see the internal anatomy of an organelle.',
          },
          {
            id: 'bmi-em-rl-structures',
            x: 60,
            y: 82,
            label: 'Where the structures land',
            description:
              'A mitochondrion at 2 µm sits well above all three floors and is visible everywhere. A virus at 100 nm sits below the light floor but above the SEM floor, so it needs at least SEM. A ribosome at 25 nm needs SEM for surface, or TEM for internal structure. Always read each size in nm before comparing.',
          },
        ],
      },
    },
    {
      id: 'bmi-em-jeol-room',
      title: 'Inside a UK University Electron Microscope Suite',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to tour a typical JEOL electron microscope room, similar to the Wolfson Bioimaging Facility in Bristol or imaging suites at Cambridge, Imperial, York, and Manchester.',
      data: {
        viewBox: '0 0 600 400',
        svg: jeolRoomSvg,
        hotspots: [
          {
            id: 'bmi-em-jr-column',
            x: 50,
            y: 30,
            label: 'The column',
            description:
              'A two-metre-tall metal column made by JEOL or Hitachi. The electron gun sits at the top, magnetic lenses focus the beam, and a vacuum chamber removes air so the electrons travel in a straight line. The sample stage and detector sit near the bottom.',
          },
          {
            id: 'bmi-em-jr-vacuum',
            x: 50,
            y: 56,
            label: 'Vacuum chamber',
            description:
              'Air molecules would scatter the electron beam, so the column is pumped down to a near vacuum. This is one reason living samples cannot be imaged: a cell placed under vacuum loses water from every surface in one motion and collapses. Electron microscopes only image dead, fixed samples.',
          },
          {
            id: 'bmi-em-jr-screen',
            x: 21,
            y: 56,
            label: 'Computer screen',
            description:
              'The image is built up as the detector counts electrons, line by line for SEM or in one go for TEM. The output is a high-resolution grayscale picture displayed on a normal computer screen. The operator never looks down an eyepiece; there is no eyepiece on an electron microscope.',
          },
          {
            id: 'bmi-em-jr-prep',
            x: 79,
            y: 56,
            label: 'Specimen prep bench',
            description:
              'Samples for TEM are embedded in resin and sliced to about 70 nm with a diamond knife, then stained with heavy metals like osmium tetroxide. SEM samples are dried and coated with a thin layer of gold or platinum. Both prep routes are fatal to the cells.',
          },
          {
            id: 'bmi-em-jr-funding',
            x: 50,
            y: 92,
            label: 'Funding and access',
            description:
              'UK suites like the Wolfson Bioimaging Facility in Bristol are funded by the Wellcome Trust and host researchers from across the country. Royal Microscopical Society outreach days let school groups see a JEOL or Hitachi column in action and view freshly captured TEM and SEM images on the operator screen.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bmi-em-worked-1',
      title: 'Can a school light microscope show a mitochondrion\'s inner membrane?',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil in a Cambridge biology lab asks if she can see the inner folded membrane of a mitochondrion using the school light microscope.',
        },
        {
          explanation:
            'Step 1: write down the resolution floor of each tool in the same unit. Light microscope: about 200 nm. SEM: 1 to 3 nm. TEM: about 0.1 nm.',
          maths: 'light 200 nm, SEM 1 to 3 nm, TEM 0.1 nm',
        },
        {
          explanation:
            'Step 2: state the size of the feature she wants to see. The inner mitochondrial membrane has folds that sit only a few nanometres apart.',
          maths: 'inner membrane folds ~5 to 10 nm apart',
        },
        {
          explanation:
            'Step 3: compare the feature to each floor. 5 to 10 nm is far below 200 nm, so the light microscope cannot resolve the folds. 5 to 10 nm is above 0.1 nm, so TEM can.',
          maths: '5 nm < 200 nm (light: no), 5 nm > 0.1 nm (TEM: yes)',
        },
        {
          explanation:
            'Step 4: state the answer. No, the school light microscope cannot resolve the inner membrane folds. The pupil would need a transmission electron microscope, which fires electrons through an ultra-thin slice and resolves down to 0.1 nm. A SEM would show the outside of the mitochondrion but not the inner folds.',
        },
        {
          explanation:
            'Step 5: sense check. UK biology textbook images of mitochondrial folds are all labelled TEM, not light micrographs. This matches the calculation: only TEM beats the few-nanometre gap between folds.',
          maths: 'TEM resolution 0.1 nm beats 5 nm membrane fold spacing',
        },
      ],
    },
    {
      id: 'bmi-em-worked-2',
      title: 'How many times better is TEM\'s resolution than a school light microscope?',
      steps: [
        {
          explanation:
            'Question: a Royal Microscopical Society outreach poster claims that TEM is thousands of times better than light microscopy. A pupil wants to check this with a calculation.',
        },
        {
          explanation:
            'Step 1: write both resolution floors in the same unit. Use nanometres because the TEM value is already in nm.',
          maths: 'light = 200 nm, TEM = 0.1 nm',
        },
        {
          explanation:
            'Step 2: pick the right operation. "How many times better" means: how many times smaller is the TEM floor than the light floor. That is a division of light floor by TEM floor.',
          maths: 'ratio = 200 / 0.1',
        },
        {
          explanation:
            'Step 3: do the arithmetic.',
          maths: '200 / 0.1 = 2000',
        },
        {
          explanation:
            'Step 4: state the answer. TEM resolves features 2000 times closer together than a school light microscope. The poster claim of "thousands of times" is correct, and the actual figure is 2000.',
          maths: 'TEM resolution is 2000x better than light',
        },
        {
          explanation:
            'Step 5: cross-check on SEM. SEM floor about 1 nm, light floor 200 nm, ratio 200 / 1 = 200, so SEM is about 200 times better than light. TEM is roughly ten times better than SEM, which matches what UK university bioimaging guides say.',
          maths: 'SEM ratio = 200 / 1 = 200; TEM / SEM ratio = 2000 / 200 = 10',
        },
      ],
    },
    {
      id: 'bmi-em-worked-3',
      title: 'Choosing TEM or SEM for a fly compound eye',
      steps: [
        {
          explanation:
            'Question: a biology team at Imperial College wants images of a fly compound eye. One pupil wants the 3D texture of the eye surface for a poster; another wants to see inside a single light-sensing cell. Which microscope does each pupil pick?',
        },
        {
          explanation:
            'Step 1: identify what each microscope does. SEM scans the surface and gives a 3D-looking image. TEM passes electrons through an ultra-thin slice and gives a 2D image of cell internals.',
          maths: 'SEM: surface 3D, TEM: internal 2D slice',
        },
        {
          explanation:
            'Step 2: match each question to a tool. The poster needs surface texture of the whole eye, so SEM. The internal cell view needs an ultra-thin slice through one ommatidium, so TEM.',
        },
        {
          explanation:
            'Step 3: check the resolutions are good enough. The fly eye is millimetres across, with surface ridges of a few micrometres. SEM at 1 to 3 nm is far more than enough for surface ridges. The internal cell structures are a few nm to a few hundred nm, so TEM at 0.1 nm comfortably resolves them.',
          maths: 'SEM 1 to 3 nm resolves µm-scale ridges; TEM 0.1 nm resolves nm-scale organelles',
        },
        {
          explanation:
            'Step 4: state the prep route for each. SEM: dry the eye, coat in gold, mount in the vacuum chamber. TEM: fix the eye in resin, slice to about 70 nm with a diamond knife, stain with osmium. Both kill the fly, but neither would work on a living one anyway because the vacuum chamber collapses water in living cells.',
        },
        {
          explanation:
            'Step 5: state the final pairing. Pupil A (poster, surface): SEM, 3D-looking grayscale image, false colour added later. Pupil B (inside one cell): TEM, 2D grayscale image of an ultra-thin slice.',
          maths: 'surface texture poster: SEM; one-cell internal view: TEM',
        },
      ],
    },
  ],
  questions: [
    // CORE (7 questions) -----------------------------------------------------
    {
      id: 'bmi-em-q1',
      type: 'multiple-choice',
      stem: 'Which probe does an electron microscope use to form its image?',
      tier: 'core',
      options: [
        'A beam of electrons, which behave as a much shorter wavelength probe',
        'A beam of visible light, brighter than a school microscope',
        'A beam of x-rays passed through the sample',
        'A beam of sound waves bouncing off the sample',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bmi-em-mis-just-magnify-more',
    },
    {
      id: 'bmi-em-q2',
      type: 'multiple-choice',
      stem: 'What does TEM stand for?',
      tier: 'core',
      options: [
        'Total Enlargement Microscope',
        'Tiny Electronic Magnifier',
        'Transmission Electron Microscope',
        'Through-lens Eyepiece Module',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'bmi-em-q3',
      type: 'multiple-choice',
      stem: 'What kind of image does an SEM produce?',
      tier: 'core',
      options: [
        'A 2D slice through the inside of a cell',
        'A 3D-looking grayscale view of the surface of the sample',
        'A naturally coloured photo of a living cell',
        'A moving video of cells dividing in real time',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bmi-em-mis-tem-sem-same-image',
    },
    {
      id: 'bmi-em-q4',
      type: 'multiple-choice',
      stem: 'Can an electron microscope image a living cell?',
      tier: 'core',
      options: [
        'No: the vacuum and the staining or coating step both kill the sample',
        'Yes: living cells can be placed straight in the vacuum chamber',
        'Yes, but only if the cell is from a plant',
        'Yes, but only at low magnification',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bmi-em-mis-can-image-living',
    },
    {
      id: 'bmi-em-q5',
      type: 'numeric-entry',
      stem: 'A school light microscope has a resolution of about 200 nm. A TEM resolves down to about 0.1 nm. How many times better is the TEM resolution than the light microscope? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 2000,
      xpValue: 15,
      hint: 'Divide the light floor by the TEM floor: 200 divided by 0.1.',
    },
    {
      id: 'bmi-em-q6',
      type: 'numeric-entry',
      stem: 'A virus is 100 nm across. In micrometres, what is this size? Give your answer as a decimal.',
      tier: 'core',
      correctAnswer: 0.1,
      tolerance: 0.001,
      unit: 'µm',
      xpValue: 10,
      hint: '1 micrometre = 1000 nm. Divide 100 by 1000.',
    },
    {
      id: 'bmi-em-q7',
      type: 'drag-order',
      stem: 'Order these three resolution floors from BIGGEST gap (worst resolution) to SMALLEST gap (best resolution).',
      tier: 'core',
      items: [
        'TEM (about 0.1 nm)',
        'School light microscope (about 200 nm)',
        'SEM (about 1 to 3 nm)',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
    },
    // CONFIDENT (7 questions) ------------------------------------------------
    {
      id: 'bmi-em-q8',
      type: 'multiple-choice',
      stem: 'A pupil at an Imperial College open day claims that electron microscopes "just magnify more" than school microscopes. Which is the best response?',
      tier: 'confident',
      options: [
        'Correct: they use the same probe as a light microscope, only stronger',
        'Incorrect: they use a different probe (electrons), which has a much shorter wavelength than visible light, so they can resolve much smaller features',
        'Correct: electron microscopes use brighter bulbs',
        'Incorrect: electron microscopes magnify less, not more',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-just-magnify-more',
    },
    {
      id: 'bmi-em-q9',
      type: 'multiple-choice',
      stem: 'A textbook shows a stunning purple-and-gold image of a virus, labelled "SEM". A pupil thinks the virus is naturally those colours. What is the correct view?',
      tier: 'confident',
      options: [
        'Viruses are naturally purple and gold; that is why SEM shows them that way',
        'SEM uses coloured electrons that give the image its colour',
        'SEM raw images are grayscale because detectors count electrons, not colours. Any colour you see is added later by the imaging team for display',
        'The colour comes from the gold coating on the sample',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-em-is-colour',
    },
    {
      id: 'bmi-em-q10',
      type: 'multiple-choice',
      stem: 'A biology team at the Wolfson Bioimaging Facility in Bristol wants to image the texture of a pollen grain surface. Which tool should they pick?',
      tier: 'confident',
      options: [
        'School light microscope at x1000',
        'TEM, because the pollen grain is too small for SEM',
        'SEM, because it scans the surface and shows 3D-looking texture',
        'Naked eye',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-tem-sem-same-image',
    },
    {
      id: 'bmi-em-q11',
      type: 'multiple-choice',
      stem: 'A pupil pushes the eyepiece on a school light microscope to its highest setting and says she will now see ribosomes inside the cell. Which is correct?',
      tier: 'confident',
      options: [
        'She is wrong: ribosomes are about 25 nm, well below the 200 nm resolution floor of any light microscope, so no magnification can bring them into focus',
        'She is right: at high enough magnification, ribosomes appear',
        'She is right, but only for plant ribosomes',
        'She is wrong: ribosomes are bigger than 200 nm',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-school-scope-ribosomes',
    },
    {
      id: 'bmi-em-q12',
      type: 'numeric-entry',
      stem: 'A ribosome is 25 nm across. The SEM at a UK university has a resolution of about 1 nm. How many times bigger than the SEM resolution floor is one ribosome? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 25,
      xpValue: 15,
      hint: 'Divide the ribosome size by the SEM floor: 25 divided by 1.',
    },
    {
      id: 'bmi-em-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes: "TEM and SEM produce the same kind of picture. They are interchangeable, so it does not matter which one you pick."',
      tier: 'confident',
      statements: [
        {
          text: 'The claim is sound. TEM and SEM are interchangeable.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. TEM shows a 2D slice through the inside of a sample at very high resolution; SEM scans the surface and gives a 3D-looking view at lower resolution. You pick TEM for internal detail and SEM for surface texture.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-tem-sem-same-image',
    },
    {
      id: 'bmi-em-q14',
      type: 'multiple-choice',
      stem: 'A pupil at a Wellcome Collection imaging exhibition asks why electron microscopes have to sit in a vacuum, and why samples need so much preparation before they go in. What is the best answer?',
      tier: 'confident',
      options: [
        'To keep the lenses warm',
        'Air molecules would scatter the electron beam, so the column is pumped down to a near vacuum. TEM samples are sliced to about 70 nm and stained with heavy metals; SEM samples are dried and gold-coated. Both prep routes are needed to make the sample conductive and stable in the vacuum',
        'To stop dust landing on the sample',
        'To stop the bulb burning out',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bmi-em-mis-no-prep',
    },
    // CHALLENGE (6 questions) ------------------------------------------------
    {
      id: 'bmi-em-q15',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at a Cambridge biology open day claims: "I can see a mitochondrion\'s inner membrane folds using a school light microscope set to x1500." Which is the best correction?',
      tier: 'challenge',
      options: [
        'She is right; x1500 is enough',
        'She is right, but only for animal mitochondria',
        'She is wrong because x1500 is too low; she needs x4000 on a school microscope',
        'She is wrong because the inner folds are only a few nanometres apart, far below the 200 nm light microscope floor. No magnification on a school microscope can resolve them. She needs a TEM at about 0.1 nm resolution',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'bmi-em-mis-higher-mag-higher-res',
    },
    {
      id: 'bmi-em-q16',
      type: 'numeric-entry',
      stem: 'The SEM at a UK university resolves features about 2 nm apart. A school light microscope resolves features about 200 nm apart. How many times better is the SEM than the school light microscope? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 100,
      xpValue: 25,
      hint: 'Divide the light floor by the SEM floor: 200 divided by 2.',
    },
    {
      id: 'bmi-em-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil writes: "Electron microscopes are just better light microscopes; the only difference is stronger lenses." Walk through why this is wrong.',
      tier: 'challenge',
      steps: [
        'A light microscope uses visible light as the probe; visible light has a wavelength near 500 nm.',
        'An electron microscope uses a beam of electrons as the probe; the electron beam behaves as if its wavelength is far shorter than 500 nm.',
        null,
        'So the two instruments use different physics, not just stronger lenses. The improvement comes from the probe, not the optics.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A shorter probe wavelength lets the microscope distinguish features that sit closer together, which is why the SEM and TEM floors drop to a few nm or below.',
      xpValue: 25,
      misconceptionId: 'bmi-em-mis-just-magnify-more',
    },
    {
      id: 'bmi-em-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "A virus is 100 nm across. A school light microscope floor is 200 nm; the SEM floor is 2 nm. Which tool will resolve this virus?"',
      tier: 'challenge',
      steps: [
        'Write down each floor and the virus size in the same unit: light 200 nm, SEM 2 nm, virus 100 nm.',
        'Compare the virus to the light floor: 100 nm is BELOW 200 nm, so the light microscope cannot resolve it.',
        null,
        'State the answer: the SEM will resolve the virus; the school light microscope will not.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Compare the virus to the SEM floor: 100 nm is ABOVE 2 nm, so the SEM resolves it as a clear feature.',
      xpValue: 25,
    },
    {
      id: 'bmi-em-q19',
      type: 'spot-misconception',
      stem: 'A pupil watching a BBC science documentary filmed at the Crick Institute writes: "These electron microscope images show living immune cells attacking a virus in their natural colours."',
      tier: 'challenge',
      statements: [
        {
          text: 'The claim is sound. The cells are alive and the colours are natural.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. The cells are dead (killed by vacuum and either heavy-metal staining or gold-coating), and the colour is added later in software. The raw image is grayscale because the detector counts electrons, not light wavelengths.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bmi-em-mis-em-is-colour',
    },
    {
      id: 'bmi-em-q20',
      type: 'data-extraction',
      stem: 'A class lists four claims about UK electron microscope rooms. Which row is the only one that is fully correct?',
      tier: 'challenge',
      dataSource:
        'Four claims from class notes: A. SEM gives a 3D-looking image of the surface and the raw image is grayscale. B. TEM works on living samples because electrons do not harm cells. C. The school light microscope can see ribosomes if you turn the bulb up. D. SEM and TEM produce the same image so it does not matter which one you pick.',
      correctAnswer: 'A',
      xpValue: 25,
      hint: 'Cross-check each claim against the resolution ladder and the vacuum-kills-the-sample rule.',
      misconceptionId: 'bmi-em-mis-tem-sem-same-image',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology examiner report June 2019 (8461/1F) Q03 on microscopy: candidates "described electron microscopes as light microscopes with stronger lenses" rather than identifying a different probe. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning size-and-scale diagnostic, item on light vs electron probes.
    {
      id: 'bmi-em-mis-just-magnify-more',
      description:
        'Electron microscopes just magnify more than light microscopes; same instrument, stronger lenses.',
      triggerAnswer: 'just-magnify-more',
      correction:
        'Electron microscopes swap the probe entirely. They use a beam of electrons, which behaves as a much shorter wavelength probe than visible light, so the resolution floor drops by hundreds of times.',
      reExplanation:
        'A school light microscope is bounded by the wavelength of visible light, near 500 nm, giving a floor of about 200 nm. An electron beam has a far shorter effective wavelength, which is why TEM resolves down to about 0.1 nm. Same idea of focusing a probe through lenses; the lenses are magnetic, not glass. Calling it "just stronger" hides the wavelength swap that does all the work.',
    },
    // Source: CLEAPSS Science Publication PS90 Microscopy guidance: "pupils often think electron microscopes can image living cells, missing the vacuum and staining requirement". Reinforced by Royal Microscopical Society outreach FAQ for schools (rms.org.uk), which lists this as a top-five myth.
    {
      id: 'bmi-em-mis-can-image-living',
      description:
        'Electron microscopes can image living cells, just like a school light microscope can.',
      triggerAnswer: 'can-image-living',
      correction:
        'No. The column is under vacuum and the prep step uses heavy-metal staining or gold coating. Both steps are fatal. Only dead, fixed samples can be imaged.',
      reExplanation:
        'A living cell placed in a vacuum loses water from every surface in one motion and collapses. Even before that, TEM samples are sliced to about 70 nm and stained with osmium tetroxide; SEM samples are dried and coated with a thin layer of gold or platinum. Both routes kill the cell. For live imaging you need a light microscope, which is one reason light microscopy still has its place.',
    },
    // Source: OCR GCSE Biology examiner report June 2019 (J247/01) Q04 on microscopy: candidates "did not distinguish between transmission and scanning electron microscopes when describing the kind of image produced". Reinforced by Edexcel GCSE Biology examiner report June 2021 (1BI0/1F) Q05 on imaging tools.
    {
      id: 'bmi-em-mis-tem-sem-same-image',
      description:
        'TEM and SEM produce the same kind of image and are interchangeable.',
      triggerAnswer: 'tem-sem-same-image',
      correction:
        'They are different. TEM gives a 2D image of the inside of a thin slice. SEM gives a 3D-looking image of the surface. You pick TEM for internal anatomy and SEM for surface texture.',
      reExplanation:
        'TEM fires electrons through an ultra-thin slice and shows what is inside one cell at very high resolution, down to 0.1 nm. SEM scans a beam across a gold-coated surface and builds a 3D-looking image of the outside, line by line, at about 1 to 3 nm. Same physics of focusing electrons; very different output. Picking the wrong one means you image the wrong half of the sample.',
    },
    // Source: Royal Microscopical Society outreach FAQ for schools (rms.org.uk) and CLEAPSS PS90 Microscopy: both flag "vivid colour electron-microscope images" as a top schoolroom misconception, noting raw images are always grayscale.
    {
      id: 'bmi-em-mis-em-is-colour',
      description:
        'Electron microscopes produce colour images of cells in their natural colours.',
      triggerAnswer: 'em-is-colour',
      correction:
        'No. The raw output of a TEM or SEM is grayscale because detectors count electrons, not light wavelengths. Any colour you see in textbooks or on BBC science programmes is added later in software.',
      reExplanation:
        'A photon detector can record wavelength as colour. An electron detector only records how many electrons hit a point. So the picture that comes out of the column is shades of grey. The imaging team adds colour for display: red for one organelle, blue for another. This is helpful for an audience but it is a creative step, not a property of the sample.',
    },
    // Source: AQA GCSE Biology examiner report June 2020 (8461/2F) Q06 on microscopy: candidates "claimed that a school light microscope can resolve ribosomes if magnified enough". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on cell-structure visibility.
    {
      id: 'bmi-em-mis-school-scope-ribosomes',
      description:
        'A school light microscope can show ribosomes inside a cell if you push the magnification high enough.',
      triggerAnswer: 'school-scope-ribosomes',
      correction:
        'No. Ribosomes are about 25 nm across, far below the 200 nm resolution floor of any light microscope. No level of magnification on a school light microscope can bring them into focus.',
      reExplanation:
        'Visible light has a wavelength near 500 nm, which sets a hard floor at about 200 nm on a school microscope. A ribosome at 25 nm is eight times smaller than that floor, so it stays invisible no matter how strong the eyepiece is. To see ribosomes you need a probe with a far shorter wavelength, which is what the electron beam in a TEM or SEM provides.',
    },
    // Source: CLEAPSS Science Publication PS90 Microscopy: pupils "treat magnification as if it can substitute for resolution on any instrument, even past the wavelength floor". Reinforced by AQA GCSE Biology examiner report June 2019 (8461/1F) Q03 on the magnification-resolution distinction.
    {
      id: 'bmi-em-mis-higher-mag-higher-res',
      description:
        'On a school light microscope, higher magnification always means higher resolution.',
      triggerAnswer: 'higher-mag-higher-res',
      correction:
        'No. Resolution is bounded at about 200 nm on any school light microscope, regardless of magnification. Past that floor, extra magnification only enlarges the same blur.',
      reExplanation:
        'Magnification is how many times bigger the image looks; resolution is the smallest real-world gap between two points that the microscope can still show as two. Past the wavelength-set floor, the gap between two too-close points stays merged into one blob, so turning the magnification up just makes the blob bigger. Biologists call this empty magnification.',
    },
    // Source: Edexcel GCSE Biology examiner report June 2022 (1BI0/1F) Q04 on microscopy methods: candidates "thought electron microscope samples could be wet or living"; the report explicitly highlights the dry-and-coat or fix-and-slice prep. Reinforced by Royal Microscopical Society outreach materials on UK university EM suites.
    {
      id: 'bmi-em-mis-no-prep',
      description:
        'You can drop a fresh sample straight into an electron microscope without any preparation.',
      triggerAnswer: 'no-prep',
      correction:
        'No. TEM samples must be fixed in resin and sliced to about 70 nm before staining with heavy metals. SEM samples must be dried and coated with a thin layer of gold or platinum.',
      reExplanation:
        'The column is under vacuum, so any water in the sample would boil off and the cell would collapse. The prep steps replace water with resin (TEM) or remove it and coat the dry surface in conductive metal (SEM). Both routes take hours and both kill the cell. This is one reason that light microscopy still matters: it is the only way to image living biology.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
