import AddressForm from "../../Components/AddressForm";
import OrderCheckout from "../../Components/OrderCheckout";
import PaymentMethod from "../../Components/PaymentMethod";

function Checkout() {
  return (
    <div className="container max-w-[1120px] m-auto flex gap-8">
      <div>
        <h2 className="font-baloo text-title-xs font-bold text-base-subtitle mb-[15px]">
          Complete seu pedido
        </h2>
        <div className="flex flex-col gap-3">
          <AddressForm />
          <PaymentMethod />
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-baloo text-title-xs font-bold text-base-subtitle mb-[15px]">
          Cafés selecionados
        </h2>
        <div>
          <OrderCheckout />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
