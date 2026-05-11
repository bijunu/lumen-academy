import type { SkillNode } from '@/types/content'

export const ratioSpeedDensity: SkillNode = {
  id: 'maths-ratio-speed-density',
  title: 'Compound Measures: Speed, Density, Unit Pricing',
  description:
    'Use the unitary method on compound units. Speed = distance / time (km/h, m/s). Density = mass / volume (g/cm cubed, kg/m cubed). Unit price = cost / quantity (pence/gram, pounds/litre). Rearrange each formula to find the missing quantity, keep units consistent (km vs m, kg vs g, hours vs minutes), and apply to UK road, rail and supermarket contexts.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'challenge',
  prerequisites: ['maths-ratio-scaling-recipes'],
  curriculum: {
    ks3Objective:
      'Use compound units such as speed, unit pricing and density to solve problems.',
    awardingBodies: {
      aqa: 'R11 Use compound units (such as speed, density, pressure, rates of pay) in numerical and algebraic contexts (GCSE Mathematics 8300)',
      edexcel: 'R11 Use compound units (such as speed, rates of pay, unit pricing, density and pressure) (GCSE Mathematics 1MA1)',
      ocr: '6.03b Use compound units: speed, density, unit pricing (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rsd-scene-formula-triangles',
      title: 'The Three Compound-Measure Triangles',
      type: 'labelled-diagram',
      instructions:
        'Click each triangle to read the rule. Each compound measure links three quantities through one formula. Cover the quantity you want to find with a finger and the triangle shows the operation. Speed-Distance-Time: D on top, S and T on the bottom. Cover D, the rule is S x T. Cover S, the rule is D / T. Cover T, the rule is D / S. Density-Mass-Volume: M on top, density and V on the bottom. Cost-Quantity-Price: total cost on top, unit price and quantity on the bottom. Same shape, three contexts.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'rsd-h-speed', x: 18, y: 25, label: 'Speed triangle: D / (S x T)', description: 'Distance on top, speed and time on the bottom. Cover what you want; the rest tells you the operation.' },
          { id: 'rsd-h-density', x: 50, y: 25, label: 'Density triangle: M / (density x V)', description: 'Mass on top, density and volume on the bottom. Density = mass / volume.' },
          { id: 'rsd-h-cost', x: 82, y: 25, label: 'Cost triangle: cost / (unit price x quantity)', description: 'Total cost on top, unit price and quantity on the bottom. Cost = unit price x quantity.' },
          { id: 'rsd-h-cover-rule', x: 50, y: 60, label: 'Cover-up rule', description: 'Cover the quantity you want to find. Side by side at the bottom means multiply. Top over bottom means divide.' },
          { id: 'rsd-h-units', x: 25, y: 85, label: 'Units must match', description: 'km with hours gives km/h. m with seconds gives m/s. g with cm cubed gives g/cm cubed.' },
          { id: 'rsd-h-rearrange', x: 75, y: 85, label: 'Rearrange to find any quantity', description: 'D = S x T. T = D / S. S = D / T. Same triangle, three formulas.' },
        ],
      },
    },
    {
      id: 'rsd-scene-unit-conversion',
      title: 'Keeping Units Consistent: km, m, kg, g, hours, minutes',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see the conversion. 1 km is the same length as 1000 m, so a 2 km bar splits into 2000 little m blocks. 1 kg is the same mass as 1000 g, so a 0.5 kg bar holds 500 g blocks. 1 hour is 60 minutes, so a 1.5 hour bar holds 90 minute blocks. Mixing units mid-calculation gives nonsense answers: a speed worked out as km divided by minutes is not km/h and not m/s. Convert first, then divide.',
      data: {
        wholeLabel: 'Unit conversions for compound measures',
        baseUnit: 'metric',
        examples: [
          { label: '1 km in metres', value: 1000, unit: 'm' },
          { label: '1 kg in grams', value: 1000, unit: 'g' },
          { label: '1 hour in minutes', value: 60, unit: 'minutes' },
          { label: '1 litre in millilitres', value: 1000, unit: 'ml' },
          { label: '1.5 hours in minutes', value: 90, unit: 'minutes' },
          { label: '90 minutes in hours', value: 1.5, unit: 'hours' },
        ],
        parts: [
          { id: 'rsd-bar-1', share: 'km', value: 1000 },
          { id: 'rsd-bar-2', share: 'kg', value: 1000 },
          { id: 'rsd-bar-3', share: 'hour', value: 60 },
          { id: 'rsd-bar-4', share: 'litre', value: 1000 },
        ],
        rule: 'Convert first, calculate second. Mixing km with minutes or kg with cm cubed wrecks the answer.',
      },
    },
    {
      id: 'rsd-scene-three-contexts',
      title: 'Same Shape, Three Contexts: Speed, Density, Unit Pricing',
      type: 'simulation',
      instructions:
        'See how three different contexts share one formula shape. Speed: a coach covers 168 km on the M25 in 2 hours, so the average speed is 168 / 2 = 84 km/h. Density: a metal cube has mass 192 g and volume 24 cm cubed, so its density is 192 / 24 = 8 g/cm cubed. Unit pricing: a 750 ml bottle of olive oil costs £4.50, so the unit price is 4.50 / 0.75 = £6 per litre. In each case the "rate" is the top quantity divided by the bottom quantity. Knowing two of the three lets a learner find the third.',
      data: {
        speed: { distance: 168, time: 2, rate: 84, unit: 'km/h', context: 'M25 coach journey' },
        density: { mass: 192, volume: 24, rate: 8, unit: 'g/cm cubed', context: 'metal cube identification' },
        unitPricing: { cost: 4.50, quantity: 0.75, rate: 6.00, unit: 'pounds per litre', context: 'supermarket olive oil' },
        commonStructure: 'rate = top / bottom; top = rate x bottom; bottom = top / rate',
        rule: 'Every compound measure is a ratio between two base quantities. Find one rate, then the triangle gives all three.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rsd-worked-1',
      title: 'Speed on a UK road journey: 168 km in 2 hours 30 minutes',
      steps: [
        {
          explanation:
            'Identify the three quantities and the one being asked for. Distance is 168 km, time is 2 hours 30 minutes, speed is unknown.',
          maths: 'D = 168 km, T = 2 hours 30 minutes, S = ?',
        },
        {
          explanation:
            'Convert the time to a single unit so the speed answer comes out cleanly. 30 minutes is half an hour, so 2 hours 30 minutes = 2.5 hours.',
          maths: 'T = 2.5 hours',
        },
        {
          explanation:
            'Apply the speed formula. Cover S in the triangle, leaving D / T.',
          maths: 'S = D / T',
        },
        {
          explanation:
            'Substitute the values and divide.',
          maths: 'S = 168 / 2.5 = 67.2 km/h',
        },
        {
          explanation:
            'Check by reversing: at 67.2 km/h for 2.5 hours, distance = 67.2 x 2.5 = 168 km. The reverse step confirms the answer.',
          maths: 'check: 67.2 x 2.5 = 168 km',
        },
        {
          explanation: 'So the average speed for the journey is 67.2 km/h.',
          maths: 'answer: 67.2 km/h',
        },
      ],
    },
    {
      id: 'rsd-worked-2',
      title: 'Density of a metal cube: mass 192 g, volume 24 cm cubed (missing step revealed)',
      steps: [
        {
          explanation:
            'Identify the three quantities. Mass is 192 g, volume is 24 cm cubed, density is unknown.',
          maths: 'M = 192 g, V = 24 cm cubed, density = ?',
        },
        {
          explanation:
            'Confirm the units are consistent. Mass in grams and volume in cm cubed give a density in g/cm cubed, the standard lab unit.',
          maths: 'units: g and cm cubed, so density in g/cm cubed',
        },
        {
          explanation:
            'Apply the density formula. Cover the density slot in the triangle, leaving M / V.',
          maths: 'density = M / V',
        },
        {
          explanation:
            'Substitute and divide to find the density.',
        },
        {
          explanation:
            'A density of 8 g/cm cubed matches the published density of cast iron, so the cube is most likely iron.',
          maths: 'density of iron is about 7.9 g/cm cubed, close to 8',
        },
        {
          explanation: 'So the cube has a density of 8 g/cm cubed and is consistent with being iron.',
          maths: 'answer: density = 8 g/cm cubed',
        },
      ],
    },
  ],
  questions: [
    // Core 1: basic speed direct (MCQ correctIndex = 2)
    {
      id: 'rsd-q1',
      type: 'multiple-choice',
      stem: 'A car travels at a steady 70 km/h on the M25 for 2 hours. How far does the car travel?',
      tier: 'core',
      options: ['72 km', '35 km', '140 km', '170 km'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'distance = speed x time = 70 x 2 = 140 km.',
    },
    // Core 2: density basic (MCQ correctIndex = 3)
    {
      id: 'rsd-q2',
      type: 'multiple-choice',
      stem: 'A block has a mass of 60 g and a volume of 20 cm cubed. What is its density?',
      tier: 'core',
      options: ['40 g/cm cubed', '80 g/cm cubed', '1200 g/cm cubed', '3 g/cm cubed'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'density = mass / volume = 60 / 20 = 3 g/cm cubed.',
    },
    // Core 3: unit pricing per kg (MCQ correctIndex = 0)
    {
      id: 'rsd-q3',
      type: 'multiple-choice',
      stem: 'A 2 kg bag of pasta costs £3.20 at a Tunbridge Wells supermarket. What is the price per kilogram?',
      tier: 'core',
      options: ['£1.60 per kg', '£1.10 per kg', '£6.40 per kg', '£3.20 per kg'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'unit price = cost / quantity = 3.20 / 2 = £1.60 per kg.',
    },
    // Core 4: rearranged speed to find time (numeric)
    {
      id: 'rsd-q4',
      type: 'numeric-entry',
      stem: 'A train travels 240 km at a steady 80 km/h. How many hours does the journey take?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'hours',
      xpValue: 10,
      hint: 'time = distance / speed = 240 / 80 = 3 hours.',
    },
    // Core 5: spot-misconception on swapping numerator and denominator
    {
      id: 'rsd-q5',
      type: 'spot-misconception',
      stem: 'A Lake District driver covers 120 km in 2 hours. Asked to find the speed, Sam writes "speed = time / distance = 2 / 120, so 0.0167 km/h".',
      tier: 'core',
      statements: [
        {
          text: 'Sam is right. Speed is found by dividing time by distance, giving 2 / 120 = 0.0167 km/h.',
          isMisconception: true,
        },
        {
          text: 'In fact speed = distance / time, not time / distance. Cover S in the triangle and what is left is D over T. The correct speed is 120 / 2 = 60 km/h, a sensible road speed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rsd-mis-swap-num-denom',
    },
    // Confident 1: convert minutes to hours then find speed (numeric)
    {
      id: 'rsd-q6',
      type: 'numeric-entry',
      stem: 'A cyclist rides 18 km in 45 minutes at a steady pace. What is the cyclist average speed in km/h?',
      tier: 'confident',
      correctAnswer: 24,
      unit: 'km/h',
      xpValue: 15,
      misconceptionId: 'rsd-mis-time-units',
      hint: '45 minutes = 0.75 hours. Speed = 18 / 0.75 = 24 km/h.',
    },
    // Confident 2: density rearranged to find mass (MCQ correctIndex = 1)
    {
      id: 'rsd-q7',
      type: 'multiple-choice',
      stem: 'A block of aluminium has a density of 2.7 g/cm cubed and a volume of 50 cm cubed. What is its mass?',
      tier: 'confident',
      options: ['18.5 g', '135 g', '52.7 g', '47.3 g'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'mass = density x volume = 2.7 x 50 = 135 g.',
    },
    // Confident 3: best-buy per litre (MCQ correctIndex = 2)
    {
      id: 'rsd-q8',
      type: 'multiple-choice',
      stem: 'A Manchester supermarket sells two bottles of olive oil. Bottle A: 500 ml for £3.00. Bottle B: 750 ml for £4.20. Which has the lower price per litre?',
      tier: 'confident',
      options: ['Bottle A, at £4.50 per litre', 'They are equal at £6 per litre', 'Bottle B, at £5.60 per litre', 'Bottle A, at £6 per litre'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'rsd-mis-unit-price-direction',
      hint: 'A: 3.00 / 0.5 L = £6 per litre. B: 4.20 / 0.75 L = £5.60 per litre. B is cheaper per litre.',
    },
    // Confident 4: rearranged density to find volume (numeric)
    {
      id: 'rsd-q9',
      type: 'numeric-entry',
      stem: 'A copper sample has a mass of 89.6 g and a density of 8.96 g/cm cubed. What is its volume, in cm cubed?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'cm cubed',
      xpValue: 15,
      hint: 'volume = mass / density = 89.6 / 8.96 = 10 cm cubed.',
    },
    // Confident 5: km/h to m/s conversion (MCQ correctIndex = 3)
    {
      id: 'rsd-q10',
      type: 'multiple-choice',
      stem: 'A motorway speed limit of 72 km/h needs to be expressed in metres per second. What is the equivalent speed?',
      tier: 'confident',
      options: ['72 m/s', '7.2 m/s', '259.2 m/s', '20 m/s'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'rsd-mis-kmh-to-ms-simple-mult',
      hint: 'To go from km/h to m/s, divide by 3.6. 72 / 3.6 = 20 m/s. (1 km = 1000 m, 1 hour = 3600 s, so divide by 3600/1000 = 3.6.)',
    },
    // Confident 6: drag-order four cars by speed
    {
      id: 'rsd-q11',
      type: 'drag-order',
      stem: 'Drag these journeys into order from slowest average speed to fastest average speed.',
      tier: 'confident',
      items: [
        'A Sevenoaks delivery van: 60 km in 1 hour 30 minutes',
        'A Hastings hatchback: 80 km in 1 hour',
        'A Lake District tourist coach: 84 km in 2 hours',
        'A Dover sports car: 150 km in 1 hour 15 minutes',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 20,
      hint: 'Compute km/h: 60 / 1.5 = 40. 80 / 1 = 80. 84 / 2 = 42. 150 / 1.25 = 120. Slowest to fastest: 40, 42, 80, 120.',
    },
    // Confident 7: missing-step in a unit-pricing best-buy
    {
      id: 'rsd-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Dover newsagent sells juice in two sizes: a 1 L carton for £1.80 and a 1.5 L carton for £2.55. Find which is cheaper per litre.',
      tier: 'confident',
      steps: [
        'Choose a common unit: pounds per litre.',
        '1 L carton: 1.80 / 1 = £1.80 per litre.',
        null,
        'The 1.5 L carton is cheaper per litre at £1.70 compared with £1.80 for the 1 L carton.',
      ],
      missingStepIndex: 2,
      correctStep: '1.5 L carton: 2.55 / 1.5 = £1.70 per litre.',
      xpValue: 20,
    },
    // Core 6 (re-tiered from Confident): time on a UK rail journey (numeric, single-step S=D/T no unit conversion)
    {
      id: 'rsd-q13',
      type: 'numeric-entry',
      stem: 'A Manchester to Sevenoaks train covers 320 km at an average speed of 80 km/h. How many hours does the journey take?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'hours',
      xpValue: 10,
      hint: 'time = distance / speed = 320 / 80 = 4 hours.',
    },
    // Confident 9: density unit conversion g/cm cubed to kg/m cubed (MCQ correctIndex = 0)
    {
      id: 'rsd-q14',
      type: 'multiple-choice',
      stem: 'Water has a density of 1 g/cm cubed. What is the same density expressed in kg/m cubed?',
      tier: 'confident',
      options: ['1000 kg/m cubed', '1 kg/m cubed', '0.001 kg/m cubed', '100 kg/m cubed'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rsd-mis-mass-only-density',
      hint: '1 g/cm cubed = 1000 kg/m cubed. (1 kg = 1000 g and 1 m cubed = 1 000 000 cm cubed, so multiply by 1 000 000 / 1000 = 1000.)',
    },
    // Challenge 1: Bond-style arrival time (numeric)
    {
      id: 'rsd-q15',
      type: 'numeric-entry',
      stem: 'A train travels from Manchester to Sevenoaks, a distance of 320 km, at an average speed of 80 km/h. The journey starts at 09:15. The arrival time in 24-hour HH.MM form converts to a decimal of the day with hours in the integer part and minutes / 100 in the decimal part (so 13:15 becomes 13.15). What is the arrival time as that decimal?',
      tier: 'challenge',
      correctAnswer: 13.15,
      tolerance: 0.01,
      xpValue: 25,
      hint: 'Journey time = 320 / 80 = 4 hours. 09:15 + 4 hours = 13:15. As a HH.MM decimal: 13.15.',
    },
    // Challenge 2: Bond-style density-to-identity word problem (free-text)
    {
      id: 'rsd-q16',
      type: 'free-text',
      stem: 'A metal block has volume 24 cm cubed and mass 192 g. A pupil claims the block is made of iron, which has a density of 7.9 g/cm cubed. In one or two sentences, work out the block density and state whether the pupil claim is supported.',
      tier: 'challenge',
      sampleAnswer:
        'Density = mass / volume = 192 / 24 = 8 g/cm cubed. This is very close to 7.9 g/cm cubed for iron, so the pupil claim is supported.',
      keywords: ['192', '24', '8', 'iron', 'supported'],
      xpValue: 25,
      hint: 'Compute density = mass / volume, then compare with 7.9 g/cm cubed.',
    },
    // Challenge 3: Bond-style two-leg journey (numeric)
    {
      id: 'rsd-q17',
      type: 'numeric-entry',
      stem: 'A driver leaves London for Hastings on the A21, a distance of 100 km. The first 60 km is driven at an average speed of 60 km/h and the remaining 40 km at an average speed of 80 km/h. What is the driver average speed for the whole journey, in km/h? Round to the nearest km/h.',
      tier: 'challenge',
      correctAnswer: 67,
      tolerance: 1,
      unit: 'km/h',
      xpValue: 25,
      misconceptionId: 'rsd-mis-rate-on-non-uniform',
      hint: 'Time 1 = 60 / 60 = 1 h. Time 2 = 40 / 80 = 0.5 h. Total time = 1.5 h. Average speed = 100 / 1.5 = 66.67, so 67 km/h. Not the simple mean of 60 and 80.',
    },
    // Core 7 (re-tiered from Challenge): density rearranged to find mass, single multiplication in context (MCQ correctIndex = 1)
    {
      id: 'rsd-q18',
      type: 'multiple-choice',
      stem: 'An ice cube of volume 60 cm cubed floats on water because it is less dense than water (1 g/cm cubed). If the ice has a density of 0.92 g/cm cubed, what is the mass of the ice cube?',
      tier: 'core',
      options: ['65.2 g', '55.2 g', '60.92 g', '0.0153 g'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'mass = density x volume = 0.92 x 60 = 55.2 g.',
    },
    // Challenge 5: unit pricing with mixed pack sizes (numeric)
    {
      id: 'rsd-q19',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells coffee shop buys milk two ways. Option A is a 2 litre carton for £2.40. Option B is three 500 ml cartons for £1.95. Working in pence per litre for each option, how many pence is saved per litre by choosing the cheaper option?',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'pence per litre',
      xpValue: 25,
      misconceptionId: 'rsd-mis-unit-price-direction',
      hint: 'A: 240p / 2 L = 120p per litre. B: 195p / 1.5 L = 130p per litre. Saving by choosing A = 130 - 120 = 10p per litre.',
    },
    // Challenge 6: spot-misconception on non-uniform speed
    {
      id: 'rsd-q20',
      type: 'spot-misconception',
      stem: 'A coach drives the first 50 km at 50 km/h and the next 50 km at 100 km/h. Priya says "the average speed for the whole 100 km is 75 km/h, the mean of 50 and 100".',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. The average speed is the mean of the two leg speeds, so 75 km/h.',
          isMisconception: true,
        },
        {
          text: 'In fact average speed = total distance / total time, not the mean of the leg speeds. Time 1 = 50 / 50 = 1 h. Time 2 = 50 / 100 = 0.5 h. Total time = 1.5 h. Average speed = 100 / 1.5 = 66.7 km/h, not 75 km/h. The slow leg takes more time, so it pulls the average down.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'rsd-mis-non-uniform-average',
    },
    // Challenge 7: Bond-style multi-step density and unit conversion (MCQ correctIndex = 3)
    {
      id: 'rsd-q21',
      type: 'multiple-choice',
      stem: 'A factory makes brass bars. Each bar has a volume of 250 cm cubed and brass has a density of 8.4 g/cm cubed. The factory ships 200 bars in one crate. What is the total mass of the bars in the crate, in kilograms?',
      tier: 'challenge',
      options: ['42 kg', '210 kg', '4200 kg', '420 kg'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'rsd-mis-forget-back-convert',
      hint: 'Mass per bar = density x volume = 8.4 x 250 = 2100 g = 2.1 kg. Total for 200 bars = 200 x 2.1 = 420 kg.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a speed-distance-time question where pupils inverted the formula and divided time by distance instead of distance by time.
    {
      id: 'rsd-mis-swap-num-denom',
      description:
        'I swap the numerator and denominator in a compound-measure formula, so I write speed = time / distance, or density = volume / mass, or unit price = quantity / cost.',
      triggerAnswer: 'swap-num-denom',
      correction:
        'Actually the rate is always the TOP quantity divided by the bottom: speed = distance / time, density = mass / volume, unit price = cost / quantity.',
      reExplanation:
        'Use the triangle: top quantity sits above the bottom two, separated by a divide line. Speed-Distance-Time has D on top, S and T on the bottom, so cover S and what remains is D / T. For 120 km in 2 hours, speed = 120 / 2 = 60 km/h. Time / distance = 2 / 120 = 0.0167 has no sensible unit for road speed and is a clear signal the formula has been inverted.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a speed question where pupils mixed kilometres with minutes without converting the time to hours.
    {
      id: 'rsd-mis-time-units',
      description:
        'I leave the time in minutes when finding a speed in km/h, so I divide kilometres by minutes and report the answer as if it were km/h.',
      triggerAnswer: 'time-units',
      correction:
        'In fact a speed in km/h needs the time in hours. Convert the minutes to hours before dividing.',
      reExplanation:
        'For 18 km in 45 minutes, 45 minutes is 45 / 60 = 0.75 hours. Speed = 18 / 0.75 = 24 km/h. Dividing 18 / 45 = 0.4 has units of km/minute, not km/h, and the number is sixty times too small. The same rule holds for kg/g (convert grams to kg first if the rate is in kg) and litres/ml (convert ml to litres if the rate is per litre).',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, November 2022, Paper 02 (Foundation, Calculator), commentary on a non-uniform motion question where pupils averaged the leg speeds instead of using total distance divided by total time.
    {
      id: 'rsd-mis-non-uniform-average',
      description:
        'I average the leg speeds to find the overall average speed for a journey with two different legs, instead of using total distance over total time.',
      triggerAnswer: 'non-uniform-average',
      correction:
        'Actually average speed = total distance / total time. Taking the mean of two leg speeds only works when the two legs take the same amount of time.',
      reExplanation:
        'For 50 km at 50 km/h then 50 km at 100 km/h, the leg times are 1 h and 0.5 h. Total distance is 100 km, total time is 1.5 h, average speed = 100 / 1.5 = 66.7 km/h. The naive mean (50 + 100) / 2 = 75 km/h ignores that the slow leg takes more time and therefore weights more heavily in the overall average. Use the totals, not the mean of the rates.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 3F (Foundation, Calculator), commentary on a density question where pupils kept mass and reported it as density, ignoring the volume entirely.
    {
      id: 'rsd-mis-mass-only-density',
      description:
        'I read density as if it were just mass, so I report 60 g as the density when given a 60 g block of volume 20 cm cubed.',
      triggerAnswer: 'mass-only-density',
      correction:
        'In fact density is mass divided by volume, not mass alone. Two objects of the same mass can have very different densities if their volumes differ.',
      reExplanation:
        'For a 60 g block of volume 20 cm cubed, density = 60 / 20 = 3 g/cm cubed. A 60 g block of volume 100 cm cubed has density 0.6 g/cm cubed, less than water and so it would float. Density is a property of the material, not a quantity of the object. The units g/cm cubed (or kg/m cubed) signal that two base quantities are involved, not one.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a speed unit-conversion question where pupils multiplied a km/h value by 1000 (treating it like a km-to-m conversion) instead of dividing by 3.6.
    {
      id: 'rsd-mis-kmh-to-ms-simple-mult',
      description:
        'I convert km/h to m/s by multiplying by 1000, treating it like a one-unit conversion instead of a compound-unit conversion.',
      triggerAnswer: 'kmh-to-ms-simple-mult',
      correction:
        'Actually km/h to m/s involves BOTH km to m (multiply by 1000) AND hours to seconds (multiply by 3600 in the denominator). The net factor is 1000 / 3600 = 1 / 3.6.',
      reExplanation:
        'For 72 km/h, divide by 3.6: 72 / 3.6 = 20 m/s. As a check, in 1 hour the speed covers 72 km = 72 000 m, and 1 hour is 3600 s, so per second the distance is 72 000 / 3600 = 20 m. Multiplying by 1000 gives 72 000, the distance in metres travelled per hour, not per second. Two units are changing, so two conversion factors apply.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Ratio, Proportion and Rates of Change, "Compound Measures" page, "Common mistake" callout warning that unit pricing means cost PER unit, not units per cost.
    {
      id: 'rsd-mis-unit-price-direction',
      description:
        'I read "unit price" as units per pound (or quantity per cost) instead of cost per unit, so I divide quantity by cost rather than cost by quantity.',
      triggerAnswer: 'unit-price-direction',
      correction:
        'In fact unit price = cost / quantity, giving pounds per kg or pence per litre. Cheapest is the smallest cost per unit, not the largest unit per cost.',
      reExplanation:
        'For a 2 kg bag at £3.20, unit price = 3.20 / 2 = £1.60 per kg. Reversing gives 2 / 3.20 = 0.625 kg per pound, a different and harder-to-compare measure. Best-buy compares like-with-like, so always stick to pounds per kg (or pence per 100 g, or pounds per litre) when ranking pack values. The unit price has the SAME shape as speed and density: top quantity (cost) over bottom quantity (size of pack).',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Ratio and Percentages" by Hart, on pupils applying a rate computed under steady conditions to a journey or process that is not steady, missing that the rate only holds on average.
    {
      id: 'rsd-mis-rate-on-non-uniform',
      description:
        'I apply a speed (or density, or unit price) computed at one moment as if it held for the whole journey or sample, even when the underlying motion or material is not uniform.',
      triggerAnswer: 'rate-on-non-uniform',
      correction:
        'Actually a single rate applies cleanly only when the underlying motion or composition is steady. For non-uniform cases, use average rate = total quantity / total base quantity.',
      reExplanation:
        'A car driving 30 km in the first hour and 60 km in the second hour does NOT have a speed of 30 km/h, nor 60 km/h, but an average of 90 / 2 = 45 km/h. A 100 g aluminium plus 100 g iron mixed sample does not have density 5.3 g/cm cubed (the mean), but an average that depends on total volume. Steady rate, simple formula. Non-uniform rate, use totals only.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils, having converted units correctly at the start, forget the conversion at the end and report the answer in the wrong unit.
    {
      id: 'rsd-mis-forget-back-convert',
      description:
        'I convert units at the start of the problem but forget to convert back at the end, so I report a mass in grams when the question asked for kilograms (or a time in hours when the question asked for minutes).',
      triggerAnswer: 'forget-back-convert',
      correction:
        'In fact every answer must be checked against the unit the question asked for. Convert at the end if needed.',
      reExplanation:
        'For 200 brass bars, each 250 cm cubed at density 8.4 g/cm cubed, mass per bar = 2100 g and total = 420 000 g. The question asked for kilograms, so divide by 1000: 420 000 / 1000 = 420 kg. Reporting "420 000 g" or "420 000 kg" misses the final conversion. Re-read the question after computing, and check the answer units match the request.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioSpeedDensityZoneNodes = [ratioSpeedDensity]
