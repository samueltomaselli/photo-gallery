import axios from 'axios';

const BASE = "https://jsonplaceholder.typicode.com";

export const api = {
  getAllAlbums: async () => {
    let response = await axios.get(`${BASE}/albums`);
    return response.data;
  },
  getAllItems: async (idAlbum:any) => {
    let response = await axios.get(`${BASE}/albums/${idAlbum}/photos`);
    return response.data;
  },
  getInfoItem: async(idItem:any) => {
    let response = await axios.get(`${BASE}/photos/${idItem}`);
    return response.data;
  }
}
