import { text } from "stream/consumers";


const servicesData = [
  {
    title: "Casting Networks",
    number: "01",
    description:
      "Find the role that’s right for you. Browse casting calls from the industry’s leading casting.",
    image: "img/s8_1.png",
  },
  {
    title: "Block Busters",
    number: "02",
    description:
      "Blockbusters are popular and successful films or franchises that are characterized.",
    image: "img/s8_2.png",
  },
  {
    title: "Theatre",
    number: "03",
    description:
      "Theater is a form of live performance that involves actors, singers, dancers, and others presenting a story.",
    image: "img/s8_3.png",
  },
  {
    title: "TV Shows",
    number: "04",
    description:
      "This is just a small sampling of popular TV shows; there are many others out there as well!",
    image: "img/s8_4.png",
  },
];
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

const educationData = [
  {
    degree: "Masters in Computer Science",
    institution: "University of Manitoba",
    timePeriod: "2018 - 2021",
  },
  {
    degree: "Bachelor of Science in Engineering",
    institution: "XYZ University",
    timePeriod: "2014 - 2018",
  },
  {
    degree: "High School Diploma",
    institution: "ABC High School",
    timePeriod: "2010 - 2014",
  },
  {
    degree: "Certificate in Web Development",
    institution: "Coding Bootcamp Academy",
    timePeriod: "2021 - 2022",
  },
];

const teamData = [
  {
    name: "James John",
    role: "Actor & Director",
    img: "img/crew-1.png",
  },
  {
    name: "Emily Smith",
    role: "Video Editor",
    img: "img/crew-2.png",
  },
  {
    name: "Alex Turner",
    role: "Producer",
    img: "img/crew-3.png",
  },
  {
    name: "Sophia Ray",
    role: "Costume Designer",
    img: "img/crew-4.png",
  },
  {
    name: "Michael Brown",
    role: "Sound Engineer",
    img: "img/crew-5.png",
  },
];

const brandData = [
  {
    img: "img/brand9-1.png",
  },
  {
    img: "img/brand9-2.png",
  },
  {
    img: "img/brand9-3.png",
  },
  {
    img: "img/brand9-4.png",
  },
  {
    img: "img/brand9-5.png",
  },
  {
    img: "img/brand9-6.png",
  },
];
const videoData = [
  {
    count: 29,
    position: "Cinema Roles",
  },
  {
    count: 24,
    position: "Theatre Roles",
  },
  {
    count: 18,
    position: "Sounding Roles",
  },
  {
    count: 132,
    position: "Project Done",
  },
];

const testimonialData = [
  {
    name: "Chris Rhodes",
    position: "Mixcola Director",
    img: "img/crfb.jpg" ,
    message: "I have been using it for a number of years. I use Mixcola for different projects. I have been using it for a number of years.",
  },
  {
    name: "Bonnie Lambert",
    position: "Marketing Manager",
    img: "img/testimonial-image-2.png",
  },

];

const blogData = [
  {
    img: "img/blog9-1.png",
    date: "28 Dec, 2023",
    title: "Competition, Comparison, And Success In Dance",
  },
  {
    img: "img/blog9-2.png",
    date: "05 Feb, 2023",
    title: "The Top 15 Most Read Flypaper Articles From 2023",
  },
  {
    img: "img/blog9-3.png",
    date: "19 Feb, 2023",
    title: "8 Tips Video Create The  Best Training Videos In 2023",
  },
];

const serviceData2 = [
  {
    icon: "fa-light fa-blog",
    title: "Blog Post Writing",
  },
  {
    icon: "fa-light fa-chart-simple",
    title: "SEO Writing",
  },
  {
    icon: "fa-light fa-newspaper",
    title: "Website copywriting",
  },
];

