import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import ComponentStructure from './structure/componentStructure';
// import plusSignImage from '../images/white-plus-sign.svg';
// import minusSignImage from '../images/white-minus-sign.svg';

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

  .accordian-section {
    .accordian-title-container {
      background-color: ${siteColors.blue1};
      padding: 18px 25px;
    }

    h5 {
      margin-bottom: 0;
      color: ${siteColors.white};
      width: 98%;
    }
  }

  details {
    padding-bottom: 15px;
  }

  summary {
    background-color: ${siteColors.blue1};
    color: ${siteColors.white};
    padding: 18px 25px;
    display: flex;
    align-items: center;
    position: relative;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      position: absolute;
      right: 2%;
      font-size: 50px;
      content: '\x0002B'; 
      color: ${siteColors.white}; 
      width: 20px;
    }

    .summary-title {
      padding-right: 30px;
    }
  }

  .answer-container {
    padding: 30px 55px;
    background-color: ${siteColors.gray2};
  }
`

class FAQ extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     accordianActive: 'false',
  //   };
  // }

  render () {
    return (
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
          <details>
            <summary>Why should I get Brüner Dynamics?</summary>
            <div className="answer-container">
              <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. "Rogue Two checking in."</p>
            </div>
          </details>
          <details>
            <summary>Who is the guy who keeps walking in front of my place? Is that Ralph?</summary>
            <div className="answer-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam. Velit laoreet id donec ultrices tincidunt arcu. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nec ullamcorper sit amet risus nullam eget felis eget. Odio pellentesque diam volutpat commodo. Ac felis donec et odio pellentesque.</p>
            </div>
          </details>
          <details>
            <summary>Who is the guy who keeps walking in front of my place? Is that Ralph?</summary>
            <div className="answer-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam. Velit laoreet id donec ultrices tincidunt arcu. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nec ullamcorper sit amet risus nullam eget felis eget. Odio pellentesque diam volutpat commodo. Ac felis donec et odio pellentesque.</p>
            </div>
          </details>
          <details>
            <summary>Where does space start?</summary>
            <div className="answer-container">
              <p>An excellent question. At bruner dynamics, we generally see space as any matter, atmosphere, or void not curretnly occupied by James Bruner. Therefore, space starts and ends with Mr. Bruner. </p>
            </div>
          </details>
        </ComponentStructure>
      </StyledFAQ>
    )
  }
}

export default FAQ;