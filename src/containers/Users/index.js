import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../../assets/orders.png";
import Trash from "../../assets/tash.png";
import { useHistory } from "react-router-dom";


import Button from "../../components/Button";
import { Container, Image, User } from "./styles";
import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";


const Users1 = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get("http://localhost:3002/users");
      const newOrders = data.data;
      setOrders(newOrders);

      setOrders(newOrders);
    };

    fetchUsers();
  }, []);

  async function deleteUser(userId) {  
      await axios.delete(`http://localhost:3002/orders/${userId}`);
      const newOrders = orders.filter((user) => user.id !== userId);
      setOrders(newOrders);
  }


  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="Users-image" src={Users} />
      <ContainerItens isBlur = {true}>
        <H1>Users</H1>

        <ul>
          {orders.map((order) => (
            <User key={order.id}>
              <p>{order.order}</p> <p>{order.name} </p>
              <button onClick={() => deleteUser(order.id)}>
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
