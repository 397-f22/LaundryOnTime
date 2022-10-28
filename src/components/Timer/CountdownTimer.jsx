import React from 'react';
import { useCountdown } from './useCountdown';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </a>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [minutes, seconds] = useCountdown(targetDate);

    if (minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
