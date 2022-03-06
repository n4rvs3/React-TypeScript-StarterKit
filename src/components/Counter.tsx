import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { PlusCount, DownCount } from "../store/counter/action";

export const Counter = () => {

    const CountState = useSelector((state: RootState) => state.count)


    const dispatch = useDispatch()
    const OnPlusCount = () => {
        dispatch(PlusCount())
    }

    const OnDownCount = () => {
        dispatch(DownCount())
    }

    return (
        <div className="w-40">
            <h2 className="text-3xl text-center">{CountState.value}</h2>
            <div className="flex justify-between">
                <button className="border-2 mx-2 px-1" type="button" onClick={OnPlusCount}>+1</button>
                <button className="border-2 mx-2 px-1" type="button" onClick={OnDownCount}>-1</button>
            </div>
        </div>
    )
}