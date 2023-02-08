import React from 'react'
import { useEffect,useState } from 'react';
import HabitDetails from './HabitDetails';
import WeeklyHabitView from './WeeklyHabitView';

export default function HabitList(props) {

    const[Habits, setHabits] = useState([])
    const[flag, setflag] = useState(true)

    async function getData()
    {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        var requestOptions = {
            method : 'GET',
            headers: myHeaders
        };

        try{
            let res = await fetch("http://localhost:5000/getData", requestOptions)
            let result = await res.json()
            setHabits(result["habits"])
            console.log(result, result["habits"]);
        } catch(error) {
            console.log('error', error)
        }
    }

    useEffect(()=> {
        console.log(Habits);
    }, [Habits])

    useEffect(() => {
        getData();
    }, [props])
    
    useEffect(()=> {
        getData();
    },[])
    let pathname = window.location.pathname;
    let detailView = pathname === "/detail" ? true : false;
  
    return(<>
        {detailView && <>{Habits.map((ele) => { return <HabitDetails setflag={props.setcurrent} ele={ele} key={ele.ID}></HabitDetails>})}</>}
        {!detailView && <>{Habits.map((ele) => { return <WeeklyHabitView ele={ele} dates={props.dates} key={ele.ID}></WeeklyHabitView>})}</>}
    </>
    )
}

// sb6689611898
// 9019898