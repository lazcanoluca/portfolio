import { createGlobalStyle } from "styled-components";
import BigNoodle from './fonts/big_noodle_titling.ttf';
import PlanetEstyle from './fonts/planet_estyle.ttf';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Big Noodle';
  src: url(${BigNoodle}) format('truetype');
};

@font-face {
  font-family: 'Planet Estyle';
  src: url(${PlanetEstyle}) format('truetype');
};

`;

export default FontStyles;