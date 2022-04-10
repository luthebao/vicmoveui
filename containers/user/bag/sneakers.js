import ItemCardBag from "../../../components/card/itembag";
import { shoes_data } from "../../../utils/data";

export default function SneakersList(props) {

    return (
        <div className="flex flex-wrap">
            {
                shoes_data.filter(val => val.type === "shoes").map(val => <ItemCardBag {...val} />)
            }
        </div>
    )
}