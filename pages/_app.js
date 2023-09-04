import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import Navbar from '../components/Navbar/Nav';
import NextNProgress from 'nextjs-progressbar';
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';


function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		>
			  <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
	  <Navbar />
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
