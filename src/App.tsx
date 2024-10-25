
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config';
import { Walletoptions } from './components/Walletoptions';
import { Account } from './components/Account';
import { SendTransaction } from './components/SendTransaction';

function App() {

  const queryClinet=new QueryClient();

  return (
<div className='   bg-neutral-800 text-white h-auto'>
  
       <WagmiProvider config={config}>
      <QueryClientProvider client={queryClinet}>
       
        <div className='flex flex-col  gap-4 bg-neutral-800 h-full'>

            <Walletoptions></Walletoptions>
            <Account></Account>
            <SendTransaction ></SendTransaction>
        </div>
       
     
      </QueryClientProvider>

    </WagmiProvider>
</div>
 
  )
}

export default App
