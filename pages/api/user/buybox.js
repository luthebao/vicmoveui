import Cors from "micro-cors";
import { urls } from "../../../utils/config";
const cors = Cors()

export default cors(async function handler(req, res) {
    try {
        if (typeof req.headers.token === "undefined") {
            res.status(500).json({ message: "Invalid user" });
            return true
        }

        try {
            const fet_add = await fetch(urls.api + "/api/MarketbuyBox", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': req.headers.token,
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