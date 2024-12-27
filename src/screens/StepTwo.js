import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { saveCompanyInfo } from '../redux/formSlice';
import { companyInfoSchema } from '../utils/validationSchemas';
import { companyFields, employeeOptions } from '../utils/data';
import Button from '../components/Button';
import StepThree from './StepThree';

const StepTwo = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        fields: [],
        employees: '',
        wfhPolicy: '',
      }}
      validationSchema={companyInfoSchema}
      onSubmit={(values) => {
        dispatch(saveCompanyInfo(values));
        navigation.navigate('StepThree');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Company Fields</Text>
          {companyFields.map((field) => (
            <TouchableOpacity
              key={field}
              style={styles.checkbox}
              onPress={() => {
                const selected = values.fields.includes(field);
                setFieldValue(
                  'fields',
                  selected ? values.fields.filter((f) => f !== field) : [...values.fields, field]
                );
              }}
            >
              <Text style={values.fields.includes(field) ? styles.selected : styles.unselected}>
                {field}
              </Text>
            </TouchableOpacity>
          ))}
          {touched.fields && errors.fields && <Text style={styles.error}>{errors.fields}</Text>}

          <Text style={styles.label}>Number of Employees</Text>
          {employeeOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioButton}
              onPress={() => setFieldValue('employees', option)}
            >
              <Text style={values.employees === option ? styles.selected : styles.unselected}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          {touched.employees && errors.employees && <Text style={styles.error}>{errors.employees}</Text>}

          <Text style={styles.label}>WFH Policy</Text>
          {['Yes', 'No'].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioButton}
              onPress={() => setFieldValue('wfhPolicy', option)}
            >
              <Text style={values.wfhPolicy === option ? styles.selected : styles.unselected}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          {touched.wfhPolicy && errors.wfhPolicy && <Text style={styles.error}>{errors.wfhPolicy}</Text>}

          <View style={styles.buttons}>
            <Button title="Previous" onPress={() => navigation.goBack()} />
            <Button title="Next" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkbox: {
    marginBottom: 10,
  },
  radioButton: {
    marginBottom: 10,
  },
  selected: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  unselected: {
    color: '#333',
  },
  error: {
    color: '#FF0000',
    fontSize: 12,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StepTwo;
