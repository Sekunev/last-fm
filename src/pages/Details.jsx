import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
  const { state: image } = useLocation();

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
    // eslint-disable-next-line
  }, []);

  // console.log(topAlbumList);
  // console.log(topTrackList);

  return (
    <>
      <Link
        className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        to={"/"}
      >
        Go Home
      </Link>
      <div className="flex-col">
        <div className="flex justify-center gap-2">
          <img src={image?.[0]["#text"]} alt="" />
          <h1 className="font-black text-2xl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h1>
        </div>
        <div className="flex justify-center gap-3">
          <div>
            <h2 className="font-black text-2xl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top Albums
            </h2>
            {topAlbumList["topalbums"]?.album.map((items, i) => {
              return <TopAlbum key={i} {...items} />;
            })}
          </div>
          <div>
            <h2 className="font-black text-2xl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top Tracks
            </h2>
            {topTrackList["toptracks"]?.track.map((items, i) => {
              return <TopTrack key={i} {...items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
