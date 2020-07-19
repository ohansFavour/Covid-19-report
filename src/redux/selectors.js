import { createSelector } from "reselect";

 const selectCoronaData = state => state.coronaData;

 export const selectDataLoading = createSelector(
   [selectCoronaData],
   data => data.isLoading
 );

 export const selectData = createSelector(
    [selectCoronaData],
    data => data.data
  );