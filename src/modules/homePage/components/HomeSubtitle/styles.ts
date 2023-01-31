import { keyframes, styled } from '../../../../styles';

const onEnterSubtitle = keyframes({
  '0%': {
    transform: 'translateY(-100px)',
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
    transform: 'translateY(-100px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const SubtitleWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  animation: `${onEnterSubtitle} 0.25s ease-in-out`,

  '@bp3': {
    justifyContent: 'center',
  },
});

export const SubtitleContainer = styled('span', {
  width: 440,

  '@bp3': {
    textAlign: 'center',
  },
});

export const FirstQuoteSubtitleContainer = styled('div', {
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,
});

export const SecondQuoteSubtitleContainer = styled('div', {
  animation: `${onEnterUpBottom} 0.5s ease-in-out`,
});
