import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import ComponentStructure from './structure/componentStructure';

const StyledFAQ = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;

  ${mq('large')} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${mq('large')} {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  summary {
    background-color: ${siteColors.blue1};
    color: ${siteColors.white};
    padding: 18px 25px;
  }

  .answer-container {
    padding: 30px 55px;
    background-color: ${siteColors}
  }
`

const FAQ = () => (
  <StyledFAQ >
    <ComponentStructure>
      <div className="before-content">
        <h2 className="padding-bottom-25 text-center">Brüner Dynamics FAQs</h2>
      </div>
      <details>
        <summary>Is James listening to my conversation?</summary>
        <div className="answer-container">
          <p>James listens to all conversations. It gives him great joy to hear them. When he gets bored he puts recorded conversations on his TV and laments about how silly most of the people sound.</p>
        </div>
      </details>
    </ComponentStructure>
  </StyledFAQ>
)

export default FAQ;