import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { savePlanSelection } from '../redux/formSlice';
import { plans } from '../utils/data';
import Button from '../components/Button';

const StepThree = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [numUsers, setNumUsers] = useState(1);

  const calculateTotal = () => {
    const plan = plans.find((p) => p.type === selectedPlan.split('-')[0]);
    const frequency = selectedPlan.split('-')[1];
    const price = frequency === 'Monthly' ? plan?.price : plan?.price * 12;
    return (price || 0) * numUsers;
  };

  return (
    <Formik
      initialValues={{
        startDate: new Date(), // Ensure this is a Date object
        plan: '',
      }}
      onSubmit={(values) => {
        dispatch(savePlanSelection({ ...values, selectedPlan, total: calculateTotal() }));
        Alert.alert(
            'Final Order',
            `Plan: ${selectedPlan}\nTotal: $${calculateTotal()}`, // Format the message as a string
          );
        console.log('Final Order:', { selectedPlan, total: calculateTotal() });
      }}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <View style={styles.container}>
          {/* <Text style={styles.label}>Start Date</Text>
          <DatePicker
            style={styles.datePicker}
            date={values.startDate} // Must be a Date object
            mode="date"
            onDateChange={(date) => {
              setFieldValue('startDate', date); // Pass Date object
            }}
          /> */}

          <Text style={styles.label}>Select a Plan</Text>
          {plans.map((plan) => (
            <Button
              key={`${plan.type}-${plan.frequency}`}
              title={`${plan.type} (${plan.frequency}) - $${plan.price}`}
              onPress={() => setSelectedPlan(`${plan.type}-${plan.frequency}`)}
            />
          ))}

          <Text style={styles.label}>Total Price: ${calculateTotal()}</Text>

          <View style={styles.buttons}>
            <Button title="Previous" onPress={() => navigation.goBack()} />
            <Button title="Finish" onPress={handleSubmit} />
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
  datePicker: {
    width: 30, // Ensure the width is valid
    marginBottom: 20,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StepThree;
