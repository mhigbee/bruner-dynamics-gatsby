import React from "react"
import styled from "@emotion/styled"
import { mq } from './styleVariables';
import ComponentStructure from './structure/componentStructure';

const StyledSideBySide = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${props => props.bgColor ? props.bgColor : "transparent"};

  .flex-container {
    display: flex;
    flex-wrap: wrap;

    .left-section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      ${mq('large')} {
        width: 50%;
      }
    }

    .right-section {
      width: 100%;

      ${mq('large')} {
        width: 50%;
      }
    }
  }

  &.reverse {
    .flex-container {
      flex-direction: row-reverse;
    }
  } 
`

const SideBySide = ( {children, bgColor, imagePath, imageAlt, switches } ) => (
  <StyledSideBySide bgColor={bgColor} className={switches}>
    <ComponentStructure>
      <div className="flex-container">
        <div className="left-section">
          <img src={imagePath} alt={imageAlt} />
        </div>
        <div className="right-section">
          { children }
        </div>
      </div>
    </ComponentStructure>
  </StyledSideBySide>
)

export default SideBySide;