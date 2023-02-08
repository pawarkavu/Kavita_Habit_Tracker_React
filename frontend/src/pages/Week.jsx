import React,{useState} from 'react'
import HabitList from '../components/HabitList';
import WeekSelector from '../components/WeekSelector';

export default function Week() {
    const [dates, setDates] = useState([]);

  return (
      <>
          <WeekSelector setDates={setDates}></WeekSelector>
          <HabitList dates={dates}></HabitList>
      </>
  )
}
