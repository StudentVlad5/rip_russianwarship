import { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner';
import { useData } from '../../services/Context';
import  troops  from '../../json/constatnt.json';
import  css  from "./Statistics.module.css";

export const Statistics = () => {

    const [status,setStatus] = useState('idle');
    const [currentDay, setCurrentDay] = useState('');
    const [list, setList] = useState({});
    const [armyTroops, setArmyTroops] = useState([])
    const [increase, setIncrease] = useState([])
    const [total, setTotal] = useState([])
    // const [daySet, setDaySet] = useState('');

    const API_STATISTICS = 'https://russianwarship.rip/api/v2/statistics/';
    const {dataToday, dataYesterday} = useData();
console.log(dataToday)
      useEffect(()=>{
           if(JSON.parse(localStorage.getItem('list')) !== '' && JSON.parse(localStorage.getItem('list')) !== undefined){setList(JSON.parse(localStorage.getItem('list')))};


async function dataStatistics () {
    setStatus('pending');
    await fetch(`${API_STATISTICS}${dataToday}`, {
        referrer: ""
        }).then(res=>{if(res.ok) {return res.json()} 
    return Promise.reject(new Error(`Can't find anything`))})
    .then(key => {
        localStorage.setItem('list', (JSON.stringify(key)))
        setList(key);
        setCurrentDay(dataToday);
        setStatus('resolved');
        setArmyTroops(Object.keys(key.data["stats"]));
        setIncrease(key.data.increase);
        setTotal(key.data.stats)
    })
    .catch(error=>{
        console.log(error);
    }).finally(setStatus('idle'));
}
if(currentDay !== dataToday) {dataStatistics()}
},[currentDay, dataToday, status])

// function openModalWindow (e, item) {
//     e.preventDefault();
//     document.querySelector('#popup-root').classList.remove('is-hide');
//     setDaySet(e.currentTarget.dataset.setday);
//     setListOfHours(item.map(item=>item))
//     console.log(daySet, listOfHours);
// } 
if(status === 'pending') {  return(  
<Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
/>)}



if(status === 'resolved'){return (<div className={css.section__Weather}>

        <table className={css.table_weather}>
        <caption className={css.title_weather}>RIP русні {currentDay}. День війни {list.data.day}</caption>
            <thead className={css.thead_weather}>
                <tr className={css.tr_weather}>
                    <th>Категорія війська</th>
                    <th>Категорія війська</th>
                    <th>За день</th>
                    <th>Всього за період війни</th>
                </tr>
            </thead>
            <tbody>
            {armyTroops.map(item =>
            <tr key={item}>
                <td>{item}</td>
                <td>{Object.values(troops.find(key => key[item]))}</td>
                <td>{increase[`${item}`]}</td>
                <td>{total[`${item}`]}</td>
            </tr>)}
            </tbody>
        </table>
        
        </div>
        )
}}

