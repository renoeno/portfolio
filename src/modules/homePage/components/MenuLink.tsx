import { styled, keyframes } from '../../../styles';

const onEnter = keyframes({
  '0%': {
    transform: 'translateY(100px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const MenuLink = styled('a', {
  fontFamily: '$headings',
  textTransform: 'lowercase',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  padding: '0 $4',
  fontSize: '$lg',
  color: '$text',

  animation: `${onEnter} 0.75s ease-in-out`,

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '0.175rem',
    left: '10%',
    width: 0,
    height: '0.175rem',
    transition: 'all 0.375s ease-in-out',
    background: '$text',
  },

  '&:hover::after': {
    //left: 25%;
    width: '80%',
  },

  '@bp2': {
    fontSize: '$md',
  },
});
