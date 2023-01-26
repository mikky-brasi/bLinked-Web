import { ChangeEvent, useState } from "react";
import { FieldValues, UseFormRegister, UseFormReturn } from "react-hook-form";

export function useFloatingLabelFormInput<TFieldValues extends FieldValues>(
    form: UseFormReturn<TFieldValues, unknown>,
    fieldName: Parameters<UseFormRegister<TFieldValues>>[0],
) {
    const [focused, setFocused] = useState(false);
    const [empty, setEmpty] = useState(true);

    const formProps = form.register(fieldName, {
        onBlur: () => {
            setFocused(false);
        },
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            setEmpty(!e.target.value);
        },
    });

    const inputProps = {
        ...formProps,
        onFocus: () => {
            setFocused(true);
        },
    } satisfies React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;

    return {
        props: inputProps,
        active: focused || !empty,
    };
}
