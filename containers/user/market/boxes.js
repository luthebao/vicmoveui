import ItemCardBag from "../../../components/card/itembag";
import ItemCardMarket from "../../../components/card/market/itemmarket";


export default function BoxesListMarket(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCardMarket type="box" />
            <ItemCardMarket type="box" />
            <ItemCardMarket type="box" />
            <ItemCardMarket type="box" />
        </div>
    )
}