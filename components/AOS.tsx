/* eslint-disable no-unused-expressions */
import { createContext, CSSProperties, FC, useContext, useEffect, useRef, useState } from 'react';

/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */
type IO = IntersectionObserver | null;

const AOSContext = createContext<IO>(null);

export const AOSCont: FC = ({ children }) => {
  const [state, setState] = useState<IO>(null);
  useEffect(() => {
    const IntersectionObserverObj = new IntersectionObserver(
      (elems) => {
        elems.forEach((elem) => {
          const isVisible = elem.isIntersecting;
          console.log(elem, elem.isIntersecting);
          if (isVisible) {
            (elem.target as HTMLElement).classList.add('on');
          } else {
            (elem.target as HTMLElement).classList.remove('on');
          }
        });
      },
      { rootMargin: '0% 3200px 0% 3200px' }
    );

    setState(IntersectionObserverObj);
  }, []);
  return <AOSContext.Provider value={state}>{children}</AOSContext.Provider>;
};

export interface AOSProp {
  anim: 'right-in' | 'left-in' | 'bottom-in' | 'top-in' | 'zoom-in' | 'roll-in';
  delay: number;
  duration?: number;
  className?: string;
}

export const AOSComp: FC<AOSProp> = ({ children, anim, delay, duration, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const observer = useContext(AOSContext);
  const style: CSSProperties = {
    transition: `${(duration ?? 750) / 1000}s ease-in-out`,
    transitionProperty: 'transform, opacity',
    transitionDelay: delay.toString() + 'ms',
    display: 'block',
  };
  useEffect(() => {
    const elem = ref.current;
    observer && elem && observer.observe(elem);

    return () => {
      observer && elem && observer.unobserve(elem);
    };
  }, [observer]);
  return (
    <div className={anim + ' ' + (className ?? '')} style={style} ref={ref}>
      {children}
    </div>
  );
};