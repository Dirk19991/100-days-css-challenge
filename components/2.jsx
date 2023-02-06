import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50.8%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background: #3faf82;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Burger = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
`;

const BurgerBar = styled.div`
  width: 100px;
  height: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
`;

const rotateLeft = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const rotateLeftBackwards = keyframes`
  from {
    transform: translateY(20px) rotate(45deg);
  }

  to {
    transform: translateY(20px) rotate(0deg);
  }
`;

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-45deg);
  }
`;

const rotateRightBackwards = keyframes`
  from {
    transform: translateY(-20px) rotate(-45deg);
    
  }

  to {
    transform: translateY(-20px) rotate(0deg);
  }
`;

const transformDown = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0px);
  }
`;

const transformUp = keyframes`
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0px);
  }
`;

const display = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1)
  }

  to {
    opacity: 1;
    transform: scale(1)
  }
`;

const animation = (props) =>
  css`
    ${rotateLeft} 0.3s linear 0.3s, ${transformDown} 0.3s linear;
  `;

const animation2 = (props) =>
  css`
    ${rotateRight} 0.3s linear 0.3s, ${transformUp} 0.3s linear
  `;

const animation3 = (props) =>
  css`
    ${rotateLeftBackwards} 0.3s linear, ${transformUp} 0.3s linear 0.3s
  `;
const animation4 = (props) =>
  css`
    ${rotateRightBackwards} 0.3s linear, ${transformDown} 0.3s linear 0.3s
  `;

const animation5 = (props) =>
  css`
    ${display} 0.6s linear
  `;

const BurgerBarLeft = styled(BurgerBar)`
  transform: ${(props) =>
    props.inclined && props.first ? 'rotate(45deg)' : ''};
  right: ${(props) => (props.inclined && props.first ? '-50px' : '')};
  position: ${(props) =>
    props.inclined && props.first ? 'absolute' : 'static'};
  animation: ${(props) =>
    props.inclined && props.first ? animation : animation3};
`;

const BurgerBarMiddle = styled(BurgerBar)`
  display: ${(props) => (props.invisible && props.first ? 'none' : 'block')};
  animation: ${(props) => (props.invisible && props.first ? '' : animation5)};
`;

const BurgerBarRight = styled(BurgerBar)`
  transform: ${(props) =>
    props.inclined && props.first ? 'rotate(-45deg)' : ''};
  right: ${(props) => (props.inclined && props.first ? '-50px' : '')};
  position: ${(props) =>
    props.inclined && props.first ? 'absolute' : 'static'};
  animation: ${(props) =>
    props.inclined && props.first ? animation2 : animation4};
`;

function Two() {
  const [clicked, setClicked] = useState(false);
  const [first, setFirst] = useState(false);

  return (
    <Wrapper>
      <Burger
        first={first}
        open={clicked}
        onClick={() => {
          setClicked((prev) => !prev);
          setFirst(true);
        }}
      >
        <BurgerBarLeft first={first} inclined={clicked} />
        <BurgerBarMiddle first={first} invisible={clicked} />
        <BurgerBarRight first={first} inclined={clicked} />
      </Burger>
    </Wrapper>
  );
}
export default Two;
