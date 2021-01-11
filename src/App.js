import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import {Container, Row, Col} from 'reactstrap';
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart"

function App() {
    const [cartItem, setCartItem] = useState([]);

    const addInCart = item => {
        //Todo: check if any error accur
        const isAlreadyAdded = cartItem.findIndex(array => {
            return array.id === item.id;
        });

        if (isAlreadyAdded !== -1) {
            toast("Already added in cart", {
                type: "error"
            });
            return;
        }

        setCartItem([...cartItem, item]);
    };

    const buyNow = () => {
        setCartItem([]);
        toast("Purchase completed",
        {
            type:"dark"
        })
    };

    const removeItem = item => {
      setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
    };

    return (
        <Container fluid>
            <ToastContainer/>
            <Row>
                <Col lg={8} xs={8}>
                    <BuyPage addInCart={addInCart} />
                </Col>
                <Col lg={4} xs={4}>
                    <Cart buyNow={buyNow} cartItem={cartItem} removeItem={removeItem} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
