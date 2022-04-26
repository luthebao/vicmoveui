import Cors from "micro-cors";
import { apis, urls } from "../../../utils/config";
const cors = Cors()

export default cors(async function handler(req, res) {
    try {
        try {
            const fet_add = await fetch(apis.account_sign_up, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(req.body)
            })
            const result = await fet_add.json()
            res.status(200).json(result)
        } catch {
            res.status(500).json({ message: "Server error" });
        }
        
    } catch (error) {
        res.status(500).json({ message: "Server under maintenance!" });
    }
})