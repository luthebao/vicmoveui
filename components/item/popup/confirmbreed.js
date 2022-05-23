import { Backdrop, CircularProgress } from "@mui/material"
import { useState } from "react"
import { toast } from "react-toastify"
import ButtonDefault from "../../button/default"

const needVIM = [
    10,
    10,
    10,
    10,
    10,
    20,
    20,
    20,
    20,
    20,
    30,
    30,
    30,
    30,
    30,
    40,
    40,
    40,
    40,
    40,
    50,
    50,
    50,
    50,
    50,
    60,
    60,
    60,
    60,
    60,
    70,
    70,
    70,
    70,
    70,
    80,
    80,
    80,
    80,
    80,
    90,
    90,
    90,
    90,
    90,
    100,
    100,
    100,
    100,
    100,
]


const ConfirmBreedPopup = ({ onClose, itemid, session, onChild }) => {

    const [processing, setProcessing] = useState(false)

    const handleRepair = async () => {
        onChild(null)
        setProcessing(true)
        const fet_rp = await fetch("/api/user/item/breed", {
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
        if (res_rp.code === 1 && res_rp.data) {
            toast("Breed successful")
            onChild(res_rp.data)
        } else {
            toast(res_rp.message)
        }
        onClose()
        setProcessing(false)
    }

    return (
        <div className="flex flex-col text-center">
            <p className="py-5">Confirm to breed with this sneaker ?</p>
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

export default ConfirmBreedPopup