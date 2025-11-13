import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Funfacts = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  }) 

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Key Facts</h1>
        <h2 className="text-xl leading-10">Osei Kofi Tutu I (c. 1660 – c. 1717) was one of the founders of the Ashanti Empire, 
          ruling the Kwaman State between c.1680 and 1701, and the Ashanti Empire from 1701 to 1717.</h2>
        <h2 className="text-xl leading-10">He led an alliance of Asante states against Denkyira, defeating them at the 1701 Battle of Feyiase</h2>
        <h2 className="text-xl leading-10">Osei Tutu founded a new capital for the emergent Asante Confederation: the city of Kumasi, 
          named after the kum tree that Tutu sat under while negotiating the terms and new laws for the land.</h2>

        <div className="jason-2">
          <img src="/images/king.jpg" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/kingtutu.jpg" />
        </div>
        <div className="jason-3">
          <img src="/images/ashanti.webp" />
        </div>
      </div>
    </section>
  )
}

export default Funfacts