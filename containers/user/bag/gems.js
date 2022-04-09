import ItemCardBag from "../../../components/card/itembag";


export default function GemsList(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCardBag type="gem" />
            <ItemCardBag type="gem" />
            <ItemCardBag type="gem" />
            <ItemCardBag type="gem" />
            <ItemCardBag type="gem" />
            <ItemCardBag type="gem" />
        </div>
    )
}