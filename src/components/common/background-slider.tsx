import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

const BackgroundSliderContainer = styled.div<{
  duration: number;
  paused: boolean;
}>`
  overflow: hidden;
  white-space: nowrap;

  .slider-content-wrapper {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: ${slide} ${props => props.duration * 2 || 10}s linear infinite;
    animation-play-state: ${props => (props.paused ? "paused" : "running")};
  }
  .slider-content-wrapper > div {
    display: inline-block;
  }
`;

export const BackgroundSlider: React.FC<{
  duration?: number;
  paused: boolean;
}> = ({ children, duration = 10, paused }) => {
  return (
    <BackgroundSliderContainer duration={duration} paused={paused}>
      <div className="slider-content-wrapper">
        <div>{children}</div>
      </div>
    </BackgroundSliderContainer>
  );
};
