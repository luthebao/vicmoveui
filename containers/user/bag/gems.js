import ItemCard from "../../../components/card/item";


export default function GemsList(props) {

    return (
        <div className="flex flex-wrap">
            <ItemCard type="gem" />
            <ItemCard type="gem" />
            <ItemCard type="gem" />
            <ItemCard type="gem" />
            <ItemCard type="gem" />
            <ItemCard type="gem" />
            <ItemCard type="gem" />
        </div>
    )
}