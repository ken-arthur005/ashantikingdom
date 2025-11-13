import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon"
import BriefHistory from "./BriefHistory";

const Hero = () => {
  const { initialMaskPos, initialMaskSize,maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

      gsap.set('.message', { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2,
        end: '+=600%',
        pin: true,
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to('.overlay-logo', { opacity: 1, onComplete: () => {
        gsap.to('.overlay-logo', { opacity: 0 });
      } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<')
      .to('.entrance-message', { delay:0.5, opacity: 0 ,ease: 'power1.inOut', })
      .to('.message', { duration: 1, ease: 'power1.inOut', opacity: 1}, )
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero.webp" alt="background" className="scale-out" />
      </div>
      

      <ComingSoon />
      <BriefHistory />
    </section>
  )
}

export default Hero