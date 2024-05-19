'use client';

import React from 'react';
import styled, { css } from 'styled-components';

interface GradientLineProps {
  height?: string;
  gradient?: string;
  style?: {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
  };
}

const gradientStyles = css<GradientLineProps>`
  ${(props) =>
    props.style?.backgroundImage === 'dashed' &&
    css`
      background-image: linear-gradient(
          to right,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%
        ),
        linear-gradient(
          to right,
          rgba(255, 255, 255, 0.2) 50%,
          transparent 50%,
          transparent
        );
      background-size: 10px 100%;
    `}

  ${(props) =>
    props.style?.backgroundImage === 'dotted' &&
    css`
      background-image: radial-gradient(
          rgba(255, 255, 255, 0.2) 30%,
          transparent 30%
        ),
        radial-gradient(rgba(255, 255, 255, 0.2) 30%, transparent 30%);
      background-size: 10px 10px;
      background-position: 0 0, 5px 5px;
    `}
`;

const GradientLine = styled.div<GradientLineProps>`
  height: ${(props) => props.height || '5px'};
  background: ${(props) =>
    props.gradient || 'linear-gradient(to right, #dc143c, #8b0000)'};
  ${(props) =>
    props.style?.backgroundImage &&
    css`
      background-image: ${props.style.backgroundImage};
      background-size: ${props.style.backgroundSize || 'initial'};
      background-position: ${props.style.backgroundPosition || 'initial'};
    `}
  ${gradientStyles}
`;

interface GradientDividerProps extends GradientLineProps {}

const GradientDivider: React.FC<GradientDividerProps> = ({
  height,
  gradient,
  style,
}) => {
  return <GradientLine height={height} gradient={gradient} style={style} />;
};

export default GradientDivider;