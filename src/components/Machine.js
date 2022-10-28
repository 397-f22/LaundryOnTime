import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiWashingMachine} from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';
import { useDbUpdate } from '../utilities/firebase';


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
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["washer1"].endTime)} />
                </div>
                <Button variant="success" style={{width: "20%"}} onClick={() => {updateMachineTime(45, updatewasher1)}}></Button>
            </Card >
            <br/>
            <Card>
                Washer 2
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["washer2"].endTime)} />
                </div>
                <Button variant="success" style={{width: "20%"}} onClick={() => {updateMachineTime(45, updatewasher2)}}></Button>
            </Card>
            <br/>
            <Card>
                Dryer 1
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["dryer1"].endTime)} />
                </div>
                <Button variant="success" style={{width: "20%"}} onClick={() => {updateMachineTime(60, updatedryer1)}}></Button>
            </Card >
            <br/>
            <Card>
                Dryer 2
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["dryer2"].endTime)} />
                </div>
                <Button variant="success" style={{width: "20%"}} onClick={() => {updateMachineTime(60, updatedryer2)}}></Button>
            </Card >
        </div >
    );
}


export default Machine;