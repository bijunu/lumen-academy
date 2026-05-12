import type { SkillNode } from '@/types/content'

const SPEED_FORMULA_TRIANGLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Speed formula triangle</text>
    <text x="400" y="62" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">cover the letter you want; the other two tell you what to do</text>

    <polygon points="400,90 240,330 560,330" />
    <line x1="320" y1="210" x2="480" y2="210" />
    <line x1="400" y1="210" x2="400" y2="330" />

    <text x="400" y="170" text-anchor="middle" font-size="44" font-weight="700" stroke="none" fill="currentColor">d</text>
    <text x="350" y="290" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">s</text>
    <text x="450" y="290" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">t</text>

    <text x="180" y="170" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">d means distance</text>
    <text x="180" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">in metres (m)</text>
    <text x="180" y="210" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">or kilometres (km)</text>

    <text x="620" y="170" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">s means speed</text>
    <text x="620" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">in m/s</text>
    <text x="620" y="210" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">or km/h</text>

    <text x="620" y="290" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">t means time</text>
    <text x="620" y="310" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">in seconds (s)</text>
    <text x="620" y="330" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">or hours (h)</text>

    <text x="180" y="290" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">cover d to find d = s x t</text>
    <text x="180" y="310" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">cover s to find s = d / t</text>
    <text x="180" y="330" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">cover t to find t = d / s</text>
  </g>
`

const TYPICAL_SPEEDS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Typical UK speeds (in m/s)</text>

    <line x1="80" y1="360" x2="720" y2="360" />
    <text x="80" y="380" font-size="12" stroke="none" fill="currentColor">0 m/s</text>
    <text x="380" y="380" font-size="12" stroke="none" fill="currentColor">20 m/s</text>
    <text x="700" y="380" font-size="12" stroke="none" fill="currentColor">40 m/s</text>

    <line x1="80" y1="355" x2="80" y2="365" />
    <line x1="240" y1="355" x2="240" y2="365" />
    <line x1="400" y1="355" x2="400" y2="365" />
    <line x1="560" y1="355" x2="560" y2="365" />
    <line x1="720" y1="355" x2="720" y2="365" />

    <circle cx="104" cy="360" r="9" fill="currentColor" />
    <text x="104" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">walking</text>
    <text x="104" y="320" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">1.5</text>

    <circle cx="128" cy="360" r="9" fill="currentColor" />
    <text x="128" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">running</text>
    <text x="128" y="290" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">3</text>

    <circle cx="176" cy="360" r="9" fill="currentColor" />
    <text x="176" y="275" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cycling</text>
    <text x="176" y="260" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">6</text>

    <circle cx="304" cy="360" r="9" fill="currentColor" />
    <text x="304" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">car (30 mph)</text>
    <text x="304" y="230" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">13</text>

    <circle cx="528" cy="360" r="9" fill="currentColor" />
    <text x="528" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">ScotRail express</text>
    <text x="528" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">40</text>

    <text x="400" y="120" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Sound in air is much faster: about 343 m/s</text>
    <text x="400" y="138" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">(off the right of this scale)</text>
  </g>
`

const UNIT_CONVERSION_LADDER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Unit conversion ladder: km/h to m/s</text>

    <rect x="120" y="90" width="560" height="60" fill="none" stroke="currentColor" />
    <text x="400" y="125" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">speed in km/h</text>

    <line x1="400" y1="160" x2="400" y2="210" />
    <polygon points="392,200 400,215 408,200" fill="currentColor" stroke="none" />
    <text x="430" y="190" font-size="13" stroke="none" fill="currentColor">divide by 3.6</text>

    <rect x="120" y="220" width="560" height="60" fill="none" stroke="currentColor" />
    <text x="400" y="255" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">speed in m/s</text>

    <line x1="400" y1="290" x2="400" y2="340" />
    <polygon points="392,300 400,285 408,300" fill="currentColor" stroke="none" />
    <text x="430" y="320" font-size="13" stroke="none" fill="currentColor">multiply by 3.6 to go back</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">why 3.6? 1 km = 1000 m and 1 h = 3600 s, so 1 km/h = 1000 / 3600 m/s = 1 / 3.6 m/s</text>
  </g>
