import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { UseFormReturn } from "react-hook-form"
import { typeSchemaForSearch } from "../models/zod/zod.formForSearch"
import { CgClose } from "react-icons/cg"
interface dataToReciveSearchText extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    formData:UseFormReturn<typeSchemaForSearch>
}
function SearchBarForm(data:dataToReciveSearchText) {
    const {formData,...dataToPasteInInput} = data
    const watchFormKeyword = formData.watch('keyword')
  return (
    <div className={`${dataToPasteInInput.className} relative`}>
        {
          formData.formState.errors.keyword && (
            <span className="absolute -top-2 left-1 font-Monserrat text-xs sm:text-sm text-colorBackground5 truncate max-w-full">{formData.formState.errors.keyword.message}</span>
          )
        }
        <input  type="text" {...dataToPasteInInput} {...formData.register('keyword')} className="w-[90%] px-1 bg-transparent font-Rubik outline-none autofill:bg-transparent text-colorTheme1/95" />
        {
          watchFormKeyword && (
            <CgClose className="w-[10%] text-base cursor-pointer" onClick={() => formData.resetField('keyword')}/>
          )
        }
    </div>
  )
}

export default SearchBarForm