import { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';
import { globalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
