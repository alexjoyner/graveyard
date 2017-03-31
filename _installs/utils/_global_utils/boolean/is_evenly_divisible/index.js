/*
* Function takes two numbers as input and finds if the first number given is evenly divisible by the second
* number
*
* RETURN TYPE: Boolean*/

export function is_evenly_divisible(num1, num2) {
	if(num1 === 0 || num2 == 0){
		return false
	}
	return (num1 % num2) === 0;
}
