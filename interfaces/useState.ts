import React, { Dispatch } from 'react';
type ReactState<T> = [T, Dispatch<React.SetStateAction<T>>];
export default ReactState;
