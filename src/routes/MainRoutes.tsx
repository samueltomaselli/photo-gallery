import { Routes, Route } from "react-router-dom";
import { Album } from "../pages/Album";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="album/:idAlbum" element={<Album />} children="" />
      <Route path="album/:idAlbum/photos/:idItem" element={<Item />} />
    </Routes>
  );
};
