import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

export default class Gallery extends Component {
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 30 }}>
                    <div className="col-12" style={{ marginBottom: 10 }}>
                        <Card>
                            <CardBody>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=250&h=150" alt="Card image cap" />
                                    </div>
                                    <div className="col-8">
                                        <h4>IMG</h4>
                                        <span>IMG</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=250&h=150" alt="Card image cap" />
                                    </div>
                                    <div className="col-8">
                                        <h4>IMG</h4>
                                        <span>IMG</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}