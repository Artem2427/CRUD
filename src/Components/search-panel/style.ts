import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginBottom: '3rem',

    '& .form-control': {
      padding: '0.6rem 1.2rem',
      fontSize: '1.6rem',
    },
  },
});

export default useStyles;
