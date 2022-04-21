import SneakerCardBag from "../../../components/card/bag/sneaker";

export default function SneakersList({ data }) {

    return (
        <div className="flex flex-wrap">
            {
                data.map(val => <SneakerCardBag {...val} />)
            }
        </div>
    )
}