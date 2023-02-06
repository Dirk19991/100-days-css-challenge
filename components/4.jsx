import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: absolute;
  top: 50.8%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background: #e56262;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigCircle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleCircle = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallCircle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
`;

function FourPage() {
  return (
    <Wrapper>
      <BigCircle
        initial={{ scale: 1 }}
        animate={{ scale: 0.1 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: 'mirror',
          delay: 1.5,
          repeatDelay: 1,
        }}
      >
        <MiddleCircle
          initial={{ scale: 1 }}
          animate={{ scale: [0.1, 1, 1, 1, 1, 0.1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: 'mirror',
            delay: 0.5,
            repeatDelay: 1.5,
          }}
        >
          <SmallCircle
            initial={{ scale: 1 }}
            animate={{ scale: [0.1, 1, 1, 0.1] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: 'mirror',
              delay: 1,
              repeatDelay: 0.5,
            }}
          ></SmallCircle>
        </MiddleCircle>
      </BigCircle>
    </Wrapper>
  );
}
export default FourPage;
