import { Field, Form, Formik } from "formik";
import React from "react";
import LayoutAuth from "./layouts/LayoutAuth";
import * as yup from "yup";
import { Box, TextField } from "@mui/material";

const initialValues = {};
const validationSchema = yup.o;
const onSubmit = async (values, props) => {
    //
};

function Login() {
    return (
        <LayoutAuth>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Form>
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                fullWidth
                                helperText={
                                    props.touched.email && props.errors.email
                                }
                                error={
                                    props.touched.email &&
                                    Boolean(props.errors.email)
                                }
                            />
                        </Form>
                    );
                }}
            </Formik>
        </LayoutAuth>
    );
}

export default Login;
