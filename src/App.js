import Header from "./components/Header";
import { Container } from "./components/styles/Component.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "780px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;


// import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/Fa";
// import { StyledSocialIcons } from "./styles/SocialIcons.styled";
// export default function SocialIcons() {
//   return (
//     <StyledSocialIcons>
//       <li>
//         {/* <a href="https://twitter.com">
//           <FaTwitter />
//         </a>
//         </li><li>
//         <a href="https://facebook.com">
//           <FaFacebook />
//         </a>
//           </li>
//           <li>
//         <a href="https://linkedin.com">
//           <FaLinkedin />
//         </a> */}
//       </li>
//     </StyledSocialIcons>
//   );
// }


// import styled from "styled-components";

// export const StyledSocialIcons = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   li {
//     list-style: none;
//   }

//   a {
//     border: 1px solid #fff;
//     border-radius: 50%;
//     color: #fff;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 10px;
//     height: 40px;
//     width: 40px;
//   }
// `



