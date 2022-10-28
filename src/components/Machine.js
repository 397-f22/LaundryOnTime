import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiWashingMachine} from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';
import { useDbUpdate } from '../utilities/firebase';

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const updateMachineTime = (minutes, update) => {
    const NOW_IN_MS = new Date().getTime();
    const DURATION_IN_MS = minutes * 60 * 1000;
    update({endTime: new Date(NOW_IN_MS + DURATION_IN_MS).toISOString()});
}

const Machine = ( {machines} ) => {
    const [update, result] = useDbUpdate("/washer1");

    return (
        <div>
            <Card>
                Washer 1
                <br />
                <GiWashingMachine size={64}/>
                <div>
                    <CountdownTimer targetDate={Date.parse(machines["washer1"].endTime)} />
                </div>
                <Button style={{width: "20%"}} onClick={() => {updateMachineTime(45, update)}}></Button>
            </Card >
            <Card>
                Washer 2
                <br />
                <GiWashingMachine size={64}/>
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </Card>
            <Card>
                Dryer 1
                <br />
                <MdLocalLaundryService size={64}/>
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </Card >
            <Card>
                Dryer 2
                <br />
                <MdLocalLaundryService size={64}/>
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </Card >
        </div >
    );
}


export default Machine;