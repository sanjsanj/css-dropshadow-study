import React from "react";

import { PocketWrapper, ContentContainer, Shadow, Overlay } from "./styles";

export default function Pocket(props) {
  const { content } = props;

  return (
    <PocketWrapper horizontal={props.horizontal}>
      <Shadow horizontal={props.horizontal} />

      {content.map((container, index) => (
        <ContentContainer
          borderRadius={props.borderRadius}
          growth={container.growth || 1}
          horizontal={props.horizontal}
          color={container.color}
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
