import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Fund } from '../../types/SliceType';

interface FundsState {
  funds: Fund[];
}

const initialState: FundsState = {
  funds: [],
};

const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    setFunds(state, action: PayloadAction<Fund[]>) {
      state.funds = action.payload;
    },
  },
});

export const { setFunds } = fundsSlice.actions;
export default fundsSlice.reducer;
