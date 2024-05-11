
import { Typewriter } from 'react-simple-typewriter'
import FormForSearchKeyword from '../components/FormForSearchKeyword'
import ImageHandleLoad from '../components/ImageHandleLoad'
import { useMutation } from '@tanstack/react-query'
import { typeSchemaForSearch } from '../models/zod/zod.formForSearch'
import searchApiWord from '../models/api/api.searchWord'
import { AiOutlineLoading } from 'react-icons/ai'
import WordDefinition from '../components/WordDefinition'
import { Helmet } from "react-helmet";
function Acces() {
    const mutator = useMutation({
        mutationKey: ["fetchApiWordExample"],
        mutationFn: (data: typeSchemaForSearch) => searchApiWord(data.keyword)
    })
    return (
        <div className="w-full h-full flex flex-col sm:flex-row-reverse">
            <Helmet>
                <title>Dictionary - Yeiderson</title>
                <meta name="description" content='Search and explore the definitions of the English dictionary'/>
                <meta name="keywords" content='Search,Explore,Education' />
                <meta name="author" content="Yeiderson" />
                <link rel="canonical" href={location.href}/>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Dictionary - Yeiderson" />
                <meta property="og:description" content='Search and explore the definitions of the English dictionary' />
                <meta property="og:image" content={`${location.href}/backgroundScreen.jpg`} />
                <meta property="og:url" content={location.href} />
            </Helmet>
            <div className='w-full h-[25%] sm:w-1/2 sm:h-full shadow-md'>
                <ImageHandleLoad src='backgroundScreen.jpg' alt='back' className=' w-full h-full object-cover' />
            </div>
            <div className='w-full h-[75%] sm:w-1/2 sm:h-full bg-colorTheme4 relative'>
                <div className='w-full h-[25%]'>
                    <div className='py-2'>
                        <h1 className='text-center font-Monserrat font-semibold text-xl text-colorBackground5'>Dictionary</h1>
                        <span className='text-center w-full inline-block font-Rubik text-colorBackground5/80'>Search word from English language <a href="https://pongfzt.netlify.app/" className='text-colorBackground3 cursor-pointer'><Typewriter words={["fast", "simple", "easy", "effective"]} loop={true} cursor={true} /></a></span>
                    </div>
                    <FormForSearchKeyword fn={mutator.mutate} />
                </div>
                <div className='w-full h-[70%] flex items-center justify-center select-none'>
                    {
                        !mutator.data && mutator.isError && (
                            <div className='font-Monserrat text-colorBackground5'>Word not found. <span className='underline underline-offset-8 decoration-wavy decoration-red-800'>Try other</span></div>
                        )
                    }
                    {mutator.isPending && (
                        <div className='animate-spin text-colorBackground3 text-4xl font-bold'><AiOutlineLoading /></div>
                    )}
                    {
                        mutator.data && (
                            <div className='w-full h-full flex flex-wrap justify-center overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-colorTheme1 ' >
                                {mutator.data.map((wordValue, key) => (<WordDefinition {...wordValue} key={key} />))}
                            </div>
                        )
                    }
                </div>
                <div className='w-full h-[5%] absolute bottom-0 left-0 text-center'>
                    <span className=' p-2 font-Rubik text-colorBackground5 text-sm sm:text-base'>
                        Project carried out by Yeiderson Sequera 2024.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Acces