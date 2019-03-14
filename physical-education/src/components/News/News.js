import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class News extends Component {
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-4" align="right">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ textAlign: 'left' }}>นิทรรศการ "โลกวิชาการงานอาชีพ 103 ปี สตรีนครสวรรค์"</CardTitle>
                                    <CardText>17/ก.พ./2558</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4" align="right">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ textAlign: 'left' }}>นิทรรศการ "โลกวิชาการงานอาชีพ 103 ปี สตรีนครสวรรค์"</CardTitle>
                                    <CardText>17/ก.พ./2558</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4" align="right">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ textAlign: 'left' }}>นิทรรศการ "โลกวิชาการงานอาชีพ 103 ปี สตรีนครสวรรค์"</CardTitle>
                                    <CardText>17/ก.พ./2558</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}