`

export const forcesSpeedDistanceTime: SkillNode = {
  id: 'physics-forces-speed-distance-time',
  title: 'Speed, Distance and Time',
  description:
    'Use the equation speed = distance / time, and rearrange it to find distance or time. Pick the right units (metres with seconds, or kilometres with hours) and convert between km/h and m/s where you need to. Tell average speed apart from instantaneous speed on a journey that is not steady, and reason about UK journey contexts: a Snowdon walk, the M25, a Dover to Calais ferry crossing.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-types'],
  curriculum: {
    ks3Objective:
      'Speed and the quantitative relationship between average speed, distance and time (speed = distance / time); the representation of a journey on a distance-time graph.',
    awardingBodies: {
      aqa: '4.5.6.1.2 Speed; distance travelled = average speed x time (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.1 Use the equation: average speed = distance moved / time taken (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion; speed = distance / time, typical speeds of walking, running, cycling (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fsdt-scene-typical-speeds',
      title: 'Typical UK Speeds',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read a typical UK speed in metres per second.',
      data: {
        viewBox: '0 0 800 400',
        svg: TYPICAL_SPEEDS_SVG,
        hotspots: [
          {
            id: 'fsdt-ts-walking',
            x: 13,
            y: 90,
            label: 'Walking: about 1.5 m/s',
            description:
              'A steady walk covers about 1.5 metres every second. In one minute that is roughly 90 m, a bit more than the length of a football pitch.',
          },
          {
            id: 'fsdt-ts-running',
            x: 16,
            y: 90,
            label: 'Running: about 3 m/s',
            description:
              'A school cross country pace is about 3 m/s. Twice walking, so the same distance takes half the time.',
          },
          {
            id: 'fsdt-ts-cycling',
            x: 22,
            y: 90,
            label: 'Cycling: about 6 m/s',
            description:
              'Casual cycling on a flat road is about 6 m/s. Four times walking, so a 1500 m route takes about 250 s rather than 1000 s.',
          },
          {
            id: 'fsdt-ts-car',
            x: 38,
            y: 90,
            label: 'Car at 30 mph: about 13 m/s',
            description:
              'In a 30 mph zone, a car moves at roughly 13 m/s. So the 60 mph on a dual carriageway sign is about 27 m/s, not 60.',
          },
          {
            id: 'fsdt-ts-train',
            x: 66,
            y: 90,
            label: 'ScotRail express: about 40 m/s',
            description:
              'An express train between Edinburgh and Aberdeen runs near 40 m/s. That is about 144 km/h once you multiply by 3.6.',
          },
          {
            id: 'fsdt-ts-sound',
            x: 50,
            y: 30,
            label: 'Sound in air: 343 m/s',
            description:
              'Sound through still air at room temperature is 343 m/s. Far above any everyday journey speed, but a useful benchmark.',
          },
        ],
      },
    },
    {
      id: 'fsdt-scene-formula-triangle',
      title: 'The Speed Formula Triangle',
      type: 'labelled-diagram',
      instructions:
        'Click each letter to see how covering it gives one of the three rearrangements.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPEED_FORMULA_TRIANGLE_SVG,
        hotspots: [
          {
            id: 'fsdt-ft-distance',
            x: 50,
            y: 42,
            label: 'Distance (d)',
            description:
              'Cover d in the triangle. What is left reads s next to t. So d = s x t. Multiply speed by time to get distance.',
          },
          {
            id: 'fsdt-ft-speed',
            x: 44,
            y: 72,
            label: 'Speed (s)',
            description:
              'Cover s. What is left reads d above t. So s = d / t. Divide distance by time to get speed.',
          },
          {
            id: 'fsdt-ft-time',
            x: 56,
            y: 72,
            label: 'Time (t)',
            description:
              'Cover t. What is left reads d above s. So t = d / s. Divide distance by speed to get time. Never use t = s / d; that is the inverted formula and gives the wrong answer.',
          },
          {
            id: 'fsdt-ft-units',
            x: 78,
            y: 50,
            label: 'Match the units',
            description:
              'Use metres with seconds (giving m/s), or kilometres with hours (giving km/h). Never mix km with seconds or metres with hours without converting first.',
          },
        ],
      },
    },
    {
      id: 'fsdt-scene-ladder',
      title: 'Converting km/h and m/s',
      type: 'labelled-diagram',
      instructions:
        'Click each rung to see how the speed unit ladder works.',
      data: {
        viewBox: '0 0 800 400',
        svg: UNIT_CONVERSION_LADDER_SVG,
        hotspots: [
          {
            id: 'fsdt-ld-top',
            x: 50,
            y: 30,
            label: 'Top rung: km/h',
            description:
              'Speeds on UK road signs are quoted in mph, but most school problems use km/h. A typical residential 30 mph zone is about 48 km/h.',
          },
          {
            id: 'fsdt-ld-divide',
            x: 50,
            y: 50,
            label: 'Divide by 3.6 to go down',
            description:
              'Why 3.6? 1 km = 1000 m and 1 h = 3600 s. So 1 km per hour means 1000 metres per 3600 seconds, which is 1 / 3.6 m/s. Divide the km/h figure by 3.6.',
          },
          {
            id: 'fsdt-ld-bottom',
            x: 50,
            y: 65,
            label: 'Bottom rung: m/s',
            description:
              'Physics calculations almost always want speed in m/s, because most distances and times in mechanics are in metres and seconds.',
          },
          {
            id: 'fsdt-ld-multiply',
            x: 50,
            y: 82,
            label: 'Multiply by 3.6 to go back',
            description:
              'To turn m/s back into km/h, multiply by 3.6. So 10 m/s is 36 km/h, and 20 m/s is 72 km/h.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fsdt-worked-1',
      title: 'A jog around the school field: rearranging for time',
      steps: [
        {
          explanation:
            'Pick out the three letters. A pupil jogs steadily around a school field at a speed of 3 m/s. The lap is 600 m. The question asks how long one lap takes.',
        },
        {
          explanation:
            'Match the units. Speed is in m/s and distance is in metres, so the time will come out in seconds. No conversion is needed.',
        },
        {
          explanation:
            'Choose the right rearrangement. Time is the unknown, so use t = d / s. Never use t = s / d; that is the inverted formula.',
          maths: 't = d / s',
        },
        {
          explanation:
            'Substitute. Put in the numbers from the question.',
          maths: 't = 600 / 3',
        },
        {
          explanation:
            'Evaluate.',
          maths: 't = 200 s',
        },
        {
          explanation:
            'State the answer with units. One lap takes 200 seconds, or about three and a third minutes. That feels right for a steady jog.',
        },
      ],
    },
    {
      id: 'fsdt-worked-2',
      title: 'Dover to Calais ferry: rearranging for distance, with unit care',
      steps: [
        {
          explanation:
            'Pick out the three letters. A Dover to Calais ferry crosses at an average speed of 22 km/h. The crossing takes 1.5 hours. The question asks for the distance covered.',
        },
        {
          explanation:
            'Match the units. Speed is in km/h and time is in hours. The distance will come out in km. No conversion is needed yet.',
        },
        {
          explanation:
            'Choose the right rearrangement. Distance is the unknown, so use d = s x t.',
          maths: 'd = s x t',
        },
        {
          explanation:
            'Substitute. Put in the numbers from the question.',
          maths: 'd = 22 x 1.5',
        },
        {
          explanation:
            'Evaluate.',
          maths: 'd = 33 km',
        },
        {
          explanation:
            'State the answer with units. The ferry covers 33 km. That matches the real Dover to Calais sea route, which is about 33 km across the Channel.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fsdt-q1',
      type: 'multiple-choice',
      stem: 'Which equation links average speed, distance and time?',
      tier: 'core',
      options: [
        'speed = distance / time',
        'speed = time / distance',
        'speed = distance x time',
        'speed = distance + time',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fsdt-mis-invert-formula',
      hint: 'Speed tells you how much distance is covered each second. So it shares out the distance between the seconds.',
    },
    {
      id: 'fsdt-q2',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil walks at a steady pace from the classroom to the library along a straight school corridor. Roughly what speed is this in m/s?',
      tier: 'core',
      options: [
        '0.1 m/s',
        '6 m/s',
        '1.5 m/s',
        '15 m/s',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A steady walk covers about 90 m in a minute. Sixty seconds in a minute, so divide.',
    },
    {
      id: 'fsdt-q3',
      type: 'multiple-choice',
      stem: 'A cyclist rolls along a flat lane near Tunbridge Wells. Which of these is the most typical cycling speed in m/s?',
      tier: 'core',
      options: [
        '1.5 m/s',
        '6 m/s',
        '30 m/s',
        '60 m/s',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Cycling is roughly four times walking pace on a flat road.',
    },
    {
      id: 'fsdt-q4',
      type: 'multiple-choice',
      stem: 'You know the distance and the speed for a steady journey and want to find the time. Which rearrangement do you use?',
      tier: 'core',
      options: [
        't = s x d',
        't = s / d',
        't = s + d',
        't = d / s',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fsdt-mis-invert-formula',
      hint: 'Cover t in the speed formula triangle. What is left reads d over s.',
    },
    {
      id: 'fsdt-q5',
      type: 'numeric-entry',
      stem: 'A 300 m school cross country sprint takes a pupil 60 s at a steady pace. What is the pupil\'s average speed, in m/s?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'm/s',
      xpValue: 10,
      hint: 'Use s = d / t. Distance in metres, time in seconds, so the answer is in m/s.',
    },
    {
      id: 'fsdt-q6',
      type: 'numeric-entry',
      stem: 'A pupil walks at 1.5 m/s along a straight corridor for 600 s. What distance, in metres, does the pupil cover?',
      tier: 'core',
      correctAnswer: 900,
      unit: 'm',
      xpValue: 10,
      hint: 'Use d = s x t. Speed in m/s and time in seconds, so the answer is in metres.',
    },
    {
      id: 'fsdt-q7',
      type: 'numeric-entry',
      stem: 'A jogger runs 1500 m around the school field at a steady 3 m/s. How long, in seconds, does the jog take?',
      tier: 'confident',
      correctAnswer: 500,
      unit: 's',
      xpValue: 15,
      misconceptionId: 'fsdt-mis-invert-formula',
      hint: 'Use t = d / s. Both letters are in matching units (metres and m/s), so the answer is in seconds.',
    },
    {
      id: 'fsdt-q8',
      type: 'numeric-entry',
      stem: 'A car travels at 36 km/h through a 30 mph zone. What is this speed in m/s?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'm/s',
      xpValue: 15,
      misconceptionId: 'fsdt-mis-mph-equals-ms',
      hint: 'To go from km/h to m/s, divide by 3.6.',
    },
    {
      id: 'fsdt-q9',
      type: 'numeric-entry',
      stem: 'A ScotRail express runs at a steady 20 m/s along a straight section of track. What is this speed in km/h?',
      tier: 'confident',
      correctAnswer: 72,
      unit: 'km/h',
      xpValue: 15,
      hint: 'To go from m/s to km/h, multiply by 3.6.',
    },
    {
      id: 'fsdt-q10',
      type: 'multiple-choice',
      stem: 'A pupil writes "A cyclist on a flat road is going at 36 m/s." A teacher says this is much too fast for cycling. What unit slip has the pupil most likely made?',
      tier: 'confident',
      options: [
        'The pupil quoted 36 km/h as 36 m/s without dividing by 3.6.',
        'The pupil quoted 36 mph as 36 m/s, when 1 mph is closer to 0.45 m/s.',
        'The pupil used the right unit and the speed is correct after all.',
        'The pupil meant 36 m per minute, not per second.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fsdt-mis-mph-equals-ms',
      hint: 'A casual cyclist is about 6 m/s. Working back, 36 / 6 = 6, which is roughly the conversion factor 3.6.',
    },
    {
      id: 'fsdt-q11',
      type: 'multiple-choice',
      stem: 'A coach trip from Manchester to London on the M6 and M1 covers 320 km in 4 hours, including a stop at a service station and queues near Birmingham. Which statement about the coach\'s speed is fair?',
      tier: 'challenge',
      options: [
        'The coach moved at exactly 80 km/h for the whole journey.',
        'The coach\'s average speed was 80 km/h, but its instantaneous speed changed during the queue and the stop.',
        'The coach\'s average speed was 80 m/s, and that is the same as 80 km/h.',
        'You cannot work out the average speed without a distance-time graph.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fsdt-mis-average-vs-instant',
      hint: 'Average speed is total distance over total time, even when the speed wobbles. The instantaneous speed is what the speedo shows at one moment.',
    },
    {
      id: 'fsdt-q12',
      type: 'multiple-choice',
      stem: 'A swimmer covers a 50 m pool, taking 25 s. They then double their effort and cover the same 50 m in only 12.5 s. What has happened to the average speed?',
      tier: 'challenge',
      options: [
        'The average speed has halved, because the time has halved.',
        'The average speed has stayed the same, because the distance has not changed.',
        'The average speed has doubled, because the same distance is now covered in half the time.',
        'The average speed has gone up by 12.5, because that is the time saved.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Use s = d / t. Halving the bottom of a fraction (with the top fixed) doubles the whole thing.',
    },
    {
      id: 'fsdt-q13',
      type: 'multiple-choice',
      stem: 'A walker climbs Snowdon along the Llanberis path. The path is 7.5 km long and they reach the summit in 3 hours of walking, plus 30 minutes of rest stops. What is their average walking speed in km/h, counting only the moving time?',
      tier: 'challenge',
      options: [
        '7.5 / 3.5 km/h, which is about 2.1 km/h.',
        '7.5 / 3 km/h, which is 2.5 km/h.',
        '7.5 x 3 km/h, which is 22.5 km/h.',
        '3 / 7.5 km/h, which is 0.4 km/h.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'fsdt-mis-include-stop-time',
      hint: 'Read the question. "Moving time" tells you which time figure to use; the rest stop does not count here.',
    },
    {
      id: 'fsdt-q14',
      type: 'numeric-entry',
      stem: 'A Dover to Calais ferry covers 33 km across the Channel in 1.5 hours at a steady cruising speed. What is its average speed in km/h?',
      tier: 'challenge',
      correctAnswer: 22,
      unit: 'km/h',
      xpValue: 20,
      hint: 'Use s = d / t with the units already given. Watch the half hour, it is 1.5 not 1.30.',
    },
    {
      id: 'fsdt-q15',
      type: 'numeric-entry',
      stem: 'A cyclist near Sevenoaks rides 9 km along a flat lane at a steady 3 m/s, then stops for a 10 minute drink break. What is the total time for the trip, in minutes? (1 km = 1000 m.)',
      tier: 'challenge',
      correctAnswer: 60,
      unit: 'min',
      xpValue: 20,
      misconceptionId: 'fsdt-mis-mix-units',
      hint: 'Convert 9 km to metres, find the cycling time with t = d / s in seconds, change to minutes, then add the 10 minute break.',
    },
    {
      id: 'fsdt-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes, "The motorway sign says 70 mph, so cars on the motorway are doing 70 m per second." Which sentence best corrects this?',
      tier: 'challenge',
      options: [
        '70 mph is correct, because mph and metres per second mean the same thing.',
        '70 mph is correct, and it is about 70 km/h once you change the words.',
        '70 mph is about 31 m/s, because 1 mph is roughly 0.45 m/s, not 1 m/s.',
        '70 mph is about 252 m/s, because you multiply by 3.6.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fsdt-mis-mph-equals-ms',
      hint: 'A car at 60 mph is about 27 m/s, not 60. So 70 mph cannot be 70 m/s either.',
    },
    {
      id: 'fsdt-q17',
      type: 'spot-misconception',
      stem: 'Riya says, "A 30 mph sign in our village means cars go 30 metres every second past my house."',
      tier: 'confident',
      statements: [
        {
          text: 'Riya is right. 30 mph means 30 metres per second, because per hour and per second are the same idea.',
          isMisconception: true,
        },
        {
          text: 'Riya is not right. 30 mph is about 13 m/s. The units mph and m/s are different, so you cannot copy the number across.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fsdt-mis-mph-equals-ms',
    },
    {
      id: 'fsdt-q18',
      type: 'spot-misconception',
      stem: 'Sam writes, "On a long journey, the average speed and the instantaneous speed are always the same. So when the speedometer reads 50 mph at one moment, the whole journey must average 50 mph as well."',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. Whatever the speedometer reads at one moment must be the average speed for the journey.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. The speedometer shows the instantaneous speed at that moment. Average speed is total distance over total time, including any slow sections or stops.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fsdt-mis-average-vs-instant',
    },
    {
      id: 'fsdt-q19',
      type: 'drag-order',
      stem: 'You are given a worded speed problem (with messy units). Put the steps in the order a good problem solver would use, from first to last.',
      tier: 'confident',
      items: [
        'Pick the right rearrangement of the speed formula for the unknown letter.',
        'Write down what you know and what is asked, with units next to every number.',
        'Substitute the numbers and evaluate, then state the answer with the correct units.',
        'Convert any units so distance and time match (metres with seconds, or km with hours).',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Reading and unit checks come before any arithmetic. Picking the formula comes before substituting.',
    },
    {
      id: 'fsdt-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out how long it takes a runner to cover 2.4 km on the school cross country route at a steady 4 m/s.',
      tier: 'confident',
      steps: [
        'Distance d = 2.4 km, speed s = 4 m/s, time t = ?',
        'Speed is in m/s but distance is in km. So convert the distance: 2.4 km = 2400 m.',
        null,
        'Substitute: t = 2400 / 4.',
        'Evaluate: t = 600 s, or 10 minutes.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Time is the unknown, so use t = d / s. Distance and speed are now in matching units (metres and m/s), so the answer will come out in seconds.',
      xpValue: 15,
    },
    {
      id: 'fsdt-q21',
      type: 'multiple-choice',
      stem: 'A coach driver claims, "If I drive at double the speed, I will get there in double the time." Which sentence best explains why this claim is wrong?',
      tier: 'core',
      options: [
        'Doubling the speed leaves the time the same, because distance has not changed.',
        'Doubling the speed halves the time for the same distance, because t = d / s and the bottom of the fraction has doubled.',
        'Doubling the speed doubles the time, because speed and time go up together.',
        'You cannot tell what happens to the time without knowing the distance in km.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fsdt-mis-double-speed-double-time',
      hint: 'Write t = d / s. With d fixed, what does doubling s do to the bottom of the fraction?',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates write s = t / d or t = s / d when rearranging speed = distance / time
    {
      id: 'fsdt-mis-invert-formula',
      description:
        'Believing the speed formula can be flipped to time over distance, so writing speed = time / distance or time = speed / distance when rearranging.',
      triggerAnswer: 'invert-formula',
      correction:
        'Speed is the distance covered each second, so speed = distance / time. Cover the letter you want in the triangle: covering t leaves d / s, so time = distance / speed.',
      reExplanation:
        'Take a walk of 6 m in 2 s. Speed is "metres per second", so share the 6 m between the 2 s: 6 / 2 = 3 m/s. Flip the formula and you get 2 / 6 = 0.33, which has the wrong units. The triangle has d on top and s next to t below: cover t and you get t = d / s.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates wrote 60 m/s for a 60 mph car or quoted km/h figures directly as m/s
    {
      id: 'fsdt-mis-mph-equals-ms',
      description:
        'Treating the numbers in mph, km/h and m/s as interchangeable, so saying 60 mph means 60 m/s, or 50 km/h means 50 m/s.',
      triggerAnswer: 'mph-equals-ms',
      correction:
        'The numbers change when the unit changes. 1 mph is about 0.45 m/s, and 1 km/h is 1 / 3.6 m/s. To go from km/h to m/s, divide by 3.6.',
      reExplanation:
        'Picture a 30 mph residential road in your village. A car at 30 mph covers about 48 km in an hour, which is 48 / 3.6 m/s, or about 13 m/s. So 30 mph is roughly 13 m/s, not 30 m/s. Always change units before doing the maths in a physics question, and pick m/s for school problems.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates mixed km with seconds (or m with hours) without converting in a multi-step speed problem
    {
      id: 'fsdt-mis-mix-units',
      description:
        'Mixing units without converting, so plugging kilometres into a formula alongside seconds, or metres alongside hours, and reading off the wrong-sized answer.',
      triggerAnswer: 'mix-units',
      correction:
        'Units must match across the formula. Use metres with seconds (answer in m/s), or kilometres with hours (answer in km/h). If the question mixes them, convert one to fit the other before substituting.',
      reExplanation:
        'A jog of 1.2 km in 600 s does not give a sensible speed if you plug 1.2 and 600 straight in: 1.2 / 600 = 0.002, which is not the runner\'s speed in m/s. Convert 1.2 km to 1200 m first; then 1200 / 600 = 2 m/s, which is a fair jogging pace. The numbers were both fine; the units did not match.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates used journey time including a service station stop when asked for "average moving speed"
    {
      id: 'fsdt-mis-include-stop-time',
      description:
        'Including rest stops or break times when working out an average moving speed, so dividing the same distance by a larger time and underestimating the speed.',
      triggerAnswer: 'include-stop-time',
      correction:
        'Read what the question asks. Average moving speed uses only the time when the object was moving. Whole-journey average speed uses the total clock time, stops and all.',
      reExplanation:
        'Imagine a Snowdon walk of 7.5 km, 3 hours of walking plus 30 minutes resting. The average moving speed is 7.5 / 3 = 2.5 km/h, the steady pace on the path. The average whole-journey speed is 7.5 / 3.5, which is about 2.1 km/h, lower because the clock kept ticking during the rest. The right answer depends on which figure the question wants.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates wrote that a car driving on a motorway "must have been going at exactly the average speed the whole time"
    {
      id: 'fsdt-mis-average-vs-instant',
      description:
        'Confusing average speed with instantaneous speed, so assuming a journey at "average 30 mph" must have been going 30 mph at every moment, with no slowing or stopping.',
      triggerAnswer: 'average-vs-instant',
      correction:
        'Average speed is total distance over total time across the whole journey. Instantaneous speed is what the speedometer reads at one moment, which can be higher or lower than the average.',
      reExplanation:
        'A car on the M25 might cover 80 km in 1 hour, an average of 80 km/h. During that hour it could touch 110 km/h on a clear stretch and crawl at 20 km/h in a queue. Both are instantaneous speeds. The average just tells you the total distance shared out evenly over the total time, not what the car was doing at any one moment.',
    },
    // Source: Bond 11+ Maths Assessment Papers, multi-step rates problems, on candidates writing that doubling speed doubles time for the same distance instead of halving it
    {
      id: 'fsdt-mis-double-speed-double-time',
      description:
        'Believing that for a fixed distance, doubling the speed doubles the time taken, missing that speed and time are inversely related when distance is fixed.',
      triggerAnswer: 'double-speed-double-time',
      correction:
        'For a fixed distance, t = d / s. Doubling s doubles the bottom of the fraction, which halves t. Doubling the speed halves the time, it does not double it.',
      reExplanation:
        'A 600 m school field lap at 3 m/s takes 600 / 3 = 200 s. At double the speed, 6 m/s, the same lap takes 600 / 6 = 100 s, half the time. Whenever distance is fixed, speed and time move opposite ways: faster means less time, slower means more.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesSpeedDistanceTimeZoneNodes = [forcesSpeedDistanceTime]
