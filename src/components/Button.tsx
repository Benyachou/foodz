type props = {
	label: string
	onClick?: (e:any) => void
	theme:'btn'|"2nd"
	type:'button'|'submit'
}

const Button = ({label,onClick,type="button",theme="btn"}:props) => {
  return (
	  <button
		  onClick={(e) => onClick && onClick(e)}
		  data-modal-hide="defaultModal"
		  type={type}
		  className={theme}>
		  {label}
	  </button>
  )
}

export {Button}