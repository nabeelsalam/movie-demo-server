import axios from "axios";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/", async (request, response) => {
  let moviesResponse;
  try {
    moviesResponse = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=spiderman&api_key=<api_key>"
    );
  } catch (error) {
    console.log(error);
  }
  return response.json(moviesResponse.data);
});

export default moviesRouter;
