import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/Star_big.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
// import {Card, Form} from "react-bootstrap";
// import Star from "../assets/Star.png"
// import Image from "react-bootstrap/Image";
// import { useNavigate } from "react-router-dom"
// import { DEVICE_ROUTE } from '../utils/consts';

// const DeviceItem = ({device}) => {   
//     const navigate = useNavigate()
//     return (
//         <Col md = {3} className = {"mt-3"} onClick = {() => navigate(DEVICE_ROUTE + '/' + device.id)}>
//             <Card style = {{width: 150, cursor: 'pointer'}} border = {"light"}>
//                 <Image width = {150} height = {150} src = {process.env.REACT_APP_API_URL + device.img}/>
//                 <div className='text-black-50 mt-1 d-flex justify-context-between align-items-center'>
//                     <div>Samsung...</div>
//                     <div className='d-flex align-items-center'>
//                         <div>{device.rating}</div>
//                         <Image width = {18} height = {18} src = {Star}/>
//                     </div>
//                 </div>
//                 <div>
//                     {device.name}
//                 </div>
//             </Card>
//         </Col>
//     );
// };

// export default DeviceItem;