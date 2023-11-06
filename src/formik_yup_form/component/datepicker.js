import React from 'react';
import Dateview from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorMessage, Field } from 'formik';

function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div className=' form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    (form, field) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <Dateview id={name}{...field}{...rest} selected={value} onChange={val => setFieldValue(name, val)} />
                    }
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    )

}

export default DatePicker;