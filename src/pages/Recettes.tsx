import {useState} from "react";
import {useRecettes} from "../hooks/apiHook";
import {Loading, Modal} from "../components";
import {Card} from "../components/Card";
import {SearchBar} from "../partials/SearchBar";
import {AnimatePresence, motion} from "framer-motion";

const Recettes = () => {

	const [deleteModal, setDeleteModal] = useState<boolean>(false)
	const [deleteId, setDeleteId] = useState<number|null>(null);
	const [viewId, setViewId] = useState<number|null>(null);
	const [search, setSearch] = useState({});

	const {fetchGetRecette,fetchDeleteRecette} = useRecettes()
	const deleteRecette = fetchDeleteRecette()
	const recettes = fetchGetRecette(search)

	return (
		<div className='container'>

			<Modal
				open={deleteModal}
				setOpen={setDeleteModal}
				title="Supprimer une recette"
				buttonValidate="Supprimer"
				buttonCancel="Annuler"
				validateAction={async(e) => deleteId && deleteRecette.mutate(deleteId)}
			>
				<p>Supprimer la recette {recettes.data?.find(s => s.id === deleteId)?.name} ?</p>
			</Modal>

			<SearchBar
				setSearch={setSearch}
				search={search} />

			<div className={'flex'}>
				<div className={viewId ?'w-1/3':'w-full'}>
					{recettes.isLoading ?
						<Loading />
						:
						<>
							{recettes.data?.map((recette:any,index:number) =>
								<Card
									className={viewId === recette.id ? 'border-2 border-white' : ''}
									key={recette.id}
									index={index}
									recette={recette}
									onClickDelete={() => {
										setDeleteId(recette.id)
										setDeleteModal(true)
									}}
									onClickView={() => setViewId(recette.id)}
									/*onClickUpdate={() => {setAddModal(true)}}*/
								/>
							)}
						</>
					}
				</div>
				{viewId && (
					<AnimatePresence>
						<motion.div
							initial={{opacity:0, y:10}}
							animate={{opacity:1, y:0}}
							transition={{
								duration:0.2
							}}
							className={'w-2/3 border-2 border-white h-full bg-gray-100 dark:bg-gray-600 dark:text-white shadow-lg rounded-lg overflow-hidden m-2 w-full p-4 transition-all duration-500'}>
							<h2>{recettes.data?.find(s => s.id === viewId)?.name}</h2>
							<p
								className={'whitespace-pre-line mt-4'}
								dangerouslySetInnerHTML={{
								__html: recettes.data?.find(s => s.id === viewId)?.recette ?? ''
							}}/>
						</motion.div>
					</AnimatePresence>
				)}
			</div>


		</div>
	)
}


export {Recettes}