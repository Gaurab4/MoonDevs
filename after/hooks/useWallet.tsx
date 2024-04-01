import { useEffect, useState } from "react";

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isBalanceError, setIsBalanceError] = useState<boolean>(false);
  const [walletChain, setWalletChain] = useState<any>(null);
  const [chains, setChains] = useState<any[]>([]);
  const [openChainModal , setOpenChainModal] = useState<any[]>([]);
  const [openConnectModal , setOpenConnectModal] = useState<any[]>([]);


  return {
    walletAddress,
    isWalletConnected,
    walletBalance,
    isBalanceError,
    walletChain,
    chains,
    openChainModal,
    openConnectModal
  };
};