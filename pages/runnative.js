import { Backdrop, CircularProgress } from "@mui/material";
import CircleImage from "../components/image/circle";
import BackgroundContainer from "../containers/background/backgroundcontainer";

export default function Home() {

    return (
        <BackgroundContainer type='gradient'>
            <Backdrop open={true}>
                <div className='flex justify-center m-auto flex flex-col'>
                    {/* <CircleImage src={"/images/logo/1_trans.png"} width='260' height='260'></CircleImage> */}
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
        </BackgroundContainer>
    )
}