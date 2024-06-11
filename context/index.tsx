'use client'
import React, { ReactNode } from 'react'
import { config, projectId } from '@/config'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({ // edit
  wagmiConfig: config,
  projectId,
  chainImages: {
    7: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxc964fwIEypxJinuBfxbVKzDks8y9Pg7xA&s',
  },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: false // Optional - false as default
})

export default function Web3ModalProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
