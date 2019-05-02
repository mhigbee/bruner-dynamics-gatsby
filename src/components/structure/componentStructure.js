import React from "react"
import Constraint from "./constraint"
import Content from "./content"

const ComponentStructure = ({ children }) => {
  return (
    <Constraint>
      <Content>
        { children }
      </Content>
    </Constraint>
  )
}

export default ComponentStructure;
