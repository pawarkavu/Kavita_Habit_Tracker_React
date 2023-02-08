import React,{useState} from 'react'
import AddHabit from '../components/addhabit'
import HabitList from '../components/HabitList'

export default function Detail() {

  const [current, setcurrent] = useState("")
  return (
    <>
        <br/>
    <AddHabit setcurrent={setcurrent}></AddHabit>
    <HabitList current={current} setcurrent={setcurrent}></HabitList>
        </>
  )
}
