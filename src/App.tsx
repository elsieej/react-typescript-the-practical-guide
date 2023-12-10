import {useRef} from "react";

import './App.css'

import Form, {type FormHandle} from "./components/Form.tsx";
import Input from "./components/Input.tsx";

import InfoBox from "./components/InfoBox.tsx";
import Button from "./components/Button.tsx";
import ButtonV2 from "./components/ButtonV2.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

import {CountContextProvider} from "./store/count-context.tsx";

function App() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const customFormRef = useRef<FormHandle>(null);

    const saveHandler = (data: unknown) => {
        console.log(data);
        customFormRef.current?.clear()
    }

    return (
        <CountContextProvider>
            <Header />
            <Form ref={customFormRef} onSave={saveHandler}>
                <Input label={'Name'} id={'name'} ref={nameInputRef} />
                <Input label={'Email'} id={'email'} ref={emailInputRef} />

                <Button el={'button'} />
                <Button el={'link'}  />

                <ButtonV2 href={'https://google.com'} />
                <ButtonV2 target={'aaaa'} disabled />
            </Form>
            <InfoBox mode={'hint'}>
                <p>Some hint</p>
            </InfoBox>
            <InfoBox mode={'warning'} severity={'low'}>
                <p>Some warning</p>
            </InfoBox>
            <Footer />
        </CountContextProvider>
    )
}

export default App
