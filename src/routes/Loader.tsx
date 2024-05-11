import { AiOutlineLoading3Quarters } from "react-icons/ai"
function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="text-2xl animate-spin"/>
    </div>
  )
}

export default Loader