import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}

      {/* <ItemCounter name="Nintento Switch 2" quantity={2} />
      <ItemCounter name="Pro Controller" quantity={4} />
      <ItemCounter name="Super Smash" quantity={1} /> */}
    </>
  );
}
