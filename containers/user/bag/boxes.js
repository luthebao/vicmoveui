import ItemCardBag from "../../../components/card/itembag";
import { shoes_data } from "../../../utils/data";


export default function BoxesList(props) {

    return (
        <div className="flex flex-wrap">
            {
                shoes_data.filter(val => val.type === "box").map(val => <ItemCardBag {...val} />)
            }
        </div>
    )
}