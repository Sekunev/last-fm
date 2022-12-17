import React, { useEffect } from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchSuccess, fetchError } from "../features/fetchSlice";

const Home = () => {
  // const { fetchStart, fetchSuccess, fetchError } = useSelector(
  //   (state) => state.lastfm
  // );
  const { artist } = useSelector((state) => state.lastfm);
  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_apiKey;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

  const getTopArtist = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(url);
      const {
        artists: { artist },
      } = data;
      console.log(artist);
      dispatch(fetchSuccess(artist));
    } catch (error) {
      console.log(error);
      dispatch(fetchError());
    }
  };

  useEffect(() => {
    getTopArtist();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Artist List</h1>
      {artist?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Home;
