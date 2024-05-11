import axios from "axios"
import { wordDefinition } from "../config/config.interfaces"

async function searchApiWord (text:string) :Promise<wordDefinition[]> {
    console.log(text)
    const data = await axios.get(import.meta.env.VITE_ENV_URL + `/${text}`,)
    return data.data
}
export default searchApiWord