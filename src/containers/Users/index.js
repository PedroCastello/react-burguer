import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../../assets/orders.png";
import Trash from "../../assets/tash.png";
import { useHistory } from "react-router-dom";


import Button from "../../components/Button";
import { Container, Image, User, OrderText } from "./styles";
import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";


const Users1 = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get("http://localhost:3001/orders");
      const newOrders = data.data;
      setOrders(newOrders);

      console.log(newOrders)
    };

    fetchUsers();
  }, []);

  async function deleteUser(orderId) {  
      await axios.delete(`http://localhost:3001/orders/${orderId}`);
      const newOrders = orders.filter((order) => order.id !== orderId);
      setOrders(newOrders);
  }


  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="Users-image" src={Users} />
      <ContainerItens >
        <H1>Orders</H1>

        <ul>
          {orders.map((orders) => (
            <User key={orders.id}>
              <OrderText>
              <p className="order">{orders.Order}</p> 
              <p className="name">{orders.ClientName} </p>
              </OrderText>
              <button onClick={() => deleteUser(orders.id)}>
                <img alt="Trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          Go back
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users1;
