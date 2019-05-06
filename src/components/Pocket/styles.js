import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 200px;
  overflow-y: hidden;
  margin: auto;
  width: 100%;
`;

export const Container = styled.div`
  transition: all 0.7s ease-in-out;
  transform: translateY(100%);
  transform: translateY(0);
`;

export const Shadow = styled.div`
  box-shadow: 0px -2px 2px #02020280;
  position: absolute;
  border-radius: 50%;
  height: 10px;
  width: 100%;
  bottom: 0;

  ::before {
    box-shadow: 0px -5px 5px #02020280;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    height: 10px;
    content: "";
    width: 110%;
    left: -5%;
  }
`;

export const Overlay = styled.div`
  background-color: grey;
  position: absolute;
  height: 10px;
  width: 120%;
  left: -10%;
  bottom: 0;
`;
