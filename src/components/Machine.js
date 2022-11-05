import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { GiWashingMachine } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import CountdownTimer from "./Timer/CountdownTimer";
import { useDbUpdate } from "../utilities/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const updateMachineTime = (minutes, update) => {
  const NOW_IN_MS = new Date().getTime();
  const DURATION_IN_MS = minutes * 60 * 1000;
  update({ endTime: new Date(NOW_IN_MS + DURATION_IN_MS).toISOString() });
};
const Machine = ({ machines }) => {
  console.log(machines);

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

  return (
    <div>
      <div>
        <h3>{user?.displayName}</h3>
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
          />
        </div>
        {Date.now() > Date.parse(machines["washer1"].endTime) ? (
          <Button
            variant="success"
            onClick={() => {
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
      <br />
      <Card>
        Washer 2
        <br />
        <GiWashingMachine size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["washer2"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["washer2"].endTime)}
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
      <br />
      <Card>
        Dryer 1
        <br />
        <MdLocalLaundryService size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["dryer1"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["dryer1"].endTime)}
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
      <br />
      <Card>
        Dryer 2
        <br />
        <MdLocalLaundryService size={64} />
        <div>
          <CountdownTimer
            targetDate={Date.parse(machines["dryer2"].endTime)}
            inUsage={Date.now() <= Date.parse(machines["dryer2"].endTime)}
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
    </div>
  );
};

export default Machine;
