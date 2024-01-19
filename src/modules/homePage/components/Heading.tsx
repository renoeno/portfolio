import { styled } from '../../../styles';

export const Heading = styled('h2', {
  lineHeight: '$shorter',
  textTransform: 'lowercase',
  margin: 0,
  color: '$text',
  fontWeight: '$regular',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$xxl' },
      lg: { fontSize: '$1xxxl' },
      xl: { fontSize: '$2xxxl' },
      xhg: { fontSize: '$xhg' },
      xxhg: { fontSize: '$xxhg' },
    },
    decoration: {
      italic: { fontStyle: 'italic', fontWeight: '$regular' },
    },
    font: {
      heading: {
        fontFamily: '$text',
      },
      subHeading: {
        fontFamily: '$headings',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    font: 'heading',
  },
});
