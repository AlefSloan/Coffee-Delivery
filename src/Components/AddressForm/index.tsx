import { MapPinLine } from "@phosphor-icons/react";

function AddressForm() {
  return (
    <div className="w-[640px] bg-background p-10 flex flex-col gap-3 rounded-md">
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-2">
          <MapPinLine className="text-yellow-dark" size={22} />
          <div className="flex flex-col gap-1">
            <span className="font-roboto text-text-md text-base-subtitle">
              Endereço de Entrega
            </span>
            <span className="font-roboto text-text-sm text-base-subtitle">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="w-[200px] bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
            placeholder="CEP"
          />
          <input
            className="w-full bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
            placeholder="Rua"
          />
          <div className="flex gap-3">
            <input
              className="w-[200px] bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
              placeholder="Número"
            />
            <div className="flex w-full">
              <input
                className="w-full bg-base-input border-base-button border-y border-l p-3 rounded-tl-[4px] rounded-bl-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
                placeholder="Complemento"
              />
              <span className="text-base-label font-roboto text-text-xs italic bg-base-input border-base-button border-y border-r p-3 rounded-tr-[4px] rounded-br-[4px]">
                Opcional
              </span>
            </div>
          </div>
          <div className="w-full flex gap-3">
            <input
              className="w-[200px] bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
              placeholder="Bairro"
            />
            <input
              className="w-full bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
              placeholder="Cidade"
            />
            <input
              className="w-[60px] bg-base-input border-base-button border p-3 rounded-[4px] placeholder:text-base-label placeholder:font-roboto placeholder:text-text-sm"
              placeholder="UF"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
