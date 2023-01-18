import React from "react";
import { Container } from "./styles/Container.styled";
import { Logo, Nav, StyledHeader, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              natus.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              tenetur magni voluptates accusantium, voluptatem illum reiciendis
              dolor eum dignissimos eligendi quo earum sit minima quas libero
              nostrum numquam ratione quis.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
