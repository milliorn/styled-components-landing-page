import React from "react";
import { Container } from "./styles/Container.styled";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try it Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
