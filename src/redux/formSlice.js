import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {},
  companyInfo: {},
  planSelection: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    savePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    saveCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
    },
    savePlanSelection: (state, action) => {
      state.planSelection = action.payload;
    },
  },
});

export const { savePersonalInfo, saveCompanyInfo, savePlanSelection } = formSlice.actions;
export default formSlice.reducer;
