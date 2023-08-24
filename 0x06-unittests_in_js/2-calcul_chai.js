function calculateNumber(type, a, b){
    let x = Math.round(a);
    let y = Math.round(b);
    
    if (type === "SUM"){
	return x + y
    } else if (type === "SUBTRACT"){
	return x - y
    } else if (type === "DIVIDE"){
	if (y === 0){
	    return "Error";
	}
	let div = x / y;

	return div;
    }
}

module.exports = calculateNumber;
