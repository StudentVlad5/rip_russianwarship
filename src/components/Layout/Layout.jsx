import React from "react";
import { Outlet } from "react-router-dom"
import {App} from "components/App"

export const Layout = () => {
    return (
    <section style={{display:'flex'}}>
        <App/>
        <Outlet/>
    </section>
    )
}