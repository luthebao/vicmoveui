import ItemCardBag from "../../../components/card/itembag";
import { shoes_data } from "../../../utils/data";


export default function GemsList(props) {

    return (
        <div className="flex flex-wrap">
            {
                shoes_data.filter(val => val.type === "gem").map(val => <ItemCardBag {...val} />)
            }
        </div>
    )
}