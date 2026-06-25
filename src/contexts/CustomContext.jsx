import { createContext, useContext, useState } from "react";

const CustomContext = createContext({});

export const CustomProvider = ({ children }) => {
  const [operEstimateDialog, setOpenEstimateDialog] = useState(false);
  const [openDriveDialog, setOpenDriveDialog] = useState(false);
  return (
    <CustomContext.Provider
      value={{
        operEstimateDialog,
        setOpenEstimateDialog,
        openDriveDialog,
        setOpenDriveDialog,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useCustomContext = () => useContext(CustomContext);
