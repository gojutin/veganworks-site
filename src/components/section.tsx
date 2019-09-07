import React from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  title?: string;
  titleColor?: string;
  bg?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  titleColor = "#333",
  bg = "white",
  children,
}) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <section
      ref={ref}
      css={`
        background: ${bg};
        padding: 40px 10px;
      `}
    >
      <h2
        css={`
          font-family: Satisfy;
          color: ${titleColor};
          text-align: center;
          font-size: 3rem;
        `}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
