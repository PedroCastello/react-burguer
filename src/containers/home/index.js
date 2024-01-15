import React, { useState, useRef } from "react";
import axios from "axios";
import Burguer from "../../assets/hamburguer.png";
import Arrow from "../../assets/arrow.png";
import { useHistory } from "react-router-dom";


import Button from "../../components/Button";
import ContainerItens from "../../components/ContainerItens";
import H1 from '../../components/Title';
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const history = useHistory();

  async function addNewOrder() {
    const response = await axios.post("http://localhost:3001/orders", {
      Order: inputOrder.current.value,
      ClientName: inputName.current.value,
    });

    const newOrders = response.data[response.data.lenght - 1];

    setOrders(...orders, newOrders);

    console.log(orders)

    history.push('/Orders')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burguer} />
      <ContainerItens>
        <H1>Make your order!</H1>

        <InputLabel>Order:</InputLabel>
        <Input ref={inputOrder} placeholder="Your order" />

        <InputLabel>Customer name:</InputLabel>
        <Input ref={inputName} placeholder="Your name" />

        <Button onClick={addNewOrder}>
          New order <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
