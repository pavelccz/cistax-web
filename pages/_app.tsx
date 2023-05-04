import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';
import './app.scss';

const CisApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CisApp;
