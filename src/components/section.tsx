import React from "react";

type SectionProps = {
  title?: string;
  titleColor?: string;
  bg?: string;
  noPadding?: boolean;
};

const Section: React.FC<SectionProps> = ({
  title,
  titleColor = "#333",
  bg = "white",
  children,
  noPadding,
}) => {
  return (
    <section
      css={`
        background: ${bg};
        padding: ${noPadding ? "0px" : "40px 10px"};
        margin: 0px;
      `}
    >
      <h2
        css={`
          font-family: Satisfy;
          color: ${titleColor};
          text-align: center;
          font-size: 3rem;
          margin: 0;
          padding-top: 30px;
        `}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
