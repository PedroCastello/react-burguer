import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 14px;
  background: ${ props => props.isBack ? 'transparent' : 'var(--Templates-5-Color-1, rgba(0, 0, 0, 0.8))'};
  width: 342px;
  height: 74px;
  flex-shrink: 0;
  border: ${ props => props.isBack ? '1px solid #fff' : 'none'};
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

  &:hover {
    opacity: 0.8;
  }

  &:active {
    font-size: 15px;
    opacity: 0.5;


  }

  img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
  }

  
`;