import React from "react";

import { Wrapper, Container, Shadow, Overlay } from "./styles";

export default function Pocket(props) {
  const { content } = props;

  return (
    <Wrapper>
      <Shadow />

      {content.map((container, index) => (
        <Container key={index}>{container}</Container>
      ))}

      <Overlay />
    </Wrapper>
  );
}
