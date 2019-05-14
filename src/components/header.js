// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Nav from "./nav"

const StyledHeader = styled.div`
  
`

const Header = (props) => (
  <>
    <StyledHeader>
      <Nav/>
    </StyledHeader>
  </>
)

export default Header
