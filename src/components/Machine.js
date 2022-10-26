import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {GiWashingMachine} from 'react-icons/gi'
const Machine = () => {
    return(
        <div>
            <Card>
                Machine 1
                <br/>
                <GiWashingMachine/>
            </Card>
        </div>
    );
}
   

export default Machine;