import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";
import loadingg from "../assest/loading.gif";

const Details = () => {
  //! ARTISTCARD COMP.DEN NAVİGATE İLE GÖNDERİLEN ENDPOINTI USEPARAMS İLE STATE'I ISE USELOCATION ILE YAKALIYORUZ.
  const { name } = useParams();
  const { state: image } = useLocation();
  const [loading, setLoading] = useState(true);
  const [topAlbumList, setTopAlbumList] = useState([1]);
  const [topTrackList, setTopTrackList] = useState([]);

  const API_KEY = process.env.REACT_APP_apiKey;

  const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
  const topTracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

  // const gettopTrack = async () => {
  //   try {
  //     const { data } = await axios.get(topTracksUrl);
  //     setTopTrackList(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    axios
      .get(topAlbumsUrl)
      .then((res) => setTopAlbumList(res.data))
      .catch((err) => console.log(err));

    axios
      .get(topTracksUrl)
      .then((res) => setTopTrackList(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
    // gettopTrack();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && (
        <img
          src={loadingg}
          alt=""
          width={200}
          style={{
            margin: "5rem auto",
          }}
        />
      )}
      {!loading && (
        <>
          <div className="static first-line:text-end mr-3 ">
            <Link
              className="absolute right-3 top-3 border-b-2 border-red-500 font-black text-2xl mb-2 text-2xl font-bold tracking-tight text-slate-500 hover:text-red-600 dark:text-white"
              to={"/"}
            >
              Go Home
            </Link>
          </div>
          <div className="flex-col">
            <div className="flex justify-center gap-2">
              <img src={image?.[0]["#text"]} alt="" />
              <h1 className="font-black text-2xl mb-3 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
                {name}
              </h1>
            </div>
            <div className="flex justify-center flex-col gap-3 sm:flex-row">
              <div>
                <h2 className="font-black border-b-2 border-red-500 text-2xl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Top Albums
                </h2>
                {topAlbumList["topalbums"]?.album.map((items, i) => {
                  return <TopAlbum key={i} {...items} />;
                })}
              </div>
              <div>
                <h2 className="font-black border-b-2 border-red-500 text-2xl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Top Tracks
                </h2>
                {topTrackList["toptracks"]?.track.map((items, i) => {
                  return <TopTrack key={i} {...items} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
