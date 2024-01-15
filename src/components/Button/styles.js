import styled from "styled-components";

export const Button = styled.button.attrs(props => ({
  style: {
    background: props.isBack ? 'rgba(255, 255, 255, 0.14)' : 'rgba(217, 56, 86, 1)',
    border: props.isBack ? '1px solid #fff' : 'none',
  },
}))`
  cursor: pointer;
  border-radius: 14px;
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

  &:hover {
    opacity: 0.8;
  }

  &:active {
    font-size: 15px;
    opacity: 0.5;
  }

  img {
    transform: ${props => props.isBack && 'rotateY(180deg)'};
  }
`;
