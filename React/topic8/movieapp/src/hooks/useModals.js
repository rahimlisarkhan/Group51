import { useContext } from "react";
import { modalContext } from "../provider/ModalsProvider";

export const useModals = () => useContext(modalContext);
