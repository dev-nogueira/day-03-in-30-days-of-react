import React from 'react';
import populations from '../data'
import { motion } from 'framer-motion'
import { Container, Item, Items, Country, Bar, Population, Middle } from './styles';

function Graphics() {
  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${0}` }}
      >
        world population</motion.h2>
      <Items>
        {
          populations.map((pop) => {
            const { country, population, color, delay } = pop;
            return (
              <Item>
                <Country>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2, delay: `${delay}` }}
                  >
                    {country}
                  </motion.h1>
                </Country>
                <Middle>
                  <Bar 
                    initial={{ width: 0 }}
                    animate={{ width: `${population / 7693165599 * 100}%` }}
                    transition={{ ease: "easeOut", duration: 2, delay: `${delay}` }}
                    porc={`${population / 7693165599 * 100}%`} barC={color}
                  />
                </Middle>
                <Population>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2, delay: `${delay}` }}
                  >
                    {population}
                  </motion.h1>
                </Population>
              </Item>
            );
          })
        }
      </Items>
    </Container>
  );
}

export default Graphics;