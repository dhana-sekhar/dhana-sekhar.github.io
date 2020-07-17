
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dhana Sekhar",
  title: "Hi all, I'm Sekhar",
  subTitle: emoji("I'm a highly motivated and passionate Artificial Intelligence developer 🚀 with 2+ years of experience in designing and developing state of the art Machine Learning and Deep Learning algorithms by building complicated neural networks. In-depth understanding of entire project development life-cycle from development to production."),
  resumeLink: "https://drive.google.com/file/d/0BzjwZEI6cpMqV0lQQU1xQXlBSGs/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/SekharDhana",
  linkedin: "https://www.linkedin.com/in/dhanasekhar-buddha-825a61114/",
  gmail: "buddha.dhanasekhar@gmail.com",
  twitter: "https://twitter.com/dhanasekhar_b",
  instagram: "https://www.instagram.com/dhanasekhar_buddha/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Data Science and Artificial Intelligence ",
  skills: [
    emoji("⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases"),
    emoji("⚡ Experience of working with Computer Vision, NLP and speech recognition projects"),
    emoji("⚡ Complex quantitative modelling for dynamic forecasting and time series analysis")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",   
      company: "Miracle Software Systems, Inc",
      companylogo: require("./assets/images/miracle.jpeg"),
      date: "May 2017 – July 2017",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Artificial Intelligence Developer",  
      company: "Black Cactus Global",
      companylogo: require("./assets/images/bcgt_logo.png"),
      date: "May 2018 – Feb 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    
    {
      role: "Artificial Intelligence Developer",  
      company: "Cognitive Innovations Labs Private Limited",
      companylogo: require("./assets/images/cognitive.jpeg"),
      date: "Feb 2019 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sekhardhana", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "Open Source projects that i have build with Python, Machine Learning and Deep Learning  ",
  projects: [
    {
      image: require("./assets/images/python_logo.jpeg"),
      link: "https://github.com/SekharDhana/python3"
    },
    {
      image: require("./assets/images/machine_learning.jpg"),
      link: "https://github.com/SekharDhana/Machine_Learning"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "IBM PYTHON CERTIFICATION",
      subtitle: "IBM certified python developer .",
      image: require("./assets/images/ibm_logo.svg"),
      footerLink: [
        { name: "Certification", url: "https://www.youracclaim.com/badges/2218d89b-07a3-42d4-8b8b-216a587056d1/public_url" },
        { name: "Award Letter", url: "https://courses.cognitiveclass.ai/certificates/3b895fae010743b19fac2c25bb512578" }
      ]
    },
    {
      title: "Amazon Web Services",
      subtitle: "AWS certified Machine Learning expert",
      image: require("./assets/images/aws_logo.svg"),
      footerLink: [{ name: "View Certificate", url: "https://drive.google.com/file/d/1pG0IlmDhIR90UlQ8mhwFLsaZanLZBI9n/view?usp=sharing" },
      { name: "verify Certificate", url: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=u26MWxfAJE-cCyi339K_uw2" }

]
    },

    {
      title: "A.I in Production",
      subtitle: "Created A.I models and did unit testing and performance tesing and deployed in production",
      image: require("./assets/images/ibm_logo.svg"),
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/verify/482BU5JT873G" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@dhanasekhar.media/the-zen-of-python-programmers-guide-to-pythons-design-principles-b68c74d7e43f",
      title: "The Zen of Python: Programmers guide to Python’s Design Principles",
      description: "Good coding habits will make you and your team happy, We say a code is clean when it is understood by everyone in your team which makes the code read, enhance, and reuse by your teammates."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "ML with amazon segmaker",
      subtitle: "Jupyter notebooks for Machine Learning with Amazon Segmaker"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO HEAR TECH STUFF",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmNvZGVuZXdiaWUub3JnL2Jhc2Vjc19wb2RjYXN0LnhtbA"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8985886655",
  email_address: "buddha.dhanasekhar@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "dhanasekhar_b"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
