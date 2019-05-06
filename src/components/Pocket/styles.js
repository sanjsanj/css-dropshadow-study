import styled from "styled-components";

export const PocketWrapper = styled.div`
  justify-content: space-evenly;
  position: relative;
  padding: 10px 5% 0;
  padding-top: 10px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;

  animation: pocketSlide 1s ease-in-out 0s 1 forwards;

  @keyframes pocketSlide {
    0% {
      opacity: 0;
      width: 0%;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  border-radius: ${props => props.borderRadius || "8px"};
  background: linear-gradient(
    to bottom,
    ${props => props.gradientColor || "grey"},
    grey 50%
  );
  box-shadow: 0px -2px 8px #0000003d;
  transform: translateY(100%);
  background-color: grey;
  position: relative;
  padding: 10px;
  height: 200px;
  width: 40%;

  animation: containerSlide 0.8s ease-out 0.2s 1 forwards;
  animation-delay: ${props => props.index * 0.2 + 1}s;

  @keyframes containerSlide {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Shadow = styled.div`
  box-shadow: 0px -2px 2px #0000002e;
  position: absolute;
  border-radius: 50%;
  height: 10px;
  left: 2.5%;
  width: 95%;
  bottom: 0;

  ::before {
    box-shadow: 0px -5px 5px #00000042;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    height: 10px;
    content: "";
    width: 100%;
  }
`;

export const Overlay = styled.div`
  background-color: grey;
  position: absolute;
  height: 10px;
  width: 100%;
  bottom: 0;
`;
