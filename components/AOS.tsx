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
          if (isVisible) {
            (elem.target as HTMLElement).children[0].classList.add('on');
          } else {
            (elem.target as HTMLElement).children[0].classList.remove('on');
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
  classNameCont?: string;
  styleCont?: CSSProperties;
}

export const AOSComp: FC<AOSProp> = ({
  children,
  anim,
  delay,
  duration,
  styleCont,
  classNameCont,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const observer = useContext(AOSContext);

  useEffect(() => {
    const elem = ref.current;
    observer && elem && observer.observe(elem);
    elem?.children[0].classList.add(anim, 'aos-item');
    const elemStyle = (elem?.children[0] as HTMLElement).style;
    elemStyle.transition = `${(duration ?? 750) / 1000}s ease-in-out`;
    elemStyle.transitionDelay = delay.toString() + 'ms';

    return () => {
      observer && elem && observer.unobserve(elem);
    };
  }, [observer, anim, delay, duration]);
  return (
    <div style={{ ...styleCont }} className={classNameCont} ref={ref}>
      {children}
    </div>
  );
};
