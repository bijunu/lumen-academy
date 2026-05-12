import type { SkillNode } from '@/types/content'

const DOPPLER_WAVEFRONTS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A moving source bunches wavefronts in front, spreads them behind</text>

    <!-- Direction arrow -->
    <line x1="380" y1="220" x2="540" y2="220" stroke-width="2" />
    <polygon points="535,213 548,220 535,227" fill="currentColor" stroke="none" />
    <text x="460" y="208" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">source velocity</text>

    <!-- Source (the small dot) -->
    <circle cx="400" cy="220" r="10" fill="currentColor" />
    <text x="400" y="260" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">moving source</text>

    <!-- Bunched wavefronts ahead (right side) -->
    <circle cx="410" cy="220" r="40" />
    <circle cx="420" cy="220" r="70" />
    <circle cx="430" cy="220" r="100" />
    <circle cx="440" cy="220" r="130" />
    <text x="640" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Ahead of source</text>
    <text x="640" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">wavefronts bunched up</text>
    <text x="640" y="208" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">shorter wavelength λ</text>
    <text x="640" y="226" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">higher observed f</text>
    <text x="640" y="244" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">listener hears higher pitch</text>

    <!-- Stretched wavefronts behind (left side, offset opposite) -->
    <circle cx="390" cy="220" r="40" />
    <circle cx="380" cy="220" r="70" />
    <circle cx="370" cy="220" r="100" />
    <circle cx="360" cy="220" r="130" />
    <text x="160" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Behind source</text>
    <text x="160" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">wavefronts spread out</text>
    <text x="160" y="208" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">longer wavelength λ</text>
    <text x="160" y="226" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">lower observed f</text>
    <text x="160" y="244" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">listener hears lower pitch</text>

    <!-- Bottom rule -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">The source still emits at its own steady frequency.</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Only the listener's observed frequency changes.</text>
  </g>
`

const AMBULANCE_PITCH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">An ambulance siren on the M25: pitch over time as it passes you</text>

    <!-- Axes -->
    <line x1="80" y1="300" x2="720" y2="300" stroke-width="2" />
    <line x1="80" y1="100" x2="80" y2="300" stroke-width="2" />
    <text x="400" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">time as the ambulance approaches, passes, and recedes</text>
    <text x="50" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor" transform="rotate(-90 50 200)">observed pitch (frequency)</text>

    <!-- Stationary baseline -->
    <line x1="80" y1="200" x2="720" y2="200" stroke-dasharray="6 6" stroke-width="2" />
    <text x="730" y="205" text-anchor="start" font-size="11" stroke="none" fill="currentColor">source's own f</text>

    <!-- Higher plateau (approaching) -->
    <line x1="120" y1="140" x2="360" y2="140" stroke-width="3" />
    <text x="240" y="125" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">approaching: f raised</text>

    <!-- Step down at pass -->
    <line x1="360" y1="140" x2="440" y2="260" stroke-width="3" />
    <text x="400" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">passes you</text>

    <!-- Lower plateau (receding) -->
    <line x1="440" y1="260" x2="680" y2="260" stroke-width="3" />
    <text x="560" y="280" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">receding: f lowered</text>

    <!-- Listener marker -->
    <circle cx="400" cy="300" r="6" fill="currentColor" />
    <text x="400" y="362" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">you (stationary)</text>

    <!-- Rule box -->
    <text x="400" y="80" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Pitch is higher before the pass, lower after the pass. The drop happens AT the pass.</text>
  </g>
`

