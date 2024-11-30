import { createSlice } from '@reduxjs/toolkit';
import { plantingAreaSizes } from '../../const';
import { MAX_SQUAD_SIZE, MIN_SQUAD_SIZE } from '../../const';

const initialState = {
  squadSize: 2,
  flowerSpecies: 'daisy',
  flowerColor: 'white',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementSquadSize: (state) => {
      if (state.squadSize < MAX_SQUAD_SIZE) {
        state.squadSize += 1;
      }
    },
    decrementSquadSize: (state) => {
      if (state.squadSize > MIN_SQUAD_SIZE) {
        state.squadSize -= 1;
      }
    },
    setSquadSize: (state, action) => {
      state.squadSize = action.payload;
    },
    setFlowerSpecies: (state, action) => {
      state.flowerSpecies = action.payload;
    },
    setFlowerColor: (state, action) => {
      state.flowerColor = action.payload;
    },
  },
});

export const {
  incrementSquadSize,
  decrementSquadSize,
  setSquadSize,
  setFlowerSpecies,
  setFlowerColor,
} = settingsSlice.actions;

// Selectors allow us to select a value from the state.
// Selectors can also be defined inline where they're used instead of
// in the slice file. For example:
// `useSelector((state: RootState) => state.counter.value)`
export const selectPlantingArea = ({ settings }) =>
  settings.squadSize >= 40
    ? plantingAreaSizes.xl
    : settings.squadSize >= 30
    ? plantingAreaSizes.l
    : settings.squadSize >= 20
    ? plantingAreaSizes.m
    : settings.squadSize >= 10
    ? plantingAreaSizes.s
    : plantingAreaSizes.xs;

export default settingsSlice.reducer;
