/*
 * Summary: Creates rows and columns with grey boxes.
 */

var myTable = document.getElementById("myTable");

function makeRowsAndColumns() {
	for(var i = 1; i < 5; i++){

		var addRow = document.createElement("TR");
		console.log(addRow);

			for(var j = 0; j < 7; j++){
				var addCell = document.createElement("TD");
				addCell.setAttribute("id", i + "" + j );

				addRow.appendChild(addCell);
			}
		document.getElementById("myTable").appendChild(addRow);
	}
}
makeRowsAndColumns();