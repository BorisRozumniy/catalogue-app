import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Row, Container } from 'reactstrap';
import { actionGetProducts } from '../../redux/actions/products';

import Product from "../product/Product";

interface IProps {
    products: Array<IProduct>;
    actionGetProducts: any
};

interface IProduct {
    id: string
    img: string,
    title: string,
    description: string,
    price: string,
    numberDaysUntilEndDiscount: number,
};

interface RootState {
    productsReducer: {
        productsData: Array<IProduct>;
    }
  }

const Catalogue = ({
    products,
    actionGetProducts,
}: IProps) => {
    const isProductsExists = products.length > 0;
    useEffect(() => {
        !isProductsExists && actionGetProducts();
    }, [isProductsExists]);

    return (
        <Container>
            <h1>Catalogue</h1>
            <Row>
                {isProductsExists && products.map(product => <Product key={product.id} {...product} />)}
            </Row>
        </Container>
    );
};


const mapStateToProps = (state: RootState) => ({
	products: state.productsReducer.productsData,
});

export default connect(
	mapStateToProps,
	{ actionGetProducts }
)(Catalogue);
