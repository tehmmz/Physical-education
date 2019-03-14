import React, { Component } from 'react';
import { Table, Input, Form, FormGroup, Label, Col, Button } from 'reactstrap';
export default class Education extends Component {
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 30 }}>
                    <Form style={{ paddingLeft: 20 }}>
                        <FormGroup row>
                            <Label for="exampleEmail">ค้นหา: </Label>
                            <Col sm={6}>
                                <Input type="text" />
                            </Col>
                            <Button onClick={() => console.log('AAA')}>ค้นหา</Button>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail">ค้นหาตามหมวดหมู่: </Label>
                            <Col sm={3}>
                                <Input type="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>หัวข้อผลงานทางวิชาการ</th>
                                <th>วันที่ลงประกาศ</th>
                                <th>หมวดหมู่</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td style={{ width: "70%" }}>ม.5 หน่วยการเรียนรู้ที่ 6</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td style={{ width: "70%" }}>ม.5 หน่วยการเรียนรู้ที่ 6</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td style={{ width: "70%" }}>ม.5 หน่วยการเรียนรู้ที่ 6</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}