import React, {useState, useEffect} from "react";
import Axios from "axios";
import {random, commerce} from "faker";
import {Container, Col, Row} from "reactstrap";
import CartItem from "./CartItem";

const url = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";
const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);

    const fetchPhotos = async () => {
        const {data} = await Axios.get(url, {});
        const {photos} = data;

        const allProducts = photos.map(photo => {
            return({
                smallImage : photo.src.medium,
                tinyImage : photo.src.tiny,
                productName : random.word(),
                productPrice : commerce.price(),
                id : random.uuid()
            });
        });

        setProduct(allProducts);
    };

    //TODO change method here after completing project
    useEffect(() => {
        fetchPhotos();
    }, []);

    return(
        <Container fluid>
            <h1 className="text-center text-success"> Buy Page </h1>
            <Row className="rounded-left border border-success mb-2">
                {
                    product.map(product => (
                        <Col md={4} xs={12} sm={6} lg={4} key={product.id} >
                            <CartItem product={product} addInCart={addInCart} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
};

export default BuyPage;