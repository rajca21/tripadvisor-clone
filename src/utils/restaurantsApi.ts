import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const searchRestaurants = async (query: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://tripadvisor-scraper.p.rapidapi.com/restaurants/list',
    params: {
      query: query,
      page: '1',
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'tripadvisor-scraper.p.rapidapi.com',
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantsDetails = async (id: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://tripadvisor-scraper.p.rapidapi.com/restaurants/detail',
    params: { id: id },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'tripadvisor-scraper.p.rapidapi.com',
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
