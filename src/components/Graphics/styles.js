import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  background-color: #222529;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  position: relative;

  h1 {
    color: #e0e4e4;
    font-weight: 500;
  }

  h2 {
    color: #e0e4e4;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
    font-weight: 500;
  }
`;

export const Items = styled.div`
`;

export const Item = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;


export const Country = styled.h1`
  display: flex;
  width: 120px;

  h1 {
    font-size: 15px;
    width: 100px;
    text-align: left;
    display: flex;
  }
`;

export const Bar = styled(motion.div)`
  width: 400px;
  width: ${props => props.porc};
  background-color: ${props => props.barC};
  border-radius: 3px;
  height: 30px;
  align-items: flex-start;
`;

export const Population = styled.h1`
  display: flex;
  width: 120px;

  h1 {
    font-size: 15px;
    display: flex;
    margin-left: auto;
  }
`;

export const Middle = styled.div`
  width: 400px;
`;