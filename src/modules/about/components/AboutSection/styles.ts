import { styled } from '../../../../styles';

export const AboutWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  padding: '$8 $16 0 $16',
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
});

export const Description = styled('p', {
  fontFamily: '$text',
  fontSize: '$xl',
  lineHeight: '$shorter',
  marginBottom: '$8',
});

export const ImageContainer = styled('div', {
  width: '100%',
  height: 480,
  position: 'relative',
});

export const Icons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
});

export const ContactLink = styled('a', {
  textDecoration: 'none',
  color: '$text',
});
