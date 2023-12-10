import {useAppSelector} from "../store/hook.ts";

const Footer = () => {
    //const {count} = useCountContext();
    const {value} = useAppSelector(state => state.count)
    return (
        <div>{value}</div>
    )
}

export default Footer
