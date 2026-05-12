import type { SkillNode } from '@/types/content'

const SPECTRUM_USES_DANGERS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Uses (above) and dangers (below) for each region of the EM spectrum</text>

    <!-- Wavelength axis -->
    <text x="60" y="65" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">long wavelength, low energy per photon</text>
    <text x="740" y="65" text-anchor="end" font-size="11" font-weight="700" stroke="none" fill="currentColor">short wavelength, high energy per photon</text>

    <!-- Seven bands -->
    <rect x="60" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.10" stroke="currentColor" />
    <text x="108" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">radio</text>

    <rect x="157" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.20" stroke="currentColor" />
    <text x="205" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">microwave</text>

    <rect x="254" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.30" stroke="currentColor" />
    <text x="302" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">infrared</text>

    <rect x="351" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.40" stroke="currentColor" />
    <text x="399" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">visible</text>

    <rect x="448" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.55" stroke="currentColor" />
    <text x="496" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">UV</text>

    <rect x="545" y="170" width="97" height="80" fill="currentColor" fill-opacity="0.65" stroke="currentColor" />
    <text x="593" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">X-ray</text>

    <rect x="642" y="170" width="98" height="80" fill="currentColor" fill-opacity="0.80" stroke="currentColor" />
    <text x="691" y="215" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">gamma</text>

    <!-- Uses row (above) -->
    <text x="400" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Uses (one example per region)</text>
    <text x="108" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">BBC Radio 4</text>
    <text x="108" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">broadcast</text>
    <text x="205" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">phone mast,</text>
    <text x="205" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Wi-Fi, oven</text>
    <text x="302" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">TV remote,</text>
    <text x="302" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">thermal camera</text>
    <text x="399" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">seeing,</text>
    <text x="399" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">fibre-optic</text>
    <text x="496" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">security marker,</text>
    <text x="496" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">UV lamps</text>
    <text x="593" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">A and E scan,</text>
    <text x="593" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">airport bags</text>
    <text x="691" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">cancer therapy,</text>
    <text x="691" y="140" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sterilise kit</text>

    <!-- Dangers row (below) -->
    <text x="400" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Dangers (main hazard per region)</text>
    <text x="108" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">no known</text>
    <text x="108" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">harm at low dose</text>
    <text x="205" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">internal heating</text>
    <text x="205" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">of body tissue</text>
    <text x="302" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">skin burns</text>
    <text x="302" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">from heat</text>
    <text x="399" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">eye damage</text>
    <text x="399" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">from bright sources</text>
    <text x="496" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sunburn,</text>
    <text x="496" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">skin cancer</text>
    <text x="593" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">ionises cells:</text>
    <text x="593" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">cancer at high dose</text>
    <text x="691" y="305" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">ionises cells:</text>
    <text x="691" y="320" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">cancer at high dose</text>

    <text x="400" y="365" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Trend: higher frequency means more energy per photon and more biological damage.</text>
  </g>
`

const UV_SKIN_MECHANISM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Why UV harms skin: each UV photon carries enough energy to damage DNA</text>

    <!-- Sun on the left -->
    <circle cx="120" cy="120" r="40" />
    <text x="120" y="125" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Sun</text>
    <line x1="160" y1="100" x2="200" y2="80" />
    <line x1="160" y1="120" x2="200" y2="120" />
    <line x1="160" y1="140" x2="200" y2="160" />
    <text x="180" y="55" font-size="11" stroke="none" fill="currentColor">UV photons</text>

    <!-- Photon arrows mid -->
    <line x1="220" y1="120" x2="380" y2="120" stroke-width="2" stroke-dasharray="6,6" />
    <polygon points="370,113 385,120 370,127" fill="currentColor" stroke="none" />

    <!-- Skin block on the right -->
    <rect x="400" y="60" width="320" height="200" rx="10" />
    <text x="560" y="55" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Skin layers (cross-section)</text>

    <!-- Epidermis -->
    <line x1="400" y1="100" x2="720" y2="100" />
    <text x="410" y="93" font-size="11" font-weight="700" stroke="none" fill="currentColor">epidermis</text>

    <!-- A few DNA helix-like cells -->
    <text x="450" y="155" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">skin cell</text>
    <ellipse cx="450" cy="180" rx="20" ry="30" />
    <text x="450" y="185" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">DNA</text>

    <text x="560" y="155" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">damaged cell</text>
    <ellipse cx="560" cy="180" rx="20" ry="30" stroke-dasharray="4,3" />
    <text x="560" y="185" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="red">X</text>

    <text x="670" y="155" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">healthy cell</text>
    <ellipse cx="670" cy="180" rx="20" ry="30" />
    <text x="670" y="185" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">DNA</text>

    <text x="400" y="295" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A UV photon (about 5 eV) carries enough energy to break a chemical bond in DNA.</text>
    <text x="400" y="315" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A microwave photon (about 0.00001 eV) cannot: it only nudges atoms and produces heat.</text>
    <text x="400" y="335" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">SPF 30 sunscreen blocks about 97 percent of UV photons reaching skin cells.</text>
  </g>
`

