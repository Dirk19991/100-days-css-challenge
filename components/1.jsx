import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50.8%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background: linear-gradient(45deg, #43389f, #4ec6ca);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  transform: translate(20px);
`;

const Days = styled.div`
  font-size: 80px;
  font-weight: 900;
  line-height: 70px;
`;

const Challenge = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Hundred = styled.div`
  display: flex;
  transform: translate(-20px);
`;

const StyledOne = styled.div`
  height: 100px;
  width: 25px;
  border-radius: 5px;
  background-color: white;
  z-index: 3;
  box-shadow: 0px 0px 5px 1px grey;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 22px solid white;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 0px 5px 1px grey;
  z-index: 2;
  transform: translate(-5px);
`;

const Circle2 = styled(Circle)`
  z-index: 1;
  transform: translate(-15px);
`;

const Rectangle = styled.div`
  height: 40px;
  width: 25px;
  border-radius: 5px;
  background-color: white;
  z-index: 2;
  box-shadow: 0px 0px 5px 1px grey;
  transform: translate(10px, 5px) rotate(45deg);
`;

function One() {
  return (
    <Wrapper>
      <Main>
        <Hundred>
          <Rectangle />
          <StyledOne />
          <Circle />
          <Circle2 />
        </Hundred>
        <Days>DAYS</Days>
        <Challenge>CSS CHALLENGE</Challenge>
      </Main>
    </Wrapper>
  );
}
export default One;
