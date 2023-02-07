import { styled } from '../../../../styles';

export const AboutWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  padding: '$8 $16 0 $16',
  background: '$background',

  '@bp3': {
    padding: '0 $8',
  },

  '@bp1': {
    padding: '0 $4',
  },
});

export const AboutContainer = styled('div', {
  display: 'flex',

  '@bp3': {
    flexDirection: 'column',
  },
});

export const TitleContainer = styled('div', {
  padding: '0 0 $4 0',
  display: 'flex',
  alignItems: 'baseline',
  marginBottom: '$2',
});

export const DescriptionContainer = styled('div', {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 0 $8 $8',

  '@bp3': {
    padding: '0 $4',
    width: '100%',
    alignItems: 'center',
    margin: '$4 0 $8 0',
  },
});

export const Description = styled('p', {
  fontFamily: '$text',
  fontSize: '$xl',
  lineHeight: '$shorter',
  marginBottom: '$4',
  color: '$text',

  width: '100%',

  '@bp2': {
    fontSize: '$md',
    marginBottom: '$2',
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  height: 480,
  position: 'relative',

  '@bp2': {
    height: 320,
  },
});

export const Icons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  color: '$text',
});

export const ContactLink = styled('a', {
  textDecoration: 'none',
  color: '$text',
});
