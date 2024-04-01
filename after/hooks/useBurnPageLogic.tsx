import { ChangeEvent, useEffect, useState } from "react";
import { parseEther } from "";
import { useWallet } from "./useWallet";
import { useAppSupplies } from "./useAppSupplies";
import { useEthersSigner } from "./useEthersSigner";
import { BurnTxProgress } from "../constants/constants";
import { useChainSelector } from "./useChainSelector";
import { useAppToast } from "./useAppToast";

export const useBurnPageLogic = () => {
  const { walletAddress, isWalletConnected, walletBalance, isBalanceError, openConnectModal, walletChain, chains, openChainModal } = useWallet();
  const { supplies, allSupplies, setSuppliesChain, suppliesChain, fetchSupplies } = useAppSupplies(true);
  const {toastMsg,toastSev} = useAppToast();
  const ethersSigner = useEthersSigner({ chainId: walletChain?.id ?? chainEnum.mainnet });
  const { openChainSelector, setOpenChainSelector, openChainSelectorModal } =useChainSelector();
  const [burnTransactions, setBurnTransactions] = useState<any[]>([]);
  const [isOldToken, setIsOldToken] = useState(false);
  const [burnAmount, setBurnAmount] = useState("");
  const [txButton, setTxButton] = useState<BurnTxProgress>(BurnTxProgress.default);
  const [txProgress, setTxProgress] = useState<boolean>(false);
  const [burnTxHash, setBurnTxHash] = useState<string | null>(null);

  const { chains: receiveChains } = useWallet();

  
  const refetchTransactions = () => {
    Promise.all(
      ChainScanner.fetchAllTxPromises(isChainTestnet(walletChain?.id))
    )
      .then((results: any) => {
        //console.log(res);
        let res = results.flat();
        res = ChainScanner.sortOnlyBurnTransactions(res);
        res = res.sort((a: any, b: any) => b.timeStamp - a.timeStamp);
        setBurnTransactions(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const executeBurn = async () => {
    if (!isWalletConnected) {
      openConnectModal();
    }
    if (burnAmount === "") {
      console.log("Enter amount to migrate");
      showToast("Enter amount to migrate", ToastSeverity.warning);
      return;
    }
    const newTokenAddress = fetchAddressForChain(walletChain?.id, "newToken");
    const oftTokenContract = new Contract(
      newTokenAddress,
      oftAbi,
      ethersSigner
    );
    let amount = parseEther(burnAmount);
    setTxButton(BurnTxProgress.burning);
    setTxProgress(true);
    try {
      const burnTx = await oftTokenContract.burn(
        //tokenAddress,
        amount
      );
      setBurnTxHash(burnTx.hash);
      console.log(burnTx, burnTx.hash);
      await burnTx.wait();
      setTxButton(BurnTxProgress.default);
      setTxProgress(false);
      refetchTransactions();
      fetchSupplies();
    } catch (err) {
      console.log(err);
      setTxButton(BurnTxProgress.default);
      setTxProgress(false);
      showToast("Burn Failed!", ToastSeverity.error);
      return;
    }
  };

  const onChangeBurnAmount = (e: ChangeEvent<HTMLInputElement>) => {
    
  };

  return {
    walletAddress,
    isWalletConnected,
    walletBalance,
    isBalanceError,
    openConnectModal,
    walletChain,
    chains,
    openChainModal,
    supplies,
    allSupplies,
    setSuppliesChain,
    suppliesChain,
    fetchSupplies,
    burnTransactions,
    isOldToken,
    setIsOldToken,
    burnAmount,
    setBurnAmount,
    ethersSigner,
    txButton,
    setTxButton,
    txProgress,
    setTxProgress,
    burnTxHash,
    setBurnTxHash,
    executeBurn,
    onChangeBurnAmount,
    openChainSelector, 
    setOpenChainSelector,
    openChainSelectorModal,
    receiveChains,
    toastMsg,
    toastSev,
  };
};
