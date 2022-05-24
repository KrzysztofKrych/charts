import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface DataInitialState {
  data: string[]
}

export const initialState: DataInitialState = {
  data: ['test1', 'test2'],
}

const reducerName = 'data'

export const dataSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<string[]>) => {
      state.data = payload
    },
  },
})

export const { setData } = dataSlice.actions

export const dataSelector = (state: RootState) => state.dataReducer

export const dataReducer = dataSlice.reducer
