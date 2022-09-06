import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.get.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.get.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.get.rejected](state, _) {
      state.isLoading = false;
    },
    [contactsOperations.add.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.add.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
    },
    [contactsOperations.add.rejected](state, _) {
      state.isLoading = false;
    },
    [contactsOperations.remove.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.remove.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [contactsOperations.remove.rejected](state, _) {
      state.isLoading = false;
    },
  },
});
export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
