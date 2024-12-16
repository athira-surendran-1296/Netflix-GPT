import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/slices/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMoviesList = async () => {
        try {
            const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
            const jsonData = await data.json();
            dispatch(addNowPlayingMovies(jsonData?.results));
        } catch (error) {

        }
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMoviesList(); //Memoisation
    }, []);
};

export default useNowPlayingMovies;