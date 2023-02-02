import { styled } from '../../../../styles';

export const ProjectWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  '& ul': {
    listStyle: 'none',
  },

  '@bp3': {
    marginBottom: '$2',
  },
});

export const Description = styled('p', {
  fontFamily: '$text',
  fontSize: '$xl',
  lineHeight: '$shorter',
  marginBottom: '$8',
  color: '$text',

  '@bp3': {
    fontSize: '$lg',
  },

  '@bp2': {
    fontSize: '$md',
  },
});

export const InfoContainer = styled('div', {
  '@bp3': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const TitleContainer = styled('div', {
  padding: '$4 0 $2 0',
  display: 'flex',
  alignItems: 'baseline',
  marginBottom: '$2',

  '@bp3': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Title = styled('div', {
  marginRight: '$8',

  '@bp3': {
    marginBottom: '$4',
    marginRight: 0,
  },
});

export const Tag = styled('span', {
  fontFamily: '$headings',
  fontStyle: 'italic',
  paddingRight: '$2',
  color: '$text',
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

  '@bp3': {
    fontSize: '$md',
  },

  '@bp2': {
    fontSize: '$sm',
  },
});

export const ImageContainer = styled('div', {
  width: '75%',
  height: 540,
  position: 'relative',

  '@bp3': {
    width: '100%',
    height: 320,
  },
});
