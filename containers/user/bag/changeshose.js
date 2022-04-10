import ChangeShoseCard from "../../../components/card/changeshose";
import { shoes_data } from "../../../utils/data";

export default function ChangeShoseList(props) {

    return (
        <div className="flex flex-wrap">
            {
                shoes_data.filter(val => val.type === "shoes").map(val => <ChangeShoseCard {...val} />)
            }            
        </div>
    )
}