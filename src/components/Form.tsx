import {type FormEvent, forwardRef, PropsWithChildren, useImperativeHandle, useRef} from "react";

export type FormHandle = {
    clear: () => void
}

type Props = PropsWithChildren<{
    onSave: (data: unknown) => void
}>

const Form = forwardRef<FormHandle, Props>(({children, onSave}: Props, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
       clear: () => {
           formRef.current?.reset();
       }
    }), []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        e.currentTarget.reset();

        onSave(data);
    }

    return (
        <form autoComplete={'false'} ref={formRef} onSubmit={handleSubmit}>
            {children}
        </form>
    )
})

export default Form
