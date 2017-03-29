function breadthChecker(passedBreadthType){
	var arrayToReturn = [];
	for(var i=0; i<currentStudent.coursesEnrolled.length; i++){
		var courseToFind = currentStudent.coursesEnrolled[i];
		var courseToCheck = coursedatabase.courseToFind;
		if(courseToCheck.breadth==passedBreadthType){
			arrayToReturn.push(courseToCheck);
		}
	} 
	return arrayToReturn;
}

var currentStudent = studentdatabase[0];
var breadthCArray = breadthChecker("C");
for(var i=0; i<breadthCArray.length; i++){
	document.write(breadthCArray[i]);
}
