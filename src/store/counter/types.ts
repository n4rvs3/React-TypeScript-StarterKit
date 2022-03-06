import {Action} from 'redux'
import { ActionTypes } from '../actionTypes'

export type Count = {
    value: number
}

interface PlusAction extends Action {
    type: typeof ActionTypes.PlusCount
}

interface DownAction extends Action {
    type: typeof ActionTypes.DownCount
}

export type CounterActionType = PlusAction | DownAction