import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field  className="border  w-full  resize-none" as='textarea' id={name} name={name} {...rest}  placeholder={name} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea