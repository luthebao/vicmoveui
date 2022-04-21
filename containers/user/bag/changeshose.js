import { useSelector } from "react-redux";
import ChangeShoseCard from "../../../components/card/changeshose"


export default function ChangeShoseList(props) {
    const { pages } = useSelector(state => state)

    return (
        <div className="flex flex-wrap">
            {
                pages.detail && pages.detail.sneakers.map(val => <ChangeShoseCard {...val} />)
            }
        </div>
    )
}