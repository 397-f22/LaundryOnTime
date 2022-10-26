import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {GiWashingMachine} from 'react-icons/gi'
const Machine = () => {
    return(
        <div>
            <Card style = {{width: "75px"}}>
                Machine 1
                <br/>
                <GiWashingMachine/>
            </Card>
            <Card>
                Machine 2
                <br/>
                <GiWashingMachine/>
            </Card>
        </div>
    );
}
   

export default Machine;