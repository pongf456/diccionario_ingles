import { useMemo } from "react"
import { wordDefinition } from "../models/config/config.interfaces"
import ImageHandleLoad from "./ImageHandleLoad"
import { Link } from "react-router-dom"
import { AiOutlineShareAlt, AiOutlineSound } from "react-icons/ai"
import { useAnimate } from "framer-motion"


function WordDefinition(data:wordDefinition) {
    const url = useMemo(()=> 'https://source.unsplash.com/random/900×70' + Math.round(Math.random() * 10) + "/?" + data.word ,[data.word])
    console.log(data)
    const audioPronunciatie = useMemo(()=> {
        const filterPhonetics = data.phonetics.filter((phonetic) => phonetic.audio.length != 0)
        if(filterPhonetics[0]) {
            return new Audio(filterPhonetics[0].audio)
        }
    },[data.phonetics])
    const play = async () => {
        try {
             await audioPronunciatie?.play()
             console.log("sound played.")
        }
        catch (err) {
            console.log(err)
            console.log("Error to play sound")
        }
    }
    const [targetToAnimate,animate] = useAnimate<HTMLDivElement>()
    const startAnimationShare = async () => {
        animate(targetToAnimate.current,{scaleX:1},{async onComplete() {
            await navigator.share({
                title:data.word,
                text:`Know the meaning of ${data.word} on this page`,
                url:`${location.origin}/${data.word}`
            },)
            stopAnimationShare()
       }})
    }
    const stopAnimationShare = async () => {
        animate(targetToAnimate.current,{scaleX:0})
    }
    return (
    <div className="w-80 sm:w-96 h-44 shadow-md relative my-8  bg-colorBackground1 rounded-sm flex">
        <div ref={targetToAnimate} style={{transformOrigin:"0%"}} className="w-full cursor-pointer scale-x-0  duration-150 h-1 bg-colorBackground5 absolute top-0 right-0"/>
        <AiOutlineShareAlt onPointerDown={startAnimationShare} onPointerUp={stopAnimationShare} className="absolute right-2 top-2"/>
        <div className="w-[30%] h-full">
            <ImageHandleLoad src={url} className="w-full h-full object-cover opacity-80"/>
        </div>
        <div className="w-[70%] h-full">
            <div className="w-full h-[85%]">
                <h1 className="text-center font-Monserrat font-semibold text-colorBackground5 p-1 ">{data.word}</h1>
                <div className="w-full flex">
                    <h2 className="font-Monserrat text-xs px-4 max-w-[80%] truncate">{data.phonetics.map((phonetic)=> phonetic.text).join(" - ")}</h2>
                    {audioPronunciatie && (<AiOutlineSound className="text-colorBackground5 cursor-pointer" onClick={play}/>)}
                </div>
                <div className="p-2 w-full">
                    <p className="font-Rubik text-xs line-clamp-5 px-1 bg-colorTheme4/40 rounded-sm">
                        {data.meanings.map((meaning) => `${meaning.partOfSpeech.toUpperCase()}: ` + meaning.definitions.map((definition) => definition.definition)).join(" ")}
                    </p>
                </div>
            </div>
            <div className="w-full h-[15%] relative">
                <a href={data.sourceUrls[0]} className="font-Rubik shadow-sm bg-colorBackground3 mx-1 text-sm p-0.5 rounded-sm font-semibold px-1 text-colorBackground1">source</a>
                <a href={data.license.url} className="font-Rubik shadow-sm bg-colorTheme1 mx-1 text-sm p-0.5 rounded-sm font-semibold px-1 text-colorBackground1">license</a>
                <Link to={`/${data.word}`} className="absolute right-2 font-Monserrat text-xs text-colorTheme1 font-semibold bottom-1">view more</Link>
            </div>
        </div>
    </div>
  )
}

export default WordDefinition