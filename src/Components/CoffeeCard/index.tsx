import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

function CoffeeCard() {
  return (
    <div className="w-64 h-[310px] flex flex-col items-center bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] rounded-tl-md rounded-br-md px-4">
      <img className="-translate-y-5" src="/public/images/espresso.png" />
      <div className="flex">
        <span className="bg-yellow-light text-yellow-dark font-roboto text-tag font-bold px-2 py-1 rounded-full uppercase -translate-y-2">
          Tradicional
        </span>
      </div>
      <div className="flex flex-col items-center translate-y-3 gap-2">
        <span className="text-title-sm font-bold text-base-subtitle font-baloo">
          Expresso Tradicional
        </span>
        <span className="text-text-sm text-base-label font-roboto text-center">
          O tradicional café feito com água quente e grãos moídos
        </span>
      </div>
      <div className="flex justify-evenly w-full translate-y-10">
        <span className="font-roboto text-text-sm text-base-text">
          R$
          <span className="font-baloo text-title-md font-extrabold text-base-text">
            9,90
          </span>
        </span>
        <div className="bg-base-button rounded-md flex items-center justify-center gap-1 p-2">
          <button className="text-purple-dark">
            <Minus size={14} />
          </button>
          <span className="text-white">0</span>
          <button className="text-purple-dark">
            <Plus size={14} />
          </button>
        </div>
        <button className="bg-purple-dark p-2 rounded-md">
          <ShoppingCartSimple size={22} fill="white" weight="fill" />
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
