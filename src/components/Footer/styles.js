const styles = {
  '@media screen and (max-width: 767px)': {
    '.footer__container': {
      flexDirection: 'column',
      '.item': {
        marginBottom: '1rem',
        p: {
          textAlign: 'center',
        },
      },
    },
  },
  '.footer__container .item p': {
    fontSize: '14px',
  },
};

export default styles;