const portfolioData = [
  {
    id: 1,
    title: "Blog Post Writing",
    img: "img/project/p8_1.png",
  },
  {
    id: 2,
    title: "Copywriting",
    img: "img/project/p8_2.png",
  },
  {
    id: 3,
    title: "SEO Writing",
    img: "img/project/p8_3.png",
  },
  {
    id: 4,
    title: "Static Web Pages",
    img: "img/project/p8_4.png",
  },
  {
    id: 5,
    title: "Technical Writing",
    img: "img/project/p8_5.png",
  },
];
const brandData2 = [
  {
    id: 1,
    img: "img/brands/b8_1.png",
  },
  {
    id: 2,
    img: "img/brands/b8_2.png",
  },
  {
    id: 3,
    img: "img/brands/b8_3.png",
  },
  {
    id: 4,
    img: "img/brands/b8_4.png",
  },
  {
    id: 5,
    img: "img/brands/b8_5.png",
  },
  {
    id: 6,
    img: "img/brands/b8_6.png",
  },
  {
    id: 7,
    img: "img/brands/b8_7.png",
  },
  {
    id: 8,
    img: "img/brands/b8_8.png",
  },
  {
    id: 9,
    img: "img/brands/b8_9.png",
  },
  {
    id: 10,
    img: "img/brands/b8_10.png",
  },
];

const awardData = [
  {
    id: 1,
    title: "Content Marketing",
    date: 2023,
  },
  {
    id: 2,
    title: "Digi day Awards",
    date: 2022,
  },
  {
    id: 3,
    title: "Pearl Awards",
    date: 2019,
  },
  {
    id: 4,
    title: "Lovie Awards",
    date: 2016,
  },
  {
    id: 5,
    title: "CMA Award",
    date: 2014,
  },
];

const testimonialData2 = [
  {
    id: 1,
    img: "img/t8_1.png",
    name: "Chris Rhodes",
    title: "Senior Developer",
  },
];

const serviceData3 = [
  {
    id: 1,
    img: "img/guy-kettlebell.png",
    title: "Single Sessions",
  },
  {
    id: 2,
    img: "img/groupClasses.png",
    title: "Group Classes",
  },
  {
    id: 3,
    img: "img/formula-3.png",
    title: "Online Training",
  },
  {
    id: 4,
    img: "img/sbb.png",
    title: "Self Defense",
  },
];

const packageData = [
  {
    id: 1,
    package: "Monthly",
    price: 17,
    title: "Per Month Paid",
    desc: "Upgrade Your Online & Offline With A Stunning, Customizable Profile.",
  },
  {
    id: 2,
    package: "Yearly",
    price: 199,
    title: "Annually Paid",
    desc: "Subscription Fee Is $199.00 USD And Automatically Renews Each Year.",
  },
  {
    id: 3,
    package: "Life Time",
    price: 799,
    title: "Life Time Plan Best Deals",
    desc: "$799.00 USD And Automatically Renews Each One Time.",
  },
];

const accordionData = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "This comes down to your goals, lifestyle, and current fitness level. For those who are new or returning to exercise.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "This comes down to your goals, lifestyle, and current fitness level. For those who are new or returning to exercise.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "This comes down to your goals, lifestyle, and current fitness level. For those who are new or returning to exercise.",
  },
  {
    id: 4,
    question: "How do I stay motivated to work out?",
    answer:
      "This comes down to your goals, lifestyle, and current fitness level. For those who are new or returning to exercise.",
  },
];

const trainingGalleryData = [
  {
    imageUrl: "img/training-gallery-1.png",
    title: "Hard Work",
    trainingName: "Body Pump",
    slider: "swiper-slide--one",
  },
  {
    imageUrl: "img/training-gallery-2.png",
    title: "Hard Work",
    trainingName: "Body Pump",
    slider: "swiper-slide--two",
  },
  {
    imageUrl: "img/training-gallery-3.png",
    title: "Hard Work",
    trainingName: "Body Pump",
    slider: "swiper-slide--three",
  },
  {
    imageUrl: "img/training-gallery-1.png",
    title: "Hard Work",
    trainingName: "Body Pump",
    slider: "swiper-slide--four",
  },
  {
    imageUrl: "img/training-gallery-2.png",
    title: "Hard Work",
    slider: "swiper-slide--five",
    trainingName: "Body Pump",
  },
  {
    slider: "swiper-slide--six",
    imageUrl: "img/training-gallery-3.png",
    title: "Hard Work",
    trainingName: "Body Pump",
  },
];

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

