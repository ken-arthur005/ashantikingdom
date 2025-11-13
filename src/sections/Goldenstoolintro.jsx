import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Goldenstoolintro = () => {
  useGSAP(() => {
    gsap.set('.goldenstoolintro', { marginTop: '-80vh', opacity: 0 });
    gsap.set('.goldenstool', { marginTop: '-80vh', opacity: 0 });
    
    gsap.timeline({
      scrollTrigger: {
        trigger: '.goldenstoolintro',
        start: 'top top',
        end: '+=400%',
        scrub: 2,
        pin: true,
      }
    })
    .to('.jason', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .to('.goldenstoolintro', { delay:0.5, opacity: 1 ,ease: 'power1.inOut', }, '<')
    .to('.goldenstoolintro', { delay:0.5, opacity: 0, ease: 'power1.inOut' } )
    .to('.goldenstool', { delay:0.5, opacity: 1, ease: 'power1.inOut' }, '<');
    
  });

  return (
    <>
        <section className="goldenstoolintro h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center px-5">
            <img 
            src="/images/golden-stool.png" 
            alt="Golden Stool" 
            className="2xl:w-72 3xl:w-80 md:w-60 w-36 mb-5 md:mb-10" 
            />
            <div className="gradient-title text-center">
            <h3 className="text-5xl mb-3">THE GOLDEN STOOL:</h3>
            <h3 className="text-3xl">THE SOUL OF THE ASANTE EMPIRE</h3>
            </div>
        </div>
        </section>
        <section className='goldenstool min-h-screen flex items-center justify-center -mt-[100vh]'>
      
      <div className="h-full flex flex-col justify-center items-center px-10">
        <div className="gradient-title w-full max-w-4xl text-center">
          <h3 className='text-3xl md:text-5xl mb-7'>The Legend (1670 - 1701)</h3>
          <p className='text-lg md:text-xl leading-10 mt-6'>
            According to legend, Okomfo Anokye, 
            High Priest and one of the two chief founders of the Asante Confederacy, 
            caused the stool to descend from the sky and land on the lap of the first Asante king, Osei Tutu.
          </p>
          <p className='text-lg md:text-xl leading-10 mt-6'>
            About 300 years ago, Okomfo Anokye conjured the Golden stool from the sky at a durbar where all the Chiefs of Asanteman were gathered. 
            The stool upon being conjured landed on the lap of King Osei Tutu I.
          </p>
          <p className='text-lg md:text-xl leading-10 mt-6'>
            The stool was conjured on a Friday, which is why it's called Sika Dwa Kofi, meaning "Golden stool born on Friday
          </p>
        </div>
      </div>
        </section>
    </>
  )
}

export default Goldenstoolintro