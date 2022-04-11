import { Checkbox } from "@mui/material";
import { RiCheckLine } from "react-icons/ri";

const VicmCheckbox = ({ children, className, style }) => {
    return (
        <Checkbox className={className}
            style={{ ...style }}
            icon={<div className='border-2 border-vicm-light-green-300 w-6 h-6 rounded-full bg-vicm-light-green-200'></div>}
            checkedIcon={<div className='drop-shadow-xl border-2 border-whiteTransparent-10 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center'><RiCheckLine /></div>}>{{ children }}</Checkbox>
    );
}


export default VicmCheckbox;
