import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</>
	);
}
