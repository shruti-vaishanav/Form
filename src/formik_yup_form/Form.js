import { TextField, Grid, Container, Typography, Box, Link, Checkbox, FormHelperText, FormControlLabel, Button, Avatar } from '@mui/material';
import { useFormik, Formik, Form, } from 'formik';
import * as yup from "yup";



function RegistationForm() {
    const SignupSchema = yup.object().shape({
        firstname: yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required(' firstname is Required'),
        lastname: yup.string().required('lastname is require'),
        email: yup.string().email("Please enter a valid email", { regex: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$" }).required('Email is require'),
        Password: yup.string().required('password is require'),
        date: yup.string().required('date  require'),
        country: yup.string().required('select country')
    })
    const formik = useFormik({
        initialValues: {
            firstname: '', lastname: '', email: '', Password: '', date: '', country: ''
        },
        validationSchema: SignupSchema,
        onsubmit: value => { console.log("Form- Data", value) },
    })
    console.log(formik.value);

    return (
        <>
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
                        Sign up
                    </Typography>
                    {/* <Formik
                    // // initialValues={initialValues}
                    // validationSchema={SignupSchema}
                    // onSubmit={(values, { setsubmitting }) => {
                    //     console.log(values);
                    //     setsubmitting(true)
                    // }}
                    > */}
                    {/* {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => ( */}
                    <form onSubmit={formik.handleSubmit}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // autoComplete="given-name"
                                        // required
                                        fullWidth
                                        id="firstname"
                                        label="First Name"
                                        {...formik.getFieldProps("firstname")}
                                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        helperText={formik.touched.firstname && formik.errors.firstname}
                                    // onBlur={handleBlur}
                                    />
                                    {/* {touched.firstname && errors.firstname && (
                                            <FormHelperText error id="firstname">
                                                {errors.firstname}
                                            </FormHelperText>
                                        )} */}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        {...formik.getFieldProps("lastname")}
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        helperText={formik.touched.lastname && formik.errors.lastname}
                                    // autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        {...formik.getFieldProps("email")}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        label="Password"
                                        type="Password"
                                        id="Password"
                                        {...formik.getFieldProps("Password")}
                                        error={formik.touched.Password && Boolean(formik.errors.Password)}
                                        helperText={formik.touched.Password && formik.errors.Password}
                                    // value={formik.values.Password}
                                    // onChange={formik.handleChange}
                                    // autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="date"
                                        // value={formik.values.date}
                                        // onChange={formik.handleChange}
                                        {...formik.getFieldProps("date")}
                                        error={formik.touched.date && Boolean(formik.errors.date)}
                                        helperText={formik.touched.date && formik.errors.date}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        <label htmlFor="country">Country : </label>
                                        <select id="country" style={{ padding: '16px' }}>
                                            <option value="">Select a country</option>
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">UK</option>
                                        </select>

                                    </div>
                                </Grid>
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
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                    {/* )} */}
                    {/* </Formik> */}
                </Box>
            </Container>
        </>
    )
}


export default RegistationForm