const DOSE_COMPARISON_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Everyday exposure vs hazardous dose: typical UK figures in millisieverts (mSv)</text>

    <!-- Axis -->
    <line x1="80" y1="320" x2="720" y2="320" stroke-width="2" />
    <text x="80" y="345" text-anchor="start" font-size="11" stroke="none" fill="currentColor">0 mSv</text>
    <text x="720" y="345" text-anchor="end" font-size="11" stroke="none" fill="currentColor">higher dose</text>

    <!-- Bars (logarithmic feel; just visual) -->
    <!-- Banana 0.0001 mSv -->
    <rect x="110" y="300" width="10" height="20" fill="currentColor" fill-opacity="0.2" />
    <text x="115" y="270" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">banana</text>
    <text x="115" y="285" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">0.0001 mSv</text>

    <!-- Chest X-ray 0.1 mSv -->
    <rect x="230" y="240" width="30" height="80" fill="currentColor" fill-opacity="0.3" />
    <text x="245" y="220" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">chest X-ray</text>
    <text x="245" y="235" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">0.1 mSv</text>

    <!-- UK background year 2.7 mSv -->
    <rect x="350" y="170" width="50" height="150" fill="currentColor" fill-opacity="0.4" />
    <text x="375" y="155" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">UK background</text>
    <text x="375" y="167" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">per year: 2.7 mSv</text>

    <!-- CT scan 7 mSv -->
    <rect x="470" y="110" width="50" height="210" fill="currentColor" fill-opacity="0.55" />
    <text x="495" y="100" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">CT scan</text>
    <text x="495" y="112" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">7 mSv</text>

    <!-- Worker annual limit 20 mSv -->
    <rect x="580" y="80" width="50" height="240" fill="currentColor" fill-opacity="0.7" />
    <text x="605" y="70" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">worker limit</text>
    <text x="605" y="82" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">20 mSv per year</text>

    <!-- Lethal acute 5000 mSv -->
    <rect x="680" y="60" width="30" height="260" fill="currentColor" fill-opacity="0.9" />
    <text x="695" y="50" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">acute lethal</text>
    <text x="695" y="62" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">about 5000 mSv</text>

    <text x="400" y="380" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">A single chest X-ray is roughly 1000 times the dose from a banana, but well under one year of UK background.</text>
  </g>
