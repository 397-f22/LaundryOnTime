import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { GiWashingMachine} from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';


const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const Machine = () => {
    return (
        <div>
            <Card>
                Washer 1
                <br />
                <GiWashingMachine size={64}/>
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
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