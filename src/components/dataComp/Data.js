import BonzImage from '../../assets/image1.jpg'
import MyMovieDataBaseImage from '../../assets/najibmuhammadi.jpeg'

const Projects = [
    {
        id: 1,
        projectTitle: 'bonz.ai',
        projectSubtitle: 'En hotellwebbaplikation kallad "Bonz.ai". Den inkluderar en navigationsmeny, en hero-sektion, en bokningsdel, information om hotellet, olika rum med bilder och priser, en karta för hotellets plats och en fotosektion med kontaktinformation och sociala medielänkar',
        projectSkills: [
            {src: 'https://skillicons.dev/icons?i=html', alt: 'html' },
            {src: 'https://skillicons.dev/icons?i=css', alt: 'css' },
            {src: 'https://skillicons.dev/icons?i=javascript', alt: 'Javascript' }
        ],
        projectImage: BonzImage
    },
    {
        id: 2,
        projectTitle: 'MyMovieDataBase',
        projectSubtitle: 'En webbapplikation som fokuserar på filmhantering med hjälp av Api. Användare kan söka efter filmer, lägga till dem i sina favoriter, bläddra bland populära filmer och läsa information om dem.',
        projectSkills: [
            {src: 'https://skillicons.dev/icons?i=php', alt: 'Php' },
            {src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node js' },
            {src: 'https://skillicons.dev/icons?i=github', alt: 'Github' }
        ],
        projectImage: MyMovieDataBaseImage
    }
]

export default Projects