import React from 'react'

type InputFieldProps = {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = (props: InputFieldProps) => {
    return (
        <div className='my-10'>
            <span className='block text-sm font-medium text-slate-700'>Change Text</span>
            <input type="text" className='
            border-2
            rounded-md
            placeholder:italic 
            placeholder:text-slate-400
            px-2
            ' placeholder={props.placeholder} onChange={e => props.onChange(e)} />
        </div>
    )
}