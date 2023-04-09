import {Icon} from "./index";
import {useContext} from "react";
import RecettesGlobal from "../contexts/recettes.context";

type Props = {
    recette: any
}

const Card = ({recette}:Props) => {

    const global = useContext(RecettesGlobal);

    return(<div className="card" key={recette.id}>
        <div className={'flex justify-between'}>
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
                <Icon name={'edit'} onClick={() => {}} />
                <Icon name={'delete'} onClick={() => {}} />
            </div>
        </div>

        {/* ingredients */}
        <ul className='flex mt-2'>
            {recette.ingredients.map((id:number) => {
                const ingredientName = global.ingredients?.data.find((i:any) => i.id === id)?.name
                return (
                    <li key={id} className='label'>
                        {ingredientName}
                    </li>
                )
            })}
        </ul>
    </div>)
}

export {Card}