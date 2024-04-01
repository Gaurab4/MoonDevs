import React from 'react'

interface ChainSelectorProps {
    title:string;
    openChainSelector : any;
    setOpenChainSelector :any;
    chains : any;
    selectedChain : number;
    setSelectedChain : (type: number) => void;
}

const ChainSelector:  React.FC<ChainSelectorProps> = ({title,openChainSelector,setOpenChainSelector,chains,selectedChain,setSelectedChain}) => {
  return (
    <div>ChainSelector</div>
  )
}

export default ChainSelector