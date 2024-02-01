import shoppingImage from "../assets/shopping.gif";

export function Header() {
  return (
    <>
      <div className="mx-auto flex flex-col justify-center items-center gap-4 px-4 py-8">
        <div className="w-full">
          <h1 className="text-4xl text-primary font-bold text-center ">
            Shopping List
          </h1>
        </div>
        <div className="w-52 md:w-full flex justify-center items-center max-w-80">
          <img src={shoppingImage} alt="shoppingImage" />
        </div>
      </div>
    </>
  );
}
