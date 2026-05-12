import type { SkillNode } from '@/types/content'

const SOLAR_ECLIPSE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Solar eclipse: Moon between the Sun and Earth</text>

    <!-- Sun on the left -->
    <circle cx="90" cy="200" r="55" fill="currentColor" stroke="none" />
    <text x="90" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Sun</text>

    <!-- Sunlight rays -->
    <line x1="145" y1="160" x2="640" y2="160" stroke-dasharray="4,4" stroke-width="1" />
    <line x1="145" y1="240" x2="640" y2="240" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Moon in the middle -->
    <circle cx="380" cy="200" r="22" fill="currentColor" stroke="none" />
    <text x="380" y="160" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon</text>

    <!-- Umbra cone (dark shadow) -->
    <polygon points="380,178 380,222 600,205 600,195" fill="currentColor" stroke="none" opacity="0.6" />
    <text x="500" y="215" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">umbra</text>

    <!-- Penumbra wider region -->
    <line x1="380" y1="178" x2="650" y2="120" stroke-dasharray="3,3" stroke-width="1" />
    <line x1="380" y1="222" x2="650" y2="280" stroke-dasharray="3,3" stroke-width="1" />
    <text x="560" y="135" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">penumbra</text>

    <!-- Earth on the right -->
    <circle cx="680" cy="200" r="40" stroke-width="3" />
    <text x="680" y="265" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Total spot on Earth -->
    <circle cx="650" cy="200" r="5" fill="currentColor" stroke="none" />
    <text x="650" y="195" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">total</text>

    <!-- Caption -->
    <text x="400" y="335" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The Moon casts a shadow on a small patch of Earth.</text>
    <text x="400" y="358" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Inside the umbra: total eclipse. Inside the penumbra: partial.</text>
  </g>
`

const LUNAR_ECLIPSE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Lunar eclipse: Earth between the Sun and Moon</text>

    <!-- Sun on the left -->
    <circle cx="90" cy="200" r="55" fill="currentColor" stroke="none" />
    <text x="90" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Sun</text>

    <!-- Sunlight rays -->
    <line x1="145" y1="160" x2="430" y2="160" stroke-dasharray="4,4" stroke-width="1" />
    <line x1="145" y1="240" x2="430" y2="240" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Earth in the middle -->
    <circle cx="430" cy="200" r="40" stroke-width="3" />
    <text x="430" y="265" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Earth umbra cone, wide and long -->
    <polygon points="430,160 430,240 720,210 720,190" fill="currentColor" stroke="none" opacity="0.6" />
    <text x="600" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth's umbra</text>

    <!-- Moon on the right, sitting in the umbra -->
    <circle cx="700" cy="200" r="18" fill="currentColor" stroke="none" opacity="0.7" />
    <text x="700" y="160" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon</text>
    <text x="700" y="250" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">in shadow</text>

    <!-- Caption -->
    <text x="400" y="335" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Earth's shadow lands on the Moon. Anyone on the night side of Earth can watch.</text>
    <text x="400" y="358" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Red sunlight bent through Earth's atmosphere gives a "blood Moon" colour.</text>
  </g>
`

const TILT_ALIGNMENT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Why eclipses are rare: the Moon's orbit is tilted</text>

    <!-- Sun on the left -->
    <circle cx="80" cy="200" r="45" fill="currentColor" stroke="none" />
    <text x="80" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Sun</text>

    <!-- Earth's orbital plane (dashed horizontal line) -->
    <line x1="160" y1="200" x2="720" y2="200" stroke-dasharray="6,6" stroke-width="1" />
    <text x="720" y="195" text-anchor="end" font-size="11" stroke="none" fill="currentColor">Earth's orbit plane</text>

    <!-- Earth in the middle -->
    <circle cx="430" cy="200" r="22" stroke-width="3" />
    <text x="430" y="240" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Moon's tilted orbit (sloped line through Earth) -->
    <line x1="300" y1="260" x2="560" y2="140" stroke-width="2" />
    <text x="560" y="130" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Moon's orbit</text>
    <text x="560" y="148" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">tilted by about 5°</text>

    <!-- Moon at full-moon position, above the line -->
    <circle cx="540" cy="150" r="10" fill="currentColor" stroke="none" />
    <text x="540" y="130" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">full Moon</text>
    <text x="540" y="116" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">above the plane</text>

    <!-- Caption -->
    <text x="400" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Most full Moons sit above or below the Sun-Earth line, so no shadow lands.</text>
    <text x="400" y="352" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Eclipses happen only when the alignment lines up in three dimensions.</text>
  </g>
