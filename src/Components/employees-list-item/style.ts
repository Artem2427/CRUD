import { createUseStyles } from 'react-jss';
import { COLORS } from '../../Utils/constants';

const useStyles = createUseStyles({
  root: {
    padding: '1.5rem 2rem',
    borderBottom: `0.1rem solid ${COLORS.mainBackground}`,

    '&:last-child': {
      borderBottom: 'none',
    },

    '& span': {
      lineHeight: '3.5rem',
      fontSize: '2rem',
      cursor: 'pointer',
      minWidth: '55rem',
    },

    '& input': {
      lineHeight: '3.5rem',
      fontSize: '2rem',
      border: '0',
      textAlign: 'center',
    },

    '& button': {
      width: '3.5rem',
      height: '3.5rem',
      margin: '0.3rem',
      fontSize: '1.7rem',
      border: 'none',
      cursor: 'pointer',
    },

    '& .btn-cookie': {
      color: COLORS.darkYellow,
    },

    '& .btn-trash': {
      color: COLORS.red,
    },

    '& .fa-star': {
      width: '3.5rem',
      height: '3.5rem',
      textAlign: 'center',
      lineHeight: '3.5rem',
      fontSize: '1.6rem',
      color: COLORS.lightYellow,
      transition: '0.3s all',
      transform: 'translateX(30px)',
      opacity: '0',
    },

    '&.rise .fa-star': {
      opacity: '1',
      transform: 'translateX(0px)',
    },

    '&.increase .list-group-item-label, &.increase .list-group-item-input': {
      color: COLORS.darkYellow,
    },

    '&.increase .btn-star': {
      color: COLORS.gray,
    },
  },
});

export default useStyles;
