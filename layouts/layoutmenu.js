import BackgroundContainer from "../containers/background/backgroundcontainer"
import Menu from "../containers/menu/default"


const LayoutMenu = ({ children }) => {

    return (
        <BackgroundContainer type='light-2' padding='none' hasMenu={true} className="min-h-[100vh]">
            {children}
            <Menu />
        </BackgroundContainer>
    )
}

export default LayoutMenu