import React from "react"
import Icons from "../components/icons"
import BodyStyles from "./body.module.css"
import pic from "../images/realtor-orange-county.jpg"
import havasu from "../images/Lake Havasu.jpg"
import havasu2 from "../images/IMG_0250-2.jpg"
import { Link } from "gatsby"

const Body = () => (
  <div className={BodyStyles.container}>
    <div className={BodyStyles.col}>
      <div className={BodyStyles.text}>
        <h1>JORDAN MILES</h1>
        <h3>REALTOR AND PHOTOGRAPHER</h3>

        <Link to="/Contact">
          <button className={BodyStyles.homebutton}>BIZ INQUIRES</button>
        </Link>

        <Icons />
      </div>
    </div>

    <div className={BodyStyles.imgcont}>
      <img className={BodyStyles.miles} src={pic} alt="Jordan Miles Realtor" />
    </div>
  </div>
)

export default Body
