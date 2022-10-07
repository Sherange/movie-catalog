import {useDispatch} from 'react-redux';
import axios from 'axios';

import {setSearchResult} from '../redux/movieSlice';
import {baseUrl, endPoints, apiKey} from '../constants/api_config';

const useSearch = () => {
  const dispatch = useDispatch();

  const searchMovies = async searchParam => {
    try {
      const responce = await axios.get(
        baseUrl + endPoints.search + apiKey + '/' + searchParam,
        {headers: {Accept: 'application/json'}},
      );
      if (responce && responce.status === 200) {
        dispatch(setSearchResult(responce.data.results));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {searchMovies};
};

export default useSearch;
