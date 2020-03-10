import React from "react"
import IconStyles from "./icons.module.css"
import twit from "../images/twitter-white.png"
import insta from "../images/instagram-white.png"
import linkd from "../images/linkedin.png"
import facebook from "../images/facebook.png"

const Icons = () => (
  <div>
    <a href="https://www.instagram.com/jordanmiless/" target="_blank">
      <img className={IconStyles.icons} src={insta} alt="" />
    </a>
    <a href="https://www.linkedin.com/in/jordanmiles212/" target="_blank">
      <img className={IconStyles.icons} src={linkd} alt="" />
    </a>
    <a href="https://www.twitter.com/pineapplemiles/" target="_blank">
      <img className={IconStyles.icons} src={twit} alt="" />
    </a>
    <a href="https://www.facebook.com/jordan.miles.31/" target="_blank">
      <img className={IconStyles.icons} src={facebook} alt="" />
    </a>
  </div>
)

export default Icons
