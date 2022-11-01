
import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

type MenuProps = {
    onChange?: (item: number) => void;
    items: string[];
    active: number
} & React.PropsWithChildren;

const Menu: React.FC<MenuProps> = (props) => {
    const ListGroupItemStyle = { cursor: 'pointer' };
    return (
        <Row>
            <Col md={3}>
                <ListGroup>
                    {props.items.map((item, key) => (
                        <ListGroupItem key={key}
                            style={ListGroupItemStyle}
                            onClick={() => props.onChange && props.onChange(key)}
                            active={props.active === key}>
                            {item}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    );
}

export default Menu;
