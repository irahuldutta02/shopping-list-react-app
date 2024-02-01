import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListContext } from "../context/provider";
import { initialState, listReducer } from "../reduces/listReducer";
import { Header } from "./Header";
import { InputItem } from "./InputItem";
import { ShoppingList } from "./ShoppingList";

export function Main() {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <>
      <Header />
      <ListContext.Provider value={{ state, dispatch }}>
        <InputItem />
        <ShoppingList />
        <ToastContainer />
      </ListContext.Provider>
    </>
  );
}
