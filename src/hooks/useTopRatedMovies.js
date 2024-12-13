import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/store/slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMoviesList = async () => {
        try {
            const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
            const jsonData = await data.json();
            dispatch(addTopRatedMovies(jsonData?.results));
        } catch (error) {

        }
    }

    useEffect(() => {
        getTopRatedMoviesList();
    }, []);
};

export default useTopRatedMovies;