import Box from "../components/Box";
import countries from "../data/data";
import styled from "styled-components";

const Blog = () => {
  return (
    <Container>
      {countries.map((country, index) => (
        <div key={index}>
          <Box capital={country.name} image={country.image} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Blog;
