import { useEffect } from "react";
import SneakerCardBag from "../../../components/card/bag/sneaker";
import { useAppContext } from "../../../utils/store";

export default function SneakersList({ accid }) {

    const { acc_sneakers } = useAppContext()
    const [getSneakers, sneakers] = acc_sneakers

    useEffect(() => {
        if (sneakers && sneakers.data) {
            sneakers.refetch({
                variables: {
                    "accountdetailId": accid,
                }
            })
        } else {
            getSneakers({
                variables: {
                    "accountdetailId": accid,
                }
            })
        }
    }, [accid])

    return (
        <div className="flex flex-wrap">
            {
                sneakers && sneakers.data && sneakers.data.sneakers.map(val => <SneakerCardBag {...val} />)
            }
        </div>
    )
}