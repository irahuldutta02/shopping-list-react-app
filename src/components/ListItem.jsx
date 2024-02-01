import { FaMinus, FaPlus } from "react-icons/fa";
import { ListContext } from "../context/provider";
import { useContext } from "react";
import { toast } from "react-toastify";

export function ListItem({ item }) {
  const { dispatch } = useContext(ListContext);

  return (
    <>
      <li className="flex justify-between items-center gap-4 w-full">
        <button
          className="bg-secondary text-white p-2 py-2 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "REMOVE_COUNT",
              payload: item.id,
            });
            if(item.count === 1) {
              toast.error(`' ${item.item} ' removed successfully`, {
                position: "bottom-right",
                autoClose: 2000,
              });
            }
          }}
        >
          <FaMinus />
        </button>
        <div className="flex items-center justify-between flex-1 text-xl">
          <span className="text-primary">{item.item}</span>
          <span className="text-primary border border-primary rounded-full w-8 h-6 p-2 text-sm flex justify-center items-center">
            {item.count}
          </span>
        </div>
        <button
          className="bg-cSeaGreen text-white p-2 py-2 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "ADD_COUNT",
              payload: item.id,
            });
          }}
        >
          <FaPlus />
        </button>
      </li>
    </>
  );
}
