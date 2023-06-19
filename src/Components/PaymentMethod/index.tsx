import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

function PaymentMethod() {
  return (
    <div className="w-[640px] p-10 flex flex-col bg-background rounded-md gap-8">
      <div className="flex gap-2">
        <CurrencyDollar className="text-purple-normal" size={22} />
        <div className="flex flex-col gap-1">
          <span className="font-roboto text-base-subtitle text-text-md">Pagamento</span>
          <span className="font-roboto text-base-subtitle text-text-sm">
            O Pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <button className="flex flex-1 bg-base-button p-4 rounded-md gap-3 uppercase text-base-text font-roboto text-text-xs">
          <CreditCard className="text-purple-normal" size={16} />
          Cartão de Crédito
        </button>
        <button className="flex flex-1 bg-base-button p-4 rounded-md gap-3 uppercase text-base-text font-roboto text-text-xs">
          <Bank className="text-purple-normal" size={16} />
          Cartão de Débito
        </button>
        <button className="flex flex-1 bg-base-button p-4 rounded-md gap-3 uppercase text-base-text font-roboto text-text-xs  ">
          <Money className="text-purple-normal" size={16} />
          Dinheiro
        </button>
      </div>
    </div>
  );
}

export default PaymentMethod;
