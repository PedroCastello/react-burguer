import styled from "styled-components";
import Background from "../../assets/fundo.png";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 14px;
  background: transparent;
  width: 342px;
  height: 74px;
  flex-shrink: 0;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 130px;
  border: 1px solid #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    font-size: 15px;
    opacity: 0.5;
  }

  img {
    transform: rotateY(180deg);
  }
`;



export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  padding-left: 25px;
  color: #fff;
  margin-bottom: 34px;
  margin-top: 20px;

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    width: 50px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
