import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: space-evenly;
  overflow-y: hidden;
  position: relative;
  padding-top: 10px;
  padding: 0 5%;
  display: flex;
`;

export const Container = styled.div`
  box-shadow: 0px -2px 8px #0000003d;
  transition: all 0.7s ease-in-out;
  transform: translateY(100%);
  transform: translateY(2px);
  background-color: grey;
  border-radius: 2px;
  padding: 10px;
  height: 200px;
  width: 40%;
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
