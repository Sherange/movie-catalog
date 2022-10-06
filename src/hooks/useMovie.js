import {useDispatch} from 'react-redux';
import axios from 'axios';

import {
  setPopularList,
  setUpComingList,
  setMovieTitle,
} from '../redux/movieSlice';
import {baseUrl, endPoints, apiKey} from '../constants/api_config';

const useMovie = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const responce = await axios.get(
        baseUrl + endPoints.popularMovies + apiKey,
        {headers: {Accept: 'application/json'}},
      );

      if (responce && responce.status === 200) {
        dispatch(setPopularList(responce.data.items.slice(0, 10)));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const fetchUpComingMovies = async () => {
    try {
      const responce = await axios.get(
        baseUrl + endPoints.comingSoon + apiKey,
        {headers: {Accept: 'application/json'}},
      );
      if (responce && responce.status === 200) {
        dispatch(setUpComingList(responce.data.items.slice(0, 10)));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const fetchMovieTitle = async id => {
    try {
      const responce = await axios.get(
        baseUrl + endPoints.title + apiKey + '/' + id,
        {headers: {Accept: 'application/json'}},
      );
      if (responce && responce.status === 200) {
        dispatch(setMovieTitle(responce.data));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {fetchPopularMovies, fetchUpComingMovies, fetchMovieTitle};
};

export default useMovie;
