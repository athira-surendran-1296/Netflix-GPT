import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../utils/store/slices/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMoviesList = async () => {
        try {
            const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
            const jsonData = await data.json();
            dispatch(addPopularMovies(jsonData?.results));
        } catch (error) {

        }
    }

    useEffect(() => {
        !popularMovies && getPopularMoviesList(); //Memoisation
    }, []);
};

export default usePopularMovies;