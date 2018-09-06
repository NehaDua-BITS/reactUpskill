export function setName(name)
{
	/*
	return dispatch => {
		setTimeout(() =>
		{
			dispatch({
				type: "SET_NAME",
				payload: name
			});
		}, 2000); 
	}
	*/
	
	//sometimes instead of timeout they use promise for async actions
	return {
		type: "SET_NAME",
		payload: new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve(name);								
			    }, 2000);
			}
		)
	};
	
}

export function setAge(age)
{
	return {
		type: "SET_AGE",
		payload: age
	};
}