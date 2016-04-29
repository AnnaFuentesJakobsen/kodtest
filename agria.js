
var myTable = document.getElementById("myTable");


function makeRowsAndColumns() {
	for(var i = 1; i < 5; i++){

		var addRow = document.createElement("TR");
		console.log(addRow);

			for(var j = 0; j < 7; j++){
				var addCell = document.createElement("TD");
				addCell.setAttribute("id", i + "" + j );
				addCell.addEventListener("click", setColor);

				addRow.appendChild(addCell);


			}

		document.getElementById("myTable").appendChild(addRow);
	}

}
makeRowsAndColumns();

function setColor(id){
	//console.log(this.id);

	for(var i = 0; i < rows.length; i++){

	var rows = document.getElementsByTagName("TD");
		rows.style.color = "grey";
	}
}