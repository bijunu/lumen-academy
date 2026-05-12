import type { SkillNode } from '@/types/content'

const EXPANSION_RAISIN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Space itself stretches: every galaxy moves away from every other</text>

    <!-- Earlier universe (smaller, denser) -->
    <text x="200" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earlier: galaxies close together</text>
    <circle cx="200" cy="200" r="90" stroke-width="2" />
    <circle cx="170" cy="170" r="8" fill="currentColor" />
    <circle cx="220" cy="160" r="8" fill="currentColor" />
    <circle cx="240" cy="220" r="8" fill="currentColor" />
    <circle cx="170" cy="240" r="8" fill="currentColor" />
    <circle cx="200" cy="200" r="8" fill="currentColor" />

    <!-- Arrow showing time -->
    <line x1="310" y1="200" x2="490" y2="200" stroke-width="2" />
    <polygon points="485,193 498,200 485,207" fill="currentColor" stroke="none" />
    <text x="400" y="190" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">time passes; space stretches</text>
    <text x="400" y="222" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">galaxies do not fly through space</text>

    <!-- Later universe (larger, sparser) -->
    <text x="600" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Later: galaxies further apart</text>
    <circle cx="600" cy="200" r="140" stroke-width="2" />
    <circle cx="555" cy="155" r="8" fill="currentColor" />
    <circle cx="660" cy="135" r="8" fill="currentColor" />
    <circle cx="695" cy="240" r="8" fill="currentColor" />
    <circle cx="540" cy="265" r="8" fill="currentColor" />
    <circle cx="600" cy="200" r="8" fill="currentColor" />

    <!-- Rule box -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">From every galaxy the view is the same: all others appear to move away.</text>
    <text x="400" y="392" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The Big Bang is the expansion of space itself, not an explosion at one point.</text>
  </g>
`

const REDSHIFT_DISTANCE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Hubble's law: further galaxies show bigger red-shifts</text>

    <!-- Lab reference spectrum -->
    <text x="120" y="80" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Lab line at rest</text>
    <rect x="120" y="90" width="560" height="30" stroke="currentColor" />
    <line x1="250" y1="90" x2="250" y2="120" stroke-width="3" />
    <text x="120" y="140" text-anchor="start" font-size="11" stroke="none" fill="currentColor">blue end</text>
    <text x="680" y="140" text-anchor="end" font-size="11" stroke="none" fill="currentColor">red end</text>

    <!-- Near galaxy -->
    <text x="120" y="170" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Near galaxy: small red-shift</text>
    <rect x="120" y="180" width="560" height="30" stroke="currentColor" />
    <line x1="290" y1="180" x2="290" y2="210" stroke-width="3" />
    <line x1="250" y1="170" x2="290" y2="175" stroke-dasharray="4 4" />

    <!-- Mid galaxy -->
    <text x="120" y="240" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Further galaxy: bigger red-shift</text>
    <rect x="120" y="250" width="560" height="30" stroke="currentColor" />
    <line x1="370" y1="250" x2="370" y2="280" stroke-width="3" />
    <line x1="250" y1="240" x2="370" y2="245" stroke-dasharray="4 4" />

    <!-- Far galaxy -->
    <text x="120" y="310" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Very far galaxy: huge red-shift</text>
    <rect x="120" y="320" width="560" height="30" stroke="currentColor" />
    <line x1="490" y1="320" x2="490" y2="350" stroke-width="3" />
    <line x1="250" y1="310" x2="490" y2="315" stroke-dasharray="4 4" />

    <!-- Rule box -->
    <text x="400" y="385" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">The further away the galaxy, the more its light has been stretched.</text>
  </g>
`

