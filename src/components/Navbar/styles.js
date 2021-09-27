const styles = {
  width: '100%',
  position: 'relative',
  '.navbar__logo': {
    cursor: 'pointer',
    transition: '0.5s opacity',
    _hover: {
      opacity: 0.9,
    },
  },
  '@media screen and (max-width: 767px)': {
    // position: 'absolute',
    right: 0,
    '.navbar__logo--desktop': {
      display: 'none',
    },
    '.navbar__logo--mobile': {
      display: 'block',
    },
    '.navbar__nav': {
      display: 'none',
    },
  },
  '@media screen and (min-width: 767px)': {
    position: 'relative',
    '.navbar__logo--desktop': {
      display: 'block',
    },
    '.navbar__logo--mobile': {
      display: 'none',
    },
  },
};

export default styles;
