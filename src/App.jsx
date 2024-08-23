import './App.css'

import Header from './components/headerComp/header/Header'
import Main from './components/mainComp/Main/Main'
import MainBackground from './components/backgroundsComp/mainBackground/MainBackground'
import Scroller from './components/scroller/Scroller.jsx'
import About from './components/aboutComp/hero/About'
import Project from './components/projectComp/Project.jsx'

import AboutImage from './assets/najibmuhammadi.jpeg'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <MainBackground />
      <About
        imageSrc={AboutImage}
        imageAlt="A descriptive alt text for the hero image"
        title="About me"
        subtitle="Frontend Utvecklare + "
        highlight="Studerar"
        info="Jag heter Najibullah (Najib) Muhammadi, är 20 år gammal. en frontend-utvecklare med lite erfarenheter i backend-utveckling och student på yrkeshögskola i Karlstad. Jag har ett stort intresse för teknik och en passion för att skapa högkvalitativa, användarvänliga webbplatser. Med min kreativa problemlösningsförmåga omvandlar jag dina idéer till effektiva och stilrena digitala lösningar."
        btn="Let's talk"
      />
      <Scroller title="Kompetens" />
      <Project
        id={1}
        title="Project"
        subtitle="mina favoritprojekt"
        showBackground={true}
        MarginNone= {true}
      />
      <Project
        id={2}
        showBackground={false}
        MarginNone= {false}
      />
      <Footer/>
    </div>
  )
}

export default App
