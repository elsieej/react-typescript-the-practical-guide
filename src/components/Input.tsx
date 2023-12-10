import {ComponentPropsWithoutRef, forwardRef} from "react";

type Props = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, Props>(({label, id, ...rest}: Props, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} ref={ref} {...rest} />
        </div>
    )
})

export default Input
