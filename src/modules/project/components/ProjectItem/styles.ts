import { styled } from '../../../../styles';

export const ProjectWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  '& ul': {
    listStyle: 'none',
  },
});

export const Description = styled('p', {
  fontFamily: '$text',
  fontSize: '$xl',
  lineHeight: '$shorter',
  marginBottom: '$4',
});

export const TitleContainer = styled('div', {
  padding: '$4 0 $2 0',
  display: 'flex',
  alignItems: 'baseline',
  marginBottom: '$2',
});

export const Title = styled('div', {
  marginRight: '$8',
});

export const Tag = styled('span', {
  fontFamily: '$headings',
  fontStyle: 'italic',
  paddingRight: '$2',
});

export const LinkContainer = styled('div', {
  marginBottom: '$4',
});

export const ProjectLink = styled('a', {
  maxWidth: 420,
  fontFamily: '$headings',
  fontStyle: 'italic',
  textTransform: 'lowercase',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  fontSize: '$sm',
  color: '$text',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: 0,
    height: '0.1rem',
    transition: 'all 0.375s ease-in-out',
    background: '$text',
  },

  '&:hover::after': {
    //left: 25%;
    width: '35%',
  },
});

export const ImageContainer = styled('div', {
  width: '75%',
  height: 540,
  position: 'relative',
});
