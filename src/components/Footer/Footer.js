import React from "react";
import classes from "./Footer.module.css";

import FooterComponent from "./FooterComponent/FooterComponent";

import logoGit from "../../assets/logoGit.svg";
import logoLinkedIn from "../../assets/logoLinkedIn.svg";
import logoQuestionmark from "../../assets/logoQuestionmark.svg";

const Footer = () => {
  const footerContent = [
    {
      logo: logoQuestionmark,
      description: 'Wanna contact me? \n Send me an mail!',
      link: "mailto:mikael.sahlestrom@gmail.com",
      linkDescription: "mail me!"
    },
    {
      logo: logoGit,
      description: "Here you can find som git shit",
      link: "https://github.com/mikaelSahlestrom/portfolio-homepage/projects/1",
      linkDescription: "Mikael Git"
    },
    {
      logo: logoLinkedIn,
      description: "Here you can find me on linkedIn!",
      link: "https://www.linkedin.com/in/mikael-sahlestr%C3%B6m-10618a66/",
      linkDescription: "Mikaels LinkedIn"
    }
  ];

  const footerComponent = footerContent.map((foot, i) => {
    return (
      <FooterComponent
      key = {i}
        image={foot.logo}
        description={foot.description}
        link={foot.link}
        linkDescription={foot.linkDescription}
      />
    );
  });

  return <div className={classes.Footer}>{footerComponent}</div>;
};

export default Footer;