const blogData2 = [
  {
    id: 1,
    img: "img/blog10-1.png",
    day: 13,
    month: "Jan",
    category: "Nutrition",
    title: "Get Health & Exercise: The Surprising Science Behind Motivation",
  },
  {
    id: 2,
    img: "img/blog10-2.png",
    day: 22,
    month: "Jan",
    category: "Health",
    title: "The Best Exercises For Rheumatoid Arthritis At Home And The Gym",
  },
  {
    id: 3,
    img: "img/blog10-3.png",
    day: 17,
    month: "Jan",
    category: "Exercise",
    title: "Are Eating Almonds the Key to Faster Workout Recovery",
  },
  {
    id: 4,
    img: "img/blog10-4.png",
    day: 23,
    month: "Jan",
    category: "Fitness",
    title: "Tabata-style Workouts: 12 Minutes to Better Health and Fitness",
  },
];

const blogData3 = [
  {
    id: 1,
    img: "img/b8_1.png",
    title: "What’s the Right Content Type for Your Marketing Strategy?",
    date: "19 January 2023",
  },
  {
    id: 2,
    img: "img/b8_2.png",
    title: "Using Top of Funnel Marketing to Catch Your Audience’s Attention",
    date: "27 January 2023",
  },
];

const igPosts = [
  "img/ig-post-1.png",
  "img/ig-post-2.png",
  "img/ig-post-3.png",
  "img/ig-post-4.png",
  "img/ig-post-5.png",
  "img/ig-post-6.png",
  "img/ig-post-7.png",
  "img/ig-post-8.png",
];
const caseStudyData = [
  {
    id: 1,
    img: "img/case-1.png",
    text: "Tax Preparation",
  },
  {
    id: 2,
    img: "img/case-2.png",
    text: "Statement Analysis",
  },
  {
    id: 3,
    img: "img/case-3.png",
    text: "Ethical Dilemmas",
  },
  {
    id: 4,
    img: "img/case-4.png",
    text: "Cost Accounting",
  },
];
const testimonialData4 = [
  {
    id: 1,
    name: "John William",
    title: "Mixcola Director",
  },
  {
    id: 2,
    name: "Emily Jones",
    title: "Marketing Manager",
  },
  {
    id: 3,
    name: "Alex Thompson",
    title: "Creative Designer",
  },
];

const brandData3 = [
  {
    id: 1,
    img: "img/brands/b11_1.png",
  },
  {
    id: 2,
    img: "img/brands/b11_2.png",
  },
  {
    id: 3,
    img: "img/brands/b11_3.png",
  },
  {
    id: 4,
    img: "img/brands/b11_4.png",
  },
  {
    id: 5,
    img: "img/brands/b11_5.png",
  },
  {
    id: 6,
    img: "img/brands/b11_1.png",
  },
  {
    id: 7,
    img: "img/brands/b11_2.png",
  },
  {
    id: 8,
    img: "img/brands/b11_3.png",
  },
  {
    id: 9,
    img: "img/brands/b11_4.png",
  },
  {
    id: 10,
    img: "img/brands/b11_5.png",
  },
];

