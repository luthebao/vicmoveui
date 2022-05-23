import { useAppContext } from "../../../utils/store"
import { useEffect } from "react";
import { useSession } from "next-auth/react"
import BreadSneakerCard from "../../../components/card/breedsneaker";


export default function BreedSneakerList(props) {
    const { data: session } = useSession()
    const { acc_sneakers } = useAppContext()
    const [getSneakers, sneakers] = acc_sneakers

    useEffect(() => {
        if (session)
            if (sneakers && sneakers.data) {
                sneakers.refetch({
                    variables: {
                        "accountdetailId": session.id,
                    }
                })
            } else {
                getSneakers({
                    variables: {
                        "accountdetailId": session.id,
                    }
                })
            }
    }, [session])

    return (
        <div className="flex flex-wrap">
            {
                sneakers && sneakers.data && sneakers.data.sneakers.map(val => <BreadSneakerCard {...val} />)
            }
        </div>
    )
}