const CMB_TIMELINE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Cosmic Microwave Background: leftover heat from the early Universe</text>

    <!-- Time axis -->
    <line x1="80" y1="270" x2="720" y2="270" stroke-width="2" />
    <polygon points="715,263 728,270 715,277" fill="currentColor" stroke="none" />
    <text x="400" y="320" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">time after the Big Bang (not to scale)</text>

    <!-- t = 0 -->
    <line x1="120" y1="265" x2="120" y2="275" stroke-width="2" />
    <text x="120" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">t = 0</text>
    <text x="120" y="120" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">hot, dense state</text>
    <text x="120" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">space starts to expand</text>

    <!-- t = 380 000 yr -->
    <line x1="350" y1="265" x2="350" y2="275" stroke-width="2" />
    <text x="350" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 380 000 yr</text>
    <text x="350" y="100" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Universe becomes transparent</text>
    <text x="350" y="120" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">first light is released</text>
    <text x="350" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">stretched ever since</text>

    <!-- t = 13.8 Gyr -->
    <line x1="650" y1="265" x2="650" y2="275" stroke-width="2" />
    <text x="650" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 13.8 billion yr (today)</text>
    <text x="650" y="100" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">we detect it as microwaves</text>
    <text x="650" y="120" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">faint glow at about 2.7 K</text>
    <text x="650" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">fills all of space</text>

    <!-- Glow band -->
    <rect x="80" y="195" width="640" height="40" stroke="currentColor" stroke-dasharray="4 4" />
    <text x="400" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the same photons travel through expanding space, stretched from visible light to microwaves</text>

    <!-- Rule box -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">The CMB is direct evidence the Universe was once tiny, hot, and dense.</text>
  </g>
