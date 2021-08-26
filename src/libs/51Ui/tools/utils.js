
export const formatTime=t=>{
	let date=new Date(t)
	let year=date.getFullYear()
	let month=date.getMonth()
	let day=date.getDate()
	return {year,month,day}
}
