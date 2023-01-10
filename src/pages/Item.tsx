import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

type ItemInfo = {
  id?: number;
  title?: string;
  url?: string;
};

export const Item = () => {
  const { idItem } = useParams();
  const [itemInfo, setItemInfo] = useState<ItemInfo>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfoItem = async () => {
      const data = await api.getInfoItem(idItem);
      setItemInfo(data);
    };
    window.scroll(0, 0);
    fetchInfoItem();
  }, []);

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <button onClick={handleBackButton} className="border p-2 px-8 text-2xl my-5 bg-slate-200 border-gray-900 rounded-md">
        BACK
      </button>
      <div className="text-2xl mb-10">{itemInfo.title}</div>
      <img src={itemInfo.url} alt="" className="pb-" />
    </div>
  );
};