const REDSHIFT_GALAXY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Light from receding galaxies is red-shifted (longer wavelength)</text>

    <!-- Lab reference spectrum -->
    <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Lab spectrum (source at rest)</text>
    <rect x="120" y="95" width="560" height="40" stroke="currentColor" />
    <line x1="200" y1="95" x2="200" y2="135" stroke-width="3" />
    <line x1="320" y1="95" x2="320" y2="135" stroke-width="3" />
    <line x1="500" y1="95" x2="500" y2="135" stroke-width="3" />
    <text x="120" y="155" text-anchor="start" font-size="11" stroke="none" fill="currentColor">blue end (short λ)</text>
    <text x="680" y="155" text-anchor="end" font-size="11" stroke="none" fill="currentColor">red end (long λ)</text>

    <!-- Galaxy spectrum -->
    <text x="400" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Distant galaxy spectrum (receding)</text>
    <rect x="120" y="215" width="560" height="40" stroke="currentColor" />
    <line x1="290" y1="215" x2="290" y2="255" stroke-width="3" />
    <line x1="410" y1="215" x2="410" y2="255" stroke-width="3" />
    <line x1="590" y1="215" x2="590" y2="255" stroke-width="3" />
    <text x="400" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">same three spectral lines, shifted right toward the red end</text>

    <!-- Arrows showing the shift -->
    <line x1="200" y1="170" x2="290" y2="210" stroke-dasharray="4 4" />
    <line x1="320" y1="170" x2="410" y2="210" stroke-dasharray="4 4" />
    <line x1="500" y1="170" x2="590" y2="210" stroke-dasharray="4 4" />

    <!-- Rule box -->
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">A red-shift means λ has grown and f has dropped. The galaxy is moving away.</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Almost every distant galaxy is red-shifted: evidence that the Universe is expanding.</text>
    <text x="400" y="370" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">A galaxy moving toward us would show a blue-shift instead.</text>
  </g>
