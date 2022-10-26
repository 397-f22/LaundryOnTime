import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { GiWashingMachine } from 'react-icons/gi'
import CountdownTimer from './Timer/CountdownTimer';


const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const Machine = () => {
    return (
        <div>
            <Card>
                Machine 1
                <br />
                <GiWashingMachine />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </Card >
            <Card>
                Machine 2
                <br />
                <GiWashingMachine />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </Card>
        </div >
    );
}


export default Machine;