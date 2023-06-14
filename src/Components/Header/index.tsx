import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="container max-w-[1120px] m-auto flex justify-between py-8">
      <img src="/images/logo.png" />
      <div className="flex gap-2">
        <div className="flex items-center bg-purple-light rounded-md p-2">
          <MapPin className="text-purple-dark" size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <div className="p-2 bg-yellow-light rounded-md">
          <ShoppingCartSimple
            className="text-yellow-dark"
            size={22}
            weight="fill"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
