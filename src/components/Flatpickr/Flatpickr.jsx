import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { useNavigate } from "react-router-dom";
import { useRef  } from "react";


export const Flit = () => {
const navigate = useNavigate()
    const fp = useRef(null);

    return (
      <div>
        <Flatpickr options={{
          minDate: '2022-02-24',
          maxDate: new Date(),
          altFormat: 'YYYY-MM-DD',
          onChange: (setDay=>{
            const d = new Date(setDay).toLocaleString().split(',')[0].split('.').reverse().join('-');
             navigate(`${d}`)})
        }} ref={fp} />
        {/* <button
          type="button"
          onClick={() => {
            // if (!fp?.current?.flatpickr) return;
            console.log(fp.current)
            // navigate(`/${fp.current.flatpickr}`)
            fp.current.flatpickr.clear();
          }}
        >
          Clear
        </button> */}
      </div>
    );
}