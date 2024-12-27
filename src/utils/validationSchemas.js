import * as Yup from 'yup';

export const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  companyName: Yup.string().required('Company Name is required'),
  // companyWebsite: Yup.string().url('Invalid URL').required('Company Website is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required'),
});

export const companyInfoSchema = Yup.object().shape({
  fields: Yup.array().min(1, 'Select at least one field'),
  employees: Yup.string().required('Number of employees is required'),
  wfhPolicy: Yup.string().required('Select Yes or No'),
});

export const planSelectionSchema = Yup.object().shape({
  startDate: Yup.date().required('Start Date is required'),
  plan: Yup.string().required('Select a plan'),
});
