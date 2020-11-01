import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Row, Container } from 'reactstrap';
import { actionGetProducts } from '../../redux/actions/products';

import Product from "../product/Product";

const products = [
    {
        img: "img",
        title: "product 1",
        price: 99999999.99,
        numberDaysUntilEndDiscount: 0,
        description: "description",
        id: "3kdfs8fddsf",
    },
    {
        img: "img",
        title: "product 2",
        price: 42.7,
        numberDaysUntilEndDiscount: 2,
        description: "",
        id: "3kdos8f3dsf",
    },
    {
        img: "img",
        title: "product 3",
        price: 57,
        numberDaysUntilEndDiscount: 6,
        description: "",
        id: "3kdos8addsf",
    },
    {
        img: "img",
        title: "product 4",
        price: 1,
        numberDaysUntilEndDiscount: 1,
        description: "",
        id: "3k6os8fddsf",
    },
    {
        img: "img",
        title: "product 5",
        price: 55.7,
        numberDaysUntilEndDiscount: 16,
        description: "description",
        id: "3kdos8fgdsf",
    },
    {
        img: "img",
        title: "product 6",
        price: 557,
        numberDaysUntilEndDiscount: 123,
        description: "description description description description description description description description description description description description description description description",
        id: "3kdos8fdesf",
    },
    {
        img: "img",
        title: "product 7",
        price: 17,
        numberDaysUntilEndDiscount: 70,
        description: "",
        id: "1kdos8fddsf",
    },
    {
        img: "img",
        title: "product 8",
        price: 55897,
        numberDaysUntilEndDiscount: 6,
        description: "description",
        id: "3kdos8fddss",
    },
];

const Catalogue = (actionGetProducts) => {
    useEffect(() => {
        // actionGetProducts();
    }, []);

    return (
        <Container>
            <h1>Catalogue</h1>
            <Row>
                {products.map(product => <Product key={product.id} {...product} />)}
            </Row>
        </Container>
    );
};

// const mapStateToProps = state => ({
// 	isUserLoggedIn: state.authReducer.isUserLoggedIn,
// });

export default connect(
	null,
	{ actionGetProducts }
)(Catalogue);
