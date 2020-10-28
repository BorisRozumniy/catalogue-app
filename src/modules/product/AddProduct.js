import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, FormFeedback } from 'reactstrap';

const AddProduct = (props) => {
  return (
    <Container>

      <Form>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input valid type="title" name="title" id="title" placeholder="with a placeholder" />
            <FormText>Заголовок (обязательное поле, минимум 20, максимум 60 символов);</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="foto" sm={2}>Foto</Label>
          <Col sm={10}>
            <Input type="file" name="foto" id="foto" invalid/>
            <FormText color="muted">
              Фото (обязательное поле, минимальные ширина/высота = 200px, максимальные 4000px).
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="description" id="description" />
            <FormText color="muted">
              Описание товара (не обязательное поле, максимум 200 символов);
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>Price</Label>
          <Col sm={10}>
            <Input type="number" name="price" invalid/>
            <FormText color="muted">
              Цена (обязательное поле, положительное число, максимальное значение 99999999.99$).
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mt-3">
            <Button size="lg" color="success" className="w-100">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default AddProduct;
