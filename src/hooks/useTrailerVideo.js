import { useDispatch } from "react-redux";
import { API_OPTIONS, getMovieVideoApi } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/slices/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(getMovieVideoApi(movieId), API_OPTIONS);
        const jsonData = await data.json();
        const filteredVideos = jsonData?.results.filter(video => video.type === 'Trailer');
        const trailer = filteredVideos.length ? filteredVideos[0] : jsonData?.results[0];
        dispatch(addTrailerVideo(trailer));
      }
    
    useEffect(() => {
        getMovieVideos();
    },[]);
}

export default useTrailerVideo;