const trainingProgramData: TrainingProgram[] = [
  {
    id: 1,
    title: "Self-Defense",
    img: "img/krav-maga.jpeg",
    shortDesc: "En Motion's Self-Defense training melds physical and mental fortitude, leveraging diverse techniques to foster awareness, preparation, and resilience.",
    fullDesc: "En Motion's Self-Defense training melds physical and mental fortitude, leveraging the diverse techniques of Muay Thai, Krav Maga, and kickboxing to foster awareness, preparation, and resilience. Our expert instructors focus on precise, agile, and efficient defensive strategies, empowering you to confidently handle potential threats. Beyond mastering strikes and counters, our holistic approach equips you with crucial situational awareness, making our classes an ideal environment for anyone looking to enhance their personal safety and assurance.",
  },
  {
    id: 2,
    title: "Personal Training",
    img: "img/girl-mit.jpeg",
    shortDesc: "Our Personal Training is a tailored fitness approach that adapts to each individual's needs, emphasizing functional fitness and martial arts techniques.",
    fullDesc: "The Personal Training we offer is a tailored fitness approach that adapts to each individual's needs. Our programs emphasize functional fitness to enhance flexibility, strength, and endurance, incorporating elements of martial arts like Muay Thai and kickboxing for a dynamic workout that helps propel you towards a stronger, more empowered self.",
  },
  {
    id: 3,
    title: "Corporate Wellness",
    img: "img/group-stretch.jpeg",
    shortDesc: "Our Corporate Wellness philosophy centers around the belief that a healthy team is a productive team, integrating physical activities with team-building challenges.",
    fullDesc: "Our philosophy centers around the belief that a healthy team is a productive team. By integrating physical activities with team-building challenges, we help strengthen relationships among colleagues, boosting morale and fostering a supportive company culture. Our group classes range from yoga and pilates to more intense circuit training and boot camps, all tailored to accommodate different fitness levels within your workforce.",
  },
  {
    id: 4,
    title: "Online Services",
    img: "img/online-training.jpeg",
    shortDesc: "Our online fitness programs deliver top-notch instruction in Muay Thai, Krav Maga, and kickboxing directly to you, no matter where you are.",
    fullDesc: "Our online fitness programs transcend geographical barriers, delivering top-notch instruction in Muay Thai, Krav Maga, and kickboxing directly to you, no matter where you are. Our virtual training sessions are meticulously crafted to mirror the quality and personalization of our in-studio classes, ensuring that you receive the full En Motion experience from the comfort of your home, office, or while on the move.",
  },
];

// Define the Training Program interface
export interface TrainingProgram {
  id: number;
  title: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
}

const testimonialData3 = [
  {
    id: 3,
    img: "img/brfb.jpg",
    name: "Bonnie Lambert",
    title: "Creative Designer",
    text:  "Miguel's workouts are one of a kind. They're unique and push your limits without feeling like you're with a drill sergeant. Great online experience, highly recommend!",
  },
  {
    id: 4,
    img: "img/crfb.jpg",
    name: "Chris Rhodes",
    title: "Product Developer",
    text: "Over the past two years, Miguel has been an amazing trainer. He helped me drop over 60 pounds and recover from knee and shoulder injuries. What I really like is how he pays close attention to my form while still pushing me in a safe way. I wholeheartedly recommend Miguel to anyone seeking a knowledgeable, supportive, and results-driven trainer.",
  },
];

export {
  trainingProgramData,
  testimonialData3,
};
