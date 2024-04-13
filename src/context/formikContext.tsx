import { createContext, useRef, ReactNode } from "react";
import { FormikHelpers, FormikProps } from "formik";
import React from "react";

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
    console.log("The function in the context is being triggered");
    if (formikRef.current) {
      console.log("Inside this conditional");
      formikRef.current.submitForm();
    }
  };
  return (
    <FormikContext.Provider value={{ handleSubmit, formikRef }}>
      {children}
    </FormikContext.Provider>
  );
}
