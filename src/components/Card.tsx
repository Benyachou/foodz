import {Icon} from "./index";
import {useAtom} from "jotai";
import {global} from "../store";
import {AnimatePresence, motion} from "framer-motion";

type Props = {
    recette: {
        id: number
        name: string
        calories: number
        ingredients: number[]
    }
    onClickUpdate?: () => void
    onClickDelete?: () => void
    index?:number
}

const Card = ({recette,onClickUpdate,onClickDelete,index=1}:Props) => {

    const [Global] = useAtom(global)

    return(
        <AnimatePresence>
            <motion.div
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{
                    delay:0.1 + index * 0.1,
                    duration:0.2
                }}
                className="card"
                key={recette.id}>
                <a
                    href={'/recettes/' + recette.id}
                    className={'flex justify-between'}>
                    <div className='flex items-center'>
                        {/* name */}
                        <h2 className="h2">{recette.name}</h2>

                        {/* calories */}
                        <ul className='flex items-center ml-2'>
                            {Array(recette.calories).fill(0).map((_, index) => (
                                <li key={index} className='rounded-full shadow p-2 ml-1'>
                                    <Icon name={'star'} className={'text-yellow-500'} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={'flex'}>
                        <Icon name={'edit'} onClick={() => onClickUpdate && onClickUpdate()} />
                        <Icon name={'delete'} className={'ml-2'} onClick={() => onClickDelete && onClickDelete()} />
                    </div>
                </a>

                {/* ingredients */}
                <ul className='flex mt-2'>
                    {recette.ingredients.map((id:number) => {
                        const ingredientName = Global.ingredients.find((i:any) => i.id === id)?.name
                        return (
                            <li key={id} className='label'>
                                {ingredientName}
                            </li>
                        )
                    })}
                </ul>
            </motion.div>
        </AnimatePresence>
       )
}

export {Card}