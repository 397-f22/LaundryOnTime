import React, { Component, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { GiWashingMachine } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import CountdownTimer from "./Timer/CountdownTimer";
import { useDbUpdate } from "../utilities/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FormDialog from './EmailForm';
import ContactUs_auto from './Email_auto';
import Toaster from './Toast'

const updateMachineTime = (minutes, update) => {
  const NOW_IN_MS = new Date().getTime();
  const DURATION_IN_MS = minutes * 60 * 1000;
  update({ endTime: new Date(NOW_IN_MS + DURATION_IN_MS).toISOString() });
};
const Machine = ({
  machines,
  setShowToast,
  showToast,
}) => {

  const navigate = useNavigate();
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("An error happened");
      });
  };
  const auth = getAuth();
  const user = auth.currentUser;
  const [updatewasher1] = useDbUpdate("/washer1");
  const [updatewasher2] = useDbUpdate("/washer2");
  const [updatedryer1] = useDbUpdate("/dryer1");
  const [updatedryer2] = useDbUpdate("/dryer2");

  const [minutesWasher1, setMinutesWasher1] = useState(0);
  const [secondsWasher1, setSecondsWasher1] = useState(0);
  const [sentWasher1, setSentWasher1] = useState(false);
  const [minutesWasher2, setMinutesWasher2] = useState(0);
  const [secondsWasher2, setSecondsWasher2] = useState(0);
  const [sentWasher2, setSentWasher2] = useState(false);
  const [minutesDryer1, setMinutesDryer1] = useState(0);
  const [secondsDryer1, setSecondsDryer1] = useState(0);
  const [sentDryer1, setSentDryer1] = useState(false);
  const [minutesDryer2, setMinutesDryer2] = useState(0);
  const [secondsDryer2, setSecondsDryer2] = useState(0);
  const [sentDryer2, setSentDryer2] = useState(false);

  return (
    <div>
      <Toaster showToast={showToast} setShowToast={setShowToast} />
      <div>
        <h3>{user?.displayName}</h3>
        {/* <h3>{user?.email}</h3> */}
        <button onClick={handleLogOut}>Sign Out</button>
      </div>
      <Card>
        Washer 1
        <br />
        <GiWashingMachine size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["washer1"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["washer1"].endTime)}
            setMinutes={setMinutesWasher1}
            setSeconds={setSecondsWasher1}
          />
        </div>
        {Date.now() > Date.parse(machines["washer1"].endTime) ? (
          <Button
            variant="success"
            onClick={() => {
              setSentWasher1(false);
              updateMachineTime(60, updatewasher1);
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => updateMachineTime(0, updatewasher1)}
          >
            Stop
          </Button>
        )}
      </Card>
      <FormDialog setShowToast={setShowToast} userName={user.displayName} userEmail={user.email} />
      <ContactUs_auto userName={user.displayName} userEmail={user.email}
      minutesWasher={minutesWasher1}
      secondsWasher={secondsWasher1}
      sent={sentWasher1}
      setSent={setSentWasher1} />
      <br />
      <Card>
        Washer 2
        <br />
        <GiWashingMachine size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["washer2"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["washer2"].endTime)}
            setMinutes={setMinutesWasher2}
            setSeconds={setSecondsWasher2}
          />
        </div>
        {Date.now() > Date.parse(machines["washer2"].endTime) ? (
          <Button
            variant="success"
            onClick={() => {
              updateMachineTime(60, updatewasher2);
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => updateMachineTime(0, updatewasher2)}
          >
            Stop
          </Button>
        )}
      </Card>
      <FormDialog setShowToast={setShowToast} />
      <br />
      <Card>
        Dryer 1
        <br />
        <MdLocalLaundryService size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["dryer1"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["dryer1"].endTime)}
            setMinutes={setMinutesDryer1}
            setSeconds={setSecondsDryer1}
          />
        </div>
        {Date.now() > Date.parse(machines["dryer1"].endTime) ? (
          <Button
            variant="success"
            onClick={() => {
              updateMachineTime(60, updatedryer1);
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => updateMachineTime(0, updatedryer1)}
          >
            Stop
          </Button>
        )}
      </Card>
      <FormDialog setShowToast={setShowToast} />
      <br />
      <Card>
        Dryer 2
        <br />
        <MdLocalLaundryService size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["dryer2"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["dryer2"].endTime)}
            setMinutes={setMinutesDryer2}
            setSeconds={setSecondsDryer2}
          />
        </div>
        {Date.now() > Date.parse(machines["dryer2"].endTime) ? (
          <Button
            variant="success"
            onClick={() => {
              updateMachineTime(60, updatedryer2);
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => updateMachineTime(0, updatedryer2)}
          >
            Stop
          </Button>
        )}
      </Card>
      <FormDialog setShowToast={setShowToast} />
    </div>
  );
};

export default Machine;
