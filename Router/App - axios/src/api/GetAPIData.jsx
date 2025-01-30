import { getMoviesAPIcall } from "./moviesAPI";

export const getMoviesData = async () => {
  try {
    const response = await getMoviesAPIcall();
    return response.data;

  } catch (error) {
    console.log(error);
  }
};


