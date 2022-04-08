import { Backdrop, CircularProgress } from "@mui/material"
import BackgroundContainer from "./background/backgroundcontainer"


const LoadingContainer = () => {

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

export default LoadingContainer