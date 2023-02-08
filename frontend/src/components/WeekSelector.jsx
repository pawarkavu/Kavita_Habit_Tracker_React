import React, { useEffect, useRef } from 'react'

export default function WeekSelector(props) {
  let weekSelector = useRef();
  function calculateDates(e) {
    let val = weekSelector.current.value;
    let dates = parseDates(val);
    props.setDates(dates);
  }
  function parseDates(inp) {
    let year = parseInt(inp.slice(0, 4), 10);
    let week = parseInt(inp.slice(6), 10);

    let day = (1 + (week) * 7); // 1st of January + 7 days for each week

    let dayOffset = new Date(year, 0, 1).getDay(); // we need to know at what day of the week the year start
    console.table({ day, year, week, dayOffset })
    dayOffset--;  // depending on what day you want the week to start increment or decrement this value. This should make the week start on a monday
    if (year == 2023) {
      day -= 7;
    }
    let days = [];
    for (let i = 0; i < 7; i++) // do this 7 times, once for every day
      days.push((new Date(year, 0, day - dayOffset + i)).toDateString()); // add a new Date object to the array with an offset of i days relative to the first day of the week
    return days;
  }
  useEffect(() => {
    calculateDates();
  }, [])
  return (
    <>
      <div class="row g-3">
        <div class="col-4"></div>
        <div class="col-4">
          <input type="week" class="form-control weekselector" ref={weekSelector} onChange={calculateDates} name="" id="week" defaultValue={"2023-W06"} />
        </div>
        <div class="col-4"></div>
      </div>
    </>
  )
}
