import React,{useState} from 'react'
import { changeStatus } from '../service/data';

export default function WeeklyHabitView(props) {
    const [current, setcurrent] = useState("")
    console.log(props);
    return (
        <>
            <br />
            <div class="card habit">
                <div class="card-header">
                    <h4>
                        {props.ele.Name}
                    </h4>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col">Time :  {props.ele.Time}
                        </div>
                        <div class="col d-none" id="ID">
                            {props.ele.ID}
                        </div>
                        <div class="col">Current Streak :  {props.ele.Current}
                        </div>
                        <div class="col">Best Streak :  {props.ele.BestStreak}
                        </div>
                        <div class="col">Efficiency :  {props.ele.TotalDone}  /  {props.ele.TotalTracked}
                        </div>
                    </div>
                    <div class="row g-3 calenderArea" id="calender">
                        {props.dates.map((date) => {
                            let disabled = new Date(date + " 00:00:00 GMT") > new Date();
                            let done = !disabled ? props.ele.DoneDates.includes(date) : false
                            let notdone = !disabled ? props.ele.NotDoneDates.includes(date) : false
                            //     notdone, normal = true;
                            // done = notdone = false;
                            return (
                                <div class="col card">
                                    <br />
                                    <div class="mx-auto">{date.substring(0, 11)}</div>
                                    {disabled && (<button type="button" class="btn btn-secondary" disabled>
                                        <i class="bi bi-dash-lg"></i>
                                    </button>)
                                    }
                                    {done && (<button type="button" class="btn btn-success"
                                        onClick={() => { setcurrent(changeStatus(props.ele, date, 'done')) }}
                                        // onclick="changeStatus('${id.trim()}','${date}','done')"
                                    >
                                        <i class="bi bi-check-lg"></i>
                                    </button>)
                                    }
                                    {notdone && (<button type="button" class="btn btn-danger"
                                        onClick={() => { setcurrent(changeStatus(props.ele, date, 'not done')) }}
                                        // onclick="changeStatus('${id.trim()}','${date}','not done')"
                                    >
                                        <i class="bi bi-x-lg"></i>
                                    </button>)
                                    }
                                    {(!notdone && !done && !disabled) && (<button type="button" class="btn btn-secondary"
                                        onClick={() => { setcurrent(changeStatus(props.ele, date, 'undefined')) }}
                                        // onclick="changeStatus('${id.trim()}','${date}','undefined')"
                                    >
                                        <i class="bi bi-dash-lg"></i>
                                    </button>)
                                    }

                                    <br/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
