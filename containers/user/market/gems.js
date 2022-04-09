import ItemCardMarket from "../../../components/card/market/itemmarket";


export default function GemsListMarket(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCardMarket type="gem" />
            <ItemCardMarket type="gem" />
            <ItemCardMarket type="gem" />
            <ItemCardMarket type="gem" />
        </div>
    )
}