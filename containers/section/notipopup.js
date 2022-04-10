import { FiX } from 'react-icons/fi';
import { Backdrop } from "@mui/material";
import BoxCard from '../../components/card/box';


const NotificationPopup = () => {


    return (
        <Backdrop open={true}>
            <BoxCard className='flex flex-col justify-between p-[1rem] w-full mx-4' type='flat-border'>
                <div className="relative">
                    <p className="relative text-center">Notification</p>
                    <div className="absolute top-0 right-0">
                        <FiX />
                    </div>
                </div>
                <div className='min-h-[100px]'>

                </div>
            </BoxCard>
        </Backdrop>
    )
}

export default NotificationPopup