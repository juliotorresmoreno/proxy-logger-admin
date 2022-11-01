
import React from 'react';
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';

const ACL: React.FC = () => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </Card>
            </Col>
        </Row>
    );
}

export default ACL;
