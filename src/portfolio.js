/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parth Singh",
  title: "Hi all, I'm Parth Singh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/parthsi17",
  linkedin: "https://www.linkedin.com/in/parth-singh-a67003186/",
  gmail: "parth.singh564@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in MERN and MEAN Stacks"),
    emoji(
      "⚡ Integration of third party services such as Payment Services like PineLabs or Cashfree/ AWS / Banking tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass & tailwind",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL/NO-SQL(mongoDB)-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bangalore Technological Institute",
      logo: require("./assets/images/collegeLogo.png"),
      subHeader: "Bachelors in Computer Science Engineering",
      desc: "Completed a Bachelor’s in Computer Science and Engineering, focusing on Data Structures & Algorithms, System Design, and DBMS. Developed projects including an e-commerce website, a data analysis platform, and an AI-based market prediction system. Gained hands-on experience in full-stack web development, database management, and machine learning techniques.",
    },
    {
      schoolName: "Narayana Pre-University",
      logo: require("./assets/images/narayanaLogo.jpeg"),
      subHeader: "PCMC",
      desc: "Studied PCMC course i.e Physics, Chemistry, Math, Computer Science. Took courses about Software Engineering, C Programming, Operating Systems.",
    },
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/aps.jpeg"),
      subHeader: "CBSE Board",
      desc: "Completed studies until 10th grade under CBSE Board",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Decorpot",
      companylogo: require("./assets/images/decor_new_logo.png"),
      date: "March 2023 – Present",
      desc: "",
      descBullets: [
        ""
      ]
    },
    {
      role: "Junior Developer",
      company: "Naraci",
      companylogo: require("./assets/images/naraciLogo.png"),
      date: "Oct 2022 – March 2023",
      desc: ""
    },
    {
      role: "Software Engineer Intern",
      company: "Deccan Fire Services",
      companylogo: require("./assets/images/DFSLogo.png"),
      date: "Jan 2021 – Oct 2022",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo-small.png"),
      projectName: "DECORPOT ERP",
      projectDesc: "I contributed to the development and implementation of an ERP system that optimized the company’s operations. By creating a unified platform, that ensured seamless data flow across departments—finance, HR, sales, inventory, and production—leading to greater efficiency, improved decision-making, and enhanced collaboration. This integrated system streamlined processes, reduced redundancy, and ensured all teams had access to consistent, real-time data. (Worked with React,MongoDB, express and Node js )",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://erp.decorpot.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dplogo.png"),
      projectName: "Quotation/Snag Tool",
      projectDesc: "Contributed to the development and ongoing enhancement of the Quotation & Snag Tool, an internal platform for creating quotations and service tickets across departments. Worked with cross-functional teams to improve functionality, streamline issue tracking (Worked with Angular, MongoDB, Node and express js)",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://3.108.93.137:8080/#/login"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
  
    {
      title: "Scalar Node JS Cource Certification",
      subtitle:"Developed web apps with CRUD API's, JWT token and AWS concepts using express and Node JS",
      image: require("./assets/images/node.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://moonshot.scaler.com/s/sl/anCvIoA4eF?_gl=1*uo7obr*FPAU*MjgzMTA4MDQuMTczOTgwMTg5Mg..*_ga*MTQyMzI4Njc3Mi4xNzMxOTIyMTQx*_ga_53S71ZZG1X*MTc0MzYwODczMS41OS4xLjE3NDM2MTExOTkuMC4wLjExMDAwMTM5NDU"
        }
      ]
    },
    {
      title: "Scalar React Cource Certification",
      subtitle: "Completed certification from Scalar and successfully developed and deployed a project on Netlify, showcasing strong technical skills and hands-on experience with react",
      image: require("./assets/images/react.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://moonshot.scaler.com/s/sl/Y8_SLiVUuo?_gl=1*1k8iki5*_gcl_au*MTM1ODk5OTg4OS4xNzQ3NDExMDcw*FPAU*MTgyOTY3NzAxOC4xNzQ1MDY5NTgz*_ga*MTM5NzM3NDg3Ny4xNzQ1MDY5NTc5*_ga_53S71ZZG1X*czE3NDc2NTgzOTkkbzM1JGcxJHQxNzQ3NjU4OTkzJGowJGwwJGgxNzEzODc3MTQw"},
        {
          name: "Final Project",
          url: "https://imdbclonebyparthsingh.netlify.app/"
        }
      ]
    },
    {
      title: "Scalar DBMS Certification ",
      subtitle:
        "Gained expertise in NoSQL and SQL database architecture, schema design, and best practices for developing efficient data pipelines and APIs. Gained hands-on experience with MongoDB, designing and implementing robust solutions for data retrieval (GET), insertion (POST), and updates (PUT) through optimized queries and API integrations.",
      image: require("./assets/images/mongo.jpeg"),
      imageAlt: "Scalar DBMS Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://moonshot.scaler.com/s/sl/fUlyxjUrlM?_gl=1*1e34eqe*_gcl_au*MTM4ODI4OTEwLjE3MzE5MjIxNDA.*FPAU*MTM4ODI4OTEwLjE3MzE5MjIxNDA.*_ga*MTQyMzI4Njc3Mi4xNzMxOTIyMTQx*_ga_53S71ZZG1X*MTczNTU2NzAxOC4yOS4xLjE3MzU1NzUzMTcuMC4wLjk1NzI3ODY"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8073597221",
  email_address: "parth.singh564@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
