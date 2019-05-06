import React from "react";

import { PocketWrapper, ContentContainer, Shadow, Overlay } from "./styles";

export default function Pocket(props) {
  const { content } = props;

  return (
    <PocketWrapper horizontal={props.horizontal}>
      <Shadow horizontal={props.horizontal} />

      {content.map((container, index) => (
        <ContentContainer
          gradientColor={container.linearGradientColor}
          borderRadius={props.borderRadius}
          horizontal={props.horizontal}
          index={index}
          key={index}
        >
          {container.html}
        </ContentContainer>
      ))}

      <Overlay horizontal={props.horizontal} />
    </PocketWrapper>
  );
}
