import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Custom input field component with validation support.
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the input field
 * @param {string} props.value - Current value of the input field
 * @param {function} props.onChangeText - Callback to handle text change
 * @param {string} props.error - Error message to display if validation fails
 * @param {function} props.onBlur - Callback to handle blur event
 */
const InputField = ({ label, value, onChangeText, error, onBlur }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  inputError: {
    borderColor: '#FF0000',
  },
  error: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputField;
