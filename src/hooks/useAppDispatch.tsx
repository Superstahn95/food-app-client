import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
