import type { SkillNode } from '@/types/content'

export const skeletonJoints: SkillNode = {
  id: 'biology-body-systems-skeleton',
  title: 'Skeleton, Joints, and Muscles',
  description:
    'Meet the human skeleton, the joints that let it bend, and the muscle pairs that pull it about. Bones are LIVING tissue: they support the body, protect organs, make red and white blood cells in the marrow, and store calcium for the rest of the body to draw on. Joints are where two bones meet. Hinge joints (elbow, knee) bend one way only; ball-and-socket joints (shoulder, hip) swing in many directions; fixed joints (the sutures of the cranium) lock the skull plates together. Muscles only ever PULL: they get shorter when they contract, never push. Because of that, bones at most joints are pulled by an ANTAGONISTIC PAIR, two muscles set against each other. At the elbow, the biceps contracts to bend the arm up; the triceps then contracts to straighten it back down. While one pulls, the other relaxes. A British teenager has 206 bones; a newborn has about 270 because many small bones fuse together as the body grows.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'confident',
  prerequisites: ['biology-body-systems-circulatory'],
  curriculum: {
    ks3Objective:
      'The structure and functions of the human skeleton, to include support, protection, movement and making blood cells; the function of muscles and examples of antagonistic muscles; the role of muscles, joints and the heart in transport; biomechanics at an introductory level.',
    awardingBodies: {
      aqa: '4.2.2.2 The skeleton, joints and muscles; antagonistic muscle pairs (GCSE Biology 8461)',
      edexcel: 'CB2e Skeletal and muscular systems (GCSE Biology 1BI0, Topic 2)',
      ocr: 'B2.2.1 The skeleton and muscles (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bbs-sk-bone-functions',
      title: 'The Human Skeleton: Named Bones and Four Jobs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the skeleton to read the name of the bone and its main job: support, protection, movement, or making blood cells.',
      data: {
        viewBox: '0 0 360 460',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 460"><rect x="0" y="0" width="360" height="460" fill="#F0F9FF"/><text x="180" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">THE HUMAN SKELETON: 206 BONES IN AN ADULT</text><g><ellipse cx="180" cy="60" rx="22" ry="26" fill="#FEF3C7" stroke="#92400E" stroke-width="1.6"/><text x="180" y="64" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">CRANIUM</text></g><g><rect x="172" y="86" width="16" height="22" rx="3" fill="#FEF3C7" stroke="#92400E" stroke-width="1.4"/><text x="180" y="118" text-anchor="middle" font-size="7" fill="#7F1D1D">vertebrae (neck)</text></g><g><path d="M 130 130 Q 180 122 230 130 L 232 220 Q 180 232 128 220 Z" fill="#FEF3C7" stroke="#92400E" stroke-width="1.4"/><line x1="140" y1="150" x2="220" y2="150" stroke="#92400E" stroke-width="0.8"/><line x1="138" y1="170" x2="222" y2="170" stroke="#92400E" stroke-width="0.8"/><line x1="136" y1="190" x2="224" y2="190" stroke="#92400E" stroke-width="0.8"/><line x1="134" y1="210" x2="226" y2="210" stroke="#92400E" stroke-width="0.8"/><text x="180" y="178" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">RIBCAGE</text></g><g><rect x="174" y="220" width="12" height="80" fill="#FEF3C7" stroke="#92400E" stroke-width="1.2"/><text x="180" y="262" text-anchor="middle" font-size="6" fill="#7F1D1D">VERTEBRAE</text></g><g><rect x="100" y="130" width="14" height="80" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.4"/><text x="80" y="172" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">HUMERUS</text></g><g><rect x="246" y="130" width="14" height="80" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.4"/><text x="290" y="172" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">HUMERUS</text></g><g><rect x="92" y="216" width="10" height="62" rx="3" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><rect x="105" y="216" width="10" height="62" rx="3" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="70" y="252" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">RADIUS</text><text x="70" y="264" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">ULNA</text></g><g><rect x="244" y="216" width="10" height="62" rx="3" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><rect x="257" y="216" width="10" height="62" rx="3" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="298" y="252" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">RADIUS</text><text x="298" y="264" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">ULNA</text></g><g><path d="M 134 290 Q 180 280 226 290 L 224 320 Q 180 326 136 320 Z" fill="#FEF3C7" stroke="#92400E" stroke-width="1.4"/><text x="180" y="308" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">PELVIS</text></g><g><rect x="150" y="324" width="14" height="74" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.4"/><text x="124" y="364" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">FEMUR</text></g><g><rect x="196" y="324" width="14" height="74" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.4"/><text x="236" y="364" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">FEMUR</text></g><g><rect x="148" y="404" width="8" height="46" rx="2" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><rect x="158" y="404" width="8" height="46" rx="2" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="122" y="430" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">TIBIA</text><text x="122" y="442" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">FIBULA</text></g><g><rect x="194" y="404" width="8" height="46" rx="2" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><rect x="204" y="404" width="8" height="46" rx="2" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="234" y="430" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">TIBIA</text><text x="234" y="442" text-anchor="middle" font-size="7" font-weight="700" fill="#7F1D1D">FIBULA</text></g><g><rect x="14" y="370" width="80" height="80" rx="4" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="54" y="388" text-anchor="middle" font-size="7" font-weight="700" fill="#1E3A8A">FOUR JOBS</text><text x="54" y="402" text-anchor="middle" font-size="6" fill="#1E3A8A">1. SUPPORT</text><text x="54" y="414" text-anchor="middle" font-size="6" fill="#1E3A8A">2. PROTECTION</text><text x="54" y="426" text-anchor="middle" font-size="6" fill="#1E3A8A">3. MOVEMENT</text><text x="54" y="438" text-anchor="middle" font-size="6" fill="#1E3A8A">4. MAKE BLOOD CELLS</text></g></svg>',
        hotspots: [
          {
            id: 'bbs-sk-bf-cranium',
            x: 50,
            y: 13,
            label: 'Cranium: protection',
            description:
              'The cranium is the dome of fused bone plates that wraps the brain. Its job is PROTECTION. The plates meet at fixed joints called sutures so the skull cannot bend at those seams. Rugby and cricket helmets add a second layer on top.',
          },
          {
            id: 'bbs-sk-bf-ribcage',
            x: 50,
            y: 38,
            label: 'Ribcage: protection',
            description:
              'The ribcage is a curved cage of 12 paired ribs that shields the heart and lungs. Its job is PROTECTION. The ribs hinge at the spine so the cage can lift on a deep breath, which is why a cricket batsman can still inhale fully while wearing a chest guard.',
          },
          {
            id: 'bbs-sk-bf-vertebrae',
            x: 50,
            y: 56,
            label: 'Vertebrae: support and protection',
            description:
              'The 33 vertebrae stack to form the spine. They give the body its SUPPORT (the upright backbone) and also PROTECTION for the spinal cord that runs down the middle. The Stoke Mandeville spinal-injury centre in Buckinghamshire treats people whose cord has been damaged here.',
          },
          {
            id: 'bbs-sk-bf-humerus',
            x: 32,
            y: 37,
            label: 'Humerus: movement',
            description:
              'The humerus is the long upper-arm bone running from shoulder to elbow. Its job is MOVEMENT: it acts as a lever that the biceps and triceps pull on. A cyclist pulling up on the handlebars loads force through the humerus.',
          },
          {
            id: 'bbs-sk-bf-radius-ulna',
            x: 30,
            y: 56,
            label: 'Radius and ulna: movement',
            description:
              'The radius and ulna are the two parallel forearm bones. Their job is MOVEMENT: together they form the lower-arm lever the biceps pulls up. The radius can rotate around the ulna, which is how you turn your palm to face up or down without moving your elbow.',
          },
          {
            id: 'bbs-sk-bf-pelvis',
            x: 50,
            y: 67,
            label: 'Pelvis: support',
            description:
              'The pelvis is a basin of fused bones at the base of the spine. Its job is SUPPORT: it transfers your body weight from the spine into the legs. It also PROTECTS the bladder and lower gut.',
          },
          {
            id: 'bbs-sk-bf-femur',
            x: 45,
            y: 78,
            label: 'Femur: movement and blood cells',
            description:
              'The femur is the long thigh bone, the strongest in the body. It is a lever for MOVEMENT and its hollow centre is packed with red bone marrow, which MAKES BLOOD CELLS. A British Olympic rower drives most of the stroke through the femurs of both legs.',
          },
          {
            id: 'bbs-sk-bf-tibia-fibula',
            x: 56,
            y: 92,
            label: 'Tibia and fibula: support and movement',
            description:
              'The tibia (shin) and fibula are the two lower-leg bones. They carry SUPPORT (standing weight) and are levers for MOVEMENT (walking, running, jumping). A typical netball landing loads three to five times body weight through the tibia.',
          },
          {
            id: 'bbs-sk-bf-jobs',
            x: 15,
            y: 88,
            label: 'Four jobs of the skeleton',
            description:
              'The whole skeleton does FOUR jobs at once: SUPPORT (it holds the body up against gravity), PROTECTION (skull around brain, ribs around heart and lungs), MOVEMENT (bones are levers for muscles to pull on) and MAKING BLOOD CELLS (red marrow inside long bones makes red and white blood cells).',
          },
        ],
      },
    },
    {
      id: 'bbs-sk-elbow-antagonistic',
      title: 'The Elbow: Biceps and Triceps as an Antagonistic Pair',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the elbow joint to see how the biceps and triceps take turns pulling. One contracts while the other relaxes; they never both contract together.',
      data: {
        viewBox: '0 0 360 260',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect x="0" y="0" width="360" height="260" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">ANTAGONISTIC PAIR: BICEPS PULLS THE ARM UP, TRICEPS PULLS IT DOWN</text><g><rect x="30" y="40" width="120" height="200" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.4"/><text x="90" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">ARM BENDING UP</text><rect x="80" y="68" width="20" height="60" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="115" y="100" font-size="6" fill="#7F1D1D">humerus</text><circle cx="90" cy="132" r="6" fill="#FEF3C7" stroke="#92400E" stroke-width="1.2"/><text x="108" y="136" font-size="6" fill="#7F1D1D">joint</text><rect x="70" y="138" width="40" height="14" rx="3" fill="#FCD34D" stroke="#92400E" stroke-width="1.2" transform="rotate(-50 90 145)"/><text x="40" y="158" font-size="6" fill="#7F1D1D">radius/ulna</text><ellipse cx="78" cy="100" rx="10" ry="22" fill="#DC2626" opacity="0.75" stroke="#7F1D1D" stroke-width="1"/><text x="50" y="90" font-size="7" font-weight="700" fill="#7F1D1D">BICEPS</text><text x="50" y="100" font-size="6" fill="#7F1D1D">CONTRACTS</text><text x="50" y="108" font-size="6" fill="#7F1D1D">(short, fat)</text><rect x="98" y="80" width="6" height="50" rx="2" fill="#1D4ED8" opacity="0.4" stroke="#1E3A8A" stroke-width="0.8"/><text x="125" y="88" font-size="7" font-weight="700" fill="#1E3A8A">TRICEPS</text><text x="125" y="98" font-size="6" fill="#1E3A8A">RELAXES</text><text x="125" y="106" font-size="6" fill="#1E3A8A">(long, thin)</text></g><g><rect x="170" y="40" width="160" height="200" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.4"/><text x="250" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">ARM STRAIGHTENING DOWN</text><rect x="240" y="68" width="20" height="60" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="270" y="100" font-size="6" fill="#7F1D1D">humerus</text><circle cx="250" cy="132" r="6" fill="#FEF3C7" stroke="#92400E" stroke-width="1.2"/><text x="270" y="136" font-size="6" fill="#7F1D1D">joint</text><rect x="240" y="138" width="20" height="80" rx="4" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><text x="270" y="180" font-size="6" fill="#7F1D1D">radius/ulna</text><rect x="226" y="80" width="6" height="50" rx="2" fill="#1D4ED8" opacity="0.4" stroke="#1E3A8A" stroke-width="0.8"/><text x="186" y="92" font-size="7" font-weight="700" fill="#1E3A8A">BICEPS</text><text x="186" y="102" font-size="6" fill="#1E3A8A">RELAXES</text><text x="186" y="110" font-size="6" fill="#1E3A8A">(long, thin)</text><ellipse cx="266" cy="100" rx="8" ry="22" fill="#DC2626" opacity="0.75" stroke="#7F1D1D" stroke-width="1"/><text x="282" y="92" font-size="7" font-weight="700" fill="#7F1D1D">TRICEPS</text><text x="282" y="102" font-size="6" fill="#7F1D1D">CONTRACTS</text><text x="282" y="110" font-size="6" fill="#7F1D1D">(short, fat)</text></g><rect x="40" y="218" width="280" height="32" rx="4" fill="#FEF3C7" stroke="#92400E" stroke-width="1.2"/><text x="180" y="234" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">MUSCLES ONLY PULL, NEVER PUSH</text><text x="180" y="244" text-anchor="middle" font-size="6" fill="#92400E">when one contracts the other relaxes; the bones move because the pair takes turns</text></svg>',
        hotspots: [
          {
            id: 'bbs-sk-ea-biceps-contract',
            x: 20,
            y: 38,
            label: 'Biceps contracts: arm bends up',
            description:
              'When the biceps contracts it gets shorter and fatter, pulling the radius and ulna up towards the shoulder. The elbow bends. A British Olympic cyclist sprinting out of the saddle does exactly this to pull up on the handlebars.',
          },
          {
            id: 'bbs-sk-ea-triceps-relax',
            x: 38,
            y: 38,
            label: 'Triceps relaxes: it does not push',
            description:
              'At the same moment the triceps RELAXES. It does not push the arm; muscles cannot push. It simply stops pulling and lets the joint move. Many learners get this wrong, thinking the relaxed muscle is doing work. It is not.',
          },
          {
            id: 'bbs-sk-ea-triceps-contract',
            x: 80,
            y: 38,
            label: 'Triceps contracts: arm straightens',
            description:
              'To straighten the arm the triceps now contracts, pulling the back of the lower arm down. The biceps relaxes. A boxer throwing a straight punch fires the triceps to extend the arm. The two muscles take turns: one pulls, the other lets go.',
          },
          {
            id: 'bbs-sk-ea-biceps-relax',
            x: 60,
            y: 38,
            label: 'Biceps relaxes (does not push)',
            description:
              'On the straightening stroke the biceps simply relaxes. It is not actively lowering the arm. The triceps is pulling the arm down; the biceps just steps aside. The pair is ANTAGONISTIC, set against each other in direction, but cooperating in timing.',
          },
          {
            id: 'bbs-sk-ea-rule',
            x: 50,
            y: 89,
            label: 'Muscles only pull',
            description:
              'A muscle has only one move: it contracts (shortens) to pull the bones it is attached to. It never pushes. To get a bone to swing back the other way, a second muscle on the opposite side must contract. That is why every bending joint needs an antagonistic pair.',
          },
        ],
      },
    },
    {
      id: 'bbs-sk-joint-types',
      title: 'Three Joint Types: Hinge, Ball-and-Socket, Fixed',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the three main joint types: hinge joints bend one way, ball-and-socket joints swing many ways, and fixed joints do not move at all.',
      data: {
        viewBox: '0 0 360 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240"><rect x="0" y="0" width="360" height="240" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">THREE JOINT TYPES: DIFFERENT BONE SHAPES, DIFFERENT MOVES</text><g><rect x="14" y="36" width="108" height="180" rx="6" fill="#FFFFFF" stroke="#15803D" stroke-width="1.4"/><text x="68" y="54" text-anchor="middle" font-size="8" font-weight="700" fill="#14532D">HINGE JOINT</text><text x="68" y="66" text-anchor="middle" font-size="6" fill="#14532D">elbow, knee</text><rect x="60" y="78" width="16" height="50" rx="3" fill="#FCD34D" stroke="#92400E"/><path d="M 60 128 Q 68 138 76 128" fill="none" stroke="#15803D" stroke-width="1.4"/><rect x="60" y="138" width="16" height="50" rx="3" fill="#FCD34D" stroke="#92400E" transform="rotate(20 68 163)"/><path d="M 40 100 Q 30 130 40 160" fill="none" stroke="#15803D" stroke-width="1.2" stroke-dasharray="3 2"/><text x="22" y="200" font-size="6" fill="#14532D">bends ONE way</text><text x="22" y="210" font-size="6" fill="#14532D">like a door hinge</text></g><g><rect x="126" y="36" width="108" height="180" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.4"/><text x="180" y="54" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">BALL-AND-SOCKET</text><text x="180" y="66" text-anchor="middle" font-size="6" fill="#1E3A8A">hip, shoulder</text><path d="M 152 90 Q 180 86 208 90 Q 214 110 198 122 L 162 122 Q 146 110 152 90 Z" fill="#FEF3C7" stroke="#1E3A8A" stroke-width="1.2"/><circle cx="180" cy="118" r="13" fill="#FCD34D" stroke="#92400E" stroke-width="1.2"/><rect x="174" y="130" width="12" height="56" rx="3" fill="#FCD34D" stroke="#92400E"/><path d="M 154 168 Q 180 174 206 168" fill="none" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="2 2"/><path d="M 150 152 Q 180 160 210 152" fill="none" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="2 2"/><text x="138" y="200" font-size="6" fill="#1E3A8A">swings in MANY</text><text x="138" y="210" font-size="6" fill="#1E3A8A">directions</text></g><g><rect x="238" y="36" width="108" height="180" rx="6" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="1.4"/><text x="292" y="54" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">FIXED JOINT</text><text x="292" y="66" text-anchor="middle" font-size="6" fill="#7F1D1D">cranium (sutures)</text><path d="M 254 100 Q 292 80 330 100 L 330 130 L 254 130 Z" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="1.4"/><path d="M 264 100 L 268 90 L 272 100 L 276 90 L 280 100 L 284 90 L 288 100 L 292 90 L 296 100 L 300 90 L 304 100 L 308 90 L 312 100 L 316 90 L 320 100" fill="none" stroke="#7F1D1D" stroke-width="1.2"/><text x="254" y="160" font-size="6" fill="#7F1D1D">interlocking edges</text><text x="254" y="172" font-size="6" fill="#7F1D1D">lock the plates</text><text x="262" y="200" font-size="6" fill="#7F1D1D">DOES NOT MOVE</text><text x="262" y="210" font-size="6" fill="#7F1D1D">in an adult</text></g></svg>',
        hotspots: [
          {
            id: 'bbs-sk-jt-hinge',
            x: 19,
            y: 50,
            label: 'Hinge joint: elbow and knee',
            description:
              'A hinge joint bends ONE way only, like a door hinge. The bone ends are shaped so that the joint can rotate around a single axis. The elbow and knee are the two main hinge joints in the body. A netball pivot uses the knee as a hinge.',
          },
          {
            id: 'bbs-sk-jt-ball',
            x: 50,
            y: 50,
            label: 'Ball-and-socket: shoulder and hip',
            description:
              'A ball-and-socket joint has a round head of one bone sitting in a cup of another. It swings in MANY directions: forward, back, side, and around in a circle. The shoulder and hip are the two ball-and-socket joints. A British rugby pass uses both shoulders.',
          },
          {
            id: 'bbs-sk-jt-fixed',
            x: 81,
            y: 50,
            label: 'Fixed joint: cranial sutures',
            description:
              'A fixed joint locks two bones together so they DO NOT MOVE in an adult. The plates of the cranium meet at zig-zag sutures that interlock like puzzle pieces. They are flexible in a baby (so the head can pass through the birth canal) and fuse solid in adulthood.',
          },
          {
            id: 'bbs-sk-jt-range',
            x: 50,
            y: 88,
            label: 'Range of motion',
            description:
              'Joint type sets the RANGE of motion. A typical elbow flexes from about 0 degrees (straight) to 145 degrees (fully bent). A typical shoulder can move through more than 250 degrees of arc. A cranial suture moves through 0 degrees in an adult. Different shapes, different jobs.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bbs-sk-worked-1',
      title: 'How the biceps and triceps raise the lower arm',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil at a Manchester grammar school is lifting a 1 kg textbook in her hand. Her lower arm starts hanging straight down at her side and ends bent up so her hand is at her shoulder. Use the antagonistic pair at the elbow to explain step by step how the bones move.',
        },
        {
          explanation:
            'Step 1: name the bones in the lever. The upper-arm bone is the HUMERUS; it is the fixed part of the lever. The two lower-arm bones, the RADIUS and ULNA, are the part that will swing.',
          maths: 'lever pivot = elbow joint between humerus and radius/ulna',
        },
        {
          explanation:
            'Step 2: name the antagonistic pair. The BICEPS sits on the front of the upper arm. The TRICEPS sits on the back. They are set against each other in direction: biceps pulls the lower arm UP, triceps pulls it DOWN.',
        },
        {
          explanation:
            'Step 3: state what the biceps does to bend the arm. The biceps CONTRACTS: it shortens and gets fatter. Because one end is attached to the shoulder and the other end to the radius, contracting pulls the radius up towards the shoulder. The elbow bends.',
          maths: 'biceps shortens → radius/ulna swing up → elbow angle drops from 180 to about 30 degrees',
        },
        {
          explanation:
            'Step 4: state what the triceps does at the same time. The triceps RELAXES. It does not push. Pushing is not something muscles can do. It simply lets go so the joint is free to swing.',
        },
        {
          explanation:
            'Step 5: state the rule the example shows. Bones move because muscles PULL. To swing a bone back the other way, a second muscle must contract on the opposite side. That is why bending joints need an antagonistic pair: one to pull up, one to pull down.',
          maths: 'one direction needs one muscle to pull; the return needs the partner to pull',
        },
      ],
    },
    {
      id: 'bbs-sk-worked-2',
      title: 'Why a newborn has more bones than an adult',
      steps: [
        {
          explanation:
            'Question: a midwife at an NHS hospital tells new parents that their baby has about 270 bones but will end up with 206 as an adult. How can the body LOSE bones while growing bigger? Work the answer step by step.',
        },
        {
          explanation:
            'Step 1: state the two numbers. A newborn has about 270 bones. A British teenager or adult has 206 bones. The difference is about 270 - 206 = 64 bones.',
          maths: '270 - 206 = 64',
        },
        {
          explanation:
            'Step 2: ask where 64 bones went. The body does not delete bones. What it does is FUSE pairs or groups of small bones together as the body grows. Two bones grow into one, so the count drops even though the skeleton gets bigger.',
        },
        {
          explanation:
            'Step 3: give a concrete example. The cranium of a newborn has several separate plates with soft gaps between them (the fontanelles). Those gaps let the head squeeze through the birth canal. Over the first two years of life the plates fuse along the sutures into one solid skull.',
        },
        {
          explanation:
            'Step 4: give a second example. The sacrum at the base of the spine is one solid bone in an adult, but is FIVE separate vertebrae in a baby. They fuse during the teenage years. The pelvis fuses from three bones per side into one.',
        },
        {
          explanation:
            'Step 5: state the rule. The bone count goes DOWN with age because small bones fuse, not because bones disappear. By around 25 the adult count of 206 is reached. The newborn count of about 270 is approximate; reference texts give anything from 270 to 300 depending on how separate plates are counted.',
          maths: 'newborn ≈ 270 bones → adult = 206 bones (fusion, not loss)',
        },
      ],
    },
    {
      id: 'bbs-sk-worked-3',
      title: 'Checking the elbow angle range with a protractor',
      steps: [
        {
          explanation:
            'Question: in a PE biomechanics practical at a UK grammar school, a pupil measures her elbow joint angle. With her arm hanging straight down at her side, the protractor reads 180 degrees. When she bends her arm fully up to touch her shoulder, the protractor reads 35 degrees. Through how many degrees has the elbow rotated?',
        },
        {
          explanation:
            'Step 1: identify the two readings. Straight arm = 180 degrees. Fully bent arm = 35 degrees. These are angles between the humerus and the radius/ulna.',
          maths: 'start = 180 degrees, end = 35 degrees',
        },
        {
          explanation:
            'Step 2: set up the subtraction. The rotation is the difference between the two readings.',
          maths: 'rotation = start - end = 180 - 35',
        },
        {
          explanation:
            'Step 3: compute. 180 - 35 = 145 degrees. So her elbow has rotated through 145 degrees of arc.',
          maths: '180 - 35 = 145 degrees',
        },
        {
          explanation:
            'Step 4: link to joint type. A hinge joint typically allows about 140 to 150 degrees of rotation, so 145 degrees is well within the normal range for an elbow. A textbook average is "about 145 degrees".',
        },
        {
          explanation:
            'Step 5: compare with a ball-and-socket joint. A shoulder can swing through more than 250 degrees of arc because the round head of the humerus sits in an open cup, not a hinge. Different joint shapes give different ranges of motion.',
          maths: 'elbow range ≈ 145 degrees ≪ shoulder range > 250 degrees',
        },
      ],
    },
  ],
  questions: [
    // CORE (7) ----------------------------------------------------------------
    {
      id: 'bbs-sk-q1',
      type: 'multiple-choice',
      stem: 'Which list gives FOUR jobs of the human skeleton?',
      tier: 'core',
      options: [
        'Support, protection, movement, making blood cells',
        'Digestion, breathing, circulation, reproduction',
        'Storage of fat, taste, hearing, balance',
        'Producing urine, sweating, making bile, breathing',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Think about what bones DO: holding the body up, shielding organs, acting as levers, and the marrow inside long bones.',
    },
    {
      id: 'bbs-sk-q2',
      type: 'numeric-entry',
      stem: 'How many bones does a typical adult human have? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 206,
      xpValue: 10,
      hint: 'A British teenager has the adult count by their late teens. The exact number is in the introduction.',
      misconceptionId: 'bbs-sk-mis-newborn-same-count',
    },
    {
      id: 'bbs-sk-q3',
      type: 'multiple-choice',
      stem: 'What is the main job of the cranium?',
      tier: 'core',
      options: [
        'To pump blood around the body',
        'To support the body weight on the legs',
        'To make red blood cells',
        'To protect the brain',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The cranium is the dome of bone around the head. What sits inside it?',
    },
    {
      id: 'bbs-sk-q4',
      type: 'multiple-choice',
      stem: 'Which bone is the long upper-arm bone, running from shoulder to elbow?',
      tier: 'core',
      options: [
        'Femur',
        'Tibia',
        'Humerus',
        'Pelvis',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The biceps and triceps both attach to it. The two lower-arm bones (radius and ulna) connect to it at the elbow.',
    },
    {
      id: 'bbs-sk-q5',
      type: 'drag-order',
      stem: 'Put these bones in order from CLOSEST TO THE HEAD down to CLOSEST TO THE ANKLES.',
      tier: 'core',
      items: [
        'Femur',
        'Cranium',
        'Tibia',
        'Ribcage',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'bbs-sk-q6',
      type: 'multiple-choice',
      stem: 'What does a muscle do when it CONTRACTS?',
      tier: 'core',
      options: [
        'It gets shorter and pulls the bone it is attached to',
        'It pushes the bone away from itself',
        'It stretches longer to push the bone',
        'It pumps blood through itself',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bbs-sk-mis-muscles-push',
      hint: 'Think about what happens to a tightened biceps: it gets shorter and bulges.',
    },
    {
      id: 'bbs-sk-q7',
      type: 'spot-misconception',
      stem: 'Tom says: "Bones are dead, like sticks. That is why a skeleton in a museum is just a hard, dry frame."',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. Bones are dead tissue with no blood supply.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Living bone has its own blood vessels, growing cells, and makes red and white blood cells in the marrow. A museum skeleton is the dried frame left after the living tissue has gone.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bbs-sk-mis-bones-dead',
    },
    // CONFIDENT (8) -----------------------------------------------------------
    {
      id: 'bbs-sk-q8',
      type: 'multiple-choice',
      stem: 'Why are the biceps and triceps called an ANTAGONISTIC PAIR?',
      tier: 'confident',
      options: [
        'They both contract at the same time to lock the joint',
        'One contracts to bend the arm; the other contracts to straighten it. They pull in opposite directions and take turns',
        'They are enemies that work against each other and damage the joint',
        'They are the only two muscles in the upper arm',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bbs-sk-mis-antagonistic-enemies',
      hint: 'Antagonistic means set against each other in direction. One pulls up, the partner pulls back down.',
    },
    {
      id: 'bbs-sk-q9',
      type: 'multiple-choice',
      stem: 'A British Olympic cyclist pulls hard on the handlebars to sprint out of the saddle. Her biceps shortens and bulges. What is happening at her elbow?',
      tier: 'confident',
      options: [
        'The biceps is RELAXING and the triceps is pulling the arm up',
        'Both biceps and triceps contract together to lock the elbow straight',
        'The biceps is CONTRACTING and pulls the radius up. The triceps relaxes. The elbow bends',
        'The triceps is pushing the lower arm up while the biceps rests',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bbs-sk-mis-muscles-push',
    },
    {
      id: 'bbs-sk-q10',
      type: 'multiple-choice',
      stem: 'Which row correctly matches each joint to its TYPE?',
      tier: 'confident',
      options: [
        'Elbow = ball-and-socket, hip = hinge, cranial suture = fixed',
        'Elbow = hinge, hip = ball-and-socket, cranial suture = fixed',
        'Elbow = fixed, hip = hinge, cranial suture = ball-and-socket',
        'Elbow = hinge, hip = fixed, cranial suture = ball-and-socket',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bbs-sk-mis-joints-same',
      hint: 'A hinge bends one way (like a door). A ball-and-socket swings in many directions. A fixed joint does not move.',
    },
    {
      id: 'bbs-sk-q11',
      type: 'numeric-entry',
      stem: 'A newborn baby has about 270 bones. An adult has 206 bones. How many MORE bones does a newborn have than an adult? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 64,
      xpValue: 15,
      hint: 'Subtract the adult number from the newborn number: 270 - 206.',
      misconceptionId: 'bbs-sk-mis-newborn-same-count',
    },
    {
      id: 'bbs-sk-q12',
      type: 'numeric-entry',
      stem: 'A pupil measures her elbow joint angle in a PE practical. Straight arm reads 180 degrees; fully bent reads 35 degrees. Through how many degrees has the elbow rotated? Give your answer in degrees.',
      tier: 'confident',
      correctAnswer: 145,
      xpValue: 15,
      hint: 'Subtract the bent reading from the straight reading: 180 - 35.',
      unit: 'degrees',
    },
    {
      id: 'bbs-sk-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Explain step by step how the biceps and triceps work together to bend the arm up."',
      tier: 'confident',
      steps: [
        'Identify the pair: biceps on the front of the upper arm, triceps on the back',
        'The biceps CONTRACTS: it shortens and gets fatter',
        'The biceps pulls the radius and ulna up towards the shoulder, so the elbow bends',
        null,
        'State the rule: one muscle pulls, the partner relaxes. Muscles only ever pull, never push',
      ],
      missingStepIndex: 3,
      correctStep:
        'At the same time the triceps RELAXES (it does not push the arm; it just lets go so the joint can swing)',
      xpValue: 20,
      misconceptionId: 'bbs-sk-mis-muscles-push',
    },
    {
      id: 'bbs-sk-q15',
      type: 'drag-order',
      stem: 'A pupil bends her arm to lift a textbook. Put these four steps in the correct ORDER, starting from the arm hanging straight.',
      tier: 'confident',
      items: [
        'The biceps contracts: it shortens and gets fatter',
        'The radius and ulna swing up; the elbow bends to about 35 degrees',
        'The triceps relaxes',
        'A signal from the brain reaches the biceps',
      ],
      correctOrder: [3, 0, 2, 1],
      xpValue: 15,
    },
    // CHALLENGE (6) -----------------------------------------------------------
    {
      id: 'bbs-sk-q16',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at a British grammar school claims: "If I work hard enough, I should be able to make both my biceps AND my triceps contract at the same time. That would lock my elbow rigid and make my arm super strong." Which is the BEST correction?',
      tier: 'challenge',
      options: [
        'She is right; co-contraction is the main way muscles produce force',
        'She is wrong because the triceps cannot contract at all; only the biceps can',
        'She is partly right: the body CAN briefly co-contract a pair to stabilise a joint, but the muscles still only pull. Strong, controlled movement comes from the pair taking turns, not both pulling at once',
        'She is wrong because muscles can push as well as pull, so co-contraction is unnecessary',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'bbs-sk-mis-antagonistic-enemies',
    },
    {
      id: 'bbs-sk-q17',
      type: 'numeric-entry',
      stem: 'A British physiotherapist measures the bone density of a 70-year-old patient on an NHS bone-density scan. The patient has lost 22% of the bone density she had at age 30. As a DECIMAL FRACTION, what proportion of her age-30 bone density does she have NOW?',
      tier: 'challenge',
      correctAnswer: 0.78,
      tolerance: 0.005,
      xpValue: 25,
      hint: 'If she has lost 22%, she has 100% - 22% = 78% of her age-30 density. Convert 78% to a decimal.',
    },
    {
      id: 'bbs-sk-q18',
      type: 'multiple-choice',
      stem: 'A rugby player at a UK grammar school has built much bigger biceps in the gym over a year. He says: "My arm must now be stronger in every direction, because my muscles are bigger." Which is the BEST reply?',
      tier: 'challenge',
      options: [
        'A bigger biceps helps him BEND the arm more strongly, but to STRAIGHTEN the arm more strongly he would need to build the triceps as well. The biceps cannot push the arm down',
        'He is right: bigger muscles are stronger in every direction',
        'He is wrong: bigger muscles are always weaker',
        'He is right because a muscle can pull in any direction once it has grown',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'bbs-sk-mis-bigger-stronger',
    },
    {
      id: 'bbs-sk-q19',
      type: 'spot-misconception',
      stem: 'Priya writes in her biology book: "Stretching my hamstrings every morning makes the muscles longer for the rest of my life. After a few months they should be twice as long."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. Stretching permanently makes muscles longer; that is what flexibility training is for.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. A stretch makes a muscle temporarily longer because the fibres can lengthen for a short time. After the stretch they return towards their resting length. Long-term flexibility gains are real but small and come from changes in the connective tissue, not from doubling the muscle length',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bbs-sk-mis-stretch-permanent',
    },
    {
      id: 'bbs-sk-q20',
      type: 'numeric-entry',
      stem: 'A British physiotherapist tells a patient that her elbow can normally rotate from 0 degrees (fully bent) to 145 degrees (fully straight). After an injury, the joint will only open as far as 95 degrees. Through how many degrees of motion has she LOST? Give your answer in degrees.',
      tier: 'challenge',
      correctAnswer: 50,
      xpValue: 25,
      hint: 'Healthy range = 145 - 0 = 145 degrees. Injured range = 95 - 0 = 95 degrees. Lost range = 145 - 95.',
      unit: 'degrees',
    },
    {
      id: 'bbs-sk-q21',
      type: 'multiple-choice',
      stem: 'A pupil claims that all joints work the same way, so the shoulder, elbow, and cranial sutures must all do the same job. Which is the BEST reply?',
      tier: 'challenge',
      options: [
        'She is right: all joints bend the same way',
        'She is wrong because joints differ by SHAPE. The shoulder is a ball-and-socket (swings in many directions), the elbow is a hinge (bends one way), and the cranial sutures are fixed (do not move in an adult). Shape sets the range of motion',
        'She is right: only the elbow is special; the others are just decoration',
        'She is wrong because the cranial sutures swing freely in an adult',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'bbs-sk-mis-joints-same',
    },
  ],
  misconceptions: [
    // Source: Reiss & Tunnicliffe (2001) "Students' Understandings of Human Organs and Organ Systems" Research in Science Education 31, 383-399: pupils described bones as "dead" or "like sticks". Reinforced by AQA GCSE Biology examiner report June 2019 (8461/2F) Q03 on the skeleton: candidates "did not recognise bone as living tissue containing blood vessels and bone marrow".
    {
      id: 'bbs-sk-mis-bones-dead',
      description:
        'Bones are dead tissue, like sticks of chalk inside the body.',
      triggerAnswer: 'bones-dead',
      correction:
        'Bones are LIVING tissue. They have their own blood vessels, growing cells, and the red marrow inside long bones makes red and white blood cells for the rest of the body.',
      reExplanation:
        'A museum skeleton looks dry because the living tissue has been removed, leaving the mineral frame. In a living person bones grow, repair fractures, and store calcium for the rest of the body. The femur contains red marrow that makes the red blood cells that carry oxygen and the white cells that fight infection. A child who breaks a bone in a netball match can knit it back together precisely because the bone is alive.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on muscles and bones: pupils "described muscles as able to push as well as pull". Reinforced by Edexcel GCSE Biology examiner report June 2021 (1BI0/1F) Q04 on antagonistic muscles, where candidates "wrote that the triceps pushes the arm down" rather than relaxing while the biceps pulls.
    {
      id: 'bbs-sk-mis-muscles-push',
      description:
        'Muscles can both PUSH and PULL the bones they attach to.',
      triggerAnswer: 'muscles-push',
      correction:
        'Muscles only PULL. They contract (shorten) to pull the bone, and relax (lengthen) to let it go. They never push. To move a bone the other way a second muscle must pull from the opposite side.',
      reExplanation:
        'A muscle is made of fibres that can shorten but cannot lengthen with force. So a muscle has one active move: contract and pull. To straighten your arm after bending it, your biceps cannot push the lower arm down. A second muscle on the other side, the triceps, must contract and pull it down. That is why bending joints always come with antagonistic pairs: one muscle pulls one way, the partner pulls back the other way.',
    },
    // Source: AQA GCSE Biology examiner report June 2020 (8461/2F) Q06 on antagonistic muscles: candidates "wrote that the biceps and triceps fight each other to damage the elbow". Reinforced by Royal Society of Biology curriculum guidance on KS3 movement (rsb.org.uk), which explicitly addresses the "enemies" reading of antagonistic.
    {
      id: 'bbs-sk-mis-antagonistic-enemies',
      description:
        'Antagonistic muscles are enemies that fight each other and damage the joint.',
      triggerAnswer: 'antagonistic-enemies',
      correction:
        'Antagonistic means set against each other in DIRECTION, not in cooperation. The biceps and triceps take TURNS: one pulls while the partner relaxes. They never fight at the same time.',
      reExplanation:
        'In biology the word antagonistic means "pulling the opposite way". The biceps pulls the lower arm up; the triceps pulls it back down. They are set against each other in direction, but they cooperate in timing: while one contracts the partner relaxes and lets the joint swing. If both did contract at once you would lock the elbow rigid, which the body does sometimes to stabilise a joint, but it is not the normal pattern.',
    },
    // Source: OCR GCSE Biology examiner report June 2019 (J247/01) Q05 on joints: candidates "wrote that all joints in the body work the same way". Reinforced by Royal Osteoporosis Society (theros.org.uk) schools resource which calls out the same confusion in KS3 pupils.
    {
      id: 'bbs-sk-mis-joints-same',
      description:
        'All joints in the body work the same way and allow the same kinds of movement.',
      triggerAnswer: 'joints-same',
      correction:
        'Different joints have different SHAPES and do different jobs. A hinge bends one way (elbow, knee); a ball-and-socket swings many ways (shoulder, hip); a fixed joint does not move (cranial sutures).',
      reExplanation:
        'The shape of the bone ends sets what the joint can do. A hinge joint has a curved end fitting into a notch, so it bends around one axis like a door hinge. A ball-and-socket has a round head in a cup, so it swings in many directions. A fixed joint has interlocking zig-zag edges that lock the plates together, so it does not move in an adult. Three shapes, three ranges, three jobs.',
    },
    // Source: NHS Inform schools resource on the skeleton and Royal Osteoporosis Society (theros.org.uk) KS3 fact sheet: pupils "thought a baby has the same number of bones as an adult". Reinforced by Edexcel GCSE Biology examiner report June 2022 (1BI0/1F) Q03 on skeletal growth.
    {
      id: 'bbs-sk-mis-newborn-same-count',
      description:
        'A newborn baby has the same number of bones as an adult.',
      triggerAnswer: 'newborn-same-count',
      correction:
        'A newborn has about 270 bones; an adult has 206. The count DROPS as small bones fuse together with age. The skeleton gets bigger but the count goes down.',
      reExplanation:
        'A baby is born with extra separate plates so the body is flexible enough for birth and rapid early growth. The cranium has several plates with soft gaps (fontanelles). The sacrum at the base of the spine is five separate vertebrae. Through childhood and the teenage years these small bones fuse along their joints into single larger bones. The body does not lose bone material; it just stops counting two as two and counts them as one.',
    },
    // Source: AQA GCSE Biology examiner report June 2021 (8461/2F) Q07 on muscles and exercise: candidates "thought a bigger muscle is stronger in every direction". Reinforced by GCSE PE textbook (Hodder Education) chapter on biomechanics of the elbow, which explicitly addresses the misconception in its sample-question section.
    {
      id: 'bbs-sk-mis-bigger-stronger',
      description:
        'A bigger muscle is always stronger and pulls harder in every direction.',
      triggerAnswer: 'bigger-stronger',
      correction:
        'A bigger biceps pulls more strongly only IN ITS OWN DIRECTION. To pull the arm the other way you would need a bigger triceps as well. Bulk in one muscle does not strengthen its antagonistic partner.',
      reExplanation:
        'A muscle can only pull along its own line of action. A larger biceps gives a stronger pull from the front of the upper arm and so a stronger arm-bend. But the same biceps cannot help straighten the arm, because that move needs the triceps to pull from the back. Trained athletes build BOTH halves of each pair. Strength also depends on cross-sectional area; bulk alone does not set how much force a muscle produces.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on muscles and movement: pupils "believed that stretching permanently lengthens muscles". Reinforced by NHS Live Well guidance on flexibility and warm-up, which addresses the same misreading.
    {
      id: 'bbs-sk-mis-stretch-permanent',
      description:
        'Stretching makes muscles permanently longer.',
      triggerAnswer: 'stretch-permanent',
      correction:
        'A stretch makes a muscle TEMPORARILY longer; the fibres return towards their resting length afterwards. Long-term flexibility gains are real but small and come from changes in the connective tissue around the muscle, not from doubling its length.',
      reExplanation:
        'When you stretch a hamstring before a school netball match the fibres lengthen for a few minutes and the joint feels looser. Within an hour the muscle settles back near its resting length. Over months of training the connective tissue (the tendons and the sheaths around the muscle) can become slightly more compliant, which lets you stretch a little further. The muscle itself does not double in length, and the change is reversible if training stops.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