`

export const spaceBigBang: SkillNode = {
  id: 'physics-space-big-bang',
  title: 'The Big Bang and an Expanding Universe',
  description:
    'The observable Universe is about 13.8 billion years old. Everything we can see was once concentrated in a tiny, hot, dense state. From that, space itself began to expand (the Big Bang) and continues to expand today. The key evidence is red-shift: light from almost every distant galaxy is shifted toward the red end of the spectrum, with bigger red-shifts for galaxies further away (Hubble\'s law). A second strand of evidence is the cosmic microwave background (CMB), a faint glow at about 2.7 K filling all of space, leftover heat from when the early Universe became transparent about 380 000 years after the Big Bang. A third strand is that the relative amounts of hydrogen, helium, and lithium across the cosmos match Big Bang predictions. Year 7 Challenge work stays qualitative: the Big Bang is the expansion of space itself, not an explosion at a point, and from every galaxy the view is the same.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'challenge',
  prerequisites: ['physics-waves-doppler-effect', 'physics-space-light-years'],
  curriculum: {
    ks3Objective:
      'Other galaxies; the Universe on the largest scale. Extension beyond KS3 core into early GCSE astrophysics.',
    awardingBodies: {
      aqa: '4.8.2 Red-shift and the Big Bang theory; evidence for an expanding Universe (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.11 to 8.13 red-shift, the Big Bang, and the expanding Universe (GCSE Physics 1PH0)',
      ocr: 'P8.2 The Big Bang; red-shift and evidence for the expansion of the Universe (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      // Source: AQA GCSE Physics 8463 specification 4.8.2 (Red-shift and the Big Bang theory), public specification document.
      id: 'pbb-expansion',
      title: 'Space Itself Stretches Between Galaxies',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why every galaxy appears to move away from every other galaxy as space expands.',
      data: {
        viewBox: '0 0 800 400',
        svg: EXPANSION_RAISIN_SVG,
        hotspots: [
          {
            id: 'pbb-exp-earlier',
            x: 25,
            y: 50,
            label: 'Earlier: galaxies were closer together',
            description:
              'Run the clock back and the same set of galaxies sit much closer together. Trace it back far enough and everything we can see was packed into a tiny, hot, dense state. That moment is what we call the Big Bang.',
          },
          {
            id: 'pbb-exp-later',
            x: 75,
            y: 50,
            label: 'Later: space between galaxies has stretched',
            description:
              'As time passes, the space between every pair of galaxies grows. The galaxies are not flying away through some empty void; the void itself is being stretched out. The further apart two galaxies are, the more rapidly the space between them grows.',
          },
          {
            id: 'pbb-exp-no-centre',
            x: 50,
            y: 92,
            label: 'There is no centre to the expansion',
            description:
              'From every galaxy the view is the same: all the others appear to recede. There is no special galaxy that the others are running away from. The Milky Way is not at the centre, and neither is anywhere else.',
          },
          {
            id: 'pbb-exp-not-explosion',
            x: 50,
            y: 98,
            label: 'The Big Bang is not an explosion at a point',
            description:
              'An ordinary explosion throws material out through pre-existing space, away from a centre. The Big Bang is different: it is the expansion of space itself, and it happened everywhere at once. There is no "outside" the Universe to expand into.',
          },
        ],
      },
    },
    {
      // Source: OCR GCSE Physics J259 Gateway specification P8.2 (The Big Bang theory and red-shift), public specification document.
      id: 'pbb-redshift',
      title: 'Hubble\'s Law: More Distant Means More Red-Shifted',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a lab line with the same line seen in galaxies at growing distance from Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: REDSHIFT_DISTANCE_SVG,
        hotspots: [
          {
            id: 'pbb-rs-lab',
            x: 25,
            y: 22,
            label: 'Lab line: source at rest',
            description:
              'In a lab, hot hydrogen gas emits a sharp spectral line at a fixed, known wavelength. That position is the reference. Every galaxy in this scene has the same line in its own light; the question is where the line shows up against the lab reference.',
          },
          {
            id: 'pbb-rs-near',
            x: 25,
            y: 45,
            label: 'Near galaxy: small red-shift',
            description:
              'A galaxy a few hundred million light-years away has its line shifted only a little toward the red end. The space between us has stretched only modestly while the light was on its way, so the wavelength has grown only modestly.',
          },
          {
            id: 'pbb-rs-far',
            x: 25,
            y: 70,
            label: 'Further galaxy: bigger red-shift',
            description:
              'A galaxy billions of light-years away shows a much bigger red-shift. The line has moved a long way toward the red end. The light has travelled through far more expanding space, so the wavelength has been stretched far more.',
          },
          {
            id: 'pbb-rs-hubble',
            x: 50,
            y: 96,
            label: 'Hubble\'s law: red-shift grows with distance',
            description:
              'Plot red-shift against distance for many galaxies and you get a clear pattern: more distant galaxies show bigger red-shifts. This is Hubble\'s law. It is the strongest evidence that space is expanding everywhere at once.',
          },
        ],
      },
    },
    {
      // Source: Edexcel GCSE Physics 1PH0 specification Topic 8 Astronomy (8.11 to 8.13), public specification document.
      id: 'pbb-cmb',
      title: 'Cosmic Microwave Background: First Light from a Hot Early Universe',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the leftover heat of the early Universe from its release to the microwaves we detect today.',
      data: {
        viewBox: '0 0 800 400',
        svg: CMB_TIMELINE_SVG,
        hotspots: [
          {
            id: 'pbb-cmb-hot',
            x: 15,
            y: 30,
            label: 'Hot, dense start',
            description:
              'In the first moments, everything was packed so densely that the Universe was opaque. Light could not travel freely; it bounced around in the hot soup of charged particles. No telescope can see into this era directly.',
          },
          {
            id: 'pbb-cmb-release',
            x: 44,
            y: 28,
            label: 'About 380 000 years: first free light',
            description:
              'After about 380 000 years the Universe had cooled enough for neutral atoms to form. The soup became transparent and the leftover light streamed out across the cosmos. This first free light is what we now detect as the CMB.',
          },
          {
            id: 'pbb-cmb-stretched',
            x: 50,
            y: 55,
            label: 'Stretched by expanding space',
            description:
              'The same photons have been travelling through expanding space ever since. As space stretched, their wavelengths stretched with it. Light released as a hot visible glow is now a faint glow at much longer wavelengths.',
          },
          {
            id: 'pbb-cmb-today',
            x: 81,
            y: 30,
            label: 'Today: faint microwave glow at about 2.7 K',
            description:
              'We detect the leftover light today as a faint, almost uniform glow at microwave wavelengths, with a temperature of about 2.7 K. Penzias and Wilson stumbled on it in 1965. Later missions like COBE, WMAP, and ESA\'s Planck mapped it in detail.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      // Source: AQA GCSE Physics 8463 specification 4.8.2; Royal Astronomical Society public outreach material on Hubble's law.
      id: 'pbb-worked-1',
      title: 'Comparing red-shifts of two galaxies at different distances',
      steps: [
        {
          explanation:
            'Set out the situation. An astronomer at the Royal Observatory in Greenwich measures the spectrum of two galaxies. Galaxy A is about 500 million light-years away. Galaxy B is about 5 billion light-years away. The same hydrogen line that sits at 656 nm in a lab spectrum is detected at 660 nm from Galaxy A and at 720 nm from Galaxy B. We want to read what this tells us about the two galaxies and about the Universe as a whole.',
        },
        {
          explanation:
            'Work out the shift in wavelength for each galaxy. Subtract the lab wavelength from the detected wavelength.',
          maths:
            'Galaxy A shift = 660 minus 656 = 4 nm; Galaxy B shift = 720 minus 656 = 64 nm',
        },
        {
          explanation:
            'Compare the shifts. Both galaxies show a shift toward the red end of the spectrum, so both are red-shifted and both are moving away from us. Galaxy B has a much bigger red-shift than Galaxy A, even though both are seen with the same telescope.',
        },
        {
          explanation:
            'Apply Hubble\'s law. The further a galaxy is from us, the bigger its red-shift. Galaxy B is about ten times further away than Galaxy A and shows a much bigger shift, exactly as Hubble\'s law predicts.',
        },
        {
          explanation:
            'Step back to the bigger picture. Both red-shifts together tell us space itself is expanding, with the space between us and more distant galaxies stretching more. There is no centre that everything is running away from; from every galaxy the same pattern would be seen. This is the core evidence for the Big Bang model.',
        },
      ],
    },
    {
      // Source: OCR GCSE Physics J259 specification P8.2; ESA Planck mission public outreach material on the CMB.
      id: 'pbb-worked-2',
      title: 'Reading the cosmic microwave background as evidence for the Big Bang',
      steps: [
        {
          explanation:
            'Set out the situation. A class is shown a map of the sky made by ESA\'s Planck satellite. The whole sky is filled with a faint, almost uniform glow at microwave wavelengths, with a measured temperature of about 2.7 K. The class is asked what this glow is and what it tells us about the early Universe.',
        },
        {
          explanation:
            'Identify what the glow is. The CMB is the leftover heat from when the early Universe first became transparent, about 380 000 years after the Big Bang. Before that the cosmos was opaque; afterwards, the same photons could travel freely. They have been travelling ever since.',
        },
        {
          explanation:
            'Connect to expanding space using v = f x lambda. The photons were released as much shorter wavelength light, in the visible and infrared range. As space stretched, the wavelength of each photon stretched too, so lambda has grown by a large factor.',
          maths:
            'lambda detected is much greater than lambda emitted, so f detected is much smaller than f emitted',
        },
        {
          explanation:
            'Apply the conclusion. A long wavelength glow, almost the same in every direction, at about 2.7 K, is exactly what the Big Bang model predicts: leftover heat that has been red-shifted into the microwave band by 13.8 billion years of expansion.',
        },
        {
          explanation:
            'Step back to the bigger picture. The CMB is a separate line of evidence from galaxy red-shifts, but it points to the same model: a tiny, hot, dense start that has been expanding ever since. Two independent strands of evidence together pin the Big Bang as the best supported model of the Universe.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pbb-q1',
      type: 'multiple-choice',
      stem: 'According to the Big Bang model, what is the best description of how the Universe began?',
      tier: 'core',
      options: [
        'Everything we can see was once concentrated in a tiny, hot, dense state, and space itself has been expanding ever since.',
        'A star exploded at the centre of empty space, throwing galaxies outward.',
        'The Universe has always been the same size, with galaxies sliding past each other.',
        'Galaxies grew out of nothing in fixed positions, then began to spin.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pbb-mis-explosion-point',
      hint: 'The Big Bang is the expansion of space itself, not an explosion at a particular point.',
    },
    {
      id: 'pbb-q2',
      type: 'multiple-choice',
      stem: 'An astronomer measures the spectrum of a distant galaxy. The same hydrogen line that sits at 656 nm in a lab appears at 670 nm. What does this tell us about the galaxy?',
      tier: 'core',
      options: [
        'The galaxy is moving toward us, since red light has a shorter wavelength.',
        'The galaxy is at rest with respect to us.',
        'The galaxy is moving away from us, since the line has been shifted to a longer wavelength.',
        'The galaxy is made of different elements from the lab sample.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pbb-mis-redshift-is-red',
      hint: 'A longer wavelength is a red-shift, which means the source is receding.',
    },
    {
      id: 'pbb-q3',
      type: 'multiple-choice',
      stem: 'Hubble found that almost every distant galaxy shows a red-shift, and that the further the galaxy, the bigger the shift. What is the best summary of what this tells us?',
      tier: 'core',
      options: [
        'The Milky Way sits at the exact centre of the Universe.',
        'Almost every distant galaxy is moving away from us, which is evidence that the Universe is expanding.',
        'Distant galaxies are at rest, and Earth is racing away from them.',
        'Distant galaxies emit naturally redder light than nearby ones.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pbb-mis-we-are-centre',
      hint: 'Red-shift means receding. From every galaxy the view would be the same.',
    },
    {
      id: 'pbb-q4',
      type: 'spot-misconception',
      stem: 'A class is shown a diagram of space stretching between galaxies. Aisha writes a caption for the diagram.',
      tier: 'core',
      statements: [
        {
          text: 'Aisha says: "The Big Bang was a giant explosion in empty space, like a firework. The Universe is expanding outward into the empty space outside it."',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "The Big Bang is the expansion of space itself, happening everywhere at once. There is no empty space outside the Universe for it to expand into."',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'pbb-mis-expanding-into',
    },
    {
      id: 'pbb-q5',
      type: 'multiple-choice',
      stem: 'Roughly how old is the observable Universe, according to the Big Bang model?',
      tier: 'core',
      options: [
        'About 13.8 billion years.',
        'About 4.5 billion years.',
        'About 380 000 years.',
        'About 100 trillion years.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Big Bang to today: about 13.8 billion years. 4.5 billion is the age of the Earth and Sun.',
    },
    {
      id: 'pbb-q6',
      type: 'multiple-choice',
      stem: 'Which of these is the best description of the cosmic microwave background (CMB)?',
      tier: 'core',
      options: [
        'A blast of high-energy gamma rays from the centre of every galaxy.',
        'A faint, almost uniform glow at microwave wavelengths, leftover heat from the early Universe.',
        'Radio noise made by every active mobile phone on Earth.',
        'A signal sent out by ESA\'s Planck satellite to map the sky.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pbb-mis-cmb-source-now',
      hint: 'The CMB is leftover light from when the early Universe first became transparent, stretched by expansion.',
    },
    {
      id: 'pbb-q7',
      type: 'drag-order',
      stem: 'Put these moments in the right order, from earliest to latest, in the Big Bang story.',
      tier: 'core',
      items: [
        'About 380 000 years after the Big Bang: the Universe cools enough to become transparent and the first light streams out.',
        'A tiny, hot, dense state from which space itself begins to expand.',
        'Today, about 13.8 billion years after the Big Bang: we detect the leftover light as a faint microwave glow at about 2.7 K.',
        'Stars and galaxies form as gravity pulls clumps of gas together over hundreds of millions of years.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 10,
      hint: 'Start hot and dense, then become transparent at about 380 000 years, then galaxies form, then today.',
    },
    {
      id: 'pbb-q8',
      type: 'multiple-choice',
      stem: 'The same Doppler idea that explains a passing ambulance siren also applies to light from distant galaxies. Which sentence best links the two ideas?',
      tier: 'confident',
      options: [
        'Both effects depend only on the source slowing down, not on its motion.',
        'Doppler only works for sound; for light a different model is needed.',
        'For sound, an approaching source raises pitch; for light from a receding galaxy, the wavelength is stretched into a red-shift. The same v = f x lambda link is used for both.',
        'For light, the wavelength shrinks the further away the source is.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pbb-mis-redshift-is-red',
      hint: 'Receding source means longer observed wavelength. For light that is a red-shift.',
    },
    {
      id: 'pbb-q9',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Red-shift means we are at the centre of the Universe, because every distant galaxy is racing away from us." What is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right. The Milky Way is at the centre, which is why every other galaxy looks like it is moving away.',
        'The pupil is right, but only for galaxies in the northern sky.',
        'Every galaxy sees the same pattern: from any galaxy in the Universe, all the others appear to be moving away. There is no special centre.',
        'Red-shift only shows up for galaxies the Milky Way happens to face.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pbb-mis-we-are-centre',
      hint: 'Space stretches everywhere. From any galaxy the rest appear to recede.',
    },
    {
      id: 'pbb-q10',
      type: 'multiple-choice',
      stem: 'Two galaxies are observed. Galaxy A is 500 million light-years away and shows a small red-shift. Galaxy B is 5 billion light-years away. What does Hubble\'s law predict about Galaxy B\'s red-shift?',
      tier: 'confident',
      options: [
        'It will show a much bigger red-shift than Galaxy A.',
        'It will show no red-shift at all because it is too far.',
        'It will show a blue-shift instead, because very distant galaxies turn around.',
        'It will show the same red-shift as Galaxy A.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pbb-mis-hubble-flat',
      hint: 'More distant galaxy means more space has stretched between us and it, so a bigger red-shift.',
    },
    {
      id: 'pbb-q11',
      type: 'multiple-choice',
      stem: 'A class is shown ESA\'s Planck sky map of the cosmic microwave background, with a measured temperature of about 2.7 K. What is the best description of what this temperature tells us?',
      tier: 'confident',
      options: [
        'The early Universe was always at 2.7 K.',
        'The CMB photons were once at much higher energy, but have been red-shifted into long microwave wavelengths by 13.8 billion years of expansion, leaving a faint glow at about 2.7 K.',
        'Every star in the Universe currently has a surface temperature of 2.7 K.',
        'The Planck satellite cools the sky to 2.7 K so we can see the CMB.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pbb-mis-cmb-source-now',
      hint: 'CMB photons were released hot, then stretched as space expanded.',
    },
    {
      id: 'pbb-q12',
      type: 'multiple-choice',
      stem: 'Which of these is NOT an established piece of evidence for the Big Bang model?',
      tier: 'confident',
      options: [
        'Almost every distant galaxy shows a red-shift, with bigger shifts for more distant galaxies.',
        'A faint, almost uniform microwave glow at about 2.7 K fills the whole sky.',
        'The measured ratio of hydrogen, helium, and lithium across the cosmos matches Big Bang nucleosynthesis predictions.',
        'Distant galaxies have been measured at exactly the same temperature as the Sun.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Three real strands: red-shifts, the CMB, and the light-element abundances.',
    },
    {
      id: 'pbb-q13',
      type: 'numeric-entry',
      stem: 'A hydrogen line sits at 656 nm in a lab spectrum. The same line in a distant galaxy is detected at 670 nm. By how many nm has the wavelength shifted, in nm?',
      tier: 'core',
      correctAnswer: 14,
      unit: 'nm',
      xpValue: 10,
      hint: 'Take the galaxy wavelength minus the lab wavelength: 670 minus 656.',
    },
    {
      id: 'pbb-q14',
      type: 'numeric-entry',
      stem: 'Two strong calcium lines are measured. In the lab they sit at 397 nm; in a distant galaxy they are detected at 421 nm. By how many nm has each line shifted, in nm?',
      tier: 'confident',
      correctAnswer: 24,
      unit: 'nm',
      xpValue: 15,
      hint: 'Detected minus rest: 421 minus 397.',
    },
    {
      id: 'pbb-q15',
      type: 'numeric-entry',
      stem: 'The observable Universe is about 13.8 billion years old. The first free light (CMB photons) was released about 380 000 years after the Big Bang. For how many billion years, to one decimal place, have those photons been travelling through expanding space? Use 13.8 billion minus the release time in billion years (0.00038 billion).',
      tier: 'confident',
      correctAnswer: 13.8,
      unit: 'billion years',
      tolerance: 0.05,
      xpValue: 15,
      hint: '13.8 minus 0.00038 rounds to 13.8 (to one decimal place).',
    },
    {
      id: 'pbb-q16',
      type: 'numeric-entry',
      stem: 'A galaxy is observed and the same hydrogen line is shifted from 656 nm (lab) to 984 nm. By how many nm has the wavelength shifted, in nm?',
      tier: 'challenge',
      correctAnswer: 328,
      unit: 'nm',
      xpValue: 20,
      hint: '984 minus 656.',
    },
    {
      id: 'pbb-q17',
      type: 'numeric-entry',
      stem: 'A distant galaxy emits photons with a wavelength of 121 nm. By the time they reach Earth, space has stretched so much that the wavelength is now 605 nm. By what factor has the wavelength been stretched? Give the answer as a single number, rounded to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 5,
      unit: '',
      xpValue: 20,
      hint: 'Take 605 divided by 121.',
    },
    {
      id: 'pbb-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why a hydrogen line at 656 nm in the lab is detected at 720 nm from a distant galaxy.',
      tier: 'confident',
      steps: [
        'State what is being compared. A hydrogen line has a known lab wavelength of 656 nm. The same line in light from a distant galaxy is detected at 720 nm.',
        'Note that the wavelength has grown, from 656 nm to 720 nm. The shift is 720 minus 656 = 64 nm toward the red end of the spectrum.',
        'Recall that the Big Bang model says space itself is expanding. Light travelling through space has its wavelength stretched as space stretches.',
        null,
        'State the answer: the galaxy is moving away from us. The longer wavelength is a red-shift caused by the expansion of space while the light was on its way to Earth.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply v = f x lambda for light, with v fixed at the speed of light. A longer observed lambda means a lower observed f. A receding source (in the Doppler sense for light) shows a red-shift, exactly what is measured.',
      xpValue: 15,
      misconceptionId: 'pbb-mis-redshift-is-red',
    },
    {
      id: 'pbb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why the cosmic microwave background is so cold today, even though it was released from a hot early Universe.',
      tier: 'challenge',
      steps: [
        'Note what the CMB is: the first free light, released about 380 000 years after the Big Bang, when the early Universe cooled enough to become transparent.',
        'Recall that at release the photons had wavelengths in the visible or infrared range; they carried plenty of energy and corresponded to a hot glow.',
        'Connect to expansion: space itself has been stretching ever since the CMB was released, for almost 13.8 billion years.',
        null,
        'State the answer: the wavelengths have been stretched into the microwave band, the photons now carry much less energy each, and the leftover glow is detected at a temperature of about 2.7 K.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply v = f x lambda. As space stretches, every CMB photon\'s lambda is stretched too, so its f drops. Longer wavelength light carries less energy per photon, so the leftover glow cools as the Universe expands.',
      xpValue: 20,
    },
    {
      id: 'pbb-q20',
      type: 'spot-misconception',
      stem: 'A class is shown a Hubble Space Telescope image of distant galaxies, almost all of which are red-shifted. Theo describes what this means.',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo says: "Almost every distant galaxy is moving away from us, which means the Milky Way sits at the centre of the Universe. Other galaxies in other parts of space would not see this pattern."',
          isMisconception: true,
        },
        {
          text: 'Theo says: "Almost every distant galaxy is moving away from us because the space between galaxies is stretching everywhere at once. From any galaxy in the Universe the same pattern would be seen, so there is no special centre."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pbb-mis-we-are-centre',
    },
    {
      id: 'pbb-q21',
      type: 'drag-order',
      stem: 'Put the steps in the right order to argue from a red-shift measurement to a conclusion about the Universe.',
      tier: 'challenge',
      items: [
        'Conclude that the same pattern, seen for almost every distant galaxy and growing with distance, is evidence that space itself is expanding.',
        'Read the spectrum of a distant galaxy and note that a known spectral line has been shifted to a longer wavelength than in the lab.',
        'Identify the shift as a red-shift, which by the Doppler argument for light means the galaxy is moving away from us.',
        'Repeat the measurement for many galaxies at different distances and find that more distant galaxies show bigger red-shifts (Hubble\'s law).',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Measure, identify, generalise across many galaxies, then conclude.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, candidates described the Big Bang as an explosion at a single point in pre-existing space rather than the expansion of space itself.
    {
      id: 'pbb-mis-explosion-point',
      description:
        'Believing the Big Bang was an explosion at a single point in space, like a firework, rather than the expansion of space itself happening everywhere at once.',
      triggerAnswer: 'explosion-point',
      correction:
        'The Big Bang is the expansion of space itself, happening everywhere at once. It is not an explosion of matter outward from a particular spot in pre-existing space.',
      reExplanation:
        'Run the clock back and every pair of galaxies sits closer together. Trace far enough back and everything we can see was packed into a tiny, hot, dense state. From that, the space between galaxies began to stretch, and it has been stretching ever since. Nothing flew outward through a void; the void itself grew.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, Paper J259/02, candidates wrote that the Universe is expanding into empty space beyond its edge.
    {
      id: 'pbb-mis-expanding-into',
      description:
        'Believing that the Universe is expanding into some empty space outside it, as though the Universe had an edge.',
      triggerAnswer: 'expanding-into',
      correction:
        'There is no "outside" for the Universe to expand into. Space itself is what stretches; every pair of galaxies sees more space between them as time passes.',
      reExplanation:
        'In an ordinary explosion, debris flies outward through pre-existing space, away from a centre. The Big Bang is different. Space itself is what is growing; there is no edge and no outside. From every galaxy the view is the same: all the others appear to recede as the space between stretches.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/2H, candidates wrote that the Milky Way must be at the centre of the Universe because all distant galaxies are red-shifted relative to us.
    {
      id: 'pbb-mis-we-are-centre',
      description:
        'Believing that because almost every distant galaxy is red-shifted, the Milky Way must be at the centre of the Universe.',
      triggerAnswer: 'we-are-centre',
      correction:
        'Every galaxy in the Universe would see the same pattern: from any galaxy, all the others appear to recede. There is no special centre to the expansion.',
      reExplanation:
        'Picture three dots drawn on a sheet of stretchy rubber. As the rubber is stretched, each pair of dots moves further apart. From each dot, the other dots appear to move away, and the further pair moves apart fastest. None of the dots is the centre. Galaxies in expanding space behave the same way.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1H, candidates wrote that red-shift means the galaxy itself looks red, rather than that specific spectral lines are shifted to longer wavelengths.
    {
      id: 'pbb-mis-redshift-is-red',
      description:
        'Believing that a red-shifted galaxy literally looks red, rather than that specific spectral lines have been shifted toward longer (redder) wavelengths.',
      triggerAnswer: 'redshift-is-red',
      correction:
        'A red-shift is a shift of identified spectral lines toward longer wavelengths. The whole galaxy does not become red; it is the position of fingerprint lines that has moved along the spectrum.',
      reExplanation:
        'A galaxy emits light at many wavelengths. Embedded in this light are sharp spectral lines, like the hydrogen line at 656 nm, with positions fixed by atomic physics. A red-shift means these specific lines arrive at longer wavelengths than in the lab. The overall colour of the galaxy does not have to look red at all.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02, candidates wrote that red-shift is the same for galaxies at any distance, missing the Hubble-law dependence on distance.
    {
      id: 'pbb-mis-hubble-flat',
      description:
        'Believing that all distant galaxies show the same red-shift, missing that the size of the red-shift grows with distance (Hubble\'s law).',
      triggerAnswer: 'hubble-flat',
      correction:
        'Red-shift grows with distance. A galaxy ten times further away shows a much bigger red-shift, because light has travelled through far more expanding space on its way to us.',
      reExplanation:
        'Hubble plotted red-shift against distance for many galaxies and found a clear trend: more distant galaxies have bigger red-shifts. The further the light has travelled through expanding space, the more its wavelength has been stretched. This pattern, Hubble\'s law, is the core evidence that space itself is expanding everywhere at once.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1H, candidates wrote that the cosmic microwave background is light being emitted now by distant galaxies, rather than leftover photons released about 380 000 years after the Big Bang.
    {
      id: 'pbb-mis-cmb-source-now',
      description:
        'Believing the cosmic microwave background is light being emitted now by distant galaxies, rather than leftover photons released long ago and stretched by cosmic expansion.',
      triggerAnswer: 'cmb-source-now',
      correction:
        'The CMB is leftover light from about 380 000 years after the Big Bang. It is not light being emitted right now; the same ancient photons have been travelling through expanding space ever since.',
      reExplanation:
        'When the early Universe cooled enough to become transparent, light streamed out across the cosmos. Those photons have been travelling ever since, with their wavelengths stretching as space stretches. What started as a hot visible glow is now a faint glow at microwave wavelengths and about 2.7 K, detected in every direction we look.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceBigBangZoneNodes = [spaceBigBang]
