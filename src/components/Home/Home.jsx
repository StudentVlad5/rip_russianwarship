import { Outlet} from "react-router-dom";
import { useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Navigation } from "../Navigation/Navigation";
import css from "./Home.module.css";

export const Home = () => {
const [statusMenu, setStatusMenu] = useState(false);

const  handleHideBar = () => {
      document.querySelector('#menuBar').style.display = 'none';
      setStatusMenu(!statusMenu);
    }
const  handleViewBar = () => {
    document.querySelector('#menuBar').style.display = 'flex';
    setStatusMenu(!statusMenu);
    }

    return (
    <> {statusMenu && <RightCircleOutlined className={css.rightArrow} onClick={handleViewBar}/>}
        <div className={css.menu} id="menuBar">
            <LeftCircleOutlined className={css.leftArrow} onClick={handleHideBar}/>
            <h3>Втрати русні</h3>
            <Navigation/>
        </div>
        <Outlet/>
    </>)
}