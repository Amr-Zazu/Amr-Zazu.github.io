import { atom } from "recoil";
const productsState = atom({
  key: "productsState",
  default: [
    { title: "Product 1", price: "500" },
    { title: "Product 2", price: "1000" },
  ],
  dangerouslyAllowMutability: true,
});

const titleState = atom({
  key: "titleState",
  default: "",
  dangerouslyAllowMutability: true,
});

const priceState = atom({
  key: "priceState",
  default: "",
  dangerouslyAllowMutability: true,
});

export { productsState, titleState, priceState };
