import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';

export const BASE_URL = "https://api.getharvest.app";

const fetchFunds = async (token: string) => {
  if (!token) {
    throw new Error('No authentication token');
  }

  const response = await axios.get(`${BASE_URL}/funds/all`, {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

export const useFunds = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  // console.log('useFetch', token);
  return useQuery({
    queryKey: ['funds', token],
    queryFn: () => fetchFunds(token),
    enabled: !!token, 
  });
};
