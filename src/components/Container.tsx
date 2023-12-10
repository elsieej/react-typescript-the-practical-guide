import {ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from "react";

type Props<T extends ElementType> = PropsWithChildren<{
    as?: T
}> & ComponentPropsWithoutRef<T>

const Container = <T extends ElementType,>({children, as, ...props}: Props<T>) => {
    const Component = as || 'div'

    return (
        <Component className={'container'} {...props}>
            {children}
        </Component>
    )
}

export default Container
