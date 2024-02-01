import { useContext, useState } from "react";
import { ListContext } from "../context/provider";
import { toast } from "react-toastify";

export function InputItem() {
  const [item, setItem] = useState("");
  const { dispatch } = useContext(ListContext);

  function handleAddItem() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: crypto.randomUUID(),
        item,
        count: 1,
      },
    });
    toast.success(`' ${item} ' added successfully`, {
      position: "bottom-right",
      autoClose: 2000,
    });
    setItem("");
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <input
          type="text"
          name="addItem"
          id="addItem"
          value={item}
          placeholder="add an item"
          className="border-b-2 border-primary  px-4 py-2 outline-none text-primary rounded-md"
          onChange={(e) => {
            setItem(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddItem();
            }
          }}
        />
        <button
          className="bg-primary px-4 py-2 rounded-md text-white"
          onClick={(e) => {
            e.preventDefault();
            handleAddItem();
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
