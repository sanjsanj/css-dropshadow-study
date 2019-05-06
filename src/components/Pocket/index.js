import React from "react";

import { PocketWrapper, ContentContainer, Shadow, Overlay } from "./styles";

export default function Pocket(props) {
  const { content } = props;

  return (
    <PocketWrapper>
      <Shadow />

      {content.map((container, index) => (
        <ContentContainer
          gradientColor={container.linearGradientColor}
          borderRadius={props.borderRadius}
          index={index}
          key={index}
        >
          {container.html}
        </ContentContainer>
      ))}

      <Overlay />
    </PocketWrapper>
  );
}
