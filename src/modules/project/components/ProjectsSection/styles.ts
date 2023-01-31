import { styled } from '../../../../styles';

export const ProjectWrapper = styled('div', {
  width: '100%',
  padding: '0 $16',
  marginBottom: '$8',

  '& ul': {
    listStyle: 'none',
  },

  '@bp3': {
    padding: '0 $8',
    textAlign: 'center',
  },

  '@bp1': {
    padding: '0 $4',
  },
});
