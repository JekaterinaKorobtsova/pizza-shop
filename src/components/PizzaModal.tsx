import { Icon, Modal} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styleIcon, styleImage, styleInfo, styleModal } from "../assets/stylesMUI";
import { Pizza } from "../redux/pizza/types";
import CloseIcon from "@mui/icons-material/Close";

interface ModalPizzaProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  pizzaItem: Pizza[] | null;
}

const PizzaModal: React.FC<ModalPizzaProps> = ({ pizzaItem, isModalOpen, onCloseModal }) => {
  if (!pizzaItem || !pizzaItem.length) {
    return null;
  }

  const { title, imageUrl, topping } = pizzaItem[0];


  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal}>
      <Box sx={styleModal}>
        <Icon sx={styleIcon} onClick={handleCloseModal}>
          <CloseIcon />
        </Icon>
        <img src={imageUrl} alt={title} style={styleImage} className='modal_pizza_img'/>
        <div className="pizza-modal__info" style={styleInfo}>
          <h1>{title}</h1>
          <p>{topping}</p>
        </div>
      </Box>
    </Modal>
  );
};

export default PizzaModal;
