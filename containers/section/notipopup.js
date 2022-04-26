import { FiX } from 'react-icons/fi';
import { Backdrop } from "@mui/material";
import BoxCard from '../../components/card/box';
import { useAppContext } from '../../utils/store';


const NotificationPopup = () => {

    const { noti_popup } = useAppContext()
    const [popup, setPopup] = noti_popup

    return (
        <Backdrop open={popup}>
            <BoxCard className='flex flex-col justify-between p-[1rem] w-full mx-4' type='flat-border'>
                <div className="relative">
                    <p className="relative text-center">{popup?.title || "Notification"}</p>
                    <div className="absolute top-0 right-0">
                        <FiX onClick={() => setPopup(null)} />
                    </div>
                </div>
                <div className='min-h-[100px] mt-2 text-black'>
                    {
                        popup && popup.render
                    }
                </div>
            </BoxCard>
        </Backdrop>
    )
}

export default NotificationPopup