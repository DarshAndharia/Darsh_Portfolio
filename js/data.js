/* ===== PORTFOLIO DATA - Edit this file to update your content ===== */
const PORTFOLIO_DATA = {

  /* ---------- PERSONAL INFO ---------- */
  personal: {
    name: "Darsh",
    firstName: "Darsh",
    lastName: "Andharia",
    role: "D2D Student & Developer",
    typedRoles: "D2D Student,Web Developer,Problem Solver,Tech Enthusiast",
    tagline: "Diploma to Degree — engineering my future one project at a time.",
    email: "andhariadarsh@gmail.com",
    phone: "+91 9978935252",
    location: "Bhavnagar, Gujarat, India",
    github: "https://github.com/DarshAndharia",
    linkedin: "https://www.linkedin.com/in/darsh-bhavik-andharia/",
    profileImage: "images/profile/photo.JPG",  // Replace with your photo
    stats: {
      projects: "10+",
      internships: "4+",
      achievements: "5+"
    }
  },

  /* ---------- EDUCATION ---------- */
  education: [
    {
      id: "edu1",
      degree: "B.Tech. Computer Science Engineering (D2D – Lateral Entry)",
      school: "Gyanmanjari Institute of Technology (GMIU), Bhavnagar",
      location: "Bhavnagar, Gujarat",
      year: "2024 – 2027 (Currently Pursuing)",
      grade: "CGPA: 7.54 / 10 (Latest Semester)",
      description: "Pursuing B.Tech. through the Diploma to Degree (D2D) lateral entry program, directly admitted to 2nd year. Studying advanced subjects including Data Structures, Algorithms, DBMS, Operating Systems, Web Development, and AI/ML.",
      image: "images/academics/result_semester.png",
      courses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Web Dev", "AI/ML", "Computer Networks"],
      achievements: "Lateral Entry – Direct 2nd Year Admission"
    },
    {
      id: "edu2",
      degree: "Diploma in Computer Engineering",
      school: "Gyanmanjari Diploma Engineering College (GTU), Bhavnagar",
      location: "Bhavnagar, Gujarat",
      year: "2021 – 2024",
      grade: "CGPA: 8.02 / 10 (First class with Distinction)",
      description: "Completed a 3-year Diploma in Computer Engineering from a recognized polytechnic institute. Gained strong practical knowledge in programming, networking, and hardware fundamentals which formed the foundation for the D2D pathway.",
      image: "images/academics/diploma_result.jpg",
      courses: ["C Programming", "Data Structures", "Digital Electronics", "Networking", "Web Design", "Database Management"],
      achievements: "Completed Diploma with First class with Distinction — Qualified for D2D Lateral Entry"
    },
    {
      id: "edu3",
      degree: "Pre Primary to Secondary (LKG to 10th – GSEB)",
      school: "KPES English Medium School",
      location: "Bhavnagar, Gujarat",
      year: "2009 – 2021",
      grade: "Percentage: 72%",
      description: "Completed SSC with distinction from GSEB and developed an early interest in computers and technology.",
      image: "images/academics/ssc_result.png",
      courses: ["Mathematics", "Science", "Computer", "Social Studies"],
      //achievements: "School Topper in Mathematics"
    }
  ],

  /* ---------- INTERNSHIPS ---------- */
  internships: [
    {
      id: "int5",
      title: "Python Developer Intern",
      company: "Vault of Codes (in partnership with Google) ",
      location: "Remote",
      duration: "01 July 2025 – 01 August 2025",
      type: "Remote Internship",
      description: "Participated in a 4-week intensive internship program focused on Python development, working on real-world projects and collaborating with a global team of interns.",
      image: "images/internships/internship5.jpg",
      tech: ["Python", "PostgreSQL", "Git"],
      responsibilities: [
        "Developed Python applications and scripts to automate tasks and improve efficiency",
        "Implemented database interactions using PostgreSQL and SQLAlchemy",
        "Collaborated with a global team of interns using Agile methodologies and version control with Git",
        "Participated in code reviews and received mentorship from experienced developers at Vault of Codes and Google"
      ],
      certificate: "Internship Certificate from Vault of Codes (in partnership with Google)"
    },
    {
      id: "int4",
      title: "Flutter Development Intern",
      company: "Quicksend",
      location: "Bhavnagar, Gujarat",
      duration: "02 June 2025 – 20 June 2025",
      type: "Onsite Internship",
      description: "Worked on building Flutter applications for mobile platforms.",
      image: "images/internships/internship4.jpg",
      tech: ["Dart", "Flutter", "Git"],
      responsibilities: [
        "Built responsive UI components with Flutter",
        "Implemented state management using Provider",
        "Integrated third-party APIs and services",
        "Participated in daily stand-ups and sprint planning"
      ],
      certificate: "Internship Certificate from Quicksend"
    },
    {
      id: "int3",
      title: "Web Development Intern",
      company: "ParShiv TechHub",
      location: "Bhavnagar, Gujarat",
      duration: "20 December 2024 – 05 January 2025",
      type: "Onsite Internship",
      description: "Worked on building responsive front-end and Back-end interfaces. Collaborated with a team of 5 developers using Agile methodology.",
      image: "images/internships/internship3.jpg",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      responsibilities: [
        "Built responsive UI components with Bootstrap",
        "Participated in daily stand-ups and sprint planning",  
        "Implemented server-side logic with PHP and MySQL",
        "Collaborated with cross-functional teams to define and design new features"
      ],
      certificate: "Internship Certificate from ParShiv TechHub"
    },
    {
      id: "int2",
      title: "Web Development Intern",
      company: "DiGiQ Technology",
      location: "Bhavnagar, Gujarat",
      duration: "27 July 2023 – 06 November 2023",
      type: "Onsite Internship",
      description: "Worked on building responsive front-end interfaces. Collaborated with a team of 5 developers using Agile methodology.",
      image: "images/internships/internship2.jpg",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Git"],
      responsibilities: [
        "Built responsive UI components with Bootstrap",
        "Participated in daily stand-ups and sprint planning"
      ],
      certificate: "Internship Certificate from DiGiQ Technology"
    },
    {
      id: "int1",
      title: "Python Developer Intern (Django)",
      company: "Baronial Talent Builders Pvt. Ltd.",
      location: "Ahmedabad, Gujarat",
      duration: "17 September 2022 – 01 October 2022",
      type: "Remote Internship",
      description: "Worked on learning python basic Django.",
      image: "images/internships/internship1.jpg",
      tech: ["Python", "Django", "Git"],
      responsibilities: [
        "Learned Python basics and Django framework",
        "Built a simple web application using Django",
        "Collaborated with mentors and peers in code reviews",
        "Gained hands-on experience with version control using Git"
      ],
      certificate: "Internship Certificate from Baronial Talent Builders Pvt. Ltd."
    }
  ],

  /* ---------- PROJECTS ---------- */
  projects: [
    {
      id: "proj1",
      title: "RapidRespiro AI",
      category: "Deep Learning & Computer Vision",
      description: "A high-performance medical diagnostic tool that utilizes an ensemble deep learning architecture to identify pneumonia from chest X-ray images, providing clinical decision support through visual interpretability.",
      image: "images/projects/rapidrespiro-ai.png", // Using your profile image path or a project screenshot later
      tech: ["Python", "PyTorch", "CUDA", "HTML", "CSS", "JavaScript"],
      //github: "https://github.com/yourusername/RapidRespiro-AI", // Update with your actual repo link
      live: "", 
      featured: true,
      highlights: [
        "Achieved 89.9% diagnostic accuracy using an ensemble of DenseNet121 and ResNet34 architectures",
        "Leveraged NVIDIA CUDA computing to accelerate model inference and minimize processing latency",
        "Implemented Grad-CAM heatmaps and ROI bounding boxes for localized visual interpretability",
        "Designed a high-contrast, professional web interface for seamless X-ray uploads and real-time confidence scores"
      ]
    },
    {
      id: "proj2",
      title: "Shopping_Portal: E-Commerce Web Application",
      category: "Full Stack Development",
      description: "A dynamic full-stack e-commerce web platform featuring a robust product catalog, secure multi-level shopping cart, and a dedicated administrative inventory control panel.",
      image: "images/projects/shopping-portal.png", // Update this path with your project screenshot
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
      //github: "https://github.com/yourusername/shopping-portal", // Update with your actual repo link
      live: "", 
      featured: true,
      highlights: [
        "Developed secure user authentication and a multi-level shopping cart system with persistent wishlists",
        "Architected an RDBMS database structure in MySQL to handle relational data for products, categories, users, and orders",
        "Built a comprehensive Admin Dashboard for real-time inventory control (CRUD operations) and customer order tracking",
        "Implemented client-side validation and a fully responsive interface using Bootstrap for seamless cross-device compatibility"
      ]
    },
    {
      id: "proj3",
      title: "Weather Dashboard",
      category: "API Project",
      description: "Real-time weather app using OpenWeatherMap API with 5-day forecast, search, and location detection.",
      image: "images/projects/weather-dashboard.png", // Update this path with your project screenshot
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      //github: "https://github.com/yourusername/weather-app",
      live: "",
      featured: false,
      highlights: [
        "Live weather data from OpenWeatherMap API",
      ]
    }
  ],

  /* ---------- ACHIEVEMENTS ---------- */
  achievements: [
    {
      id: "ach1",
      title: "Project showcase – College Tech Fest (TechManjari 2026)",
      issuer: "Gyanmanjari Innovative University",
      date: "March 2026",
      description: "Partisipation in TechManjari 2026.RapidRespiro AI project was showcased in the college tech fest, receiving positive feedback from judges and attendees.",
      image: "images/achievements/techfest2.jpg",
      icon: "🥇",
      category: "Certification"
    },
    {
      id: "ach2",
      title: "Smart India Hackathon – participation",
      issuer: "Government of India",
      date: "September 2025",
      description: "Selected from College from 50 groups in Smart Attendance system.",
      image: "images/achievements/sih.jpeg",
      icon: "🏆",
      category: "Hackathon"
    },
    {
      id: "ach3",
      title: "Inter-Collage carrom Tournament – Participation",
      issuer: "Gyanmanjari Innovative University",
      date: "2025",
      description: "Partisipation in inter-collage tournament.",
      image: "images/achievements/intrcct.jpg",
      icon: "🎯",
      category: "Participation"
    },
    {
      id: "ach4",
      title: "Project showcase – College Tech Fest (TechManjari 2023)",
      issuer: "Gyanmanjari Innovative University",
      date: "2023",
      description: "Partisipation in TechManjari 2023.",
      image: "images/achievements/techfest1.jpeg",
      icon: "⭐",
      category: "Certification"
    }
  ]
};
