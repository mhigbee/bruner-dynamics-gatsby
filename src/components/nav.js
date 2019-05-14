// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import 'typeface-source-sans-pro';
import BrunerWhiteLogo from '../images/bruner-dynamics-white-logo.png'
import BrunerColorLogo from '../images/bruner-dynamics-color-logo.png'
import HamburgerMenuClosed from '../images/icons/icon-hamburger-menu-closed.svg'

const StyledContent = styled.div`
  margin: 0;
  display: flex;
  padding: 0;
  align-items: center;
  flex-direction: column;

  ${mq('medium')} {
    flex-direction: row;
    padding: 10px;
  }

  &::before {
    content: url(${HamburgerMenuClosed});
    position: absolute;
    right: 15px;
    top: 15px;

    ${mq('medium')} {
      display: none;
    }
  }

  &.mobile-nav-active {
    &::before {
      content: 'X';
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 700;
      font-size: 20px;
      position: absolute;
      color: ${siteColors.blue1};
      right: 20px;
      top: 15px;
  
      ${mq('medium')} {
        display: none;
      }
    }
  }
`

const StyledNav = styled.div`
  background-color: ${siteColors.white};
  position: fixed;
  width: 100%;
  z-index: 1;
  box-shadow: none;

  ${mq('medium')} {
    background-color: transparent;
  }

  &.active {
    background-color: ${siteColors.white};
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);

    ul {
      color: ${siteColors.blue1};
    }

    h4 {
      color: ${siteColors.blue1};
    }
  }

  .site-logo {
    height: 40px;

    &.small {
      align-self: flex-start;
      margin: 5px 10px;

      ${mq('medium')} {
        display: none;
      }
    }

    &.medium-up {
      ${mq('small')} {
        display: none;
      }

      ${mq('medium')} {
        display: flex;
      }
    }
  }

  nav {
    flex-grow: 1;
    display: none;
    align-items: center;
    width: 100%;

    &.mobile-nav-active {
      display: flex;
    }

    ${mq('medium')} {
      width: auto;
      display: flex;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    color: ${siteColors.blue1};
    font-size: 16px;
    font-wieght: 500;
    list-style-type: none;
    margin: 0;
    width: 100%;
    padding-left: 0;

    ${mq('medium')} {
      padding-left: 20px;
      ${siteColors.white};
      flex-direction: row;
      width: auto;
    }

    ${mq('large')} {
      padding-left: 40px;
    }

    li {
      margin: 0;
      padding: 10px 15px 10px 15px;
      border-top: 1px solid ${siteColors.blue1};
      
      ${mq('medium')} {
        padding: 0 20px 0 0;
        border-top: none;
      }
    }
  }

  h4 {
    color: ${siteColors.white};
    padding-bottom: 0;
    display: none;

    ${mq('large')} {
      display: flex;
    }
  }
`

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      mobileNavClicked: false
    }
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0 ) {
      this.setState( {scrolled: true });
    } else {
      this.setState( {scrolled: false });
    }
  }

  handleMobileClick = () => {
    if (window.screen.width < 641) {
      this.setState({ mobileNavClicked : !this.state.mobileNavClicked })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render () {
    return (
    <StyledNav className={ this.state.scrolled ? 'active' : ''}>
    <div className="constraint">
      <StyledContent onClick={this.handleMobileClick} className={this.state.mobileNavClicked ? "mobile-nav-active" : "" }>
        <img className="site-logo medium-up" src={ this.state.scrolled ? BrunerColorLogo : BrunerWhiteLogo } alt="site logo"/>
        <img className="site-logo small" src={BrunerColorLogo} alt="site logo"/>
        <nav className={this.state.mobileNavClicked ? "mobile-nav-active" : "" }>
          <ul>
            <li>Plans</li>
            <li>Speeds</li>
            <li>About Brüner Dynamics </li>
            <li>Equipment</li>
          </ul>
        </nav> 
        <h4>Call Now 1.888.888.8888</h4>
      </StyledContent>
    </div>
    </StyledNav>
    )
  }
}

export default Nav;
