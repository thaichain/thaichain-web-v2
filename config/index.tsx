import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { thaiChain } from 'wagmi/chains'

// Your WalletConnect Cloud project ID
export const projectId = '4f0ccd2a3a129f76238feb2d85d8f679'

// Create a metadata object
const metadata = {
  name: 'ThaiChain 2.0',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [thaiChain] as const // createWeb3Modal: context\index.tsx
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
//   ...wagmiOptions // Optional - Override createConfig parameters
})