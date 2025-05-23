// register on rapid api, subscirbe exercise db api and use your api key here
// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb

export const rapidApiKey = 'ac2f56ce1amsh59f13ff8865ece4p113d5cjsn5db735cd8457';
export const sliderImages = [
    require('../assets/images/slide1.png'),
    require('../assets/images/slide3.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide4.png'),
    require('../assets/images/slide5.png'),
]

export const bodyParts = [
    {
      name: 'back',
      image: require('../assets/images/back.png'),
    },
    {
      name: 'cardio',
      image: require('../assets/images/cardio.png'),
    },
    
    {
      name: 'lower arms',
      image: require('../assets/images/lowerArms.png'),
    },
    {
      name: 'lower legs',
      image: require('../assets/images/lowerLegs.png'),
    },
    {
      name: 'chest',
      image: require('../assets/images/chest.png'),
    },
    {
      name: 'neck',
      image: require('../assets/images/neck.png'),
    },
    {
      name: 'shoulders',
      image: require('../assets/images/shoulders.png'),
    },
    {
      name: 'upper arms',
      image: require('../assets/images/upperArms.png'),
    },
    {
      name: 'upper legs',
      image: require('../assets/images/upperLegs.png'),
    },
    {
      name: 'waist',
      image: require('../assets/images/waist.png'),
    }
]

export const demoExercises = [
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/ZBdUybBsOJZxqq",
      "id": "3220",
      "instructions": [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees and lower your body into a squat position.",
        "Jump explosively upwards, extending your legs and arms.",
        "While in the air, spread your legs apart and bring your arms out to the sides.",
        "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
        "Repeat for the desired number of repetitions."
      ],
      "name": "astride jumps (male)",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "calves"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/cvknkoB1wdv77s",
      "id": "3672",
      "instructions": [
        "Stand with your feet shoulder-width apart.",
        "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
        "Push off with your right foot and step back to the starting position.",
        "Repeat the movement with your left foot, alternating legs with each step.",
        "Continue stepping back and forth, maintaining a steady pace.",
        "Repeat for the desired duration or number of repetitions."
      ],
      "name": "back and forth step",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "glutes",
        "calves"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/Yzjs053WanECXK",
      "id": "3360",
      "instructions": [
        "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
        "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
        "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
        "Continue crawling forward, alternating your hand and foot movements.",
        "Maintain a steady pace and keep your core tight throughout the exercise.",
        "Continue for the desired distance or time."
      ],
      "name": "bear crawl",
      "secondaryMuscles": [
        "core",
        "shoulders",
        "triceps"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/VhYJMVKNSofs9D",
      "id": "1160",
      "instructions": [
        "Start in a standing position with your feet shoulder-width apart.",
        "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
        "Kick your feet back into a push-up position.",
        "Perform a push-up, keeping your body in a straight line.",
        "Jump your feet back into the squat position.",
        "Jump up explosively, reaching your arms overhead.",
        "Land softly and immediately lower back into a squat position to begin the next repetition."
      ],
      "name": "burpee",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "chest"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "leverage machine",
      "gifUrl": "https://v2.exercisedb.io/image/pNgtBASgUkfB3b",
      "id": "2331",
      "instructions": [
        "Adjust the seat height and position yourself on the cycle cross trainer.",
        "Place your feet on the pedals and grip the handlebars.",
        "Start pedaling in a smooth and controlled motion.",
        "Maintain a steady pace and increase the resistance if desired.",
        "Continue pedaling for the desired duration of your cardio workout."
      ],
      "name": "cycle cross trainer",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "glutes"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "dumbbell",
      "gifUrl": "https://v2.exercisedb.io/image/NvEGPiHWN-0dBO",
      "id": "1201",
      "instructions": [
        "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.",
        "Lower your body into a squat position, placing the dumbbells on the ground in front of you.",
        "Kick your feet back into a push-up position, keeping your body in a straight line.",
        "Perform a push-up, bending your elbows and lowering your chest towards the ground.",
        "Jump your feet back towards your hands, landing in a squat position.",
        "Stand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.",
        "Press the dumbbells overhead, fully extending your arms.",
        "Lower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions."
      ],
      "name": "dumbbell burpee",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "triceps",
        "core"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/m-cBLDwdpfL1LN",
      "id": "3221",
      "instructions": [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees and lower your body down as if you were sitting back into a chair.",
        "Keep your chest up and your weight in your heels.",
        "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      "name": "half knee bends (male)",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "glutes"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/dXJUgwQDbb4DWp",
      "id": "3636",
      "instructions": [
        "Stand facing a wall with your feet hip-width apart.",
        "Place your hands on the wall for support.",
        "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
        "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
        "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
        "Maintain a fast pace and keep your upper body stable throughout the exercise.",
        "Repeat for the desired duration or number of repetitions."
      ],
      "name": "high knee against wall",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "glutes",
        "calves"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/94ePXp-xmeMB-J",
      "id": "0501",
      "instructions": [
        "Start in a standing position with your feet shoulder-width apart.",
        "Lower your body into a squat position, placing your hands on the ground in front of you.",
        "Kick your feet back, landing in a push-up position.",
        "Perform a push-up, lowering your chest to the ground and then pushing back up.",
        "Jump your feet forward, landing in a squat position.",
        "Jump up explosively, reaching your arms overhead.",
        "Land softly and immediately lower back into the squat position to begin the next repetition."
      ],
      "name": "jack burpee",
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "triceps",
        "core"
      ],
      "target": "cardiovascular system"
    },
    {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/tqoEMpfmp0WWvi",
      "id": "3224",
      "instructions": [
        "Stand with your feet together and your arms by your sides.",
        "Jump up, spreading your feet apart and raising your arms above your head.",
        "As you land, quickly jump back to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      "name": "jack jump (male)",
      "secondaryMuscles": [
        "quadriceps",
        "calves"
      ],
      "target": "cardiovascular system"
    }
  ]