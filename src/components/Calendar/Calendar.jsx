import { useData } from '../../services/Context';
import { NavMenu } from '../Common/Common';
import css from './Calendar.module.css';

export const Calendar = () => {
    const {dataToday, dataYesterday} = useData();
    return(
<nav className={css.container__date}>
{NavMenu(`${dataToday}`, dataToday.split('-').reverse().join('.'))}
{NavMenu(`${dataYesterday}`, dataYesterday.split('-').reverse().join('.'))}
</nav>
    )
}