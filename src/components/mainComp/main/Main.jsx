import './main.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ContentTitle = () => <h1 className='main__content-title'>Frontend</h1>
const ContentHighlight = () => <span className='main__content-highlight'>Utvecklare</span>

const ContentSubtitle = () => <p className='main__content-subtitle'>Hej! Jag heter Najib Muhammadi, en frontend-utvecklare och student på yrkeshögskola i karlstad. Med min kreativa problemlösningsförmåga och min förmåga att arbeta självständigt eller i ett team, är jag redo att ta mig in i nya utmaningar inom frontendutveckling</p>

const allLinks = [
    { href: "https://github.com/NajibMuhammadi", Icon: FaGithub},
    { href: "https://www.linkedin.com/in/najibullah-muhammadi-36886628a/", Icon: FaLinkedin }
];
  
function Main() {
    return (
        <main className='main' id='home'>
            <div className='main__content'>
                <ContentTitle />
                <ContentHighlight />
                <ContentSubtitle />
                <div className='main__content-social'>
                    {allLinks.map(({ href, Icon }, index) => {
                        return (
                            <a key={index} className='header__social-link' href={href}>
                                <Icon className='header__social-icon' />
                            </a>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Main
