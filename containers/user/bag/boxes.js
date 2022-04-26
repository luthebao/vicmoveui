import { useEffect } from "react";
import BoxCardBag from "../../../components/card/bag/box";
import { useAppContext } from "../../../utils/store";


export default function BoxesList({ accid }) {

    const { acc_boxes } = useAppContext()
    const [getBoxes, boxes] = acc_boxes

    useEffect(() => {
        if (boxes && boxes.data) {
            boxes.refetch({
                variables: {
                    "accountdetailId": accid,
                }
            })
        } else {
            getBoxes({
                variables: {
                    "accountdetailId": accid,
                }
            })
        }
    }, [accid])

    return (
        <div className="flex flex-wrap">
            {
                boxes && boxes.data && boxes.data.boxs.map(val => <BoxCardBag {...val} />)
            }
        </div>
    )
}