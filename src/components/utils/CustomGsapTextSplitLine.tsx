import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import 'bootstrap/dist/css/bootstrap.min.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
};

const CustomGsapTextSplitLine = ({ children, className }: Props) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    if (!hasBeenVisible.current) {
      const animate = new SplitType(textRef.current!, { types: 'words,lines' });

      gsap.from(animate.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: 'top center -50',
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
          once: true,
        },
      });

      hasBeenVisible.current = true;
    }
  }, []);

  return (
    <p
      className={`${className ? className : ''} fw-bold fs-4 text-uppercase text-primary`}
      ref={textRef}
    >
      {children}
    </p>
  );
};

export default CustomGsapTextSplitLine;