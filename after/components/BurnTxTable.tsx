import React from 'react'


interface BurnTxTableProps {
    data : any;
    priceUSD : string;
  }

const BurnTxTable :  React.FC<BurnTxTableProps> = ({data,priceUSD }) => {
  return (
    <div>BurnTxTable</div>
  )
}

export default BurnTxTable