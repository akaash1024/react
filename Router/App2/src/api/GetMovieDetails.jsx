// ! params returns object

// when click on card it navigate here and take it 

export const getMovieDetails = async ({ params }) => {
  console.log(params);
  const { movieID } = params;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${movieID}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
