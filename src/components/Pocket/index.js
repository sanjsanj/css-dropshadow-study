import React from "react";

import { Wrapper, Container, Shadow, Overlay } from "./styles";

export default function Pocket(props) {
  const { content } = props;

  return (
    <Wrapper>
      <Shadow />

      {content.map((container, index) => (
        <Container
          gradientColor={container.linearGradientColor}
          borderRadius={props.borderRadius}
          key={index}
        >
          {container.html}
        </Container>
      ))}

      <Overlay />
    </Wrapper>
  );
}
