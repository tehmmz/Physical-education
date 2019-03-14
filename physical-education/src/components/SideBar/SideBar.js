import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class SideBar extends Component {


    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <Link to="/" style={{ marginLeft: 10, marginRight: 10 }}>หน้าแรก</Link>
                <Link to="/news" style={{ marginLeft: 10, marginRight: 10 }}>ข่าวสาร/ประชาสัมพันธ์</Link>
                <Link to="/activity" style={{ marginLeft: 10, marginRight: 10 }}>ประมวลภาพกิจกรรม</Link>
                <Link to="/education" style={{ marginLeft: 10, marginRight: 10 }}>สื่อการเรียนการสอน</Link>
            </div>
        )
    }
}