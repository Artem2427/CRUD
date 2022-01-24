import { createUseStyles } from 'react-jss';
import { COLORS } from '../../Utils/constants';

const useStyles = createUseStyles({
  root: {
    padding: '2.5rem',
    marginBottom: '3rem',
    backgroundColor: COLORS.mainBackground,
    borderRadius: '0.4rem',
    boxShadow: `1.5rem 1.5rem 3rem rgba(0,0,0, 0.15)`,
    color: COLORS.white,

    '& .info__title-main': {
      fontSize: '3.6rem',
    },

    '& .info__title-minor': {
      fontSize: '2.8rem',
    },
  },
});

export default useStyles;
