import { Container } from "./styles/Component.styled";
import { Flex } from "./styles/Flex.styled";
import { StyleFooter } from "./styles/Footer.styled";
// import SocialIcons from "./SocialIcons.Js";

export default function Footer() {
  return (
    <StyleFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu smod tempor inci didunt ut labore et dolore ma gna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          {/* <SocialIcons /> */}
        </Flex>
        <p> &copy; 2021 Huddle. All Rights Reserved</p>
      </Container>
    </StyleFooter>
  );
}
