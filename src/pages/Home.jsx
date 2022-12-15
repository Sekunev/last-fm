import React, { useEffect } from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import axios from "axios";

const Home = () => {
  const API_KEY = process.env.REACT_APP_apiKey;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

  const getTopArtist = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopArtist();
  }, []);

  return (
    <div>
      <h1>Artist List</h1>
      <ArtistCard />
    </div>
  );
};

export default Home;
