import { TextField, Grid, Container, Typography, Box, Link, Checkbox, FormControlLabel, Button, Avatar } from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
// import { addDays, format } from "date-fns";
import * as yup from "yup";



function RegistationForm2() {
    const validationschema = yup.object({
        firstname: yup.string().required('fistname is require'),
        lastname: yup.string().required('lastname is require'),
        email: yup.string().email("Please enter a valid email", { regex: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$" }).required('Email is require'),
        Password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('password is require'),
        date: yup.string().required('date  require'),
        country: yup.string().required('select country')
    })

    const formik = useFormik({
        initialValues: {
            firstname: '', lastname: '', email: '', Password: '', date: '', country: ''
        },
        validationSchema: validationschema,
        onsubmit: async value => { console.log("Form- Data", await value) },
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
                        Sign up(hook mui)
                    </Typography>

                    <form onSubmit={formik.handleSubmit}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // autoComplete="given-name"
                                        // required
                                        fullWidth
                                        id="firstName"
                                        name='firstname'
                                        onChange={formik.handleChange}
                                        value={formik.values.firstname}
                                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        helperText={formik.touched.firstname && formik.errors.firstname}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="lastname"
                                        name='lastname'
                                        label="Last Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastname}
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        helperText={formik.touched.lastname && formik.errors.lastname}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="email"
                                        name='email'
                                        label="Email Address"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        name="Password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.Password}
                                        error={formik.touched.Password && Boolean(formik.errors.Password)}
                                        helperText={formik.touched.Password && formik.errors.Password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="date"
                                        name="date"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                        error={formik.touched.date && Boolean(formik.errors.date)}
                                        helperText={formik.touched.date && formik.errors.date}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <select id="country" onChange={formik.handleChange} value={formik.values.country}
                                            error={formik.touched.country && Boolean(formik.errors.country)}
                                            helperText={formik.touched.country && formik.errors.country}
                                        >
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
                </Box>
            </Container>
        </>
    )
}


export default RegistationForm2