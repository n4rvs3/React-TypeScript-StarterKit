import { ActionTypes } from "../actionTypes";
import {Count, CounterActionType} from './types'

const initState: Count = {
    value: 0,
}

export const CountReducer = (state = initState, action: CounterActionType) : Count => {
    switch (action.type) {
        case ActionTypes.PlusCount:
            return {...state, value: state.value + 1}
        case ActionTypes.DownCount:
            return {...state, value: state.value - 1}
    }
    return state
}