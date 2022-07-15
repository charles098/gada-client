import { useEffect, useState } from "react";

const useDetectClose: any = (elem: any, initialState: any) => {
  const [isOpen, setIsOpen] = useState<any>(initialState);

  useEffect(() => {
    const onClick = (e: any) => {
      if (elem.current !== null && !elem.current.contains(e.target)) {
        setIsOpen(isOpen)
        // 원래 setIsOpen(!isOpen) 이 맞지 않나..?
      } 
    };
    
    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen, elem]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
