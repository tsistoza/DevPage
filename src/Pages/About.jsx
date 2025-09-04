import { Row, Col, Container, Image } from 'react-bootstrap';

const About = () => {
    return(
        <>
            <Container fluid className="align-item-center d-flex flex-column">
                <Row className="m-0 pb-5">
                    <Col className="d-flex justify-content-center">
                        <Image src="/public/Logo.jpg" roundedCircle width={300} height={300} />
                    </Col>
                </Row>
                <Row className="align-items-center" style={ { height: '100%', margin: 'auto' }}>
                    <Col id="bootstrap-overrides" className="border border-3 border-info rounded">
                        <h1 className="text-white text-center border-5 border-bottom border-info rounded">About me</h1>
                        <Row className="m-0 pb-2">
                            <Col>
                                <p className="text-white text-center fs-5">
                                    Recently, graduated as a Computer Engineer. I decided to pivot into Game Development because, I learned about programming back in 2018 and it became one of my favorite things to do, played a ton of games when I was young, so logically I started learning about Game Development which I only got into very recently. I am very well versed in low-level programming in C/C++ due to Computer Engineering classes, as well a bit of machine learning as well in Python.
                                </p>
                            </Col>
                        </Row>
                        <Row className="m-0 pb-2">
                            <Col>
                                <p className="text-white text-center fs-5">
                                    Learned Software Engineering, where I and a team made a website. I coordinated the team as the leader. And we used frameworks such as ReactJS, Bootstrap, and MeteorJS for the backend.  Databases using MongoDB and SQL. The site is no longer operating as I or my team do not want to pay for the operating costs, but I believe the Github page is public, so you can run it for yourself.
                                </p>
                            </Col>
                        </Row>
                        <Row className="m-0 pb-2">
                            <Col>
                                <p className="text-white text-center fs-5">
                                    Then I decided to learn Game Development in Unity, what started out as exciting future turned into a roadblock. Game Development is much more than just programming, and for me who is a solo developer, it required me to learn more. I learned Blender Modeling and Animation, GIMP/KRITA Image Editing, Shaders, SFX, and so much more. I was able to finish my first ever game (linked in projects), after several projects sidelined due to it being too ambitious. I am hoping I can find a team that also has the same passion as me, and bring my ideas to life.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    ) 
};

export default About;
