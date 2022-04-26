import ChangeShoseCard from "../../../components/card/changeshose"
import { useAppContext } from "../../../utils/store"
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react"


export default function ChangeShoseList(props) {
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
                sneakers && sneakers.data && sneakers.data.sneakers.map(val => <ChangeShoseCard {...val} />)
            }
        </div>
    )
}