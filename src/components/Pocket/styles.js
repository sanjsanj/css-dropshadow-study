import styled from "styled-components";

export const PocketWrapper = styled.div`
  padding: ${props => (props.horizontal ? `10px 5% 10px 0` : `10px 5% 0`)};
  flex-direction: ${props => (props.horizontal ? `column` : `row`)};
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  padding-top: 10px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;

  animation: ${props =>
      props.horizontal ? `pocketSlideInHorizontal` : `pocketSlideIn`}
    1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 forwards;

  @keyframes pocketSlideIn {
    0% {
      opacity: 0;
      width: 0%;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes pocketSlideInHorizontal {
    0% {
      opacity: 0;
      height: 0%;
    }
    100% {
      opacity: 1;
      height: 100%;
    }
  }

  @keyframes pocketSlideOut {
    0% {
      opacity: 1;
      width: 100%;
    }
    100% {
      opacity: 0;
      width: 0%;
    }
  }
`;

export const ContentContainer = styled.div`
  height: ${props =>
    props.horizontal ? `50px` : `calc(${props.growth} * 200px)`};
  border-radius: ${props => props.borderRadius || "8px"};
  width: ${props => (props.horizontal ? `100%` : `40%`)};
  /* background: linear-gradient(
    to ${props => (props.horizontal ? `left` : `bottom`)},
    ${props => props.color || props.theme.backgroundColor},
    ${props => props.theme.backgroundColor} 50%
  ); */
  transform: ${props =>
    props.horizontal ? `translateX(-100%)` : `translateY(100%)`};
  box-shadow: 0px -2px 8px ${props => props.theme.shadowColor};
  /* background-color: ${props =>
    props.color || props.theme.backgroundColor}; */
  background-color: ${props => props.theme.backgroundColor};
  position: relative;
  overflow: hidden;
  padding: 10px;

  margin: ${props => (props.horizontal ? `10px auto 10px 0` : `0 5px`)};

  animation: ${props =>
    props.horizontal ? `containerSlideInHorizontal` : `containerSlideIn`}
    0.8s cubic-bezier(0, 0, 0.15, 1) 0.2s 1 forwards;
  animation-delay: ${props => props.index * 0.2 + 0.5}s;

  @keyframes containerSlideIn {
    0% {
      transform: translate(200%, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes containerSlideInHorizontal {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes containerSlideOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(200%, 100%);
    }
  }
`;

export const Shadow = styled.div`
  box-shadow: ${props =>
    props.horizontal
      ? `2px 0 2px ${props => props.theme.shadowColor}`
      : `0 -2px 2px ${props => props.theme.shadowColor}`};
  height: ${props => (props.horizontal ? `100%` : `10px`)};
  width: ${props => (props.horizontal ? `10px` : `95%`)};
  left: ${props => (props.horizontal ? `10px` : `2.5%`)};
  position: absolute;
  border-radius: 50%;
  bottom: 0;

  ::before {
    box-shadow: ${props =>
      props.horizontal ? `5px 0 5px #00000042` : `0 -5px 5px #00000042`};
    height: ${props => (props.horizontal ? `100%` : `10px`)};
    width: ${props => (props.horizontal ? `10px` : `100%`)};
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    content: "";
  }
`;

export const Overlay = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: ${props => (props.horizontal ? `100%` : `10px`)};
  width: ${props => (props.horizontal ? `20px` : `100%`)};
  position: absolute;
  bottom: 0;
  left: 0;
`;