const faqData = [
  {
    id: 1,
    ques: "What services do you provide?",
  },
  {
    id: 2,
    ques: " Can you help me with financial planning?",
  },
  {
    id: 3,
    ques: "How often do I need to meet with you?",
  },
  {
    id: 4,
    ques: " How do I choose the right accounting software?",
  },
  {
    id: 5,
    ques: "How much do you charge for your services?",
  },
];
const blogData4 = [
  {
    id: 1,
    img: "img/blog11_1.png",
    category: "Financial",
    date: "19 Feb 2023",
    title: "5 Key Tips for Smarter Operations Planning Implementation",
  },
  {
    id: 2,
    img: "img/blog11_2.png",
    category: "Technology",
    date: "25 Mar 2023",
    title: "Navigating the Future: Trends in Artificial Intelligence",
  },
  {
    id: 3,
    category: "Health",
    date: "10 Apr 2023",
    title: "Revolutionizing Patient Care: The Impact of Telemedicine",
  },
  {
    id: 4,
    category: "Business",
    date: "05 May 2023",
    title: "Strategic Leadership: Adapting to Dynamic Market Changes",
  },
  {
    id: 5,
    category: "Education",
    date: "21 Jun 2023",
    title: "Innovative Teaching Methods: Shaping the Future of Learning",
  },
];

const skillData = [
  {
    id: 1,
    value: 89,
    title: "Adobe Photoshop",
  },
  {
    id: 2,
    value: 79,
    title: "UI & UX Design",
  },
  {
    id: 3,
    value: 67,
    title: "Adobe Indesign",
  },
  {
    id: 4,
    value: 88,
    title: "Web Devlopment",
  },
  {
    id: 5,
    value: 33,
    title: "WordPress",
  },
  {
    id: 6,
    value: 77,
    title: "DJango",
  },
  {
    id: 7,
    value: 75,
    title: "VB.net",
  },
  {
    id: 8,
    value: 88,
    title: "Angular",
  },
];

const serviceData4 = [
  {
    id: 1,
    imgSrc: "img/service-1.png",
    title: "Pixel Precision",
  },
  {
    id: 2,
    imgSrc: "img/service-2.png",
    title: "Digital Marketing",
  },
  {
    id: 3,
    imgSrc: "img/service-3.png",
    title: "App Development",
  },
  {
    id: 4,
    imgSrc: "img/service-4.png",
    title: "Creative Design",
  },
  {
    id: 5,
    imgSrc: "img/service-5.png",
    title: "SEO Marketing",
  },
  {
    id: 6,
    imgSrc: "img/service-6.png",
    title: "Web Development",
  },
];
const counterData = [
  {
    id: 1,
    imgSrc: "img/review-1.png",
    lightImg: "img/review-5.png",
    value: 5670,
    title: "COMPLETED PROJECTS",
  },
  {
    id: 2,
    imgSrc: "img/review-2.png",
    lightImg: "img/review-6.png",
    value: 5400,
    title: "GLOBAL CUSTOMERS",
  },
  {
    id: 3,
    imgSrc: "img/review-3.png",
    lightImg: "img/review-7.png",
    value: 760,
    title: "SUCCESS CASES",
  },
  {
    id: 4,
    imgSrc: "img/completed-task.png",
    lightImg: "img/review-8.png",
    value: 778,
    title: "COMPLETED PROJECTS",
  },
];
const portfolioData2 = [
  {
    index: 1,
    imgSrc: "img/img.png",
    category: "financial",
    className: "col-md-6",
  },
  {
    index: 2,
    imgSrc: "img/img-2.png",
    category: "chemicals",
    className: "col-md-3 col-6",
  },
  {
    index: 3,
    imgSrc: "img/img-3.png",
    category: "financial",
    className: "col-md-3 col-6",
  },
  {
    index: 4,
    imgSrc: "img/img-4.png",
    category: "insurance",
    className: "col-md-3 col-6",
  },
  {
    index: 5,
    imgSrc: "img/img-5.png",
    category: "manufacturing",
    className: "col-md-3 col-6",
  },
  {
    index: 6,
    imgSrc: "img/img-6.png",
    category: "mining",
    className: "col-md-6",
  },
];

