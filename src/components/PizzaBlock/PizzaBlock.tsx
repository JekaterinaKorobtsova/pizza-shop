import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/slice";
import { CartItem } from "../../redux/cart/types";
import { selectCartItemById } from "../../redux/cart/selectors";
import { openModal } from "../../redux/modal/modalSlice";
import { Pizza } from "../../redux/pizza/types";
import PizzaModal from "../PizzaModal";
import { RootState } from "../../redux/store";

export const typeNames = ["thin dough", "thick dough"];

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  topping: string;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  topping,
}) => {
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { items } = useSelector((state: RootState) => state.pizza);

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [selectedPizza, setSelectedPizza] = useState<Pizza[]>([]);
  const [priceAdd, setPriceAdd] = useState(0);
  

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    setPriceAdd(
      sizes[activeSize] === 30
        ? Number(price) + 2
        : sizes[activeSize] === 40
        ? Number(price) + 5
        : price
    );
  }, [activeSize, price, sizes]);

  

  const onClickAdd = () => {
    
    const item: CartItem = {
      id,
      title,
      price: priceAdd,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onPizzaClick = () => {
    const pizza = items.find((p) => p.id === id);
    setSelectedPizza(pizza ? [pizza] : []);
    dispatch(openModal(true));
  };

  const onCloseModal = () => {
    setSelectedPizza([]);
    dispatch(openModal(false));
  };
  

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" onClick={onPizzaClick} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size} Ø
              </li>
            ))}
          </ul>
        </div>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> {priceAdd.toFixed(2)} €</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add </span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
        <PizzaModal pizzaItem={selectedPizza} isModalOpen={isOpen} onCloseModal={onCloseModal} />
      </div>
    </div>
  );
};
