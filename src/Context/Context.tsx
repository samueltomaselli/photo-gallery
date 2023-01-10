import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Items } from "../pages/Album";
import { api } from "../api";

export type Album = {
  userId?: number;
  id?: number;
  title?: string;
};

export type IContext = {
  albums: Album[];
  fetchAlbums: () => void;
};

type IProvider = {
  children: JSX.Element;
};

export const InfoContext = createContext<IContext>({} as IContext);

export const InfoProvider = ({ children }: IProvider) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const fetchAlbums = async () => {
    try {
      const data = await api.getAllAlbums();
      setAlbums(data);
    } catch (error) {
      setAlbums([]);
    }
  };

  return <InfoContext.Provider value={{ fetchAlbums, albums }}>{children}</InfoContext.Provider>;
};
