import { wordMeaning } from "../models/config/config.interfaces"
import {motion} from 'framer-motion'
function MeaningComplete(data:wordMeaning) {
  return (
    <motion.div initial={{x:20, opacity:0}} whileInView={{x:0,opacity:1}} className="w-full px-4 my-4">
        <span className="font-Rubik font-medium text-base text-colorBackground5">{data.partOfSpeech.toLocaleUpperCase()}</span>
        <ul className="list-decimal list-inside marker:text-colorBackground5">
        {data.definitions.map((definition,index) => (

                <li className="my-4" key={index}>
                    {definition.definition}
                </li>

        ))}
        </ul>
    </motion.div>
  )
}

export default MeaningComplete