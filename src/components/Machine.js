import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiWashingMachine} from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';
import { useDbUpdate } from '../utilities/firebase';
import {useState} from 'react';
import { update } from 'firebase/database';
import Comment  from './Comment.js'

const updateMachineTime = (minutes, update) => {
    const NOW_IN_MS = new Date().getTime();
    const DURATION_IN_MS = minutes * 60 * 1000;
    update({endTime: new Date(NOW_IN_MS + DURATION_IN_MS).toISOString()});
}

const Machine = ( {machines} ) => {
    const [updatewasher1, ] = useDbUpdate("/washer1");
    const [updatewasher2, ] = useDbUpdate("/washer2");
    const [updatedryer1, ] = useDbUpdate("/dryer1");
    const [updatedryer2, ] = useDbUpdate("/dryer2");

    return (
        <div>
            <Card>
                Washer 1
                <br />
                <GiWashingMachine size={64}/>
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["washer1"].endTime)} inUsage={Date.now() <= Date.parse(machines["washer1"].endTime)} />
                </div>
                {Date.now() > Date.parse(machines["washer1"].endTime) ? 
                    <Button variant="success" onClick={() => {updateMachineTime(60, updatewasher1)}}>Start</Button>
                    : <Button variant="danger" onClick={() => updateMachineTime(0, updatewasher1)}>Stop</Button> } 
                <div>
                    <Comment machines={machines} id={"comment1"}/>
                </div>
            </Card >
            <br/>
            <Card>
                Washer 2
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["washer2"].endTime)} inUsage={Date.now() <= Date.parse(machines["washer2"].endTime)} />
                </div>
                {Date.now() > Date.parse(machines["washer2"].endTime) ? 
                    <Button variant="success" onClick={() => {updateMachineTime(60, updatewasher2)}}>Start</Button>
                    : <Button variant="danger" onClick={() => updateMachineTime(0, updatewasher2)}>Stop</Button> } 
                <div>
                    <Comment machines={machines} id={"comment2"}/>
                </div>
            </Card>
            <br/>
            <Card>
                Dryer 1
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["dryer1"].endTime)} inUsage={Date.now() <= Date.parse(machines["dryer1"].endTime)} />
                </div>
                {Date.now() > Date.parse(machines["dryer1"].endTime) ? 
                    <Button variant="success" onClick={() => {updateMachineTime(60, updatedryer1)}}>Start</Button>
                    : <Button variant="danger" onClick={() => updateMachineTime(0, updatedryer1)}>Stop</Button> }
                <div>
                    <Comment machines={machines} id={"comment3"}/>
                </div> 
            </Card >
            <br/>
            <Card>
                Dryer 2
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["dryer2"].endTime)} inUsage={Date.now() <= Date.parse(machines["dryer2"].endTime)} />
                </div>
                {Date.now() > Date.parse(machines["dryer2"].endTime) ? 
                    <Button variant="success" onClick={() => {updateMachineTime(60, updatedryer2)}}>Start</Button>
                    : <Button variant="danger" onClick={() => updateMachineTime(0, updatedryer2)}>Stop</Button> } 
                <div>
                    <Comment machines={machines} id={"comment4"}/>
                </div>
            </Card >
        </div >
    );
}


export default Machine;