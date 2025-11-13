import React from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'

const BriefHistory = () => {

//  useGSAP(()=>{
//    gsap.set('.message', {marginTop: '-150vh', opacity: 0})

//    const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.message',
//         start: 'top top',
//         scrub: true,
//         end: '+=200% top',
//         pin: true,
//       }
//    })

//    tl.to('.hero-section', {delay: 0.5, opacity:0, ease: 'power1.inOut'});
//    tl.to('.message', {opacity:1, duration:2, ease: 'power1.inOut'}, '<');
//  })

  return (
    <section className='message'>
        <div className="h-full flex flex-col justify-center items-center px-5">

        <div className="gradient-title w-[60%] text-center">
          <h3 className='text-3xl'>The Founding Story (1670s-1701)</h3>
          <p className='text-xl mt-2 leading-15'>In the late 17th century, Osei Tutu, chief of the small state of Kumasi, <br/>
            realized that unifying the separate Asante kingdoms was essential to resist the powerful Denkyira neighbors to the south. <br/>
            With the help of Okomfo Anokye, his chief priest and adviser, <br/>
            he established the Asante Kingdom around 1701, with the Golden Stool as the sole unifying symbol.
        </p>
        </div>
      </div>

    </section>
  )
}

export default BriefHistory