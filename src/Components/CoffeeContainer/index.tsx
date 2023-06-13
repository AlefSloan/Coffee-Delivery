import CoffeeCard from "../CoffeeCard";

function CoffeeContainer() {
  return (
    <div className="container max-w-[1120px] m-auto py-8">
      <h2 className="font-baloo font-extrabold text-title-lg text-base-subtitle">Nossos cafés</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-10 py-[54px]">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((number) => (
          <CoffeeCard key={number} />
        ))}
      </div>
    </div>
  )
}

export default CoffeeContainer;
