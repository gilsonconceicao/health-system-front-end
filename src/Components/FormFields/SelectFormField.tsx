import { useFormContext } from '@/Contexts/FormContext';
import { Grid, Select, SelectProps } from '@chakra-ui/react'
import React from 'react'

export type SelectOptionType = {
    label: string;
    value: string
}

type SelectFormFieldProps = {
    name: string,
    label: string,
    options: SelectOptionType[]
} & SelectProps;

export function SelectFormField({ label, name, options }: SelectFormFieldProps) {
    const { setValue, watch, errors} = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valueSelected = e.target.value;
        const findItem = options.find(item => item.value === valueSelected);

        if (findItem !== null) {
            setValue(name, findItem?.value);
            setValue(`${name}Display`, findItem?.label);
        }
    }

    const value = watch(name);

    const messageError = errors[name]?.message?.toString() ?? "";

    return (
        <Grid>
            {!!value && <label style={{fontSize: '12px'}}>{label}</label>}
            <Select
                value={value}
                placeholder={label}
                onChange={(event) => handleChange(event)}
            >
                {options.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.label}</option>
                    )
                })}
            </Select>

            {!!errors && messageError.length > 0 && <p className="text-[10px] text-red-500">{messageError}</p>}

        </Grid>
    )
}
