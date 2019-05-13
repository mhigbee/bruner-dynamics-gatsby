const breakpoints = {
  small: 0,
  medium: 641,
  large: 1025,
  xlarge: 1200,
};

const mq = (screenSize) => {
  const size = breakpoints[screenSize];
  return `@media (min-width: ${size}px)`
}

// Color Declarations
const siteColors = {
  white: '#fff',
  black: '#202e39',
  gray: '#7d8086',
  gray2: '#f6f6f6',
  gray3: '#fcfcfc',
  gray4: '#8b8f95',
  blue1: '#009fe3',
  blue3: '#0187c1',
  boxShadow1: '0 3px 6px rgb(0,0,0,30%)',
  green1: '#bed733',
  green2: '#99af21'
}

module.exports = { siteColors, mq, breakpoints };