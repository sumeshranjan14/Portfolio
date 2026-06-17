export const resumeData = {
    name: "Sumesh Ranjan",
    role: "Software Engineer | Java | Full-Stack Developer",
    email: "sumeshranjan007@gmail.com",
    phone: "+91 6202769571",
    location: "Dehradun, Uttarakhand",
    linkedin: "https://www.linkedin.com/in/sumesh-ranjan/",
    github: "https://github.com/sumeshranjan14",
    summary: "Computer Science undergraduate and IEEE Student Branch Chair with hands-on expertise in full-stack and software development (Java, Spring Boot, MERN Stack). Built production-grade projects involving distributed systems and real-time web applications. Active participant in 10+ hackathons with demonstrated ability to deliver complex technical solutions from concept to deployment.",
    skills: {
        languages: ["Java (Core & Advanced)", "C++", "JavaScript (ES6+)"],
        backendFrameworks: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Multithreading", "Distributed Systems"],
        frontendWeb: ["React.js", "HTML5", "CSS3", "Firebase"],
        databases: ["MongoDB", "MySQL", "Firebase"],
        csFundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"],
        tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"]
    },
    projects: [
        {
            title: "UPI Offline Mesh Payment Simulator",
            tech: "Java 17, Spring Boot, Distributed Systems",
            description: "Built a proof-of-concept offline payment infrastructure enabling transactions to propagate through a peer-to-peer mesh network until reaching a connected bridge node. Secured transactions using RSA-2048 key exchange, AES-256-GCM authenticated encryption, SHA-256 hashing, nonce generation, and timestamp validation — preventing replay attacks and ciphertext tampering. Implemented idempotent transaction processing to handle concurrent packet deliveries while guaranteeing single settlement, eliminating double-spend risk. Developed a real-time web dashboard for mesh propagation visualization, bridge uploads, account balances, and transaction ledgers. Wrote automated tests covering encryption integrity, replay-attack prevention, and concurrent duplicate transaction handling.",
            link: "https://upi-without-internet-tr6k.onrender.com/",
        },
        {
            title: "SnapCart — Smart Checkout Web Application",
            tech: "MERN Stack, Firebase, Express.js",
            description: "Engineered a barcode-scan-based checkout system enabling customers to manage carts in real-time and complete digital payments — eliminating billing queue wait times for retail stores. Built a store-owner dashboard featuring inventory management, live transaction monitoring, and operational analytics — reducing manual reconciliation effort. Deployed full-stack application on Vercel (frontend), Firebase authentication and real-time database sync.",
            link: "https://github.com/sumeshranjan14/snapcart.git",
        },
        {
            title: "Personal Portfolio Website",
            tech: "React.js, JavaScript, HTML, CSS, Vercel",
            description: "Designed and developed a fully responsive personal portfolio website to showcase projects, technical skills, certifications, and achievements. Built an interactive user interface with modern web technologies, ensuring seamless performance across desktop, tablet, and mobile devices. Integrated project showcases, resume access, contact section, and social media links to improve professional visibility and networking opportunities. Optimized website performance, navigation, and user experience for faster loading times and enhanced accessibility. Deployed and maintained the portfolio on Vercel with continuous updates for projects, certifications, and technical accomplishments. Implemented clean component-based architecture and responsive design principles to ensure scalability and maintainability.",
            link: "https://github.com/sumeshranjan14/Portfolio.git",
        },
    ],
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Tula's Institute (Dhoolkot), Dehradun, Uttarakhand",
            year: "2023 – Present",
            score: "",
        },
        {
            degree: "Intermediate — Class XII",
            institution: "RJHS Keoti-Banwari, Bihar",
            year: "2022 – 2023",
            score: "",
        },
    ],
    certificates: [
        "Full Stack Web Development — MERN Stack (Grade A) | HTA World / KRISHNOVA LLP (NVIDIA Developer Program Member) — Nov 2025",
        "MongoDB Developer Certification — Augmend Solutions Pvt. Ltd.",
        "Generative AI — Simplilearn & Google",
        "Finalist IEEE YESIST12 , 2026",
    ],
    leadership: [
        {
            role: "Chair",
            organization: "IEEE Student Branch, Tula's Institute, Dehradun, Uttarakhand",
            year: "2025 – Present",
            points: [
                "Lead and manage IEEE SB chapter of 100+ student members, organizing technical workshops, coding competitions, and guest lectures to strengthen campus engineering culture.",
                "Coordinate cross-functional student teams for end-to-end event planning and execution, bridging the gap between academic learning and industry practice."
            ]
        },
        {
            role: "Member",
            organization: "Vibgyor Student Council & Drama Club, Tula's Institute, Dehradun, Uttarakhand",
            year: "2023 – 2025",
            points: [
                "Contributed to student governance, large-scale event management, and collaborative activities across 2 years.",
                "Performed in 10+ events across the state, showcasing versatility in acting and stage presence.",
                "Trained new members in acting techniques and performance skills, enhancing overall team capability."
            ]
        },
    ],
    languages: ["English", "Hindi"],
};

