import { useEffect, useState } from "react";

export const useAppSupplies = (initialAllSupplies: boolean) => {
    const [supplies, setSupplies] = useState<string>("");
    const [allSupplies, setAllSupplies] = useState<boolean>(initialAllSupplies);
    const [suppliesChain, setSuppliesChain] = useState<number>(0);

    const fetchSupplies = () => {
      if(initialAllSupplies){
        
      }
    };
  
    return {
      supplies,
      allSupplies,
      setSuppliesChain,
      suppliesChain,
      fetchSupplies,
    };
  };
  