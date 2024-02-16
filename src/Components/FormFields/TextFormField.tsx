'use client';
import { Controller } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { useFormContext } from "@/Contexts/FormContext";
import { Grid } from "@chakra-ui/react";

type TextFormFieldProps = {
  name: string,
  label: string
} & InputProps;

export const TextFormField = ({ name, label, ...rest }: TextFormFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error }
      }) => {
        return (
          <Grid>
            <Input 
              placeholder={label}
              onChange={onChange}
              value={value}
              {...rest}
            />
            {!!error && <p className="text-[10px] text-red-500">{error?.message}</p>}
          </Grid>
        )
      }}
    />
  );
};