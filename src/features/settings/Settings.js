import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPlantingArea,
  incrementSquadSize,
  decrementSquadSize,
  setSquadSize,
} from './settingsSlice';
import { MAX_SQUAD_SIZE, MIN_SQUAD_SIZE } from '../../const';

const squadSizeOptions = [2, 10, 20, 30, 40];

export function Settings() {
  const squadSize = useSelector(({ settings }) => settings.squadSize);
  const plantingArea = useSelector(selectPlantingArea);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Squad size: {squadSize}</div>
      {squadSizeOptions.map((squadSizeOption) => (
        <button
          key={squadSizeOption}
          onClick={() => dispatch(setSquadSize(squadSizeOption))}
        >
          {squadSizeOption}
        </button>
      ))}
      <button
        onClick={() => dispatch(decrementSquadSize())}
        disabled={squadSize <= MIN_SQUAD_SIZE}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementSquadSize())}
        disabled={squadSize >= MAX_SQUAD_SIZE}
      >
        Increment
      </button>
      <div>Planting area: {`[${plantingArea[0]}, ${plantingArea[1]}]`}</div>
    </div>
  );
}

export default Settings;
