import { Backdrop, CircularProgress } from "@mui/material";
import LayoutMenu from "../layouts/layoutmenu";
import Custom404 from './404'

export default function Home() {

    return (
        <Custom404 />
    )

    return (
        <LayoutMenu>
            <Backdrop open={true}>
                <div className='flex justify-center m-auto flex flex-col'>
                    {/* <CircleImage src={"/images/logo/1_trans.png"} width='260' height='260'></CircleImage> */}
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
        </LayoutMenu>
    )
}