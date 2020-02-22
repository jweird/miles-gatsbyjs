import React from "react"
import Icons from "../components/icons"
import BodyStyles from "./body.module.css"
import pic from "../images/miles.jpg"
import havasu from "../images/Lake Havasu.jpg"
import havasu2 from "../images/IMG_0250 2.jpg"
const Body = () => (
  <div className={BodyStyles.container}>
    <div className={BodyStyles.col}>
      <div className={BodyStyles.text}>
        <h1>JORDAN MILES</h1>
        <h3>REALTOR AND PHOTOGRAPHER</h3>
        <button className={BodyStyles.button}>BIZ INQUIRES</button>
        <Icons />
      </div>
    </div>

    <div className={BodyStyles.col}>
      <img
        className={BodyStyles.miles}
        src={havasu2}
        alt="Jordan Miles Realtor"
      />
    </div>
  </div>
)

export default Body
