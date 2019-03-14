import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div style={{ backgroundColor: 'red', height: 100 }}>
                    <div align="right">
                        <span style={{ marginRight: 10 }}>ยินดีต้อนรับ : Guest</span>
                    </div>
                </div>
                <div align="center" style={{ marginTop: 20 }}>
                    <Link to="/" style={{ marginLeft: 10, marginRight: 10 }}>หน้าแรก</Link>
                    <Link to="/news" style={{ marginLeft: 10, marginRight: 10 }}>ข่าวสาร/ประชาสัมพันธ์</Link>
                    <Link to="/activity" style={{ marginLeft: 10, marginRight: 10 }}>ประมวลภาพกิจกรรม</Link>
                    <Link to="/education" style={{ marginLeft: 10, marginRight: 10 }}>สื่อการเรียนการสอน</Link>
                </div>
            </div>
        )
    }
}