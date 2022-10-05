import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  popularList: [],
  upComingList: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPopularList: (state, action) => {
      state.popularList = action.payload;
    },
    setUpComingList: (state, action) => {
      state.upComingList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setPopularList, setUpComingList} = movieSlice.actions;

export default movieSlice.reducer;
