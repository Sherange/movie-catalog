import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  popularList: [],
  upComingList: [],
  movieTitle: {},
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
    setMovieTitle: (state, action) => {
      state.movieTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setPopularList, setUpComingList, setMovieTitle} =
  movieSlice.actions;

export default movieSlice.reducer;
