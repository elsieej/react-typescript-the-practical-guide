import {useContext} from "react";
import {CountContext} from "../store/count-context.tsx";

const useCountContext = () => {
    const ctx = useContext(CountContext);
    if (!ctx) {
        throw new Error('useCountContext must be used within CountContextProvider');
    }
    return ctx;
}

export default useCountContext;
