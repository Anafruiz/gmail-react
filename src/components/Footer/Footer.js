import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterPolicy from "./FooterPolicy";
import FooterCookies from "./FooterCookies";
import FooterMain from "./FooterMain";
import "../../stylesheet/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Switch>
        <Route path="/cookies">
          <FooterCookies />
        </Route>
        <Route path="/privacy">
          <FooterPolicy />
        </Route>
        <Route>
          <FooterMain />
        </Route>
      </Switch>
    </footer>
  );
};

export default Footer;
