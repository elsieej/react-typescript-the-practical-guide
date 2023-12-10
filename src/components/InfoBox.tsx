import {PropsWithChildren} from "react";

type HintBoxProps = PropsWithChildren<{
    mode: 'hint';
}>

type WarningBoxProps = PropsWithChildren<{
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
}>

type Props = HintBoxProps | WarningBoxProps

const InfoBox = (props: Props) => {
    const {mode, children} = props
    if(mode === 'hint') {
        return (
            <div className={`hint`}>
                <div>Hint</div>
                {children}
            </div>
        )
    } else {
        const {severity} = props
        return (
            <div className={`waring--${severity}`}>
                <div>Warning</div>
                {children}
            </div>
        )
    }
}

export default InfoBox
