import React from 'react';
import * as yup from "yup";
import { Grid, Container, Typography, Box, Link, Checkbox, FormControlLabel, Button, Avatar } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { type } from '@testing-library/user-event/dist/type';
// import DatePicker from './component/datepicker';

function UseFormikComponent(params) {
    const initialValues = {

        firstname: '',
        lastname: '',
        date: '',
        country: '',
        email: '',
        password: '',
        confirmpassword: '',
        PhoneNumbers: [],
        phNumbers: ['']
        // comments: '',
        // address: '',
        // social: { facebook: '', twitter: "" }

    }
    const validationSchema = yup.object().shape({
        firstname: yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required(' firstname is Required'),
        lastname: yup.string().required('lastname is require'),
        email: yup.string().email("Please enter a valid email", { regex: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$" }).required('Email is require'),
        password: yup.string().required('password is require'),
        confirmpassword: yup.string()
            .oneOf([yup.ref('password'), ''], 'Passwords must match')
            .required('conifirm password is require'),
        date: yup.string().required('date  require'),
        country: yup.string().required('select country'),
        // address: yup.string().required('address require')
    })
    const onsubmit = (value, onSubmitProps) => {
        console.log('onSubmitProps: ', onSubmitProps);
        console.log("value", value)
        onSubmitProps.resetForm()
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onsubmit}
                // on submit error show
                validateOnChange={false}
                validateOnBlur={false}
            >
                {formik => {
                    console.log('formik props', formik);
                    return (
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    {/* <LockOutlinedIcon /> */}
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up(formik component)
                                </Typography>

                                <Form >
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    // autoComplete="given-name"
                                                    // required
                                                    // fullWidth
                                                    type="text"
                                                    id="firstName"
                                                    name='firstname'
                                                    placeholder="first name"
                                                />
                                                <ErrorMessage component='p' name='firstname' />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    // required
                                                    // fullWidth
                                                    type="text"
                                                    id="lastname"
                                                    name='lastname'
                                                    placeholder="last name"
                                                />
                                                <ErrorMessage component='p' name='lastname' />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Field
                                                    // fullWidth
                                                    margin="normal"
                                                    type="date"
                                                    name="date"
                                                />
                                                <ErrorMessage component='p' name='date' />
                                            </Grid>
                                            {/* <DatePicker /> */}
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="password"
                                                />
                                                <ErrorMessage component='p' name='password' />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    id="password"
                                                    name="confirmpassword"
                                                    type="password"
                                                    placeholder="confirm password"
                                                />
                                                <ErrorMessage component='p' name='confirmpassword' />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name='email'
                                                    placeholder="email"
                                                />
                                                <ErrorMessage name='email'>
                                                    {
                                                        (errormsg) => <p>{errormsg}</p>
                                                    }
                                                </ErrorMessage>
                                            </Grid>
                                            {/* arrays */}
                                            {/* <Grid item xs={12} sm={6}>
                                        <label htmlFor="primaryph"></label>
                                        <Field
                                            id="primaryph"
                                            name="PhoneNumbers[0]"
                                            type="text"
                                            placeholder="primaryph"
                                        />
                                        <ErrorMessage component='p' name='PhoneNumbers[0]"' />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="secondaryph"></label>
                                        <Field
                                            id="secondaryph"
                                            name="PhoneNumbers[1]"
                                            type="text"
                                            placeholder="secondaryph"
                                        />
                                        <ErrorMessage component='p' name='PhoneNumbers[1]"' />
                                    </Grid> */}
                                            <Grid item xs={12}>
                                                <div>
                                                    {/* <label htmlFor="country">Country</label> */}
                                                    <Field id="country" as='select'
                                                        name='country'
                                                    >
                                                        <option value="">Select a country</option>
                                                        <option value="usa">USA</option>
                                                        <option value="canada">Canada</option>
                                                        <option value="uk">UK</option>
                                                    </Field>
                                                </div>
                                                <ErrorMessage component='p' name='country' />

                                            </Grid>
                                            {/* field array */}
                                            <Grid item xs={12} >
                                                <label htmlFor="primaryph"></label>
                                                <FieldArray name='phNumbers' >
                                                    {(FieldArrayProps) => {
                                                        console.log('FieldArrayProps: ', FieldArrayProps);
                                                        const { push, remove, form } = FieldArrayProps
                                                        const { values } = form
                                                        const { phNumbers } = values
                                                        console.log('form Error', form.errors);
                                                        return (
                                                            <div >
                                                                {phNumbers.map((phNumber, index) => (
                                                                    <div key={index}  >
                                                                        <Field name={`phNumbers[${index}]`} type='text' placeholder='phonenumber' />
                                                                        {index > 0 && (
                                                                            <button type='button' onClick={() => remove(index)}>-</button>
                                                                        )}
                                                                        <button type='button' onClick={() => push('')}>+</button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )
                                                    }}
                                                </FieldArray>
                                            </Grid>
                                            {/* <Grid item xs={12}>
                                        <Field
                                            fullWidth
                                            name="address"
                                        >
                                            {
                                                (props) => {
                                                    const { field, form, meta } = props
                                                    console.log(props)
                                                    return <>
                                                        <input id="address" type='text' placeholder="address" {...field} />
                                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                    </>
                                                }
                                            }
                                        </Field>
                                        <ErrorMessage component='p' name='address' />
                                    </Grid> */}
                                            {/* <Grid item xs={12}>
                                        <Field
                                            fullWidthx
                                            as='textarea'
                                            placeholder="text"
                                            margin="normal"
                                            name="comments"
                                        />
                                        <ErrorMessage component='p' name='comments' />
                                    </Grid> */}

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        // disabled={!formik.isValid}
                                        >
                                            Sign Up
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            type='reset'>
                                            reset
                                        </Button>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Link href="#" variant="body2">
                                                    Already have an account? Sign in
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Form>
                            </Box>
                        </Container>
                    )
                }}
            </Formik>
        </>
    )
}

export default UseFormikComponent;