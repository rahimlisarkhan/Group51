import {configureStore} from "@reduxjs/toolkit"
import { reducers } from "./slices"


export const store = configureStore({
    reducer:reducers
})