import { createContext, useRef, ReactNode } from "react";
import { FormikProps } from "formik";

interface FormContextType {
  handleSubmit: () => void;
  formikRef: React.RefObject<FormikProps<any>>;
}

interface FormikProp {
  children: ReactNode;
}

export const FormikContext = createContext<FormContextType | undefined>(
  undefined
);

export default function FormikProvider({ children }: FormikProp) {
  // type FormikFormRef = React.RefObject<FormikHelpers<FormValues>>
  //   const formikRef = useRef<FormikHelpers<any>>(null);
  const formikRef = useRef<FormikProps<any>>(null);
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };
  return (
    <FormikContext.Provider value={{ handleSubmit, formikRef }}>
      {children}
    </FormikContext.Provider>
  );
}
