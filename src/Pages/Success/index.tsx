import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";

function Success() {
  return (
    <div className="container max-w-[1120px] m-auto mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-yellow-dark font-extrabold font-baloo text-title-lg m-0">
          Uhu! Pedido confirmado
        </h1>
        <span className="text-base-subtitle font-roboto text-text">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </div>
      <div className="flex justify-between">
        <div className="w-[526px] h-[260px] align-center flex flex-col p-10 gap-8 border rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] border-purple-normal">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2 bg-purple-normal">
              <MapPin size={16} fill="white" weight="fill" />
            </div>
            <div className="flex flex-col">
              <span className="font-roboto text-text-md text-base-text flex gap-1">
                Entrega em
                <span className="font-roboto text-text-md text-base-text font-extrabold">
                  Rua João Daniel Martinelli, 102
                </span>
              </span>
              <span className="font-roboto text-text-md text-base-text">
                Farrapos - Porto Alegre, RS
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2 bg-yellow-normal">
              <Clock size={16} fill="white" weight="fill" />
            </div>
            <div className="flex flex-col">
              <span className="font-roboto text-text-md text-base-text">
                Previsão de entrega
              </span>
              <span className="font-roboto text-text-md text-base-text font-extrabold">
                20 min - 30 min
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2 bg-yellow-dark">
              <CurrencyDollar size={16} fill="white" />
            </div>
            <div className="flex flex-col">
              <span className="font-roboto text-text-md text-base-text">
                Pagamento na entrega
              </span>
              <span className="font-roboto text-text-md text-base-text font-extrabold">
                Cartão de Crédito
              </span>
            </div>
          </div>
        </div>
        <img className="w-[492px]" src="/images/delivery.png" />
      </div>
    </div>
  );
}

export default Success;