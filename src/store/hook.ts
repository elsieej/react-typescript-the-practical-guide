import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";

type DispatchFunction = () => AppDispatch
const useAppDispatch: DispatchFunction = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {useAppSelector, useAppDispatch}
