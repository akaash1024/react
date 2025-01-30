

import { getMovieAPIcall } from "./moviesAPI";

export const getMovieDetails = async ({ params }) => {
  console.log(params);
  const { movieID } = params;

  try {
    const response = await getMovieAPIcall(movieID);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
