import { Backdrop, CircularProgress } from "@mui/material"
import { useState } from "react"
import { toast } from "react-toastify"
import ButtonDefault from "../../button/default"


const RepairComfort = ({ onClose, itemid, session }) => {

    const [processing, setProcessing] = useState(false)

    const handleRepair = async () => {
        setProcessing(true)
        const fet_rp = await fetch("/api/user/item/rp-comfort", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': session.token,
            },
            method: "POST",
            body: JSON.stringify({
                id: itemid
            })
        })

        const res_rp = await fet_rp.json()
        if (res_rp.code === 1) {
            toast("Repair successful")
        } else {
            toast(res_rp.message)
        }
        onClose()
        setProcessing(false)
    }

    return (
        <div className="flex flex-col text-center">
            <p className="py-5">Are you sure to repair 30 Comfort with 20 VIM ?</p>
            <div className="flex justify-evenly">
                <ButtonDefault className='bg-primary h-12' size='md' callback={handleRepair}>Confirm</ButtonDefault>
                <ButtonDefault className='bg-vicm-red-100 h-12' size='md' callback={onClose}>Cancel</ButtonDefault>
            </div>
            <Backdrop open={processing}>
                <div className='flex justify-center m-auto flex flex-col'>
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
        </div>
    )
}

export default RepairComfort