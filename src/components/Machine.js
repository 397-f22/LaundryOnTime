import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import { GiWashingMachine } from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';
import Button from 'react-bootstrap/Button';

const Washer_IN_MS = 80 * 60 * 1000;
const Dryer_IN_MS = 45 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays_Washer = NOW_IN_MS + Washer_IN_MS;
//const dateTimeAfterThreeDays_Dryer = NOW_IN_MS + Dryer_IN_MS;



const Machine = () => {
    const [usage,setUsage]=useState(true);
    const [start_time,setStart_time]=useState(dateTimeAfterThreeDays_Washer);
    const start_machine = () =>{
        setUsage(false);
    };
    const end_machine = () => {
        const Washer_IN_MS = 80 * 60 * 1000;
        const Dryer_IN_MS = 45 * 60 * 1000;
        const NOW_IN_MS = new Date().getTime();
        //const dateTimeAfterThreeDays_Washer = NOW_IN_MS + Washer_IN_MS;
        setUsage(true);
        setStart_time(NOW_IN_MS + Washer_IN_MS)
        console.log(NOW_IN_MS + Washer_IN_MS);
        console.log("start_time",start_time)
    }
    return (
        <div>
            <Card>
                Washer 1
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={start_time} />
                </div>
                { usage===true ? <Button variant="success" onClick={start_machine}>
                    Start
                </Button> : <Button variant="danger" onClick={end_machine}>
                    Cancel
                </Button> }
            </Card >
            <br/>
            <Card>
                Washer 2
                <br />
                <GiWashingMachine size={64} />
                <div>
                    <CountdownTimer targetDate={start_time} />
                </div>
                { usage===true ? <Button variant="success" onClick={start_machine}>
                    Start
                </Button> : <Button variant="danger" onClick={end_machine}>
                    Cancel
                </Button> }
            </Card>
            <br/>
            <Card>
                Dryer 1
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={start_time} />
                </div>
                { usage===true ? <Button variant="success" onClick={start_machine}>
                    Start
                </Button> : <Button variant="danger" onClick={end_machine}>
                    Cancel
                </Button> }
            </Card >
            <br/>
            <Card>
                Dryer 2
                <br />
                <MdLocalLaundryService size={64} />
                <div>
                    <CountdownTimer targetDate={start_time} />
                </div>
                { usage===true ? <Button variant="success" onClick={start_machine}>
                    Start
                </Button> : <Button variant="danger" onClick={end_machine}>
                    Cancel
                </Button> }
            </Card >
        </div >
    );
}


export default Machine;