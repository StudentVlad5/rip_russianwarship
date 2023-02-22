import { Flit } from 'components/Flatpickr/Flatpickr';
import { Calendar } from '../Calendar/Calendar';
import css from "./Navigation.module.css";

export  const Navigation = () => {

    return (<div style={{width:'100%'}}>
                <div className={css.NavContainer}>
                    <Calendar/>
                </div>
                <div className={css.FlitContainer}>
                    <h3>Інша дата</h3>
                    <Flit/>
                </div>
            </div>
     )
}