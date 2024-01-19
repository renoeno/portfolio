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
  background: '$background',
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
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: 480,
  margin: '0 auto',
  animation: `${onEnterTitle} 0.25s ease-in-out`,

  '@bp1': {
    flexDirection: 'column',
    height: 320,
  },
});

export const FirstNameContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,
});

export const LastNameContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '-8rem',
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,

  '@bp3': {
    marginTop: '-4rem',
  },

  '@bp1': {
    marginTop: '-2rem',
  },
});
