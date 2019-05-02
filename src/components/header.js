// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Nav from "./nav"

const StyledHeader = styled.div`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 1;
`

const Header = () => (
  <>
    <StyledHeader>
      <div className="constraint">
        <div className="content">
          <Nav/>
        </div>
      </div>
    </StyledHeader>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
