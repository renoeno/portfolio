import { keyframes, styled } from '../../../../styles';

const onEnterTitle = keyframes({
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

const onEnterUpBottom = keyframes({
  '0%': {
    transform: 'translateY(-200px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const HomeTitleWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  padding: '0 $16',

  '@bp3': {
    padding: '0 $8',
  },

  '@bp1': {
    padding: '0 $4',
  },
});

export const TitleContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: 320,
  margin: '0 auto',
  animation: `${onEnterTitle} 0.25s ease-in-out`,

  '@bp3': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FirstNameContainer = styled('div', {
  position: 'absolute',
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,

  '@bp3': {
    position: 'relative',
  },
});

export const LastNameContainer = styled('div', {
  position: 'absolute',
  left: '13.5rem',
  top: '4.875rem',
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,

  '@bp3': {
    position: 'relative',
    left: 0,
    top: 0,
  },
});
