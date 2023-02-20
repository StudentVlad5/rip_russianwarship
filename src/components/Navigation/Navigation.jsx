import {  Outlet } from 'react-router-dom';
import { NavMenu } from 'components/Common/Common';
import css from "./Navigation.module.css";

export  const Navigation = (date) => {
    return (<div style={{width:'100%'}}><div className={css.NavContainer}>
                {NavMenu(`${date}`)}
                {NavMenu(`${date}`)}
     </div>
     <div><Outlet/></div>
     </div>
     )
}