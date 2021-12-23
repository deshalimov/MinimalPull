import React from "react"
import styled, {keyframes} from "styled-components"

import colors from "../colors"

const rotateAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const SpinnerWrapper = styled.div`
  display: block;
  position: relative;
  width: 32px;
  height: 32px;
  transform: scale(${props => props.scale});
  margin: ${props => props.margin};

  & div {
    transform-origin: 16px 16px;
    animation: ${rotateAnimation} 1.2s linear infinite;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 1px;
    left: 15px;
    width: ${props => props.strokeWidth};
    height: 7px;
    border-radius: 30%;
    background: ${props => props.color};
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`

const DEFAULT_COLOR = colors.mainText
const DEFAULT_SCALE = 0.9
const DEFAULT_STROKE_WIDTH = '2px'

const Spinner = ({
  color = DEFAULT_COLOR,
  scale = DEFAULT_SCALE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  margin = '0px',
}) => (
  <SpinnerWrapper color={color} scale={scale} strokeWidth={strokeWidth} margin={margin}>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </SpinnerWrapper>
)

export default Spinner
