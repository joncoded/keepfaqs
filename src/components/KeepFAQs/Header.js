import React from "react"
import config from "./config"

const Header = () => {
  return (
    <header>
      <h1 className="title">{config.title}</h1>
      <p className="tagline" dangerouslySetInnerHTML={{ __html: config.tagline }} />
    </header>
  )
}
export default Header
