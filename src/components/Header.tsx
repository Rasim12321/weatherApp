import { useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(
    (lang: "ru" | "en" | "ua") => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand className="mt-2" href="#home">
          <h3>{t("weather")}</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link onClick={() => changeLanguage("ru")} href="#rus">
              {t("lang.ru")}
            </Nav.Link>
            <Nav.Link onClick={() => changeLanguage("en")} href="#eng">
              {t("lang.en")}
            </Nav.Link>
            <Nav.Link onClick={() => changeLanguage("ua")} href="#ua">
              {t("lang.ua")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
