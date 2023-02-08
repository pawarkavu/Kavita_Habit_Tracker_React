import React,{useRef} from 'react'

function AddHabit(props) {
    let nameSelector = useRef();
    let timeSelector = useRef();
    function addHabit() {
        let Name = nameSelector.current.value;
        let Time = timeSelector.current.value;
        if (Name == "") return;
        let data = { Name, Time };
        let raw = JSON.stringify(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            body: raw,
            headers: myHeaders
        };
        console.log(raw);
        fetch("http://localhost:5000/add", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                props.setcurrent(Name);
                nameSelector.current.value = "";
                timeSelector.current.value = "";
                // props.setcurrent("");
            })
            .catch(error => console.log('error', error));

    }

  return (
    <div className="row g-3">
            <div className="col-5">
                <input type="text" className="form-control" ref={nameSelector} placeholder="Name of Habit" id="Name"/>
            </div>
            <div className="col-5">
                <input type="time" className="form-control" ref={timeSelector} id="Time"/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-primary" onClick={()=>{ addHabit() }}><i className="bi bi-plus-circle"></i> Add
                    Habit</button>
            </div>
        </div>
  )
}

export default AddHabit