`

export const wavesEmUsesDangers: SkillNode = {
  id: 'physics-waves-em-uses-dangers',
  title: 'Uses and Dangers of EM Waves',
  description:
    'Each region of the electromagnetic spectrum has its own jobs in everyday life and its own hazards if used carelessly. Radio waves carry BBC Radio 4 and TV signals; microwaves run mobile phone masts, Wi-Fi and kitchen ovens; infrared sends signals from a TV remote and shows up on thermal cameras; visible light lets us see and travels along fibre-optic cables; ultraviolet exposes security marker pens and gives a suntan; X-rays produce A and E images and airport bag scans; gamma rays treat cancer tumours and sterilise surgical kit. Each region also brings risks. Microwaves heat body tissue from the inside, infrared burns skin, UV causes sunburn and skin cancer, and X-rays and gamma rays ionise cells so they can damage DNA at high dose. The general rule is that higher frequency means more energy per photon and more biological damage, which is why short-wave UV, X-ray and gamma rays sit at the dangerous end of the spectrum.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'challenge',
  prerequisites: ['physics-waves-em-spectrum'],
  curriculum: {
    ks3Objective:
      'Use and application of the EM spectrum in everyday contexts, including communication and medicine.',
    awardingBodies: {
      aqa: '4.6.3.2 Properties of electromagnetic waves; uses and hazards of radio, micro, IR, visible, UV, X-ray and gamma (GCSE Physics 8463)',
      edexcel:
        'Topic 5.4 Uses and applications of EM waves; hazards from UV, X-rays and gamma (GCSE Physics 1PH0)',
      ocr: 'P5.3 Electromagnetic spectrum; uses and dangers of each region (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'ed-scene-spectrum-uses-dangers',
      title: 'Uses and Dangers Across the Spectrum',
      type: 'labelled-diagram',
      instructions:
        'Click each region of the spectrum to read its main UK use and its main danger.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPECTRUM_USES_DANGERS_SVG,
        hotspots: [
          {
            id: 'ed-hot-radio',
            x: 14,
            y: 52,
            label: 'Radio: broadcasting and TV signals',
            description:
              'Radio waves are used for BBC Radio 4 (198 kHz Long Wave), DAB radio, Freeview TV signals and emergency radios. At the low frequencies and low intensities used for broadcast, radio waves carry no known health risk; this is why Public Health England raises no warning about living near phone masts.',
          },
          {
            id: 'ed-hot-microwave',
            x: 26,
            y: 52,
            label: 'Microwave: mobile masts, Wi-Fi and ovens',
            description:
              'Microwaves carry 4G and 5G phone signals, Wi-Fi at 2.4 GHz and 5 GHz, and bounce off rain in weather radar. A kitchen microwave oven heats food at 2.45 GHz. The danger from microwaves is internal heating of body tissue, which is why ovens have a metal mesh door seal that keeps the microwaves inside.',
          },
          {
            id: 'ed-hot-infrared',
            x: 38,
            y: 52,
            label: 'Infrared: remote controls, heaters and thermal imaging',
            description:
              'Infrared (IR) carries the signal from a TV remote, shows up on thermal cameras used by the fire service, and warms a room from an electric heater or a grill. Sustained exposure to strong IR burns the skin, the same way you would feel near a bonfire or a hot oven door.',
          },
          {
            id: 'ed-hot-visible',
            x: 50,
            y: 52,
            label: 'Visible light: seeing and fibre-optic communications',
            description:
              'Visible light lets your eyes detect the world. Fibre-optic cables, used for the UK broadband network and for keyhole surgery, send digital data as pulses of visible or near-infrared light. Very bright sources (lasers, the Sun, an arc welder) can damage the retina at long stares.',
          },
          {
            id: 'ed-hot-uv',
            x: 62,
            y: 52,
            label: 'Ultraviolet: security marker pens and suntan',
            description:
              'Ultraviolet (UV) lights make security marker pen ink glow, sterilise water in some treatment plants and trigger the body to make vitamin D and a tan. The danger is sunburn, eye damage and skin cancer. The Met Office UV index reaches 7 to 8 on a sunny Cornish beach in July; SPF 30 sunscreen blocks about 97 percent of the UV that reaches skin.',
          },
          {
            id: 'ed-hot-xray',
            x: 75,
            y: 52,
            label: 'X-ray: A and E imaging and airport baggage',
            description:
              'X-rays pass through soft tissue but stop at dense bone, so they produce the familiar A and E image. Airport baggage scanners and dental imaging use the same property. X-rays ionise cells and can damage DNA, so doses are kept low: a UK chest X-ray is about 0.1 mSv, around 1000 times the dose from eating one banana.',
          },
          {
            id: 'ed-hot-gamma',
            x: 87,
            y: 52,
            label: 'Gamma: cancer therapy and sterilising medical kit',
            description:
              'Gamma rays carry the highest energy per photon. Hospitals aim focused gamma beams at tumours to kill cancer cells, and pass surgical kit through a gamma beam to sterilise it without heating. The danger is the same as X-rays but stronger: gamma ionises cells and damages DNA, so a controlled, targeted dose is used.',
          },
          {
            id: 'ed-hot-trend',
            x: 50,
            y: 90,
            label: 'Trend: higher frequency means more biological damage',
            description:
              'Moving from radio to gamma, the frequency rises and the energy carried by each photon rises with it. Photons with enough energy to break chemical bonds (UV upwards) are called ionising. Microwaves and below cannot break bonds; they only heat. That is the single rule behind the whole pattern of dangers.',
          },
        ],
      },
    },
    {
      id: 'ed-scene-uv-skin',
      title: 'Why UV Harms Skin',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a single UV photon carries enough energy to damage a DNA strand in a skin cell.',
      data: {
        viewBox: '0 0 800 400',
        svg: UV_SKIN_MECHANISM_SVG,
        hotspots: [
          {
            id: 'ed-uv-photon',
            x: 22,
            y: 30,
            label: 'UV photon: about 5 eV per photon',
            description:
              'Each UV photon carries about 5 electronvolts (eV) of energy, well above the 3 to 4 eV needed to break a chemical bond in a DNA strand. The intensity of the Sun (how many photons per second) only changes how many cells are hit; the energy per photon is what does the damage.',
          },
          {
            id: 'ed-uv-damaged-cell',
            x: 70,
            y: 45,
            label: 'Damaged skin cell: broken DNA',
            description:
              'A UV photon snaps a bond in the DNA strand. The cell either repairs the damage, dies, or in rare cases mutates and divides without limit. Repeated UV exposure over years pushes up the risk of skin cancer. Sunscreen with SPF 30 stops about 97 percent of UV photons reaching skin.',
          },
          {
            id: 'ed-uv-microwave-contrast',
            x: 50,
            y: 80,
            label: 'Contrast with microwaves',
            description:
              'A microwave photon carries about 0.00001 eV, a million times less than a UV photon. That is far too little to break a DNA bond; microwaves heat tissue by nudging water molecules, which can burn at high power but does not break chemical bonds. UV and shorter waves are called "ionising"; microwaves are not.',
          },
        ],
      },
    },
    {
      id: 'ed-scene-dose-comparison',
      title: 'Everyday Doses vs Hazardous Doses',
      type: 'labelled-diagram',
      instructions:
        'Click each bar to see how UK doses of ionising radiation compare. Doses are in millisieverts (mSv).',
      data: {
        viewBox: '0 0 800 400',
        svg: DOSE_COMPARISON_SVG,
        hotspots: [
          {
            id: 'ed-dose-banana',
            x: 14,
            y: 72,
            label: 'Banana: 0.0001 mSv',
            description:
              'One banana gives a tiny dose of ionising radiation from the natural potassium-40 it contains. The dose is so small it never causes harm, but it is a useful unit for comparison.',
          },
          {
            id: 'ed-dose-xray',
            x: 30,
            y: 60,
            label: 'Chest X-ray: about 0.1 mSv',
            description:
              'A standard NHS chest X-ray gives about 0.1 mSv, around 1000 times the banana dose. The radiographer stands behind a lead screen and the patient wears a lead apron over anything not being imaged.',
          },
          {
            id: 'ed-dose-background',
            x: 47,
            y: 45,
            label: 'UK background: 2.7 mSv per year',
            description:
              'The average UK resident absorbs about 2.7 mSv per year from natural sources: radon gas from soil, cosmic rays, food, and the rocks of the ground. Cornwall sees higher values because of granite bedrock.',
          },
          {
            id: 'ed-dose-ct',
            x: 62,
            y: 30,
            label: 'CT scan: about 7 mSv',
            description:
              'A CT scan uses many X-rays from many angles to build a 3D image. A typical chest CT is about 7 mSv, around two and a half years of UK background dose. Doctors weigh the diagnostic benefit against the dose.',
          },
          {
            id: 'ed-dose-worker',
            x: 76,
            y: 22,
            label: 'Worker limit: 20 mSv per year',
            description:
              'UK regulations cap radiation workers (radiographers, nuclear-plant staff) at 20 mSv per year, far below any acute risk. A radiographer wears a film badge that is read monthly to check the cumulative dose.',
          },
          {
            id: 'ed-dose-lethal',
            x: 88,
            y: 18,
            label: 'Acute lethal: around 5000 mSv',
            description:
              'A single dose of around 5000 mSv all at once kills about half of those exposed within weeks (acute radiation syndrome). That is roughly 50,000 chest X-rays in one go: only possible in industrial accidents or a deliberate event.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ed-worked-match-region',
      title: 'Match an everyday use to an EM region',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil reads that a Bristol hospital sterilises bandages by passing them through a beam of high-energy waves with very short wavelengths. The bandages are not heated. Which EM region is being used?',
        },
        {
          explanation:
            'Recall the use cues. Radio is broadcast; microwave is masts and ovens; infrared is heat and remotes; visible is sight and fibre-optics; UV is suntan and security marker pens; X-ray is A and E imaging; gamma is cancer therapy and sterilising medical kit.',
        },
        {
          explanation:
            'Match the cue. "Sterilise medical kit" with "short wavelength" and "no heating" lines up with gamma. X-rays could damage the kit too, but the standard UK term for sterilising bandages is gamma sterilisation, because gamma penetrates the packaging.',
        },
        {
          explanation:
            'State the answer. The hospital uses gamma rays. They sit at the short-wavelength end of the spectrum and carry the highest energy per photon, which kills bacteria and viruses inside the sealed packet.',
        },
      ],
    },
    {
      id: 'ed-worked-region-to-danger',
      title: 'Predict the main danger for a region',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil asks why a sunbed in a tanning salon carries a warning sticker about skin cancer, but a bedroom radio does not. Both use EM waves.',
        },
        {
          explanation:
            'Identify the regions. A sunbed uses UV lamps. A bedroom radio uses radio waves from a transmitter.',
        },
        {
          explanation:
            'Recall the trend. Energy per photon rises with frequency. UV photons carry about 5 eV, enough to break DNA bonds. Radio photons carry about 0.000001 eV, far too little to break any bond.',
          maths: 'E_photon = h f',
        },
        {
          explanation:
            'Apply the rule. Only photons above about 3 eV (UV and shorter) are ionising and can damage DNA. Radio waves are non-ionising at any reasonable intensity.',
        },
        {
          explanation:
            'State the answer. The sunbed warning is correct: UV photons can break DNA and so increase the risk of skin cancer. Radio waves cannot break chemical bonds, so the bedroom radio carries no equivalent cancer risk.',
        },
      ],
    },
    {
      id: 'ed-worked-frequency-conversion',
      title: 'Convert a Wi-Fi frequency from GHz to Hz',
      steps: [
        {
          explanation:
            'Set out the situation. A Wi-Fi router in a Leeds home runs on 2.4 GHz. The pupil wants the frequency in hertz so they can substitute into v = f λ.',
        },
        {
          explanation: 'Recall the unit conversion.',
          maths: '1 GHz = 10^9 Hz',
        },
        {
          explanation: 'Multiply the figure by 10^9.',
          maths: 'f = 2.4 x 10^9 Hz',
        },
        {
          explanation:
            'State the answer. The Wi-Fi frequency is 2.4 x 10^9 Hz, the same as 2,400,000,000 Hz. The microwave region sits between 10^9 Hz and 10^12 Hz, so 2.4 GHz lands inside the microwave region.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ed-q1',
      type: 'multiple-choice',
      stem: 'Which EM region does a kitchen microwave oven use to heat food?',
      tier: 'core',
      options: ['Radio', 'Microwave', 'Infrared', 'X-ray'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ed-mis-microwaves-are-xrays',
      hint: 'The clue is in the name. Microwave ovens use waves at 2.45 GHz, which sits in the microwave region.',
    },
    {
      id: 'ed-q2',
      type: 'multiple-choice',
      stem: 'A radiographer in an A and E department takes an image of a broken wrist. Which EM region is being used?',
      tier: 'core',
      options: ['Radio', 'Infrared', 'Ultraviolet', 'X-ray'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'X-rays pass through soft tissue but stop at bone, which is why the bone shows up white on the image.',
    },
    {
      id: 'ed-q3',
      type: 'multiple-choice',
      stem: 'A TV remote in a Manchester living room sends a signal across the room without anyone seeing the beam. Which EM region is used?',
      tier: 'core',
      options: ['Infrared', 'Ultraviolet', 'Microwave', 'Gamma'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The signal is invisible and short range. The same region warms you from a grill or a radiator.',
    },
    {
      id: 'ed-q4',
      type: 'multiple-choice',
      stem: 'On a hot July afternoon on a Cornish beach, the Met Office UV index reads 8. Which EM region does the UV index measure?',
      tier: 'core',
      options: ['Visible light', 'Ultraviolet', 'Infrared', 'Microwave'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'UV stands for ultraviolet. It sits just past the violet end of visible light.',
    },
    {
      id: 'ed-q5',
      type: 'multiple-choice',
      stem: 'Which EM region is used for fibre-optic broadband cables that run under UK streets?',
      tier: 'core',
      options: [
        'Radio',
        'Microwave',
        'Visible (and near-infrared) light',
        'Gamma',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Fibre-optic cables guide pulses of light along a glass thread.',
    },
    {
      id: 'ed-q6',
      type: 'numeric-entry',
      stem: 'A Wi-Fi router runs on 2.4 GHz. Convert this frequency into Hz.',
      tier: 'core',
      correctAnswer: 2400000000,
      unit: 'Hz',
      xpValue: 10,
      misconceptionId: 'ed-mis-frequency-units',
      hint: '1 GHz = 10^9 Hz. Multiply 2.4 by 10^9.',
    },
    {
      id: 'ed-q7',
      type: 'numeric-entry',
      stem: 'BBC Radio 4 Long Wave broadcasts at 198 kHz. Convert this frequency into Hz.',
      tier: 'core',
      correctAnswer: 198000,
      unit: 'Hz',
      xpValue: 10,
      misconceptionId: 'ed-mis-frequency-units',
      hint: '1 kHz = 1000 Hz. Multiply 198 by 1000.',
    },
    {
      id: 'ed-q8',
      type: 'multiple-choice',
      stem: 'Which EM region is used by NHS hospitals to sterilise sealed packets of bandages and surgical kit?',
      tier: 'confident',
      options: [
        'Radio, because it travels long distances.',
        'Microwave, because it heats the bandages.',
        'Infrared, because heat kills bacteria.',
        'Gamma, because it ionises cells and penetrates the sealed packet.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The kit must not be heated. The wave must pass through the packet and kill bacteria by ionising cells.',
    },
    {
      id: 'ed-q9',
      type: 'multiple-choice',
      stem: 'Which sentence best describes the main danger from microwaves at high intensity?',
      tier: 'confident',
      options: [
        'They ionise cells and break DNA bonds.',
        'They heat body tissue from the inside.',
        'They cause sunburn on exposed skin.',
        'They produce a bright flash that damages the eye.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ed-mis-gamma-heats-like-microwaves',
      hint: 'Microwaves carry far too little energy per photon to ionise cells. They make water molecules jiggle, which heats tissue.',
    },
    {
      id: 'ed-q10',
      type: 'multiple-choice',
      stem: 'A pupil reads that ultraviolet light can cause sunburn, but visible light cannot, even on a bright Cornish day. Why?',
      tier: 'confident',
      options: [
        'Visible light travels slower in air than UV does, so it has less impact.',
        'UV photons carry more energy per photon than visible photons, enough to break chemical bonds in skin cells.',
        'Visible light reflects off the skin while UV always passes through.',
        'UV has a longer wavelength than visible light, so it stays in the skin for longer.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ed-mis-uv-tan-only',
      hint: 'The trend across the spectrum: higher frequency, shorter wavelength, more energy per photon.',
    },
    {
      id: 'ed-q11',
      type: 'numeric-entry',
      stem: 'A 4G phone mast operates at 1.8 GHz. Convert this frequency into Hz.',
      tier: 'confident',
      correctAnswer: 1800000000,
      unit: 'Hz',
      xpValue: 15,
      misconceptionId: 'ed-mis-frequency-units',
      hint: '1 GHz = 10^9 Hz. Multiply 1.8 by 10^9.',
    },
    {
      id: 'ed-q12',
      type: 'numeric-entry',
      stem: 'A standard NHS chest X-ray gives a dose of about 0.1 mSv. Eating one banana gives about 0.0001 mSv. How many times larger is the chest X-ray dose than the banana dose? Give a whole number.',
      tier: 'confident',
      correctAnswer: 1000,
      unit: '',
      xpValue: 15,
      hint: 'Divide 0.1 by 0.0001.',
    },
    {
      id: 'ed-q13',
      type: 'numeric-entry',
      stem: 'A standard NHS chest X-ray is about 0.1 mSv. A typical chest CT scan is about 7 mSv. How many chest X-rays would give the same dose as one chest CT scan? Give a whole number.',
      tier: 'confident',
      correctAnswer: 70,
      unit: '',
      xpValue: 15,
      hint: 'Divide 7 by 0.1.',
    },
    {
      id: 'ed-q14',
      type: 'spot-misconception',
      stem: 'Priya tells her younger brother: "Microwave ovens use X-rays, which is why you should not stand right against the door."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The microwave region and the X-ray region are basically the same thing, so the door seal blocks both.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. A microwave oven uses microwaves at 2.45 GHz, not X-rays. The metal mesh in the door keeps the microwaves inside; the danger is internal heating of tissue, not ionisation.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ed-mis-microwaves-are-xrays',
    },
    {
      id: 'ed-q15',
      type: 'drag-order',
      stem: 'Put these EM regions in order of energy per photon, from LOWEST to HIGHEST.',
      tier: 'confident',
      items: ['Gamma', 'Visible', 'Radio', 'Ultraviolet', 'Microwave'],
      correctOrder: [2, 4, 1, 3, 0],
      xpValue: 15,
      hint: 'Energy per photon rises with frequency. Radio is lowest. Gamma is highest.',
    },
    {
      id: 'ed-q16',
      type: 'multiple-choice',
      stem: 'A pupil in Newcastle asks: "Why is gamma worse for body cells than visible light, when both are EM waves?"',
      tier: 'challenge',
      options: [
        'Gamma travels faster in air than visible light, so it hits cells harder.',
        'Gamma has a longer wavelength, so each wave deposits more energy.',
        'Gamma has a much higher frequency, so each photon carries enough energy to ionise atoms and break DNA bonds in cells.',
        'Visible light cannot enter body tissue at all, while gamma can.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ed-mis-all-em-dangerous',
      hint: 'The cell-damaging cut-off is not "how many photons" but "how much energy per photon". Photons above about 3 eV can break chemical bonds.',
    },
    {
      id: 'ed-q17',
      type: 'numeric-entry',
      stem: 'SPF 30 sunscreen blocks about 97 percent of UV photons reaching skin cells. If 1000 UV photons hit a 1 cm^2 patch of skin per second without sunscreen, how many UV photons per second reach the skin with SPF 30 sunscreen on? Give a whole number.',
      tier: 'challenge',
      correctAnswer: 30,
      unit: '',
      xpValue: 20,
      hint: 'SPF 30 lets 3 percent through. 3 percent of 1000 is 30.',
    },
    {
      id: 'ed-q18',
      type: 'spot-misconception',
      stem: 'Marcus tells a classmate: "Living near a phone mast gives you cancer because radio and microwave signals destroy cells the same way UV light does."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. Any EM wave damages cells in the same way; only the dose changes.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. Microwave and radio photons carry far too little energy to break chemical bonds in cells. The UK Health Security Agency reports no evidence of a cancer link at the exposure levels around UK phone masts.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'ed-mis-all-em-dangerous',
    },
    {
      id: 'ed-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is comparing two doses: a chest X-ray at 0.1 mSv and the UK average annual background dose of 2.7 mSv. They want to find how many chest X-rays add up to one year of background.',
      tier: 'challenge',
      steps: [
        'Set out the data: chest X-ray dose = 0.1 mSv; UK background per year = 2.7 mSv.',
        'State the method: divide the larger dose by the smaller dose to find how many X-rays match the year.',
        'Write the calculation: number of X-rays = 2.7 / 0.1.',
        null,
        'State the answer: about 27 chest X-rays match the dose a UK resident absorbs naturally in one year.',
      ],
      missingStepIndex: 3,
      correctStep: 'Evaluate the calculation: 2.7 / 0.1 = 27.',
      xpValue: 20,
    },
    {
      id: 'ed-q20',
      type: 'numeric-entry',
      stem: 'A UV index of 8 means about 200 milliwatts of UV per square metre reach the ground. If a pupil sits unshaded on a Cornish beach for 30 minutes with no sunscreen, what total UV energy reaches a 1 m^2 patch of skin? Give the answer in joules. (Hint: energy = power x time, with time in seconds.)',
      tier: 'challenge',
      correctAnswer: 360,
      unit: 'J',
      tolerance: 5,
      xpValue: 20,
      hint: 'Convert 30 minutes to 1800 s. Then 0.200 W/m^2 x 1800 s x 1 m^2 = 360 J.',
    },
    {
      id: 'ed-q21',
      type: 'multiple-choice',
      stem: 'Which sentence about gamma rays is correct?',
      tier: 'challenge',
      options: [
        'Gamma rays heat cells the same way a microwave oven does.',
        'Gamma rays ionise cells: each photon has enough energy to break chemical bonds, including in DNA.',
        'Gamma rays travel slower in air than microwaves do.',
        'Gamma rays are a kind of sound wave that the ear cannot detect.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ed-mis-gamma-heats-like-microwaves',
      hint: 'The cell damage from gamma is about each photon breaking bonds, not about heating tissue.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that microwave ovens emit X-rays, missing that the oven uses 2.45 GHz microwaves and that the door mesh blocks microwave wavelengths, not X-rays.
    {
      id: 'ed-mis-microwaves-are-xrays',
      description:
        'Believing that microwave ovens use X-rays, instead of microwaves at 2.45 GHz.',
      triggerAnswer: 'microwaves-are-xrays',
      correction:
        'In fact a kitchen microwave oven uses microwaves at 2.45 GHz, not X-rays. The metal mesh in the door blocks waves at this wavelength.',
      reExplanation:
        'Microwaves and X-rays sit at opposite-ish ends of the spectrum. Microwaves have wavelengths near 1 cm and frequencies around 10^9 to 10^11 Hz. X-rays have wavelengths near 1 nm and frequencies around 10^17 Hz. The food heats because water molecules absorb 2.45 GHz microwaves and vibrate; this raises their thermal store. X-rays would not heat the food at all but would damage cells in any user nearby. The two regions are not interchangeable.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates wrote that UV only causes the skin to tan and is never harmful, missing that sustained UV exposure causes sunburn, eye damage and skin cancer.
    {
      id: 'ed-mis-uv-tan-only',
      description:
        'Believing that UV light only causes a suntan and is never harmful, missing that UV photons can damage DNA in skin cells.',
      triggerAnswer: 'uv-tan-only',
      correction:
        'In fact UV photons carry enough energy to break DNA bonds. Repeated UV exposure causes sunburn, eye damage and skin cancer, not just a tan.',
      reExplanation:
        'A UV photon carries about 5 eV, well above the 3 to 4 eV needed to snap a DNA bond. The body makes melanin (the tan) as a partial defence, but the bond-breaking damage is still happening underneath. Cancer Research UK reports about 9 in 10 melanoma cases are caused by UV. SPF 30 blocks roughly 97 percent of UV; SPF 50 blocks about 98 percent.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, Paper 1F, candidates wrote that all EM waves are equally dangerous to the body, missing the link between photon energy and biological damage.
    {
      id: 'ed-mis-all-em-dangerous',
      description:
        'Treating every EM region as equally dangerous, missing that biological damage depends on energy per photon and that radio and microwaves are non-ionising.',
      triggerAnswer: 'all-em-dangerous',
      correction:
        'Actually only photons above about 3 eV (UV and shorter) carry enough energy per photon to break chemical bonds in cells. Radio and microwave photons are non-ionising at typical intensities and carry no known cancer risk.',
      reExplanation:
        'Two things matter for biological damage: how much energy each photon carries (set by frequency) and how many photons hit per second (intensity). Below about 3 eV per photon, the wave can only heat tissue, never break bonds. Above 3 eV (UV upwards) the wave is ionising and can damage DNA. The UK Health Security Agency reports no evidence of harm from typical phone-mast or Wi-Fi exposure at standard distances.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that radio waves from masts and pylons gave nearby residents cancer, missing the non-ionising nature of radio and the lack of evidence at standard distances.
    {
      id: 'ed-mis-radio-causes-cancer',
      description:
        'Believing that radio waves from phone masts or pylons cause cancer in nearby residents at typical exposure levels.',
      triggerAnswer: 'radio-causes-cancer',
      correction:
        'In fact radio photons carry far too little energy to break chemical bonds in cells. The UK Health Security Agency reports no evidence of a cancer link at typical exposure levels around UK phone masts.',
      reExplanation:
        'A radio photon at 100 MHz carries about 4 x 10^-7 eV, ten million times less than the 3 eV needed to break a DNA bond. Even at 4G mast frequencies (around 2 GHz), photon energy is still about 10^-5 eV, far below threshold. Intensity falls as 1 / r^2 with distance, so the dose a few hundred metres away is tiny. WHO and UKHSA report no cancer link.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that gamma rays heat the body like microwaves do, missing the difference between heating and ionisation.
    {
      id: 'ed-mis-gamma-heats-like-microwaves',
      description:
        'Believing that gamma rays harm the body by heating it like microwaves do, instead of by ionising cells and breaking DNA bonds.',
      triggerAnswer: 'gamma-heats-like-microwaves',
      correction:
        'In fact gamma rays harm cells by ionisation, not heating. Each gamma photon carries enough energy to break chemical bonds in DNA.',
      reExplanation:
        'A microwave photon carries about 0.00001 eV, far below the 3 eV bond-breaking threshold. Microwaves only nudge water molecules to vibrate, raising the thermal store. A gamma photon carries around 1 MeV, more than enough to ionise atoms and break DNA bonds. The body barely heats from a clinical gamma dose; the harm comes from broken DNA strands. That is why a focused gamma beam can target tumour cells without cooking nearby tissue.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates routinely confused frequency units (kHz, MHz, GHz) when converting EM-band figures, applying powers of ten incorrectly.
    {
      id: 'ed-mis-frequency-units',
      description:
        'Mixing up the frequency unit prefixes, treating 1 kHz, 1 MHz and 1 GHz as if they differ by ten rather than by a thousand each step.',
      triggerAnswer: 'frequency-units-confused',
      correction:
        'In fact each unit prefix scales by 1000: 1 kHz = 1000 Hz, 1 MHz = 1000 kHz, 1 GHz = 1000 MHz. So a 2 GHz signal is 2 000 000 000 Hz, not 20 000 or 200 000.',
      reExplanation:
        'Hertz (Hz) counts oscillations per second. Kilo means a thousand, mega means a million, giga means a billion. A 4G mast at 2 GHz oscillates two billion times per second. Mixing the prefixes by factors of ten turns a microwave into something that looks like radio. Anchor each step: 1 kHz = 10^3 Hz, 1 MHz = 10^6 Hz, 1 GHz = 10^9 Hz.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates suggested they could "hear" radio waves directly because radios produce sound, missing that the speaker converts the radio signal into a sound wave.
    {
      id: 'ed-mis-can-hear-radio-waves',
      description:
        'Believing that the ear can hear radio waves directly, missing that the radio set converts radio signals into sound waves through a speaker.',
      triggerAnswer: 'can-hear-radio-waves',
      correction:
        'Actually the ear cannot detect radio waves: it detects sound, which is a longitudinal pressure wave in air. A radio set picks up the EM signal and a speaker converts it into a sound wave you can hear.',
      reExplanation:
        'Radio waves are transverse EM waves with wavelengths 1 m to 1 km. Sound waves are longitudinal pressure waves in air, travelling at 340 m/s rather than 3 x 10^8 m/s. The radio set is the converter: an aerial picks up the EM wave, electronics decode the signal, and a speaker pushes air to make a sound wave that reaches the ear. Strip out the speaker and the radio is silent.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesEmUsesDangersZoneNodes = [wavesEmUsesDangers]
