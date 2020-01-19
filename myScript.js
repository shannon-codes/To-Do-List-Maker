<script>
    	window.addEventListener("DOMContentLoaded", function(){

		var myData = {} ; //object myData to store user input field data on local storage
		var count=0; // count for array index
		var array = []; //creating array of tasks in myData object


		//get assets for first click button
		var enterButton=document.getElementById("enter");
		var outputHeaderArea = document.getElementById("tasks");
 		var nameField=document.getElementById("name");
		var dateField=document.getElementById("date");
		var myTaskForm=document.getElementById("myListForm");
		var categoryField;


		//get assets for second click button event
        var button=document.getElementById("button");
		var taskField=document.getElementById("toDoList");
		var listOutputArea=document.getElementById("listOutputArea");
		var resetButton=document.getElementById("reset");

		//on load (refresh) display saved from local storage

		if(localStorage && localStorage.myData){
			myData=JSON.parse(localStorage.myData);
			outputHeaderArea.innerHTML= "Tasks for "+myData.name +"<br>"+" Today "+ myData.date+":<br>"+myData.category;
			myTaskForm.style.display="inline-block";
			if (myData.task){
				for (var i = 0; i < myData.task.length; i++) {
					listOutputArea.innerHTML+="<li>"+myData.task[i]+"</li>";
				}
			}
		}

		//First Event Listener: clicked first button
		enterButton.addEventListener("click", function(e){
			//get category value by looping through radio buttons
			for(x=0; x<document.userDataForm.category.length;x++){
				if (document.userDataForm.category[x].checked){
					 categoryField=document.userDataForm.category[x].value;
				}
			}
			//create object on local storage for JSON
			myData ={
			name: nameField.value,
			date: dateField.value,
			category: categoryField
			};

			//stringify if user input their name and date
		if (localStorage){
		localStorage.myData=JSON.stringify(myData);
		}

		//output personalized header from user's input
		outputHeaderArea.innerHTML= "Tasks for "+ nameField.value +" Today "+ dateField.value +":<br>"+categoryField;
		myTaskForm.style.display="inline-block";
		e.preventDefault();

		console.log(myData);

	}); // end of first event

	//Second Event Listener task button
		button.addEventListener("click", function(e){
			array[count]= taskField.value;
			myData.task = array;
			count++;
			//save to local storage all tasks submitted
			if (localStorage){
			localStorage.myData=JSON.stringify(myData);
			console.log(localStorage.myData)
			}
			//data validation and output bullet list
		 	if (taskField.value==''){
		 		alert("Field cannot be empty");
		 	} else {
			 	listOutputArea.innerHTML+="<li>"+taskField.value+"</li>";
				taskField.value="";
		 	}
		 	e.preventDefault();
	 	}); // end of second event

			//third Event Listener task button
	 		resetButton.addEventListener("click", function(){
				localStorage.clear();
				location.reload();
			}); // end of third event

 	}); // end of DOMContentLoaded


     </script>