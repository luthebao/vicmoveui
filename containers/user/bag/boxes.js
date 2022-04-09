import ItemCardBag from "../../../components/card/itembag";


export default function BoxesList(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCardBag type="box" />
            <ItemCardBag type="box" />
            <ItemCardBag type="box" />
            <ItemCardBag type="box" />
            <ItemCardBag type="box" />
        </div>
    )
}