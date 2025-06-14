import Work1 from '../../assets/portfolio.png'
import Work2 from '../../assets/xagent.png'
import Work3 from '../../assets/chatbot.png'
import Work4 from '../../assets/conare.png'
import Work5 from '../../assets/genexp.png'
// import Work5 from '../../assets/martapp.png'
import Work6 from '../../assets/tmapp.png'
// import Work7 from '../../assets/techmarvy.png'

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Portfolio Website",
        category: "web",
        description: "A visually captivating and user-friendly portfolio website showcasing a diverse collection of creative projects and accomplishments, highlighting my unique talents and expertise.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        demo: 'https://ansh-raj-sharma.vercel.app/'
    },
    {
        id: 2,
        image: Work2,
        title: "xAgent Using MCP",
        category: "app",
        description: "xAgent is a mobile-first, multi-agent AI system powered by LLMs, featuring real-time chat, coding, and finance built with LangGraph workflows and MCP.",
        technologies: ['Dart', 'Flutter', 'Bloc', 'Python', 'FastAPI', 'Supabase', 'LangChain', 'LangGraph', 'MCP'],
        demo: 'https://github.com/anshRS/xautoflow'
    },
    {
        id: 3,
        image: Work3,
        title: "Chatbot Using RAG",
        category: "AI",
        description: "Developed a chatbot using RAG pipeline that leverages the llama2 model for processing user queries and generating responses.",
        technologies: ['Next JS 14', 'TypeScript', 'TailwindCSS', 'Django', 'PostgreSQL', 'LangChain', 'LLaMA', 'Docker'],
        demo: 'https://github.com/anshRS/chatbot'
    },
    {
        id: 4,
        image: Work4,
        title: "Social Media Website",
        category: "web",
        description: "Unleash a seamless social networking experience with authentication. Connect, explore, create, and customize your journey with friends, profiles, posts, and light/dark modes.",
        technologies: ['React', 'MUI', 'Node js', 'Express js', 'MongoDB'],
        demo: 'https://github.com/anshRS/conare'
    },
    {
        id: 5,
        image: Work5,
        title: "Recruitment Website",
        category: "web",
        description: "A fully functional project developed to have an effective, flexible and versatile recruiting application in order to provide better experience for the recruitment process.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Django'],
        demo: 'https://genexp.vercel.app/'
    },
    // {
    //     id: 5,
    //     image: Work5,
    //     title: "Flutter E-Commerce App",
    //     category: "app",
    //     description: "An all-inclusive Full Stack Shopping App with a robust Admin Panel, empowering users seamless browsing, and personalized shopping experience.",
    //     technologies: ['Flutter', 'Provider', 'Node js', 'Express js', 'MongoDB'],
    //     demo: 'https://github.com/anshRS/martapp'
    // },
    {
        id: 6,
        image: Work6,
        title: "TechMarvy CTM App",
        category: "app",
        description: "TechMarvy CTM Flutter app exemplifies seamless navigation, proficient data fetching, and real-time graph plotting & analysis capabilities, empowering users to access and interpret dynamic data with precision and efficiency.",
        technologies: ['Flutter', 'Provider', 'Charts_Flutter'],
        demo: 'https://www.canva.com/design/DAFpiYTttvA/dPPVAZhoUFcWk3CAQUsVYA/watch?'
    },
    // {
    //     id: 7,
    //     image: Work7,
    //     title: "TechMarvy Website",
    //     category: "web",
    //     description: "Built a fully responsive UI of the website for Techmarvy Solutions Company along with deployment and the implementation of Google Analytics.",
    //     technologies: ['React', 'MUI', 'JavaScript', 'HTML', 'CSS'],
    //     demo: 'https://techmarvy.com/'
    // },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'AI',
    },
]