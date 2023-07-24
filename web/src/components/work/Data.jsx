import Work1 from '../../assets/portfolio.png'
import Work2 from '../../assets/conare.png'
import Work3 from '../../assets/genexp.png'
import Work4 from '../../assets/techmarvy.png'
import Work5 from '../../assets/martapp.png'
import Work6 from '../../assets/tmapp.png'

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
        title: "Social Media Website",
        category: "web",
        description: "Unleash a seamless social networking experience with authentication. Connect, explore, create, and customize your journey with friends, profiles, posts, and light/dark modes.",
        technologies: ['React', 'MUI', 'Node js', 'Express js', 'MongoDB'],
        demo: 'https://github.com/anshRS/conare'
    },
    {
        id: 3,
        image: Work3,
        title: "Recruitment Website",
        category: "web",
        description: "A fully functional project developed to have an effective, flexible and versatile recruiting application in order to provide better experience for the recruitment process.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Django'],
        demo: 'https://genexp.vercel.app/'
    },
    {
        id: 4,
        image: Work4,
        title: "TechMarvy Website",
        category: "web",
        description: "Built a fully responsive UI of the website for Techmarvy Solutions Company along with deployment and the implementation of Google Analytics.",
        technologies: ['React', 'MUI', 'JavaScript', 'HTML', 'CSS'],
        demo: 'https://techmarvy.com/'
    },
    {
        id: 5,
        image: Work5,
        title: "Flutter E-Commerce App",
        category: "app",
        description: "An all-inclusive Full Stack Shopping App with a robust Admin Panel, empowering users seamless browsing, and personalized shopping experience.",
        technologies: ['Flutter', 'Provider', 'Node js', 'Express js', 'MongoDB'],
        demo: 'https://github.com/anshRS/martapp'
    },
    {
        id: 6,
        image: Work6,
        title: "TechMarvy CTM App",
        category: "app",
        description: "TechMarvy CTM Flutter app exemplifies seamless navigation, proficient data fetching, and real-time graph plotting & analysis capabilities, empowering users to access and interpret dynamic data with precision and efficiency.",
        technologies: ['Flutter', 'Provider', 'Charts_Flutter'],
        demo: 'https://www.canva.com/design/DAFpiYTttvA/dPPVAZhoUFcWk3CAQUsVYA/watch?'
    },
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
    // {
    //     name: 'design',
    // },
]