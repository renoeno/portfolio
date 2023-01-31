import { styled } from '../../../styles';

export const Heading = styled('h2', {
  fontFamily: '$headings',
  lineHeight: '$shorter',
  textTransform: 'lowercase',
  margin: 0,
  color: '$text',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$xxl' },
      lg: { fontSize: '$1xxxl' },
      xl: { fontSize: '$2xxxl' },
    },
    decoration: {
      italic: { fontStyle: 'italic', fontWeight: '$italic' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
