import './about.css'

const AboutImage = ({src, alt}) => (
    <img className='about__image' src={src} alt={alt} />
)
export const AboutTitle = ({title}) => (
    <h2 className='about__title'>{title}</h2>
)
const AboutSubtitle = ({subtitle, highlight}) => (
    <h3 className='about__subtitle'>{subtitle}
        <span className='about__highlight'>{highlight}</span>
    </h3>
)
const AboutInfo = ({info}) => (
    <p className='about__info'>{info}</p>
)
const AboutBtn = ({ btn }) => (
    <button className='about__btn'>{btn}</button>
)
function About({
    imageSrc,
    imageAlt,
    title,
    subtitle,
    highlight,
    info,
    btn
}) {
    return (
        <section className='about' id='about'>
            <div className='about__content'>
                <AboutImage src={imageSrc} alt={imageAlt} />
                <div className='about__content-text'>
                    <AboutTitle title={title}/>
                    <AboutSubtitle subtitle={subtitle} highlight={highlight}/>
                    <AboutInfo info={info} />
                    <AboutBtn btn={btn}/>
                </div>
            </div>
        </section>
    )
}

export default About
