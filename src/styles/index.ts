import { createStitches } from '@stitches/react';

export const stitches = createStitches({});

export const globalStyles = stitches.globalCss({
  '*': { boxSizing: 'border-box' },
  '*:after': { boxSizing: 'border-box' },
  '*:before': { boxSizing: 'border-box' },
  body: { margin: 0, padding: 0 },
  h1: { margin: 0 },
});
