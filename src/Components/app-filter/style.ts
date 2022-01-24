import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .btn': {
      padding: '0.6rem 1.2rem',
      fontSize: '1.6rem',
      borderRadius: '0.4rem',
    },
  },
});

export default useStyles;
