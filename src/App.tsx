import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
