import {ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never
}

type LinkProps = ComponentPropsWithoutRef<'a'> & {
    href: string
}

type Props = ButtonProps | LinkProps

const isLinkProps = (props: Props): props is LinkProps => 'href' in props

const ButtonV2 = (props: Props) => {
    if(isLinkProps(props)) {
        return <a {...props}>Link</a>
    }

    return <button {...props}>Button</button>
}

export default ButtonV2
