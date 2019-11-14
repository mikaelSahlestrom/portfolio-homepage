import React from "react";
import classes from "./FooterComponent.module.css";

const FooterComponent = props => {
  return (
    <div className={classes.FooterComponent}>
      <img src={props.image} className={classes.Image} alt="logo" />
      <p>{props.description}</p>
      <a href={props.link}>{props.linkDescription}</a>
    </div>
  );
};

export default FooterComponent;
