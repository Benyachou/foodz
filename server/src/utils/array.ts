export function StringToArrayInt(value:any) {
	return String(value).split(',').map((id) => parseInt(id));
}