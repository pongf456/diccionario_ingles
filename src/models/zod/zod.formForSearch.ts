import z, { string } from 'zod'
const schemaForSearch = z.object({
    keyword: string({ required_error: "The input is required." }).min(2, "The input contain minimum 2 characters.").max(100, "The input has exceeded max characters.")
})
export type typeSchemaForSearch = z.infer<typeof schemaForSearch>
export default schemaForSearch
