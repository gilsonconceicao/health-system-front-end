'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { Control, FieldErrors, FieldValues, UseFormGetValues, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
 
type FormContextType = {
  setValue: UseFormSetValue<any>;
  watch: any;
  control: any;
  reset: UseFormReset<any>;
  getValues: UseFormGetValues<any> | undefined;
  errors: FieldErrors<any>;
}

const FormContext = createContext<FormContextType>({
  errors: {},
  setValue: () => {},
  watch: () => { },
  reset: () => { },
  control: undefined,
  getValues: undefined
});

type IChildren = {
  children: React.ReactNode;
  defaultValues: any,
  validationSchema: any, 
  onSubmit: (values: FieldValues) => void;
}

export const FormContextProvider: React.FC<IChildren> = ({ children, defaultValues,  validationSchema, onSubmit }) => {
  const { handleSubmit, formState: { errors }, control, watch, reset, getValues, setValue} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues
  }); 

  return (
    <FormContext.Provider
      value={{
        errors, 
        getValues, 
        reset, 
        control,
        setValue, 
        watch
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  );
};


export const useFormContext = () => useContext(FormContext);