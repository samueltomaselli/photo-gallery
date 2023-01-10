import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { useContext } from "react";
import { InfoContext } from "../Context/Context";

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export const Home = () => {
  const { albums, fetchAlbums } = useContext(InfoContext);
  fetchAlbums();

  return (
    <div className="flex flex-col justify-center items-center">
      {albums.map((item, index) => (
        <div key={index} className="bg-slate-200 m-4 p-4 flex items-center justify-center w-2/4 border border-slate-600 rounded-xl">
          <Link to={`album/${item.id}`}>
            <div className="flex text-black font-semibold">{item.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
