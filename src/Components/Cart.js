import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col
} from 'reactstrap';

const Cart = ({cartItem, buyNow, removeItem}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });

    return (
        <Container fluid>
            <h1 className="text-success text-center"> Your Cart </h1>
            <div className='rounded-right border border-success mt-2 mb-1'>
                <ListGroup className='m-1'>
                    {
                        cartItem.map(item => (
                            <ListGroupItem className='mb-1' key={item.id}>
                                <Row>
                                    <Col>
                                        <img height={60} src={item.tinyImage}/>
                                    </Col>
                                    <Col className="text-center">
                                        <div className="text-primary">{item.productName}</div>
                                        <span className="text-dark mr-1">Price: {item.productPrice}</span>
                                        <Button color="danger" onClick={() => removeItem(item)}> Remove </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                {/* If Cart is Empty */}
                {
                    cartItem.length >= 1 ? (
                        <Card className=" mt-2 mb-2 mr-1 ml-1 text-center">
                            <CardHeader> Grand Total </CardHeader>
                            <CardBody> Your amount for {cartItem.length} product is {amount} </CardBody>
                            <CardFooter>
                                <Button color="success" onClick={buyNow}> CheckOut </Button>
                            </CardFooter>
                        </Card>
                    ) : (
                        <h1 className="text-warning m-1"> Cart is Empty </h1>
                    )
                }
            </div>
        </Container>
    );
};

export default Cart;