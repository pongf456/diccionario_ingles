import { Link, useParams } from "react-router-dom"
import ImageHandleLoad from "../components/ImageHandleLoad"
import { useQuery } from "@tanstack/react-query"
import searchApiWord from "../models/api/api.searchWord"
import { AiOutlineHome, AiOutlineLoading } from "react-icons/ai"
import MeaningComplete from "../components/MeaningComplete"
import { motion, useScroll } from 'framer-motion'
import { useRef } from "react"
import { Helmet } from "react-helmet"
function Description() {
    const { word } = useParams()
    const query = useQuery({
        queryKey: [word],
        queryFn: () => searchApiWord(word ?? '')
    })
    const refScrollContainer = useRef<HTMLDivElement>(null)
    const scroll = useScroll({ container: refScrollContainer })
    const link = `https://source.unsplash.com/random/?` + word
    return (
        <div ref={refScrollContainer} className="w-full h-full bg-colorTheme4 overflow-auto scrollbar scrollbar-w-0 flex flex-col items-center select-none">
            <Link to="/" className="absolute z-50 bg-colorBackground5 text-colorBackground1 left-2 top-2 p-2 text-2xl rounded-full"><AiOutlineHome/></Link>
            <Helmet>
                <title>{word}</title>
                <meta name="description" content={`${word} Discover the meaning of the word and its applications in the English language `} />
                <meta name="keywords" content={`${word}`} />
                <meta name="author" content="Yeiderson" />
                <link rel="canonical" href={location.href} />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={word} />
                <meta property="og:description" content={`${word} Discover the meaning of the word and its applications in the English language `}  />
                <meta property="og:image" content={link}/>
                <meta property="og:url" content={location.href} />
            </Helmet>
            <motion.div className=" h-1 w-full bg-colorBackground3 absolute top-0 left-0 z-30" style={{ scaleX: scroll.scrollYProgress, transformOrigin: "0%" }} />
            <div className="w-full sm:w-[40%] sm:h-52 sm:my-4 h-40 shadow-md flex">
                <ImageHandleLoad src={link} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-max flex items-center justify-center">
                {query.isLoading && (
                    <div className="flex flex-col items-center justify-center">
                        <AiOutlineLoading className="animate-spin text-3xl m-2" />
                        <span className="font-Monserrat">cargando</span>
                    </div>
                )}
                {!query.data && !query.isLoading && (
                    <span className="font-Monserrat">No se han encontrado resultados.</span>
                )}
                {
                    query.data && (
                        <div className="w-full h-max sm:w-[40%] flex flex-wrap justify-center">
                            {query.data.map((data, globalMapIndex) => (

                                <div key={globalMapIndex} className="w-[95%] h-max bg-colorBackground1 my-4 shadow-md flex flex-wrap justify-center overflow-x-hidden rounded-md">
                                    <motion.h1 initial={{ scale: 1 }} whileInView={{ scale: 1.2 }} className="text-center w-full font-Monserrat font-semibold text-colorBackground5 p-4">{data.word.toLocaleUpperCase()}</motion.h1>
                                    <span className="font-Rubik px-4 text-sm">{data.phonetics.map((phonetic) => phonetic.text).join(" - ")}</span>
                                    {data.meanings.map((meaning, index) => <MeaningComplete key={index} {...meaning} />)}
                                    <a href={data.license.url} className="font-semibold text-colorBackground5 ">{data.license.name}</a>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Description