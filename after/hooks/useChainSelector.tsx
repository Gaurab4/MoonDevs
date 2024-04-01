import { useEffect, useState } from "react";

export const useChainSelector = () => {
  const [openChainSelector, setOpenChainSelector] = useState<any>();
  const [openChainSelectorModal ,setOpenChainSelectorModal] = useState<any>();



  return {
    openChainSelector,
    setOpenChainSelector,
    openChainSelectorModal,
    setOpenChainSelectorModal
 
  };
};