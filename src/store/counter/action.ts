import { ActionTypes } from "../actionTypes";
import { CounterActionType } from "./types";

export const PlusCount = () : CounterActionType => {
    return {
        type: ActionTypes.PlusCount
    }
}

export const DownCount = () : CounterActionType => {
    return {
        type: ActionTypes.DownCount
    }
}