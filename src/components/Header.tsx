import ButtonV2 from "./ButtonV2.tsx";
import {decrement, increment, reset} from "../store/count-slice.ts";
import {useAppDispatch} from "../store/hook.ts";

const Header = () => {
    //const {increment, decrement, reset} = useCountContext();
    const dispatch = useAppDispatch();

    const incrementHandler = () => {
        dispatch(increment(1));
    }
    const decrementHandler = () => {
        dispatch(decrement(1))
    }
    const resetHandler = () => {
        dispatch(reset())
    }


    return <div>
        <h1>Header</h1>
        <ButtonV2 onClick={incrementHandler}>Increase</ButtonV2>
        <ButtonV2 onClick={decrementHandler}>Decrease</ButtonV2>
        <ButtonV2 onClick={resetHandler}>Reset</ButtonV2>
    </div>
}

export default Header
