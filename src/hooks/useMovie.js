import {useDispatch} from 'react-redux';
import axios from 'axios';

import {setPopularList, setUpComingList} from '../redux/movieSlice';
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
        dispatch(setPopularList(responce.data.items));
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
        dispatch(setUpComingList(responce.data.items));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {fetchPopularMovies, fetchUpComingMovies};
};

export default useMovie;
