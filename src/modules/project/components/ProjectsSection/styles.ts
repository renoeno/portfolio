import { styled } from '../../../../styles';

export const ProjectWrapper = styled('div', {
  background: '$background',
  width: '100%',
  padding: '0 $16',

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
