import { useContext } from "react";
import { FormikContext } from "../context/formikContext";

export const useFormikContext = () => {
  const context = useContext(FormikContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
