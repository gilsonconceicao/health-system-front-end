'use client';
import { Controller } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { useFormContext } from "@/Contexts/FormContext";
import { Grid } from "@chakra-ui/react";
import moment from 'moment'

type DatePickerFormFieldProps = {
  name: string,
  label: string
} & InputProps;

export const DatePickerFormField = ({ name, label, ...rest }: DatePickerFormFieldProps) => {
  const { control, setValue, watch, errors } = useFormContext();

  const formatShowValue = String(watch(name)).slice(0, 10);
  const errorMessage = errors[name]?.message as string ?? "" ; 
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
            {!!value && <label style={{ fontSize: '12px' }}>{label}</label>}
            <Input
              type="date"
              placeholder={label}
              onChange={(event) => {
                const inputValue = event.target.value;
                const isoDate = new Date(inputValue)?.toISOString();
                setValue(name, isoDate);
                setValue(`${name}Display`, value); 
              }}
              value={formatShowValue ?? value}
              {...rest}
            />
            {!!errors && errorMessage.length > 0 && <p className="text-[10px] text-red-500">{errorMessage}</p>} 
          </Grid>
        )
      }}
    />
  );
};