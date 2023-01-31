import { keyframes, styled } from '../../../../styles';

const onEnterMenu = keyframes({
  '0%': {
    transform: 'translateY(-200px)',
    opacity: 0,
  },
  '99%': {
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const MenuWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const MenuContainer = styled('div', {
  // width: 440
  animation: `${onEnterMenu} .25s ease-in-out`,
});
