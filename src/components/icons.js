import React from "react"
import IconStyles from "./icons.module.css"
import twit from "../images/twitter-white.png"
import insta from "../images/instagram-white.png"

const Icons = () => (
  <div>
    <a href="https://www.instagram.com/jordanmiless/" target="_blank">
      <img className={IconStyles.icons} src={insta} alt="" />
    </a>
    <img className={IconStyles.icons} src={twit} alt="" />
  </div>
)

export default Icons
