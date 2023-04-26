import {FormEvent, useState} from "react";
import {AnimatePresence,motion} from "framer-motion";

type Props = {
	children: JSX.Element | JSX.Element[]
	title:string
	buttonValidate:string
	buttonCancel:string,
	validateAction?: (e:any) => void
	open: boolean
	setOpen: (open:boolean) => void
}

const Modal = (
	{
		children,
		title,
		buttonValidate,
		buttonCancel,
		validateAction,
		open,
		setOpen
	}: Props) => {

	return (
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{opacity:0, y:10}}
						animate={{opacity:1, y:0}}
						exit={{opacity:0, y:10}}
						transition={{duration:0.2}}
						/*onClick={() => setOpen(false)}*/
						className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
						style={{background: 'rgba(130,130,130,0.15)'}}
					>
						<div className="relative w-full h-full max-w-2xl md:h-auto">

							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

								<form onSubmit={(e) => {
									e.preventDefault()
									validateAction && validateAction(e)
									setOpen(false)
								}}>

									<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
										<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
											{title}
										</h3>
										<button
											onClick={() => setOpen(false)}
											type="button"
											className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
											<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>

									<div className="p-6 space-y-6">
										{children}
									</div>

									<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
										<button data-modal-hide="defaultModal" type="submit" className="btn">{buttonValidate}</button>
										<button data-modal-hide="defaultModal" type="button" className="btn-2nd"  onClick={() => setOpen(false)}>{buttonCancel}</button>
									</div>
								</form>

							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
	)
}

export {Modal}