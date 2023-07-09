import React from "react";
import styled from "styled-components";
import barcelonaData from "../data/postdata";

const PostContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Metadata = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 1rem;
`;

const CommentsContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
`;

const Post = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });

  return (
    <PostContainer>
      <Header>Exploring Barcelona: A Glimpse into its Vibrant Culture</Header>
      <Metadata>
        Views: 1,234 | Date: {formattedDate} | Time: {formattedTime}
      </Metadata>
      <Paragraph>
        Barcelona, the cosmopolitan capital of Spain's Catalonia region, is
        renowned for its stunning architecture, vibrant nightlife, and rich
        history. While the city offers numerous paid attractions, there are also
        several free things to see that showcase Barcelona's charm and allure.
        Here are three must-visit spots that won't cost you a dime:
      </Paragraph>
      {barcelonaData.map((spot) => (
        <Paragraph key={spot.id}>
          <strong>{spot.title}:</strong> {spot.description}
        </Paragraph>
      ))}
      <CommentsContainer>
        {/* Include comment functionality here */}
      </CommentsContainer>
    </PostContainer>
  );
};

export default Post;
