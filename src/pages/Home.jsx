import React, { useEffect, useState } from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchSuccess, fetchError } from "../features/fetchSlice";

const Home = () => {
  // const { fetchStart, fetchSuccess, fetchError } = useSelector(
  //   (state) => state.lastfm
  // );
  const { artist, loading } = useSelector((state) => state.lastfm);
  const [pageParam, setPageParam] = useState(1);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_apiKey;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&page=${pageParam}&limit=5&format=json`;

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
  const handleScroll = () => {
    // console.log("heigth:", document.documentElement.scrollHeight);
    // console.log("top:", document.documentElement.scrollTop);
    // console.log(window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(fetchStart());
      setPageParam((prev) => prev + 1);
    }
  };
  console.log(pageParam);
  useEffect(() => {
    getTopArtist();
    // eslint-disable-next-line
  }, [pageParam]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Artist List</h1>

      {artist?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
      {loading && <h2>loading</h2>}
    </div>
  );
};

export default Home;
