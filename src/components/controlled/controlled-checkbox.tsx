import {FieldValues, useController, UseControllerProps} from 'react-hook-form'
import {Checkbox, CheckboxProps} from "@/components/ui/Checkbox"

// import { Checkbox, CheckboxProps } from '@/components'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = ({
                                     name,
                                     rules,
                                     shouldUnregister,
                                     control,
                                     defaultValue,
                                     ...checkboxProps
                                   }: ControlledCheckboxProps<FieldValues>) => {
  const {
    field: {onChange, value},
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <Checkbox
      {...{
        onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}