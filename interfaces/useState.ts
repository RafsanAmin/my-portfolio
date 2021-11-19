import React, { Dispatch, FC as RComp } from 'react';
type ReactState<T> = [T, Dispatch<React.SetStateAction<T>>];
export default ReactState;
