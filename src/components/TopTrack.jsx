import React from "react";

const TopTrack = ({ name, listeners, playcount, image, url }) => {
  return (
    <div className=" flex justify-center my-4 ">
      <div
        onClick={() => (window.location.href = url)}
        className="movie flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image?.[0]["#text"]}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artist
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {name}
          </p>
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            listeners : {listeners}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            playcount : {playcount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopTrack;
