import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stooldeets = () => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '5vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top top',
        end: '+=200% top',
        scrub: 2,
      }
    }).to('.goldenstool', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/yaa_asantewaa.jpg" />
        </div>
        <div className="lucia-3">
          <img src="/images/asantewaa2.jpeg" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1 className="gradient-title ">Wars Over the Stool</h1>
          <h2 className="text-4xl">The War of the Golden Stool (1900) - The Yaa Asantewaa War:</h2>
          <p className="mt-10 leading-10">In 1900, Sir Frederick Hodgson, the Governor of the Gold Coast, demanded to be allowed to sit on the Golden Stool. 
            This provoked an armed rebellion called the War of the Golden Stool, which began on March 28, 1900.
          </p>
          <p className="mt-10 leading-10">The war was led by Yaa Asantewaa, the Queen Mother and Gate Keeper of the Golden Stool. 
            The intense fighting led to the death of more than 2,000 Ashanti and 1,000 British and Allied troops.
          </p>
          <p className="mt-10 leading-10">The British never captured the Golden Stool. Hidden by the Ashanti, it was discovered by a group of African railroad builders in 1920. 
            They stripped it of its gold ornaments and were tried by the Ashanti and sentenced to death, 
            but British colonial authorities intervened and exiled them instead.
          </p>
        </div>

        <div className="lucia-2">
          <img src="/images/yaa.jpg" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10 text-gold ">Yaa Asantewaa, Queen Mother and Gate Keeper of the Golden Stool, 
          led the 1900 War of the Golden Stool against British colonial forces after they demanded to sit on the sacred stool. 
          Her fierce resistance rallied Ashanti warriors and became a symbol of anti-colonial courage across Africa
        </p>
      </div>
    </section>
  )
}

export default Stooldeets