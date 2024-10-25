import * as React from 'react'
import { useConnect } from 'wagmi'

export  function Walletoptions(){
   const {connectors,connect}=useConnect();

   return  connectors.map((connector)=>(
    <button key={connector.id} onClick={()=>{
        connect({connector})
    }}>
         {connector.name}
    </button>
   ))


}