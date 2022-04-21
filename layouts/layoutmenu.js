import { Backdrop, CircularProgress } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BackgroundContainer from "../containers/background/backgroundcontainer"
import Menu from "../containers/menu/default"
import { handleGetDetail } from '../store/actions/pages'


const LayoutMenu = ({ children, active, session }) => {
    
    const router = useRouter()
    const { pages } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (session) {
            dispatch(handleGetDetail(session.id))
        }
    }, [session])

    useEffect(() => {
        if (pages.detail && pages.detail.accountdetail && (pages.detail.accountdetail.address === "" || pages.detail.accountdetail.address === null)) {
            router.push("/user/addwallet")
        }
    }, [pages]);


    return (
        <BackgroundContainer type='light-2' padding='none' hasMenu={true} className="min-h-[100vh]">

            {children}
            <Menu active={active} />
            <Backdrop open={pages.loading && session !== null}>
                <div className='flex justify-center m-auto flex flex-col'>
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
        </BackgroundContainer>
    )
}

export default LayoutMenu