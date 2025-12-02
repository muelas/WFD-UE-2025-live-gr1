<script setup lang="ts">

import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from "yup";

function onSubmit(values: any) {
  console.log("Submitted:", values);
}

// validierungsregel für das Email Field
const emailRule = yup
    .string()
    .required("Bitte Email angeben")
    .email("Keine gültige Email");

// Validierungsschema
const simpleSchema=yup.object({
  email: yup.string().required().email(),
  name: yup.string().required().min(3),
});
</script>

<template>
  <h2>Form Validation mit VeeValidate und yup</h2>
  <h3>Field-level</h3>
  <Form @submit="onSubmit">
    <label for="email_input">Email:</label>
    <Field type="email" id="email_input" name="email" :rules="emailRule"></Field>
    <ErrorMessage name="email"></ErrorMessage>
    <button>Submit</button>
  </Form>
  <h3>Form-level</h3>
  <Form @submit="onSubmit" :validation-schema="simpleSchema">
    <label for="name_input">Name:</label>
    <Field type="text" id="name_input" name="name"></Field>
    <ErrorMessage name="name"></ErrorMessage>
    <label for="email_input">Email:</label>
    <Field type="email" id="email_input" name="email"></Field>
    <ErrorMessage name="email"></ErrorMessage>
    <button>Submit</button>
  </Form>
</template>

<style scoped>

</style>