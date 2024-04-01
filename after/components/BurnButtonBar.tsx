import React, { ChangeEvent } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { BurnTxProgress } from "../constants/constants";
import AppExtLink from "./commonComponents/AppExtLink";
import AppIcon from "./commonComponents/AppIcon";

interface BurnButtonBarProps {
  burnAmount: string;
  txProgress: boolean;
  executeBurn: () => void;
  burnTxHash:string | null;
  walletChain:string;
  setBurnAmount:any;
  txButton:string;
}

const BurnButtonBar: React.FC<BurnButtonBarProps> = ({ burnAmount, txProgress, executeBurn ,burnTxHash,walletChain,setBurnAmount,txButton}) => {

  const onChangeBurnAmount = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") setBurnAmount("");
    if (isNaN(parseFloat(e.target.value))) return;
    setBurnAmount(e.target.value);
  };

  return (
    <>
    <div className="burn_bar">
       <p className="box_subheader">Burn your App</p>
        <div className="description medium">
                &quot; The process of reducing the supply of App tokens by
                permanently removing a certain number of them from circulation,
                often through a deliberate and recorded mechanism. &quot;
        </div>
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
        <input
          className="input_value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon
              url="/icons/fire.svg"
              fill={IconFilter.primary}
              size={1.5}
              margin={0}
            />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
    </div>
    {burnTxHash && (
                <div className="tx_links">
                  <AppTooltip
                    title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
                  >
                    <AppExtLink
                      url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
                      className="header_link"
                    >
                      Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
                    </AppExtLink>
                  </AppTooltip>
                </div>
              )}
    </>
  );
};

export default BurnButtonBar;
