import { createStitches, defaultThemeMap } from '@stitches/react';
import { fonts, fontWeights, fontSizes, lineHeights, colors, space } from './tokens';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    theme: {
      colors: colors,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      fonts: fonts,
      lineHeights: lineHeights,
      space: space,
    },
    media: {
      bp1: '(max-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(max-width: 920px)',
    },
  });

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box', margin: 0, padding: 0 },
  '*:after': { boxSizing: 'border-box' },
  '*:before': { boxSizing: 'border-box' },
  html: {
    scrollBehavior: 'smooth',
    '&:focus-within': {
      scrollBehavior: 'smooth',
    },
  },
  body: { color: '$text', backgroundColor: '$background' },
  h1: { margin: 0 },
});
