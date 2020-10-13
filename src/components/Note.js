import React from 'react'

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';

import '../assets/css/landing.css';
import '../assets/css/argon-design-system-react.css';

const NotePage = () => { 
return<>
<section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            엄선된 미니테스트를 통한 자가 진단
                          </h6>
                          <p className="description mt-3">
                            가나다라마바사아자차만ㅇ러ㅣㅁㄴ알너알낭린ㅁ닝ㄹㄴ리ㅁㄴㅇㄹㄴㅇㄻㄴㄻㄴㅇㄹㄴㅁㄻㄴㄻㄴㅇㄻㄴㄹ
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              #90%정확도
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              #뭘넣지
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              #아무거나
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            미니테스트 시작하기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            동영상 강좌로 한 단계 레벨업
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            강좌 들으러 가기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            전문 강사와 1:1멘토링
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            게시판 바로가기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          </>
}

export default Note