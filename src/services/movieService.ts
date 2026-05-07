import axios from "axios"
import type { Movie } from "../types/movie"

interface MoviesHttpResponse{
    movies:Movie[]
} 

const fetchMovies = async () => {
    const response = await axios.get<MoviesHttpResponse>
 } 