import ItemCard from "../../../components/card/item";


export default function BoxesList(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCard type="box" />
            <ItemCard type="box" />
            <ItemCard type="box" />
            <ItemCard type="box" />
            <ItemCard type="box" />
            <ItemCard type="box" />
            <ItemCard type="box" />
        </div>
    )
}