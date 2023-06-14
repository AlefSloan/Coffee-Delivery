import { ClockCountdown, Coffee, Package, ShoppingCartSimple } from "@phosphor-icons/react";

function Intro() {
  return (
    <div className="container max-w-[1120px] m-auto py-[92px] flex gap-14">
      <div className="flex flex-col gap-[66px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-baloo text-title-xl font-extrabold text-base-title m-0">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="font-roboto text-text-lg text-base-subtitle">
            Com o Coffee Delivery você recebeu seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="flex flex-wrap gap-y-5">
          <span className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-yellow-dark">
              <ShoppingCartSimple size={16} fill="white" weight="fill" />
            </div>
            <span className="text-text-md font-roboto text-base-text">
              Compra simples e segura
            </span>
          </span>
          <span className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-base-text">
              <Package size={16} fill="white" weight="fill" />
            </div>
            <span className="text-text-md font-roboto text-base-text">
              Embalagem mantém o café intacto
            </span>
          </span>
          <span className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-yellow-normal">
              <ClockCountdown size={16} fill="white" weight="fill" />
            </div>
            <span className="text-text-md font-roboto text-base-text">
              Entrega rápida e rastreada
            </span>
          </span>
          <span className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-purple-normal">
              <Coffee size={16} fill="white" weight="fill" />
            </div>
            <span className="text-text-md font-roboto text-base-text">
              O café chega fresquinho até você
            </span>
          </span>
        </div>
      </div>
      <img className="h-[360px]" src="./public/images/Imagem.png" />
    </div>
  );
}

export default Intro;