const testimonialData5 = [
  {
    id: 1,
    imgSrc: "img/testimonial-image-1.png",
    name: "S. Wilkinson",
    designation: "Web Designer",
  },
  {
    id: 2,
    imgSrc: "img/testimonial-image-2.png",
    name: "J. Thompson",
    designation: "Software Engineer",
  },
  {
    id: 3,
    imgSrc: "img/testimonial-image-3.png",
    name: "M. Davis",
    designation: "UX Designer",
  },
  {
    id: 4,
    imgSrc: "img/testimonial-image-1.png",
    name: "A. Johnson",
    designation: "Product Manager",
  },
  {
    id: 5,
    imgSrc: "img/testimonial-image-2.png",
    name: "L. Smith",
    designation: "Marketing Specialist",
  },
  {
    id: 6,
    imgSrc: "img/testimonial-image-3.png",
    name: "B. Wilson",
    designation: "Frontend Developer",
  },
];

const blogData5 = [
  {
    id: 1,
    date: "30 April, 2024",
    author: "John Doe",
    title: "Brilliant Apps That Will Make Your Life",
    img: "/img/blog-image-1.jpg",
  },
  {
    id: 2,
    date: "1 May, 2024",
    author: "Jane Smith",
    title: "10 Must-Have Tools for Productivity",
    img: "/img/blog-image-2.jpg",
  },
  {
    id: 3,
    date: "15 May, 2024",
    author: "Alice Johnson",
    title: "Stay Healthy While Working from Home",
    img: "/img/blog-image-3.jpg",
  },
  {
    id: 4,
    date: "20 May, 2024",
    author: "Bob Wilson",
    title: "The Future of Technology",
    img: "/img/blog-image-4.jpg",
  },
];

const serviceData5 = [
  {
    id: 1,
    darkImg: "img/service-7.png",
    lightImg: "img/service-13.png",
    title: "Pixel Precision",
  },
  {
    id: 2,
    darkImg: "img/service-8.png",
    lightImg: "img/service-14.png",
    title: "Digital Marketing",
  },
  {
    id: 3,
    darkImg: "img/service-9.png",
    lightImg: "img/service-15.png",
    title: "App Development",
  },
  {
    id: 4,
    darkImg: "img/service-10.png",
    lightImg: "img/service-16.png",
    title: "Creative Design",
  },
  {
    id: 5,
    darkImg: "img/service-11.png",
    lightImg: "img/service-17.png",
    title: "SEO Marketing",
  },
  {
    id: 6,
    darkImg: "img/service-12.png",
    lightImg: "img/service-18.png",
    title: "Web Development",
  },
];

const featureData = [
  {
    id: 1,
    img: "img/camera.png",
    title: "Photography",
  },
  {
    id: 2,
    img: "img/photograph.png",
    title: "Videography",
  },
  {
    id: 3,
    img: "img/eye.png",
    title: "Photo Retouching",
  },
  {
    id: 4,
    img: "img/l1.png",
    title: "Up Lightening",
  },
  {
    id: 5,
    img: "img/arial.png",
    title: "Arial Photography",
  },
  {
    id: 6,
    img: "img/l2.png",
    title: "Color Grading",
  },
];

const projectData = [
  {
    id: 1,
    img: "img/project/p5_1.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["photography", "video", "model"],
  },
  {
    id: 2,
    img: "img/project/p5_2.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["video", "studio"],
  },
  {
    id: 3,
    img: "img/project/p5_3.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["photography", "model", "studio"],
  },
  {
    id: 4,
    img: "img/project/p5_5.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["photography", "video", "studio"],
  },
  {
    id: 5,
    img: "img/project/p5_4.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["model", "video"],
  },
  {
    id: 6,
    img: "img/project/p5_6.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["photography", "studio"],
  },
  {
    id: 7,
    img: "img/project/p5_7.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["photography", "model", "studio"],
  },
  {
    id: 8,
    img: "img/project/p5_8.jpg",
    title: "Interior Photography",
    titleCategory: "Fashion Design",
    category: ["video", "model"],
  },
];

const blogData6 = [
  {
    id: 1,
    title: "Unlocking the Metaverse",
    img: "/img/pc_blog1.webp",
    date: "10 January 2024",
  },
  {
    id: 2,
    title: "Quantum Computing Leaps",
    img: "/img/pc_blog2.webp",
    date: "12 January 2024",
  },
  {
    id: 3,
    title: "The Frontier of Cybersecurity",
    img: "/img/pc_blog3.webp",
    date: "14 January 2024",
  },
];

