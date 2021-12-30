import axios from "axios";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${request.query.query}&api_key=<api-key>`
    );
  } catch (error) {
    console.log(error);
  }
  return response.json(moviesResponse.data);
});

moviesRouter.get("/videos", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${request.query.id}/videos?api_key=<api-key>&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return response.json(moviesResponse.data);
});

moviesRouter.get("/reviews", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${request.query.id}/reviews?api_key=<api-key>&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return response.json(moviesResponse.data);
});

moviesRouter.get("/cast", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${request.query.id}/credits?api_key=<api-key>&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return response.json(moviesResponse.data.cast);
});

moviesRouter.get("/crew", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${request.query.id}/credits?api_key=<api-key>&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }

  return response.json(moviesResponse.data.crew);
});

export default moviesRouter;
