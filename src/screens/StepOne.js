import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { savePersonalInfo } from '../redux/formSlice';
import { personalInfoSchema } from '../utils/validationSchemas';
import InputField from '../components/InputField';
import Button from '../components/Button';
import StepTwo from './StepTwo';
import { ScrollView } from 'react-native-gesture-handler';

const StepOne = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        // companyWebsite: '',
        state: '',
        zipCode: '',
      }}
      validationSchema={personalInfoSchema}
      onSubmit={(values) => {

        console.log("values::::",values);
        dispatch(savePersonalInfo(values));
        navigation.navigate('StepTwo');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView>
        <View style={styles.container}>
          <InputField
            label="First Name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            error={touched.firstName && errors.firstName}
          />
          <InputField
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            error={touched.lastName && errors.lastName}
          />
          <InputField
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email && errors.email}
          />
          <InputField
            label="Company Name"
            value={values.companyName}
            onChangeText={handleChange('companyName')}
            onBlur={handleBlur('companyName')}
            error={touched.companyName && errors.companyName}
          />
          {/* <InputField
            label="Company Website"
            value={values.companyWebsite}
            onChangeText={handleChange('companyWebsite')}
            onBlur={handleBlur('companyWebsite')}
            error={touched.companyWebsite && errors.companyWebsite}
          /> */}
          <InputField
            label="State"
            value={values.state}
            onChangeText={handleChange('state')}
            onBlur={handleBlur('state')}
            error={touched.state && errors.state}
          />
          <InputField
            label="Zip Code"
            value={values.zipCode}
            onChangeText={handleChange('zipCode')}
            onBlur={handleBlur('zipCode')}
            error={touched.zipCode && errors.zipCode}
          />
          <Button title="Next" onPress={handleSubmit} />
        </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default StepOne;