const brandData4 = [
  {
    id: 1,
    img: "img/brand1.png",
  },
  {
    id: 2,
    img: "img/brand2.png",
  },
  {
    id: 3,
    img: "img/brand3.png",
  },
  {
    id: 4,
    img: "img/brand4.png",
  },
  {
    id: 5,
    img: "img/brand5.png",
  },
  {
    id: 6,
    img: "img/brand3.png",
  },
  {
    id: 7,
    img: "img/brand5.png",
  },
  {
    id: 8,
    img: "img/brand1.png",
  },
  {
    id: 9,
    img: "img/brand2.png",
  },
  {
    id: 10,
    img: "img/brand4.png",
  },
];

const testimonialData6 = [
  {
    id: 1,
    img: "img/testimonial-image-1.png",
    author: "David Willium",
    designation: "Web Designer",
  },
  {
    id: 2,
    img: "img/testimonial-image-2.png",
    author: "Jennifer Smith",
    designation: "Graphic Designer",
  },
  {
    id: 3,
    img: "img/testimonial-image-3.png",
    author: "John Doe",
    designation: "Front-end Developer",
  },
];

const portfolioData3 = [
  {
    id: 1,
    category: ["photography", "video", "studio"],
    img: "img/project/p2.jpg",
    title: "Interior Photography",
    itemCategory: "Fashion Design",
  },
  {
    id: 2,
    category: ["photography", "model"],
    img: "img/project/p1.jpg",
    title: "Interior Photography",
    itemCategory: "Fashion Design",
  },
  {
    id: 3,
    category: ["photography", "video", "model"],
    img: "img/project/p3.jpg",
    title: "Awesome Layouts",
    itemCategory: "video",
  },
  {
    id: 4,
    category: ["photography", "video", "studio", "model"],
    img: "img/project/p4.jpg",
    title: "Trending Photos",
    itemCategory: "Photography",
  },
  {
    id: 5,
    category: ["photography", "video"],
    img: "img/project/p5.jpg",
    title: "Cool Photography",
    itemCategory: "Photography",
  },
  {
    id: 6,
    category: ["photography", "studio", "model"],
    img: "img/project/p6.jpg",
    title: "Human Creativity",
    itemCategory: "model",
  },
];

const aboutData = [
  {
    id: 1,
    icon: "fa-brands fa-wordpress",
    yearsExperience: 3,
  },
  {
    id: 2,
    icon: "fa-solid fa-code",
    yearsExperience: 2,
  },
  {
    id: 3,
    icon: "fa-brands fa-shopify",
    yearsExperience: 5,
  },
];

const sidebarData = [
  {
    id: 1,
    img: "img/about-img-2.jpg",
  },
  {
    id: 2,
    img: "img/sidebar-2.jpg",
  },
  {
    id: 3,
    img: "img/sidebar-3.jpg",
  },
  {
    id: 4,
    img: "img/sidebar-4.jpg",
  },
  {
    id: 5,
    img: "img/sidebar-5.jpg",
  },
  {
    id: 6,
    img: "img/sidebar-6.jpg",
  },
];

export {
  servicesData,
  educationData,
  teamData,
  videoData,
  testimonialData,
  blogData,
  brandData,
  serviceData2,
  portfolioData,
  brandData2,
  awardData,
  testimonialData2,
  serviceData3,
  trainingProgramData,
  packageData,
  accordionData,
  trainingGalleryData,
  testimonialData3,
  blogData2,
  igPosts,
  caseStudyData,
  testimonialData4,
  brandData3,
  faqData,
  blogData3,
  blogData4,
  skillData,
  serviceData4,
  counterData,
  portfolioData2,
  testimonialData5,
  blogData5,
  serviceData5,
  featureData,
  projectData,
  blogData6,
  brandData4,
  testimonialData6,
  portfolioData3,
  aboutData,
  sidebarData,
};
