import React from "react";
import { Link, Route } from "react-router-dom";

const FooterMain = () => {
  const renderLink = (text, to) => {
    return (
      <Link className="nav__link text--decoration--none" to={to}>
        {text}
      </Link>
    );
  };
  const renderLinkToHome = (props) => {
    if (props.match.isExact === false) {
      return <>/{renderLink("Ir a la home", "/")}</>;
    } else {
      return null;
    }
  };

  return (
    <div className="col2">
      <small className="text--primary-light">
        {renderLink("Politica de privacidad", "/privacy")}/
        {renderLink("Cookies", "/Cookies")}/
        <Route path="/" children={renderLinkToHome} />
      </small>
      <small className="text--primary-light text-align-right">
        Ejercicio de React / Desarrollado por @anafruiz
      </small>
    </div>
  );
};

export default FooterMain;
