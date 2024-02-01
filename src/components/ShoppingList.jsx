import { useContext } from "react";
import { ListContext } from "../context/provider";
import { ListItem } from "./ListItem";

export function ShoppingList() {
  const { state } = useContext(ListContext);

  return (
    <>
      <div className="flex justify-center items-center p-4 py-8">
        <ul className="w-full max-w-72 flex justify-center items-center flex-col gap-4">
          {
            state.list.length === 0 && (
              <li className="text-primary opacity-50 text-center">Add some item</li>
            )
          }
          {state.list &&
            state.list.map((item) => {
              return <ListItem key={crypto.randomUUID()} item={item} />;
            })}
        </ul>
      </div>
    </>
  );
}
