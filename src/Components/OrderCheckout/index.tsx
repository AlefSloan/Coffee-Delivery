import { Minus, Plus, Trash } from "@phosphor-icons/react";

function OrderCheckout() {
  return (
    <div className="w-full p-10 bg-background rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px]">
      <div className="w-full flex justify-between px-1 py-2 border-b border-base-button pb-6">
        <div className="flex gap-5">
          <img className="w-16 h-16" src="/images/espresso.png" />
          <div className="flex flex-col gap-2 ">
            <span className="font-roboto text-base-subtitle text-text-md">
              Expresso Tradicional
            </span>
            <div className="flex gap-2">
              <div className="w-[72px] bg-base-button rounded-md flex items-center justify-around gap-1 p-2">
                <button className="text-purple-dark">
                  <Minus size={14} />
                </button>
                <span className="text-base-title font-roboto text-text-md">
                  1
                </span>
                <button className="text-purple-dark">
                  <Plus size={14} />
                </button>
              </div>
              <button className="flex items-center uppercase rounded-md gap-1 px-2 bg-base-button font-roboto text-base-text text-text-xs">
                <Trash className="text-purple-dark" size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <span className="flex gap-1 font-roboto font-bold text-base-text text-text-md">
          R$ <span>9,90</span>
        </span>
      </div>
      <div className="w-full flex justify-between px-1 py-2 border-b border-base-button pb-6 pt-6">
        <div className="flex gap-5">
          <img className="w-16 h-16" src="/images/latte.png" />
          <div className="flex flex-col gap-2 ">
            <span className="font-roboto text-base-subtitle text-text-md">
              Latte
            </span>
            <div className="flex gap-2">
              <div className="w-[72px] bg-base-button rounded-md flex items-center justify-around gap-1 p-2">
                <button className="text-purple-dark">
                  <Minus size={14} />
                </button>
                <span className="text-base-title font-roboto text-text-md">
                  1
                </span>
                <button className="text-purple-dark">
                  <Plus size={14} />
                </button>
              </div>
              <button className="flex items-center uppercase rounded-md gap-1 px-2 bg-base-button font-roboto text-base-text text-text-xs">
                <Trash className="text-purple-dark" size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <span className="flex gap-1 font-roboto font-bold text-base-text text-text-md">
          R$ <span>9,90</span>
        </span>
      </div>
      <div className="flex flex-col my-6 gap-3">
        <div className="flex justify-between font-roboto text-text-md text-base-text">
          <span className="font-roboto text-text-sm text-base-text">
            Total de itens
          </span>
          <span className="flex gap-1">
            R$
            <span>29,70</span>
          </span>
        </div>
        <div className="flex justify-between font-roboto text-text-md text-base-text">
          <span className="font-roboto text-text-sm text-base-text">
            Entrega
          </span>
          <span className="flex gap-1">
            R$
            <span>3,50</span>
          </span>
        </div>
        <div className="flex justify-between font-roboto text-text-lg text-base-subtitle font-bold">
          <span>Total</span>
          <span className="flex gap-1">
            R$
            <span>33,20</span>
          </span>
        </div>
      </div>
      <button className="w-full px-2 py-3 bg-yellow-normal rounded-md uppercase flex gap-1 justify-center items-center text-white font-roboto text-button-lg font-bold">
        Confirmar Pedido
      </button>
    </div>
  );
}

export default OrderCheckout;
