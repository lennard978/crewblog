import styled from "styled-components";
import aboutText from "../data/about.json";

const About = () => {
  return (
    <div>
      <Header>{aboutText.title}</Header>
      <Content>{aboutText.introduction}</Content>
      <Content>{aboutText.unveiling}</Content>
      <Content>{aboutText.discover}</Content>
      <Content>{aboutText.information}</Content>
      <Content>{aboutText.community}</Content>
      <Content>{aboutText.responsive}</Content>
      <Content>{aboutText.joinUs}</Content>
      <Content>{aboutText.farewell}</Content>
    </div>
  );
};

const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
`;

export default About;