`

export const wavesDopplerEffect: SkillNode = {
  id: 'physics-waves-doppler-effect',
  title: 'Doppler Effect',
  description:
    'A source emitting waves at a steady rate appears to emit a higher frequency to a listener it is approaching, and a lower frequency to a listener it is moving away from. Wavefronts bunch up in front of a moving source and spread out behind. For sound, this is heard as a pitch rise then drop as an ambulance passes on the M25. The source itself still emits at its own steady frequency; only the observed frequency changes. The same effect works for light: a source approaching us is blue-shifted (shorter λ, higher f), a source receding is red-shifted (longer λ, lower f). Astronomers see almost every distant galaxy red-shifted, which is evidence that the Universe is expanding. Year 7 work stays qualitative; we describe the direction of the shift in pitch or colour, and we do not use the numerical formula for f observed.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'challenge',
  prerequisites: ['physics-waves-wave-equation', 'physics-waves-loudness-pitch'],
  curriculum: {
    ks3Objective:
      'Frequencies of sound waves; pitch changes for a moving source, qualitative.',
    awardingBodies: {
      aqa: '4.8.2 Red-shift; qualitative Doppler shift in frequency and wavelength for a moving source (GCSE Physics 8463)',
      edexcel:
        'Topic 8.5 Doppler effect; observed change in frequency and wavelength from a moving source (GCSE Physics 1PH0)',
      ocr: 'P8.1 The Universe; qualitative Doppler effect, pitch change of a passing siren (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'de-scene-wavefronts',
      title: 'Bunched Wavefronts in Front, Spread Behind',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a moving source changes the wavelength a listener detects.',
      data: {
        viewBox: '0 0 800 400',
        svg: DOPPLER_WAVEFRONTS_SVG,
        hotspots: [
          {
            id: 'de-wf-source',
            x: 50,
            y: 55,
            label: 'The source still emits at its own steady f',
            description:
              'The siren or speaker itself produces waves at the same fixed frequency the whole time. Its motion does not change the rate at which it makes new wavefronts. What changes is where each wavefront sits when the next one is made.',
          },
          {
            id: 'de-wf-ahead',
            x: 80,
            y: 50,
            label: 'Ahead of the source: bunched fronts, higher f',
            description:
              'As the source moves forward, each new wavefront is made a little closer to the listener ahead. The fronts pile up, the wavelength shrinks, and waves arrive at the listener more often. The observed frequency is raised, so the pitch rises.',
          },
          {
            id: 'de-wf-behind',
            x: 20,
            y: 50,
            label: 'Behind the source: spread fronts, lower f',
            description:
              'Behind the source, each new wavefront is made a little further from the listener at the back. The fronts spread out, the wavelength stretches, and waves arrive less often. The observed frequency is lowered, so the pitch falls.',
          },
          {
            id: 'de-wf-medium',
            x: 50,
            y: 92,
            label: 'The wave speed in the medium does not change',
            description:
              'In air, sound still travels at about 330 m/s for every listener, no matter how the source moves. Only λ and the observed f shift. From v = f x λ, if v is fixed and λ drops, then f must rise; if λ grows, f must drop.',
          },
        ],
      },
    },
    {
      id: 'de-scene-ambulance',
      title: 'Ambulance on the M25: Pitch Over Time',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the pitch you hear before, during, and after the ambulance passes.',
      data: {
        viewBox: '0 0 800 400',
        svg: AMBULANCE_PITCH_SVG,
        hotspots: [
          {
            id: 'de-amb-approach',
            x: 30,
            y: 35,
            label: 'Approaching: pitch is higher',
            description:
              'As the ambulance races toward you on the M25, the wavefronts arrive bunched up. You hear a pitch that is steady but noticeably higher than the siren\'s real note. The pitch stays at this raised level for the whole approach.',
          },
          {
            id: 'de-amb-pass',
            x: 50,
            y: 42,
            label: 'At the pass: pitch drops sharply',
            description:
              'The moment the ambulance is level with you, the source velocity is sideways, not toward or away. As it crosses, the observed pitch falls sharply from the high plateau to the low plateau. The change is rapid, not gradual.',
          },
          {
            id: 'de-amb-recede',
            x: 70,
            y: 70,
            label: 'Receding: pitch is lower',
            description:
              'After the pass, the ambulance is heading away. Wavefronts arrive stretched out, so the pitch you hear is lower than the siren\'s real note. The pitch stays at this lowered level for the whole retreat.',
          },
          {
            id: 'de-amb-rule',
            x: 50,
            y: 20,
            label: 'Up then down: never down then up',
            description:
              'A common error is to think the pitch goes from low to high. It does the opposite. Approaching is HIGH, receding is LOW, so the listener hears a clear drop at the moment the ambulance passes.',
          },
        ],
      },
    },
    {
      id: 'de-scene-redshift',
      title: 'Red-Shift of a Receding Galaxy',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a lab spectrum with the same lines from a distant galaxy.',
      data: {
        viewBox: '0 0 800 400',
        svg: REDSHIFT_GALAXY_SVG,
        hotspots: [
          {
            id: 'de-rs-lab',
            x: 50,
            y: 28,
            label: 'Lab spectrum: source at rest',
            description:
              'In a school or university lab, hot hydrogen gas emits a fingerprint of three sharp spectral lines at fixed wavelengths. These are the reference positions to compare against any astronomical source.',
          },
          {
            id: 'de-rs-galaxy',
            x: 50,
            y: 60,
            label: 'Galaxy spectrum: same lines, shifted to the red',
            description:
              'Light from a distant galaxy in the Hubble deep-field shows the same three lines, but each one is shifted toward the red end of the spectrum. The pattern keeps its spacing; the whole set has just slid along.',
          },
          {
            id: 'de-rs-meaning',
            x: 50,
            y: 80,
            label: 'A red-shift means moving away',
            description:
              'A shift toward longer λ (toward the red) means the observed frequency has dropped, which means the galaxy is receding. A shift toward shorter λ (toward the blue) would mean the galaxy is approaching us.',
          },
          {
            id: 'de-rs-expanding',
            x: 50,
            y: 90,
            label: 'Almost every galaxy is red-shifted',
            description:
              'Hubble found that almost every distant galaxy is red-shifted, and the further away the galaxy, the bigger the red-shift. This is evidence that the Universe itself is expanding. The same Doppler idea that explains an ambulance passing the M25 helps us read the motion of galaxies.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'de-worked-1',
      title: 'A Met Office Doppler weather van racing toward a school',
      steps: [
        {
          explanation:
            'Set out the situation. A Met Office Doppler radar van drives at high speed along a road toward a school field in Reading, with its identification siren held at a steady 800 Hz. A pupil stands at the school gate. We want to know how the pitch they hear compares with the siren\'s real note.',
        },
        {
          explanation:
            'Identify the direction of source motion relative to the listener. The van is approaching the pupil, so the wavefronts ahead of it bunch up.',
        },
        {
          explanation:
            'Apply the Doppler rule for sound. Bunched wavefronts mean a shorter observed λ. From v = f x λ with v fixed (sound still travels at about 330 m/s in the air), a shorter λ means a higher observed f.',
          maths: 'observed f > 800 Hz',
        },
        {
          explanation:
            'State the answer. The pupil hears a pitch noticeably higher than 800 Hz the whole time the van is approaching. The siren itself is still emitting at exactly 800 Hz; only the observed frequency has shifted.',
        },
        {
          explanation:
            'Predict what happens next. As soon as the van passes the gate and starts to drive away, the wavefronts behind it stretch out. The pupil now hears a pitch noticeably LOWER than 800 Hz, and they will hear a sharp drop at the moment of the pass.',
        },
      ],
    },
    {
      id: 'de-worked-2',
      title: 'Red-shift of light from a distant galaxy',
      steps: [
        {
          explanation:
            'Set out the situation. An astronomer at the Royal Greenwich Observatory measures the spectrum of light from a distant galaxy. A bright hydrogen line that sits at a known wavelength in the lab appears in the galaxy\'s spectrum at a longer wavelength, shifted toward the red end. We want to read what this tells us about the galaxy.',
        },
        {
          explanation:
            'Connect λ to f using v = f x λ. The speed of light v is the same for every source, so changing λ must change f in the opposite direction.',
          maths: 'v = f x λ, so longer λ means lower f',
        },
        {
          explanation:
            'Apply the Doppler rule for light. A lower observed frequency from a moving source means the source is receding. A higher observed frequency would mean the source is approaching (a blue-shift).',
        },
        {
          explanation:
            'State the answer. The galaxy is moving away from us. This is a red-shift.',
        },
        {
          explanation:
            'Step back to the bigger picture. Hubble found that almost every distant galaxy shows a red-shift, and the further the galaxy, the bigger the red-shift. Together, these readings are the key evidence that the Universe is expanding. Doppler ideas built for ambulance sirens give us a tool to read the motion of objects billions of light-years away.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'de-q1',
      type: 'multiple-choice',
      stem: 'A source emits waves at a steady frequency. As it moves toward a stationary listener, what happens to the wavefronts that reach the listener?',
      tier: 'core',
      options: [
        'They spread out, so the listener detects a longer wavelength and a lower frequency.',
        'They stay exactly the same as if the source were at rest.',
        'The source stops emitting waves once it starts moving.',
        'They bunch up, so the listener detects a shorter wavelength and a higher frequency.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'de-mis-stationary-no-change',
      hint: 'Each new wavefront is made a little closer to the listener ahead, so they pile up.',
    },
    {
      id: 'de-q2',
      type: 'multiple-choice',
      stem: 'A source moves away from a stationary listener while emitting waves at a steady frequency. What does the listener detect?',
      tier: 'core',
      options: [
        'A shorter wavelength and a higher frequency.',
        'A longer wavelength and a lower frequency.',
        'No waves at all, because the source is heading the wrong way.',
        'Exactly the same frequency, because the source has not changed its rate.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'de-mis-recede-blue-shift',
      hint: 'Wavefronts behind a moving source spread out; longer λ means lower f.',
    },
    {
      id: 'de-q3',
      type: 'multiple-choice',
      stem: 'An ambulance with a siren held at a steady note races along the M25 toward you, then passes and races away. What sequence of pitches do you hear?',
      tier: 'core',
      options: [
        'High while approaching, then low after the pass.',
        'Low while approaching, then high after the pass.',
        'Steady the whole time, because the siren never changes its note.',
        'Silent while approaching, then loud after the pass.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'de-mis-pitch-rises-after-pass',
      hint: 'Approach raises the observed frequency, recede lowers it. The drop happens at the pass.',
    },
    {
      id: 'de-q4',
      type: 'multiple-choice',
      stem: 'A Northern Line tube train sounds its horn at a steady 500 Hz as it approaches a passenger waiting on the platform. What is the best description of the actual note the horn is sounding?',
      tier: 'core',
      options: [
        'The horn itself is now sounding a note higher than 500 Hz.',
        'The horn itself is now sounding a note lower than 500 Hz.',
        'The horn is still sounding 500 Hz; only the observed frequency at the listener is raised.',
        'The horn has stopped emitting until the train stops moving.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'de-mis-source-pitch-changes',
      hint: 'A moving source does not change its own emitted frequency. Only the listener\'s detected frequency shifts.',
    },
    {
      id: 'de-q5',
      type: 'drag-order',
      stem: 'Put the four moments in the order a stationary listener hears them as an ambulance siren held at 600 Hz passes by on the M25.',
      tier: 'core',
      items: [
        'The pitch drops sharply at the moment the ambulance is level with the listener.',
        'The pitch sits at a steady high plateau above 600 Hz while the ambulance approaches.',
        'The pitch sits at a steady low plateau below 600 Hz while the ambulance recedes.',
        'The ambulance is far off and silent; the listener hears nothing yet.',
      ],
      correctOrder: [3, 1, 0, 2],
      xpValue: 10,
      misconceptionId: 'de-mis-pitch-rises-after-pass',
      hint: 'Silent first, then high plateau on approach, then a drop at the pass, then low plateau on recede.',
    },
    {
      id: 'de-q6',
      type: 'multiple-choice',
      stem: 'A pupil writes, "When the ambulance moves toward me, the speed of sound through the air changes, which is why I hear a higher pitch." What is the best correction?',
      tier: 'core',
      options: [
        'The pupil is right. Source motion speeds up the sound through the air.',
        'The pupil is right, but only for high-speed sources.',
        'The wave speed in air does not change with source motion. What changes is the wavelength and the observed frequency. From v = f x λ with v fixed, a shorter λ gives a higher f.',
        'Source motion stops the sound from reaching the listener at all.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'de-mis-wave-speed-changes',
      hint: 'Sound still travels at about 330 m/s in air for every listener; only λ and observed f shift.',
    },
    {
      id: 'de-q7',
      type: 'multiple-choice',
      stem: 'An astronomer reads the spectrum of a distant galaxy. A hydrogen line that sits at a known position in a lab spectrum appears at a longer wavelength in the galaxy\'s light. What does this tell us about the galaxy?',
      tier: 'confident',
      options: [
        'The galaxy is moving toward us (blue-shifted).',
        'The galaxy is moving away from us (red-shifted).',
        'The galaxy is at rest with respect to us.',
        'The galaxy is at the centre of the Universe.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'de-mis-recede-blue-shift',
      hint: 'Longer wavelength means shift toward the red end. Red-shift = receding.',
    },
    {
      id: 'de-q8',
      type: 'multiple-choice',
      stem: 'A pupil claims the Doppler effect "only works for sound, not for light, because light is too special". What is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right. Light is not a wave, so the Doppler rule does not apply.',
        'The pupil is right for stars but not for galaxies.',
        'The Doppler effect works for every wave, including light. An approaching source gives a blue-shift; a receding source gives a red-shift. Hubble used this to measure galaxy motion.',
        'The Doppler effect only works in a vacuum, so neither sound nor light qualify.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'de-mis-only-sound',
      hint: 'v = f x λ holds for every wave, so the bunching argument holds for light too.',
    },
    {
      id: 'de-q9',
      type: 'multiple-choice',
      stem: 'Hubble found that almost every distant galaxy shows a red-shift, and that the further the galaxy, the bigger the shift. What is the best summary of what this tells us?',
      tier: 'confident',
      options: [
        'Distant galaxies are at rest, and Earth is moving away from them.',
        'The Milky Way sits at the exact centre of the Universe.',
        'Almost every distant galaxy is moving away from us, which is evidence that the Universe is expanding.',
        'Distant galaxies emit a different colour of light from nearby ones for no clear reason.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Red-shift means receding. If almost every galaxy is receding, the Universe is expanding.',
    },
    {
      id: 'de-q10',
      type: 'multiple-choice',
      stem: 'A Met Office Doppler weather van drives at high speed toward a school field. Which sentence describes what happens to the wave speed and the wavelength of its 800 Hz siren in the air ahead of the van?',
      tier: 'confident',
      options: [
        'Wave speed grows because the source is racing ahead, and wavelength stays the same.',
        'Wave speed stays at about 330 m/s in air, and the wavelength ahead is shorter than if the van were at rest.',
        'Wave speed grows and wavelength grows.',
        'Wave speed drops and wavelength drops.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'de-mis-wave-speed-changes',
      hint: 'The medium sets the wave speed. Source motion only changes how the wavefronts pile up.',
    },
    {
      id: 'de-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil hears a train horn held at a steady 400 Hz shift from a higher note down to a lower note as the train passes. They are working out what the horn itself is doing the whole time.',
      tier: 'confident',
      steps: [
        'State the source frequency: the horn emits at 400 Hz, set by the train\'s siren circuit.',
        'Note that the wave speed in air is set by the medium, not by the source: about 330 m/s for every listener.',
        'Use v = f x λ to link the listener\'s observed frequency to the spacing of arriving wavefronts.',
        null,
        'State the answer: the horn keeps emitting at 400 Hz the whole time. The listener\'s OBSERVED frequency rises above 400 Hz on approach and drops below 400 Hz on recede; the source itself never changes.',
      ],
      missingStepIndex: 3,
      correctStep:
        'On approach, wavefronts bunch ahead of the train, so observed λ shrinks and observed f rises above 400 Hz. On recede, wavefronts spread behind, so observed λ grows and observed f drops below 400 Hz.',
      xpValue: 15,
      misconceptionId: 'de-mis-source-pitch-changes',
    },
    {
      id: 'de-q12',
      type: 'multiple-choice',
      stem: 'A galaxy is moving toward the Milky Way. How would its spectral lines appear, compared with the same lines in a lab spectrum?',
      tier: 'confident',
      options: [
        'Shifted toward the red end (longer wavelength).',
        'Shifted toward the blue end (shorter wavelength).',
        'In exactly the same place, since light is unaffected by motion.',
        'Missing entirely, because the galaxy is too far away.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'de-mis-recede-blue-shift',
      hint: 'Approaching source means bunched wavefronts, so a shorter observed wavelength. That is a blue-shift.',
    },
    {
      id: 'de-q13',
      type: 'numeric-entry',
      stem: 'A source siren at rest emits a note at 500 Hz. A pupil reads in a textbook that, for a particular siren approaching a listener at high speed, the listener hears a frequency 40 Hz higher than the real note. What is the observed frequency, in Hz?',
      tier: 'core',
      correctAnswer: 540,
      unit: 'Hz',
      xpValue: 10,
      hint: 'Approach raises the observed frequency. Add the shift to the source frequency.',
    },
    {
      id: 'de-q14',
      type: 'numeric-entry',
      stem: 'A train horn emits at 400 Hz when at rest. As the train recedes from a listener on a Manchester platform, the listener detects a frequency 30 Hz lower than the real note. What is the observed frequency, in Hz?',
      tier: 'core',
      correctAnswer: 370,
      unit: 'Hz',
      xpValue: 10,
      hint: 'Recede lowers the observed frequency. Subtract the shift from the source frequency.',
    },
    {
      id: 'de-q15',
      type: 'numeric-entry',
      stem: 'A Met Office Doppler radar van siren is set to a steady 800 Hz. A passing listener hears the pitch swing from a high plateau at 860 Hz down to a low plateau at 745 Hz. What is the size of the drop in observed frequency, in Hz, across the pass?',
      tier: 'confident',
      correctAnswer: 115,
      unit: 'Hz',
      xpValue: 15,
      hint: 'Subtract the low plateau from the high plateau: 860 - 745.',
    },
    {
      id: 'de-q16',
      type: 'numeric-entry',
      stem: 'A school lab measures a hydrogen spectral line at 656 nm. The same line in a receding galaxy is detected at 663 nm. By how many nm has the wavelength shifted, in nm?',
      tier: 'challenge',
      correctAnswer: 7,
      unit: 'nm',
      xpValue: 20,
      hint: 'Take the galaxy wavelength minus the lab wavelength: 663 - 656.',
    },
    {
      id: 'de-q17',
      type: 'spot-misconception',
      stem: 'An ambulance siren held at a steady 700 Hz passes you on the M25. Priya describes what she hears.',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya says: "On approach the pitch is lower than 700 Hz, and after the pass it rises higher than 700 Hz. The pitch climbs as the ambulance heads away."',
          isMisconception: true,
        },
        {
          text: 'Priya says: "On approach the pitch is higher than 700 Hz; at the moment the ambulance is level with me the pitch drops sharply; after the pass the pitch is lower than 700 Hz. The pitch falls as the ambulance heads away."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'de-mis-pitch-rises-after-pass',
    },
    {
      id: 'de-q18',
      type: 'spot-misconception',
      stem: 'A school class is shown a spectrum from a distant galaxy whose hydrogen lines have shifted toward the red end. Theo describes what this means.',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo says: "Red-shift means the galaxy is moving toward us, because red light has a shorter wavelength than blue light."',
          isMisconception: true,
        },
        {
          text: 'Theo says: "Red-shift means the lines have moved to longer wavelengths, so the observed frequency has dropped. The galaxy is moving away from us. A galaxy approaching us would show a blue-shift instead."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'de-mis-recede-blue-shift',
    },
    {
      id: 'de-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about what the listener detects as a 600 Hz siren on a Met Office Doppler van approaches a school field at high speed.',
      tier: 'challenge',
      steps: [
        'Write what is happening: a source emits at a steady 600 Hz and is approaching a stationary listener.',
        'Note that the wave speed in air is set by the medium and stays at about 330 m/s for every listener.',
        'Picture the wavefronts: each new front is made a little closer to the listener ahead, so the fronts bunch up. The observed wavelength λ ahead is shorter than the rest-frame λ.',
        null,
        'State the answer: the listener detects a frequency above 600 Hz throughout the approach; the source itself is still emitting at exactly 600 Hz.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply v = f x λ with v fixed. A shorter observed λ at fixed v means a higher observed f. So the observed frequency at the listener is above 600 Hz on approach.',
      xpValue: 20,
    },
    {
      id: 'de-q20',
      type: 'drag-order',
      stem: 'Put the steps in the right order to predict the pitch a stationary listener hears as a siren passes them on the M25.',
      tier: 'confident',
      items: [
        'After the pass, the source moves away: wavefronts spread out, λ grows, observed f drops below the source frequency.',
        'Before the pass, the source moves toward the listener: wavefronts bunch up, λ shrinks, observed f rises above the source frequency.',
        'Note the source frequency (the real note of the siren) and check that the wave speed in air is set by the medium, not the source.',
        'At the moment of the pass, the observed frequency falls sharply from the high plateau to the low plateau.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'Start with the source frequency, then approach, then pass, then recede.',
    },
    {
      id: 'de-q21',
      type: 'drag-order',
      stem: 'Put the four observations in order of OBSERVED frequency, from highest to lowest, for a 500 Hz siren on a moving van and a listener on the pavement.',
      tier: 'challenge',
      items: [
        'The van is parked and emitting steadily; the listener stands beside it.',
        'The van is racing toward the listener at high speed.',
        'The van has just passed and is heading away at high speed.',
        'The van is parked far down the road, no longer emitting.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
      hint: 'Approach raises f, parked gives the real f, recede lowers f, no emission gives no detected f.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, candidates wrote that the siren of a moving ambulance itself produces a higher note when the ambulance moves toward you, rather than the observed note being raised.
    {
      id: 'de-mis-source-pitch-changes',
      description:
        'Believing that the moving source itself changes the frequency it emits, rather than the listener\'s observed frequency being shifted.',
      triggerAnswer: 'source-pitch-changes',
      correction:
        'The source still emits at its own steady frequency. Only the observed frequency at the listener changes, because the wavefronts arrive bunched (approach) or spread (recede).',
      reExplanation:
        'A 500 Hz siren on a moving ambulance is still sending out wavefronts at 500 per second. Source motion does not change that rate. What changes is the spacing between the wavefronts in the air ahead and behind. Ahead, the spacing shrinks, so they arrive at the listener faster than 500 per second. The siren note is unchanged; the listener\'s detected note is raised.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02, candidates wrote that after an ambulance passes the pitch rises further as it heads away, reversing the actual fall in observed frequency.
    {
      id: 'de-mis-pitch-rises-after-pass',
      description:
        'Believing that the pitch rises after a siren passes, rather than dropping. Reversing the direction of the Doppler shift on recede.',
      triggerAnswer: 'pitch-rises-after-pass',
      correction:
        'Approach raises the observed frequency, recede lowers it. After the pass, the pitch you hear is LOWER than the siren\'s real note, not higher.',
      reExplanation:
        'As the ambulance approaches, wavefronts bunch in front of it, so observed f is raised. The listener hears a steady high pitch. At the moment of the pass, the spacing flips to bunched-behind. Wavefronts arrive spread out, so observed f drops below the real note. The pitch you hear falls at the pass and stays low; it does not climb.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1H, candidates wrote that source motion changes the wave speed in the medium, rather than the wavelength.
    {
      id: 'de-mis-wave-speed-changes',
      description:
        'Believing that source motion changes the wave speed of sound through the air, rather than only the wavelength and the observed frequency.',
      triggerAnswer: 'wave-speed-changes',
      correction:
        'Wave speed in a medium is set by the medium, not by the source. Sound still travels at about 330 m/s in air for every listener. Source motion bunches or spreads wavefronts, which changes λ and the observed f.',
      reExplanation:
        'From v = f x λ, if v is fixed and λ shrinks (wavefronts bunched in front of a moving source), then f must rise. If λ grows (wavefronts spread out behind), f must drop. The source has not pushed the air to carry sound any faster; it has just changed where the next wavefront sits when it is made.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/2H, candidates wrote that the Doppler effect applies only to sound, missing the link to red-shift and blue-shift of light from galaxies.
    {
      id: 'de-mis-only-sound',
      description:
        'Believing that the Doppler effect works only for sound, not for light, so red-shift and blue-shift are unconnected ideas.',
      triggerAnswer: 'only-sound',
      correction:
        'The Doppler effect works for every wave, including light. An approaching source shows a blue-shift (shorter λ, higher f); a receding source shows a red-shift (longer λ, lower f).',
      reExplanation:
        'The bunching argument depends only on v = f x λ and on the source moving relative to the medium or observer. Sound waves in air, light waves through space, and water ripples on a pond all obey the same rule. Hubble used the Doppler shift of light from distant galaxies to find that almost every galaxy is moving away from us, evidence the Universe is expanding.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1H, candidates wrote that a receding galaxy would show a blue-shift, swapping the two directions.
    {
      id: 'de-mis-recede-blue-shift',
      description:
        'Believing that a receding source gives a blue-shift and an approaching source gives a red-shift, swapping the two directions.',
      triggerAnswer: 'recede-blue-shift',
      correction:
        'Approaching means blue-shift (shorter λ, higher f). Receding means red-shift (longer λ, lower f). The rule mirrors approach-is-high, recede-is-low for sound.',
      reExplanation:
        'A receding source spreads its wavefronts behind it, so the observed wavelength is longer. Longer wavelength shifts the light toward the red end of the spectrum, hence "red-shift". An approaching source bunches its wavefronts ahead, so observed wavelength is shorter and the light is shifted toward the blue end. Hubble\'s receding galaxies are red-shifted, never blue-shifted.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, Paper J259/02, candidates wrote that a stationary listener cannot hear any Doppler shift, missing that the listener is precisely the observer whose detected frequency shifts.
    {
      id: 'de-mis-stationary-no-change',
      description:
        'Believing that a stationary listener cannot detect a Doppler shift, since they are not moving themselves.',
      triggerAnswer: 'stationary-no-change',
      correction:
        'A stationary listener is exactly the observer who hears the shift. What matters is that the source is moving relative to them, not whether they themselves move.',
      reExplanation:
        'When an ambulance races past a pupil standing still on the M25 verge, the pupil is the stationary listener. They hear a high pitch on approach and a low pitch on recede, with a sharp drop at the pass. Source motion is enough to bunch and spread the wavefronts in air. The listener stays put and still detects the shift.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesDopplerEffectZoneNodes = [wavesDopplerEffect]
