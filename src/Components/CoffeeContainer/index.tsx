import CoffeeCard from "../CoffeeCard";

const coffeeMenuData = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: './public/images/espresso.png',
    tags: ['Tradicional'],
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: './public/images/american.png',
    tags: ['Tradicional'],
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: './public/images/creamy.png',
    tags: ['Tradicional'],
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: './public/images/iced.png',
    tags: ['Tradicional', 'Gelado'],
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: './public/images/milk.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: './public/images/latte.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: './public/images/capuccino.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: './public/images/macchiato.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: './public/images/mocaccino.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: './public/images/chocolate.png',
    tags: ['Especial', 'Com Leite'],
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: './public/images/cuban.png',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: './public/images/havaian.png',
    tags: ['Especial'],
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: './public/images/arabian.png',
    tags: ['Especial'],
  },
  {
    name: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: './public/images/irish.png',
    tags: ['Especial', 'Alcoólico'],
  },
];


function CoffeeContainer() {
  return (
    <div className="container max-w-[1120px] m-auto py-8">
      <h2 className="font-baloo font-extrabold text-title-lg text-base-subtitle">
        Nossos cafés
      </h2>
      <div className="flex flex-wrap gap-x-8 gap-y-10 py-[54px]">
        {coffeeMenuData.map(({ name, description, price, imageUrl, tags }) => (
          <CoffeeCard
            key={name}
            coffee={{ name, description, price, imageUrl, tags }}
          />
        ))}
      </div>
    </div>
  );
}

export default CoffeeContainer;
