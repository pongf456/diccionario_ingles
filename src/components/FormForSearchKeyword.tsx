import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import schemaForSearch, { typeSchemaForSearch } from "../models/zod/zod.formForSearch"
import SearchBarForm from "./SearchBarForm"
import { AiOutlineSearch } from "react-icons/ai"

interface dataUtilitiesForForm {
    fn:(...args:any) => any
}
function FormForSearchKeyword(data:dataUtilitiesForForm) {
        const form = useForm<typeSchemaForSearch>({resolver:zodResolver(schemaForSearch)})
  return (
    <form onSubmit={form.handleSubmit((args) => {
        data.fn(args)
        form.reset()
    })} className="w-full h-min flex items-center justify-center">
        <div className="w-80 sm:w-96 h-11 flex bg-colorBackground1 shadow-md rounded-xl p-1">
            <SearchBarForm autoComplete="off" formData={form} className="flex items-center justify-center  w-[85%] h-full text-sm sm:text-base" placeholder="Search word for start."/> 
            <div className="w-[15%] h-full relative flex items-center justify-center">
                <button className="absolute right-0 bg-colorBackground3 p-2 rounded-full hover:bg-black hover:text-colorBackground1 duration-150">
                    <AiOutlineSearch/>
                </button>
            </div>
        </div>
    </form>
  )
}

export default FormForSearchKeyword