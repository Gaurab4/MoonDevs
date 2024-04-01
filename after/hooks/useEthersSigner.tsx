import { useEffect, useState } from "react";


export const useEthersSigner = ({ chainId }: { chainId: string }) => {
  const [ethersSigner, setEthersSigner] = useState<any>(null);

  return ethersSigner;
};
