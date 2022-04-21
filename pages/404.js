import { Backdrop, CircularProgress } from "@mui/material"
import LayoutMenu from "../layouts/layoutmenu"



const Custom404 = () => {

    return (
        <LayoutMenu active={"coming"} session={null}>
            <Backdrop open={true}>
                <div className='flex justify-center m-auto flex flex-col'>
                    <p className="text-white">Comming soon ...</p>
                    <CircularProgress className="m-auto text-white" color="inherit" />
                </div>
            </Backdrop>
        </LayoutMenu>
    )
}


export default Custom404