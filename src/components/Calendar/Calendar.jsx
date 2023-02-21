import { useData } from '../../services/Context';
import { NavMenu } from '../Common/Common';

export const Calendar = () => {
    const {dataToday, dataYesterday} = useData();
    return(
<>
{NavMenu(`${dataToday}`, dataToday.toString())}
{NavMenu(`${dataYesterday}`, dataYesterday)}
</>
    )
}