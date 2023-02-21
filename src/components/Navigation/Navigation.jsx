// import {  Outlet } from 'react-router-dom';
import { Calendar } from '../Calendar/Calendar';
import css from "./Navigation.module.css";

export  const Navigation = () => {

    return (<div style={{width:'100%'}}><div className={css.NavContainer}>
                <Calendar/>

     </div>
     {/* <div><Outlet/></div> */}
     </div>
     )
}