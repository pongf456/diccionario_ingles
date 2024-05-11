import { useAnimate } from "framer-motion"
import { ImgHTMLAttributes } from "react"
import { AiOutlineInstagram } from "react-icons/ai"

function ImageHandleLoad(data:ImgHTMLAttributes<HTMLImageElement>) {
  const [destination,animate] = useAnimate<HTMLDivElement>()
  return (
    <div className="w-full h-full relative">
      <div ref={destination} className="w-full h-full absolute top-0 left-0 bg-colorBackground1 flex items-center justify-center z-10">
      <AiOutlineInstagram className="text-colorBackground5 text-2xl"/>
      </div>
      <img onLoad={() => animate(destination.current,{opacity:0},{duration:1})}   {...data} />
    </div>
  )
}

export default ImageHandleLoad