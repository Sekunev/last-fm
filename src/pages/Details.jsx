import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
  const [topAlbumList, setTopAlbumList] = useState([1]);
  const [topTrackList, setTopTrackList] = useState([]);

  const API_KEY = process.env.REACT_APP_apiKey;

  const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
  const topTracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

  const gettopTrack = async () => {
    try {
      const { data } = await axios.get(topTracksUrl);
      setTopTrackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(topAlbumsUrl)
      .then((res) => setTopAlbumList(res.data))
      .catch((err) => console.log(err));

    gettopTrack();
  }, []);

  // console.log(topAlbumList);
  console.log(topTrackList);

  return (
    <div>
      {topAlbumList["topalbums"]?.album.map((items, i) => {
        return <TopAlbum key={i} {...items} />;
      })}
      {topTrackList["toptracks"]?.track.map((items, i) => {
        return <TopTrack key={i} {...items} />;
      })}
    </div>
  );
};

export default Details;