`

export const spaceEclipses: SkillNode = {
  id: 'physics-space-eclipses',
  title: 'Eclipses of the Sun and Moon',
  description:
    'An eclipse happens when the Sun, Earth and Moon line up. A solar eclipse puts the Moon between the Sun and Earth, so the Moon casts a shadow on a small patch of Earth: inside the dark umbra the Sun is fully blocked (total), in the wider penumbra it is partly blocked (partial). A lunar eclipse puts Earth between the Sun and Moon, so Earth\'s shadow falls on the Moon, often turning it red as sunlight bent through Earth\'s atmosphere reaches it. Eclipses are rare because the Moon\'s orbit is tilted by about 5°, so most full Moons pass above or below the Sun-Earth line. UK contexts include the 1999 total solar eclipse over Cornwall and the March 2025 partial solar eclipse. Eye safety matters: never look at the Sun without a proper filter, even during an eclipse; a total lunar eclipse is safe to watch with the unaided eye.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-day-night-seasons'],
  curriculum: {
    ks3Objective:
      'Relative positions of the Sun, Earth and Moon; light travels in straight lines, shadows formed by opaque objects.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; orbital motion of the Moon around Earth and Earth around the Sun (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.1-8.3 the solar system, planets and moons; alignment in orbits (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; orbital alignments of the Sun, Earth and Moon (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: Royal Greenwich Observatory schools resource "Solar Eclipses Explained" (rmg.co.uk), aligned to KS3 light and shadows.
    {
      id: 'pec-solar',
      title: 'Solar Eclipse: the Moon Casts its Shadow on Earth',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the Moon between the Sun and Earth blocks sunlight from a small patch of Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: SOLAR_ECLIPSE_SVG,
        hotspots: [
          {
            id: 'pec-solar-line',
            x: 50,
            y: 50,
            label: 'Sun, Moon, Earth all on one line',
            description:
              'In a solar eclipse, the Moon sits directly between the Sun and Earth. The three bodies form a near-straight line, with the Moon in the middle. Sunlight travels in straight lines, so any opaque body in the path casts a shadow behind it.',
          },
          {
            id: 'pec-solar-umbra',
            x: 62,
            y: 51,
            label: 'Umbra: a total eclipse',
            description:
              'The dark central cone of the Moon\'s shadow is called the umbra. Anywhere standing inside the umbra sees the Sun completely blocked: a total solar eclipse. The umbra is small, so only a thin strip of Earth gets totality.',
          },
          {
            id: 'pec-solar-penumbra',
            x: 70,
            y: 34,
            label: 'Penumbra: a partial eclipse',
            description:
              'Around the umbra is a wider, lighter shadow called the penumbra. Standing in the penumbra, you see the Sun partly hidden: a partial solar eclipse. The penumbra covers a much larger area, so partial eclipses are seen far more often than total ones.',
          },
          {
            id: 'pec-solar-uk',
            x: 50,
            y: 87,
            label: 'UK example: Cornwall, 11 August 1999',
            description:
              'The 1999 total solar eclipse passed over Cornwall in the south west of the UK. The rest of the UK saw only a deep partial eclipse, because they sat in the penumbra rather than the narrow umbral track.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification, Topic 8 Astronomy notes on orbital alignment and shadow geometry.
    {
      id: 'pec-lunar',
      title: 'Lunar Eclipse: Earth\'s Shadow Lands on the Moon',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how Earth between the Sun and Moon hides the Moon in its own shadow.',
      data: {
        viewBox: '0 0 800 400',
        svg: LUNAR_ECLIPSE_SVG,
        hotspots: [
          {
            id: 'pec-lunar-line',
            x: 50,
            y: 50,
            label: 'Sun, Earth, Moon all on one line',
            description:
              'In a lunar eclipse, Earth sits directly between the Sun and the full Moon. The Moon passes into Earth\'s shadow. Because Earth is much larger than the Moon, the shadow is wide and the Moon can stay inside it for over an hour.',
          },
          {
            id: 'pec-lunar-shadow',
            x: 75,
            y: 45,
            label: 'Earth\'s umbra on the Moon',
            description:
              'The dark central cone of Earth\'s shadow is the umbra. When the whole Moon sits inside it, the eclipse is total; when only part of the Moon does, it is partial. The shadow\'s edge on the Moon\'s disc is always curved, because Earth is roughly spherical.',
          },
          {
            id: 'pec-lunar-blood',
            x: 50,
            y: 90,
            label: 'Why the Moon turns red: a "blood Moon"',
            description:
              'Some sunlight bends through Earth\'s atmosphere and reaches the eclipsed Moon. Blue light is scattered away (the same reason sunsets look red) and only the red light makes it through. So a totally eclipsed Moon glows a deep copper red rather than going pitch black.',
          },
          {
            id: 'pec-lunar-safe',
            x: 50,
            y: 79,
            label: 'Safe to view with the unaided eye',
            description:
              'A lunar eclipse is safe to watch directly. You are looking at the Moon, not the Sun, so no filter is needed. The UK sees lunar eclipses several times a decade because anyone on the night side of Earth can view the same event.',
          },
        ],
      },
    },
    // Source: AQA GCSE Physics 8463 specification, 4.8.1.1 Our solar system, on the geometry of orbital alignments.
    {
      id: 'pec-tilt',
      title: 'Why Eclipses are Rare: the Tilted Lunar Orbit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the Moon\'s tilted orbit makes most full Moons miss the Sun-Earth line.',
      data: {
        viewBox: '0 0 800 400',
        svg: TILT_ALIGNMENT_SVG,
        hotspots: [
          {
            id: 'pec-tilt-plane',
            x: 50,
            y: 50,
            label: 'Earth\'s orbital plane',
            description:
              'Earth orbits the Sun on a flat plane. If the Moon orbited Earth on the same flat plane, every new Moon would line up with the Sun and we would have a solar eclipse every month, with a lunar eclipse at every full Moon.',
          },
          {
            id: 'pec-tilt-moon',
            x: 68,
            y: 38,
            label: 'Moon\'s orbit, tilted by about 5°',
            description:
              'The Moon\'s orbit is tilted by about 5° relative to Earth\'s orbit round the Sun. So at most new and full Moons the Moon sits above or below the Sun-Earth line, not on it. Shadows still form, but they miss their target.',
          },
          {
            id: 'pec-tilt-rule',
            x: 50,
            y: 83,
            label: 'The alignment must line up in 3-D',
            description:
              'Eclipses only happen when the Moon is at new or full phase AND crossing through Earth\'s orbital plane at the same time. Those two events match up only about twice a year, which is why eclipses are special even though new and full Moons happen every month.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specimen materials on orbital geometry; question style adapted for KS3.
    {
      id: 'pec-worked-1',
      title: 'Spot the alignment: which body sits in the middle?',
      steps: [
        {
          explanation:
            'A pupil is told that during an eclipse, sunlight reaching the Moon is blocked by Earth. They want to work out whether this is a solar or a lunar eclipse.',
        },
        {
          explanation:
            'Identify which body has its light blocked. Here, the sunlight that would normally light the Moon is blocked. So the Moon is the body that goes dark.',
        },
        {
          explanation:
            'Identify which body is acting as the screen casting the shadow. The text says Earth is doing the blocking, so Earth must sit between the Sun and the Moon.',
        },
        {
          explanation:
            'Sketch the order: Sun, then Earth, then Moon. Earth is in the middle of the line.',
          maths: 'Sun → Earth → Moon',
        },
        {
          explanation:
            'Name the eclipse. When Earth blocks sunlight from the Moon, the Moon is what is eclipsed: this is a lunar eclipse.',
        },
        {
          explanation:
            'State the answer with a sense check: a lunar eclipse can only happen at full Moon, because that is the phase where the Moon sits on the far side of Earth from the Sun. So the geometry is consistent.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, prompt on identifying eclipse types from a description.
    {
      id: 'pec-worked-2',
      title: 'Solar eclipse: total versus partial in the UK',
      steps: [
        {
          explanation:
            'A pupil reads that during the 11 August 1999 solar eclipse, observers in Falmouth (Cornwall) saw the Sun completely covered, while observers in Manchester saw the Sun reduced to a crescent. They want to explain the difference.',
        },
        {
          explanation:
            'Recall the two parts of the Moon\'s shadow. The central dark cone is the umbra; the wider lighter region around it is the penumbra.',
        },
        {
          explanation:
            'Match each city to a region of the shadow. Falmouth lay inside the umbra: the Sun is fully blocked. Manchester lay inside the penumbra: only part of the Sun is blocked.',
        },
        {
          explanation:
            'Name each event from the geometry.',
          maths: 'Falmouth: total. Manchester: partial.',
        },
        {
          explanation:
            'State the answer in words: Falmouth saw a total solar eclipse because the Moon\'s umbra passed over it, while Manchester saw a partial eclipse because only the penumbra reached it.',
        },
        {
          explanation:
            'Add the safety note: even during a partial eclipse, sunlight from the uncovered crescent is still strong enough to damage eyes. So observers in both cities needed pinhole projection or solar filter glasses.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pec-q1',
      type: 'multiple-choice',
      stem: 'In a solar eclipse, which body sits between the other two?',
      tier: 'core',
      options: [
        'The Moon sits between the Sun and Earth.',
        'Earth sits between the Sun and the Moon.',
        'The Sun sits between Earth and the Moon.',
        'No body sits between the other two; they form a triangle.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pec-mis-which-body-between',
      hint: 'In a solar eclipse the Sun is what gets covered. The body doing the covering must lie between the Sun and the observer.',
    },
    {
      id: 'pec-q2',
      type: 'multiple-choice',
      stem: 'In a lunar eclipse, which body sits between the other two?',
      tier: 'core',
      options: [
        'The Moon sits between the Sun and Earth.',
        'Earth sits between the Sun and the Moon.',
        'The Sun sits between Earth and the Moon.',
        'None; eclipses do not need any body in the middle.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pec-mis-which-body-between',
      hint: 'In a lunar eclipse the Moon goes dark. Whatever is blocking the sunlight must be between the Sun and the Moon.',
    },
    {
      id: 'pec-q3',
      type: 'multiple-choice',
      stem: 'What is the name of the dark, central part of a shadow where the light source is completely blocked?',
      tier: 'core',
      options: [
        'Penumbra',
        'Umbra',
        'Corona',
        'Equinox',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pec-mis-umbra-penumbra',
      hint: 'The Latin word "umbra" means "shadow". The lighter outer region uses the prefix "pen-", meaning "almost".',
    },
    {
      id: 'pec-q4',
      type: 'multiple-choice',
      stem: 'During a partial solar eclipse, which safety advice is correct?',
      tier: 'core',
      options: [
        'Never look directly at the Sun. Use pinhole projection or a proper solar filter.',
        'It is safe to look directly at the Sun, because the Moon is blocking most of it.',
        'Use ordinary sunglasses; any dark lens will protect your eyes.',
        'Looking through a phone camera is fine because the screen filters the light.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pec-mis-eye-safety',
      hint: 'Even when most of the Sun is covered, the small crescent left over is still bright enough to damage your eyes.',
    },
    {
      id: 'pec-q5',
      type: 'drag-order',
      stem: 'Put these steps in order to explain how a solar eclipse forms a shadow on Earth.',
      tier: 'core',
      items: [
        'A patch of Earth sits inside that shadow and sees the Sun fully or partly covered.',
        'Sunlight travels outward from the Sun in straight lines.',
        'The Moon, which is opaque, sits in the path of those straight rays.',
        'Sunlight cannot bend round the Moon, so a shadow forms behind it in space.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 10,
      hint: 'Start at the Sun, follow the light, hit the Moon, see the shadow, end at Earth.',
    },
    {
      id: 'pec-q6',
      type: 'drag-order',
      stem: 'Put these bodies in order from nearest the Sun to furthest, for the moment of a solar eclipse.',
      tier: 'core',
      items: [
        'Earth',
        'Sun',
        'Moon',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 10,
      hint: 'A solar eclipse has the Moon between the Sun and Earth.',
    },
    {
      id: 'pec-q7',
      type: 'numeric-entry',
      stem: 'The Moon\'s orbit round Earth is tilted, in degrees, by about what value relative to Earth\'s orbit round the Sun? Give a whole number.',
      tier: 'core',
      correctAnswer: 5,
      tolerance: 0,
      unit: 'degrees',
      xpValue: 10,
      hint: 'It is a small angle, between 4° and 6°. Most full Moons pass above or below the Sun-Earth line because of this tilt.',
    },
    {
      id: 'pec-q8',
      type: 'multiple-choice',
      stem: 'Why do we not get a solar eclipse every new Moon and a lunar eclipse every full Moon?',
      tier: 'confident',
      options: [
        'The Sun is not always shining at the Moon.',
        'Earth wobbles unpredictably on its axis.',
        'The Moon\'s orbit is tilted by about 5°, so most new and full Moons pass above or below the Sun-Earth line.',
        'The Moon is too small to cast a shadow on most months.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pec-mis-monthly-eclipses',
      hint: 'Eclipses need a 3-D alignment, not just the right phase. The Moon\'s orbit being tilted means the alignment usually misses.',
    },
    {
      id: 'pec-q9',
      type: 'multiple-choice',
      stem: 'A pupil in Edinburgh sees the full Moon glow a deep coppery red during an eclipse. Which statement best explains the colour?',
      tier: 'confident',
      options: [
        'Sunlight has bent through Earth\'s atmosphere, which scatters blue light away and lets red light through to the Moon.',
        'The Moon is heating up and glowing red like an ember.',
        'Red volcanic dust on the Moon\'s surface is rising during the eclipse.',
        'Mars is passing in front of the Moon and tinting it red.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pec-mis-blood-moon-cause',
      hint: 'The same effect makes a UK sunset look red. Earth\'s atmosphere lets red light through more readily than blue.',
    },
    {
      id: 'pec-q10',
      type: 'multiple-choice',
      stem: 'A lunar eclipse is happening tonight. Which statement is true?',
      tier: 'confident',
      options: [
        'It is dangerous to view; you need a solar filter as you would for a solar eclipse.',
        'It can only be seen from a thin strip of Earth, like a total solar eclipse.',
        'It is safe to view with the unaided eye and visible from anywhere on the night side of Earth.',
        'It will turn the Moon completely invisible, with no colour at all.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pec-mis-eye-safety',
      hint: 'You are looking at the Moon, not the Sun. And Earth\'s shadow is much larger than the Moon\'s.',
    },
    {
      id: 'pec-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why Moon phases are NOT the same idea as a lunar eclipse.',
      tier: 'confident',
      steps: [
        'Note that the Moon is always half lit by the Sun, but as it orbits Earth we see different fractions of that lit half.',
        'Conclude that Moon phases (new, crescent, half, gibbous, full) repeat every month, simply from changing geometry between Sun, Moon, and observer.',
        null,
        'So a lunar eclipse only happens occasionally, and only at full Moon, whereas phases happen every single month.',
        'State the difference: phases come from the angle we view the lit Moon; a lunar eclipse comes from Earth\'s shadow blocking sunlight to the Moon.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Note that a lunar eclipse is a separate event: Earth\'s shadow lands on the full Moon, and this needs a rare 3-D alignment of Sun, Earth and Moon.',
      xpValue: 15,
      misconceptionId: 'pec-mis-phases-vs-lunar',
    },
    {
      id: 'pec-q12',
      type: 'multiple-choice',
      stem: 'During the 11 August 1999 eclipse, an observer in Falmouth (Cornwall) saw the Sun completely covered, while an observer in Glasgow saw a deep crescent of the Sun still visible. Which best explains the difference?',
      tier: 'confident',
      options: [
        'Falmouth is closer to the Sun than Glasgow.',
        'Glasgow had cloudier weather, so less of the Sun was visible.',
        'Falmouth sat inside the Moon\'s umbra (total), while Glasgow sat inside the penumbra (partial).',
        'The Moon had a different size for the two cities.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Inside the umbra the Sun is fully blocked. Inside the surrounding penumbra it is only partly blocked.',
    },
    {
      id: 'pec-q13',
      type: 'spot-misconception',
      stem: 'Tom and Anya are talking about why eclipses are rare.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom says: "We should get a solar eclipse every new Moon, because that is when the Moon is between Earth and the Sun. The fact that we do not must mean the calendar is unreliable." This is wrong because it ignores that the Moon\'s orbit is tilted.',
          isMisconception: true,
        },
        {
          text: 'Anya says: "The Moon is between Earth and the Sun every new Moon, but its orbit is tilted by about 5°. So most new Moons pass above or below the Sun-Earth line and no shadow lands on Earth." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pec-mis-monthly-eclipses',
    },
    {
      id: 'pec-q14',
      type: 'numeric-entry',
      stem: 'In how many dimensions must the Sun, Earth and Moon line up for an eclipse to happen? Give a whole number.',
      tier: 'confident',
      correctAnswer: 3,
      tolerance: 0,
      unit: '',
      xpValue: 15,
      hint: 'Picture the Moon\'s orbit drawn in space, not just on a flat sheet. A line on paper is 2-D; space is 3-D.',
    },
    {
      id: 'pec-q15',
      type: 'multiple-choice',
      stem: 'Which of the following is NOT a kind of solar eclipse?',
      tier: 'confident',
      options: [
        'Total solar eclipse, when the Moon completely covers the Sun.',
        'Partial solar eclipse, when the Moon covers part of the Sun.',
        'Annular solar eclipse, when the Moon is too far from Earth to fully cover the Sun and leaves a bright ring.',
        'Crescent solar eclipse, when only the Moon shows as a crescent against the night sky.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Three real types: total, partial, annular. The fourth option mixes up "crescent" (a Moon phase term) with the solar eclipse categories.',
    },
    {
      id: 'pec-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining what makes a total solar eclipse different from a partial one.',
      tier: 'challenge',
      steps: [
        'Note that the Moon casts two shadow regions: the dark inner umbra and the wider outer penumbra.',
        'Recall that light travels in straight lines, so anywhere completely cut off from the Sun sits in the umbra.',
        null,
        'Anywhere standing in the penumbra is only partly cut off, so it sees a partial eclipse: a bite out of the Sun rather than full cover.',
        'Conclude that the position of the observer inside the Moon\'s shadow decides which kind of eclipse they see.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Anywhere standing in the umbra is completely cut off from the Sun, so it sees a total eclipse: the Sun is fully covered.',
      xpValue: 20,
    },
    {
      id: 'pec-q17',
      type: 'spot-misconception',
      stem: 'Hassan watches a partial solar eclipse from Birmingham and is offered two ways of looking at it.',
      tier: 'challenge',
      statements: [
        {
          text: 'Hassan says: "Since the Moon is blocking most of the Sun, I can safely glance at the Sun for a second or two with my unaided eyes." This is wrong; the uncovered part of the Sun is still bright enough to damage eyes.',
          isMisconception: true,
        },
        {
          text: 'Hassan says: "Even though most of the Sun is covered, the visible crescent is still strong enough to harm my eyes. I will use a pinhole projector or proper solar filter glasses." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pec-mis-eye-safety',
    },
    {
      id: 'pec-q18',
      type: 'numeric-entry',
      stem: 'In which year did the most recent total solar eclipse cross the UK (visible from Cornwall, with the rest of the UK seeing a deep partial)? Give a four-digit year.',
      tier: 'challenge',
      correctAnswer: 1999,
      tolerance: 0,
      unit: '',
      xpValue: 20,
      hint: 'It happened on 11 August, in the closing year of the twentieth century.',
    },
    {
      id: 'pec-q19',
      type: 'drag-order',
      stem: 'Put these statements in order to explain why we do NOT get a lunar eclipse every full Moon.',
      tier: 'challenge',
      items: [
        'So both conditions must match: full Moon AND the Moon crossing Earth\'s orbital plane.',
        'A lunar eclipse needs Earth\'s shadow to land on the Moon.',
        'That requires a precise 3-D alignment of the Sun, Earth and the full Moon.',
        'On average, this dual condition matches up about twice a year, not twelve times.',
        'The Moon\'s orbit is tilted by about 5°, so most full Moons sit above or below Earth\'s shadow.',
      ],
      correctOrder: [1, 2, 4, 0, 3],
      xpValue: 20,
      misconceptionId: 'pec-mis-monthly-eclipses',
      hint: 'Start from the definition of a lunar eclipse, build up the alignment requirement, then bring in the orbital tilt and finish with the yearly average.',
    },
    {
      id: 'pec-q20',
      type: 'multiple-choice',
      stem: 'During a total lunar eclipse, the Moon often looks deep red rather than going dark. Which sequence best describes why?',
      tier: 'challenge',
      options: [
        'Sunlight reflects off Mars and tints the Moon red.',
        'Sunlight enters Earth\'s atmosphere, which scatters blue light away and refracts (bends) the remaining red light into Earth\'s shadow, where it lands on the Moon.',
        'The Moon glows red because it is heated by Earth\'s shadow.',
        'Red light from city lights on Earth reflects off the Moon.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'It is the same physics as a UK sunset, but the red light is bent through the whole atmosphere and reaches the Moon rather than your eye.',
    },
    {
      id: 'pec-q21',
      type: 'numeric-entry',
      stem: 'On average, how many lunar eclipses (partial or total) does Earth see per year? Give a whole number between 1 and 5.',
      tier: 'challenge',
      correctAnswer: 2,
      tolerance: 0,
      unit: '',
      xpValue: 20,
      hint: 'The Moon\'s orbital tilt means the alignment works out about twice a year, on average.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates swapped which body sits in the middle during solar versus lunar eclipses.
    {
      id: 'pec-mis-which-body-between',
      description:
        'Swapping which body sits in the middle: thinking Earth blocks the Sun in a solar eclipse, or the Moon blocks the Sun in a lunar eclipse.',
      triggerAnswer: 'solar-lunar-swap',
      correction:
        'A solar eclipse has the Moon in the middle, blocking the Sun. A lunar eclipse has Earth in the middle, blocking sunlight that would otherwise hit the Moon.',
      reExplanation:
        'Use the name as a clue: "solar" eclipse means the Sun is what gets eclipsed, so the Moon must be in the way. "Lunar" eclipse means the Moon is what gets eclipsed, so Earth must be in the way. Sketch the line Sun-Moon-Earth for solar, and Sun-Earth-Moon for lunar, and the geometry will sort itself out.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates expected monthly eclipses given monthly phases.
    {
      id: 'pec-mis-monthly-eclipses',
      description:
        'Expecting a solar eclipse at every new Moon and a lunar eclipse at every full Moon, since the alignment "should" repeat monthly.',
      triggerAnswer: 'eclipse-every-month',
      correction:
        'The Moon\'s orbit is tilted by about 5° relative to Earth\'s orbit. Most new and full Moons pass above or below the Sun-Earth line, so no shadow lands.',
      reExplanation:
        'Picture the Moon\'s orbit as a slightly tilted ring round Earth. New Moon happens when the Moon is on the Sun-side, but usually a little above or below the Sun-Earth line. Only when the Moon also crosses through Earth\'s orbital plane at the right moment does an eclipse happen. That dual condition matches up about twice a year, on average.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates confused lunar eclipses with ordinary Moon phases.
    {
      id: 'pec-mis-phases-vs-lunar',
      description:
        'Treating lunar eclipses and Moon phases as the same idea, since both change the appearance of the Moon.',
      triggerAnswer: 'phases-equal-lunar',
      correction:
        'Moon phases come from which fraction of the lit half faces Earth as the Moon orbits. A lunar eclipse is Earth\'s shadow landing on the Moon at full phase: a separate event.',
      reExplanation:
        'Phases repeat every month: new, crescent, half, gibbous, full, then back again. They depend on geometry between Sun, Moon and observer, not on any shadow from Earth. A lunar eclipse only happens at full Moon AND when Earth\'s shadow lines up on the Moon, which is rare. So you see all phases every month, but lunar eclipses only twice a year on average.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates assumed total lunar and total solar eclipses need the same safety precautions.
    {
      id: 'pec-mis-eye-safety',
      description:
        'Assuming a solar eclipse is safe to view directly during partial or total phases, or that a lunar eclipse needs the same protection as a solar one.',
      triggerAnswer: 'eclipse-eye-safety',
      correction:
        'Never look directly at the Sun, even during an eclipse. Use pinhole projection or a proper solar filter. A total lunar eclipse is safe to view with the unaided eye.',
      reExplanation:
        'During a partial solar eclipse the uncovered crescent is still strong enough to burn the retina. Even during totality, the moment of "diamond ring" return of sunlight is hazardous. By contrast, a lunar eclipse is just the Moon in shadow; you are looking at the Moon, not the Sun, so no filter is needed.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates confused umbra and penumbra or used the terms interchangeably.
    {
      id: 'pec-mis-umbra-penumbra',
      description:
        'Treating umbra and penumbra as the same region, or naming the lighter outer shadow as the umbra.',
      triggerAnswer: 'umbra-penumbra-swap',
      correction:
        'The umbra is the dark central cone where the light source is completely blocked. The penumbra is the wider, lighter outer ring where the source is only partly blocked.',
      reExplanation:
        'Inside the Moon\'s umbra during a solar eclipse, the Sun looks fully covered: a total eclipse. Inside the surrounding penumbra, only part of the Sun is hidden: a partial eclipse. The same labels apply to Earth\'s shadow during a lunar eclipse. Picture two nested cones: small inner umbra, larger outer penumbra.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates argued the Moon glows red during a lunar eclipse because it is heated by Earth.
    {
      id: 'pec-mis-blood-moon-cause',
      description:
        'Thinking the Moon glows red during a total lunar eclipse because Earth\'s shadow warms or colours its surface, rather than from refracted sunlight.',
      triggerAnswer: 'blood-moon-glow',
      correction:
        'The Moon does not produce its own light. Red sunlight bent through Earth\'s atmosphere reaches the Moon and lights it up in deep red while the rest is blocked.',
      reExplanation:
        'Earth\'s atmosphere acts like a giant lens: sunlight passing through it loses its blue (scattered away, the same reason UK skies are blue) and is bent so that the remaining red light fills the centre of Earth\'s shadow. That red light then falls on the Moon and reflects to your eye. The Moon is still cold; the red glow is just refracted sunlight.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceEclipsesZoneNodes = [spaceEclipses]
