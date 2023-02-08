import React from 'react'

function HabitDetails(props) {
  function deleteHabit(id) {
    let data = { ID: id };
    let raw = JSON.stringify(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      body: raw,
      headers: myHeaders
    };
    console.log({ raw,myHeaders });
    fetch("http://localhost:5000/delete", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        props.setflag(result)
        // location.reload();
      })
      .catch(error => console.log('error', error));

  }
  return (
    <div>
      <br />
      <div className="card">
        <div className="card-header">
          <div className="row g-3">
            <h4 className="col-11">
              {props.ele.Name}
            </h4>
            <div className="col-1">
              <button className="btn btn-danger"
                onClick={() => { deleteHabit(props.ele.ID) }}
              //   onclick="deleteHabit({props.ele.ID})"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col">Time : {props.ele.Time}</div>
            <div className="col">Current Streak : {props.ele.Current}</div>
            <div className="col">Best Streak : {props.ele.BestStreak} </div>
            <div className="col">Efficiency :{props.ele.TotalDone}/{props.ele.TotalTracked}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitDetails
