import { createUseStyles } from 'react-jss';
import { COLORS } from '../../Utils/constants';

const useStyles = createUseStyles({
  root: {
    padding: '2.5rem',
    backgroundColor: COLORS.mainBackground,
    borderRadius: '0.4rem',
    boxShadow: `1.5rem 1.5rem 3rem rgba(0,0,0, 0.15)`,
    color: COLORS.white,

    '& h3': {
      fontSize: '3.2rem',
    },

    '& .add-form': {
      marginTop: '2rem',

      '& .form-control': {
        padding: '0.6rem 1.2rem',
        fontSize: '1.6rem',
        width: '35rem',
        marginRight: '2rem',
      },

      '& .btn': {
        padding: '0.6rem 1.2rem',
        fontSize: '1.6rem',
        borderRadius: '0.4rem',
      },
    },
  },
});

export default useStyles;
