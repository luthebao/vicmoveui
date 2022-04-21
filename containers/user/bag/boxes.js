import BoxCardBag from "../../../components/card/bag/box";
import ItemCardBag from "../../../components/card/itembag";
import { shoes_data } from "../../../utils/data";


export default function BoxesList({ data }) {

    return (
        <div className="flex flex-wrap">
            {
                data.map(val => <BoxCardBag {...val} />)
            }
        </div>
    )
}