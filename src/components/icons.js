import React from "react"
import IconStyles from "./icons.module.css"
import twit from "../images/twitter-white.png"
import insta from "../images/instagram-white.png"

const Icons = () => (
  <div>
    <img className={IconStyles.icons} src={twit} alt="" />
    <img className={IconStyles.icons} src={insta} alt="" />
  </div>
)

export default Icons
