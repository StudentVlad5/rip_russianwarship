import { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner';
import  troops  from '../../json/constatnt.json';
import  css  from "./Statistics.module.css";
import { useParams } from "react-router-dom";

export const Statistics = () => {

    const [status,setStatus] = useState('idle');
    const [currentDay, setCurrentDay] = useState('');
    const [armyTroops, setArmyTroops] = useState([]);
    const [increase, setIncrease] = useState([]);
    const [total, setTotal] = useState([]);
    const [days, setDays] = useState('');

    const API_STATISTICS = 'https://russianwarship.rip/api/v2/statistics/';

const dateForSearch = useParams();

      useEffect(()=>{
        async function dataStatistics () {
        setStatus('pending');
        await fetch(API_STATISTICS+dateForSearch.data, {
            referrer: ""
            }).then(res=>{if(res.ok) {return res.json()} 
        return Promise.reject(new Error(`Can't find anything`))})
        .then(key => {
            localStorage.setItem('list', (JSON.stringify(key)));
            setCurrentDay(dateForSearch);
            setStatus('resolved');
            setArmyTroops(Object.keys(key.data["stats"]));
            setIncrease(key.data.increase);
            setTotal(key.data.stats);
            setDays(key.data.day);
        })
        .catch(error=>{
            console.log(error);
        }).finally(setStatus('idle'));
    }
    if(currentDay !== dateForSearch) {dataStatistics()}
    },[currentDay, dateForSearch, status])

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
console.log(currentDay)
if(status === 'resolved'){return (<div className={css.section__statistics}>

        <table className={css.table_statistics}>
        <caption className={css.title_statistics}>RIP русні станом на {currentDay.data.split('-').reverse().join('.')}. День війни {days} </caption>
            <thead className={css.thead_statistics}>
                <tr className={css.tr_statistics}>
                    <th>Категорія війська (EN)</th>
                    <th>Категорія війська (UK)</th>
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

