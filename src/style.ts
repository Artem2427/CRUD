import { createUseStyles } from 'react-jss';
import { COLORS } from './Utils/constants';

const useStyles = createUseStyles({
  root: {
    '& .search__panel': {
      marginBottom: '3rem',
      padding: '2.5rem',
      backgroundColor: COLORS.mainBackground,
      borderRadius: '0.4rem',
      boxShadow: '1.5rem 1.5rem 3rem rgba(0,0,0,0.15)',
      color: COLORS.white,
    },
  },
});

export default useStyles;
