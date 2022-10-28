import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { GiWashingMachine } from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';


const Washer_IN_MS = 80 * 60 * 1000;
const Dryer_IN_MS = 45 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays_Washer = NOW_IN_MS + Washer_IN_MS;
const dateTimeAfterThreeDays_Dryer = NOW_IN_MS + Dryer_IN_MS;

const Machine = () => {
    return (
        <div>
            <Card>
                Washer 1
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays_Washer} />
                </div>
            </Card >
            <Card>
                Washer 2
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays_Washer} />
                </div>
            </Card>
            <Card>
                Dryer 1
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays_Dryer} />
                </div>
            </Card >
            <Card>
                Dryer 2
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays_Dryer} />
                </div>
            </Card >
        </div >
    );
}


export default Machine;