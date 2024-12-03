import React, { useState } from 'react'
import './header.css'
import { Col, Container, Row } from 'react-bootstrap';
import { calculateProvidedBy } from './../../../node_modules/@reduxjs/toolkit/src/query/endpointDefinitions';
import { useDispatch } from 'react-redux';
import { increment } from '../slice/productSlice';

const Header = () => {
    let dispatch = useDispatch();
    let [show , setShow] = useState(0)

    let handleUp =()=>{
        dispatch(increment(1));
    };

  return (
    <section>
        <Container>
            <Row className='text-center main'>
                <Col lg={12}>
                    <a href="#" onClick={handleUp} className='btn1'>+</a>
                    <div className='change'>{show}</div>
                    <a href="#"  className='btn1'>-</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header