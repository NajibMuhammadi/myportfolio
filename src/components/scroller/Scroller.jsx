import './scroller.css'
import ScrollerTopBack from '../backgroundsComp/scrollerTopBack/scrollerTopBack'
import { initializeScrollers, CleanUpScroller } from './scroller.js'
import { useEffect } from 'react'

const skills = [
    {src: 'https://skillicons.dev/icons?i=html', alt: 'html' },
    {src: 'https://skillicons.dev/icons?i=css', alt: 'css' },
    {src: 'https://skillicons.dev/icons?i=javascript', alt: 'Javascript' },
    {src: 'https://skillicons.dev/icons?i=php', alt: 'Php' },
    {src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node js' },
    {src: 'https://skillicons.dev/icons?i=github', alt: 'Github' },
]

function Scroller({ title }) {
    useEffect(() => {
        initializeScrollers();
        return () => {
            CleanUpScroller();
        }; 
    }, []);
    return (
        <section className='Kompetens-container'>
            <ScrollerTopBack />
            <div className='scroller'>
                <h2 className='scroller__title'>{title}</h2>
                <div className="scroller__container" data-speed="fast">
                    <ul className="scroller__tag-list scroller__inner">
                        {skills.map((skill, index) => (
                            <img key={index} src={skill.src} alt={skill.alt} className='scroller___tag-img' />
                        ))}
                    </ul>
                </div>
                <div className="scroller__container" data-direction="right" data-speed="slow">
                    <ul className="scroller__tag-list scroller__inner">
                        {skills.map((skill, index) => (
                            <img key={index} src={skill.src} alt={skill.alt} className='scroller___tag-img' />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Scroller
