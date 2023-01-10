import { useState, useEffect, useContext } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { InfoContext } from "../Context/Context";

export type Items = {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
};

export const Album = () => {
  const { albums, fetchAlbums } = useContext(InfoContext);

  const { idAlbum } = useParams<Params<string>>();
  const [items, setItems] = useState<Items[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const data = await api.getAllItems(idAlbum);
      setItems(data);
    };
    window.scroll(0, 0);
    fetchItems();
  }, []);

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <button onClick={handleBackButton} className="border p-2 px-8 text-2xl my-5 bg-slate-200 border-gray-900 rounded-md">
        BACK
      </button>
      <div className="text-2xl mb-5">{albums[Number(idAlbum) - 1].title}</div>
      <div className="flex flex-row flex-wrap max-w-4xl justify-center gap-4 pb-5 ">
        {items.map((item, index) => (
          <div key={index} className="border-2 border-gray-700">
            <Link to={`photos/${item.id}`}>
              <img src={item.thumbnailUrl} alt="" className="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
