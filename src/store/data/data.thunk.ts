import { AppThunk } from '..'
import { setData } from './data.reducer'

export const setDataThunkAction =
  (data: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setData(data))
  }
