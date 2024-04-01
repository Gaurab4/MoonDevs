import { useEffect, useState } from "react";

export const useAppToast = () => {
 
const [toastMsg , setToastMsg] = useState<any>();
const [toastSev , setToastSev] = useState<any>();

  return {
    toastMsg,
    toastSev,
    setToastMsg,
    setToastSev
  };
};