
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";




export function SendTransaction(e:React.FormEvent<HTMLFormElement>){

    const {data :hash,sendTransaction}=useSendTransaction();

    async function Sendtx(){
        const formdata=new FormData(e.target as HTMLFormElement)
        const to=formdata.get('address') as `0x${string}`
        const value=formdata.get('value') as string
        sendTransaction({to,value:parseEther(value)});
    }
    return  <div className="flex flex-col bg-neutral-800 z-10 ">
        <input type="to"placeholder="0xA0Cf…251e" required />
              <input type="value"placeholder="0.05" required />
              <button onClick={Sendtx}> Send</button>
              {hash && <div> Transaction Hash: {hash}</div>}
    </div>
}