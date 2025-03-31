import { useRef, useEffect, useState, ReactNode } from "react";
import { 
  useSpring, 
  animated, 
  SpringConfig,
  AnimatedComponent,
  to
} from "@react-spring/web";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: SpringConfig;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}: AnimatedContentProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  const directions = {
    vertical: "Y",
    horizontal: "X",
  } as const;

  const springProps = useSpring({
    from: {
      transform: to(
        [`translate${directions[direction]}(${reverse ? -distance : distance}px)`, `scale(${scale})`],
        (translate, scale) => `${translate} ${scale}`
      ),
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView ? {
      transform: to(
        [`translate${directions[direction]}(0px)`, 'scale(1)'],
        (translate, scale) => `${translate} ${scale}`
      ),
      opacity: 1,
    } : undefined,
    config,
  });

  const AnimatedDiv = animated.div as AnimatedComponent<"div">;

  return (
    <AnimatedDiv 
      ref={ref} 
      style={{
        transform: springProps.transform,
        opacity: springProps.opacity
      }}
    >
      {children}
    </AnimatedDiv>
  );
};

export default AnimatedContent;