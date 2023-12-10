import {ComponentPropsWithoutRef} from "react";

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>

type LinkProps = {
    el: 'link'
} & ComponentPropsWithoutRef<'a'>

type Props = ButtonProps | LinkProps

const Button = (props: Props) => {
    if (props.el === 'button') {
        return <button {...props}>Button</button>
    }

    return <a {...props}>Link</a>
}

export default Button
