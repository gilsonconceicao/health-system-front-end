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
  const { control, setValue, watch } = useFormContext();

  const formatShowValue = String(watch(name)).slice(0, 10);
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
                const value = event.target.value
                const valueToSave = moment(value).format()
                setValue(name, valueToSave); 
                setValue(`${name}Display`, value); 
              }}
              value={formatShowValue ?? value}
              {...rest}
            />
            {!!error && <p className="text-[10px] text-red-500">{error?.message}</p>}
          </Grid>
        )
      }}
    />
  );
};