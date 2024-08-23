import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';

const fetchFunds = async (token: string) => {
  if (!token) {
    throw new Error('No authentication token');
  }

  const response = await axios.get('https://api.getharvest.app/funds/all', {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

export const useFunds = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log('useFetch', token);
  return useQuery({
    queryKey: ['funds', token],
    queryFn: () => fetchFunds(token),
    enabled: !!token, 
  });
};

// 💡 Note: The Funds Listing API is currently restricted and returns a 401 error code. To access this API, an access token is required. However, the exact structure and response format of the API are not yet known. Please provide the exact structure and response details of the API so I can proceed with the work.💡