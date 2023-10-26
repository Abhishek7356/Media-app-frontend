import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col className='d-flex flex-column justify-content-center'>
                        <h2>Welcome to <span className='text-primary fs-1 fw-bolder'>Media Player</span></h2>
                        <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tenetur, facilis incidunt fugit at error iusto di
                            cta necessitatibus aut cum illo hic modi ad enim eaque
                            nulla ullam, labore ea. Voluptas.
                        </p>
                        <div className='text-center'>
                            <button onClick={() => navigate('/home')} className='fw-bold btn btn-outline-primary border border-3 border-primary m-3'>Get Started</button>
                        </div>
                    </Col>
                    <Col>
                        <img style={{ width: '100%', height: '300px', objectFit: 'contain' }} src="https://images-na.ssl-images-amazon.com/images/I/71pWU3VBc7L.png" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className='pb-5'>
                <h2 className='text-center mb-5 fw-lighter text-primary'>Features</h2>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img style={{ height: '230px', width: '100%', objectFit: 'cover' }} variant="top" src="https://s-media-cache-ak0.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif" />
                            <Card.Body>
                                <Card.Title>Managing videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img style={{ height: '230px', width: '100%', objectFit: 'cover', objectPosition: 'top' }} variant="top" src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248" />
                            <Card.Body>
                                <Card.Title>Categories videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img style={{ height: '230px', width: '100%', objectFit: 'cover' }} variant="top" src="https://media1.giphy.com/media/X7ETNOpE3S00L2qoBo/source.gif" />
                            <Card.Body>
                                <Card.Title>Watch history</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Container className='mb-5 p-5 border border-2 border-primary'>
                <Row>
                    <Col>
                        <h3 className='text-center text-primary fw-bold mb-5'>Simple, Past, and Powerfull</h3>
                        <h5>Play everything</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                            neque deleniti, mollitia nam id ipsum illum labore aperiam tenetur
                            placeat cumque nihil voluptas ad rem repudiandae, ipsa praesentium vel asperiores.
                        </p>
                        <h5>Category videos</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                            neque deleniti, mollitia nam id ipsum illum labore aperiam tenetur
                            placeat cumque nihil voluptas ad rem repudiandae, ipsa praesentium vel asperiores.
                        </p>
                        <h5>Managing history</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                            neque deleniti, mollitia nam id ipsum illum labore aperiam tenetur
                            placeat cumque nihil voluptas ad rem repudiandae, ipsa praesentium vel asperiores.
                        </p>

                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <iframe style={{ borderRadius: '15px', height: '90%', width: '90%' }} width="560" height="315" src="https://www.youtube.com/embed/nYEoxne_20Y?si=ekcNAHqFN-azzivX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage