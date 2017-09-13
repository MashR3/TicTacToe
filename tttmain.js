
var winnCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];


var currentPlayer = 'X';

	$('.box').one('click', function (event){
		
		$(this).html(currentPlayer);
		checkWinner();

		if (currentPlayer === 'X') {

			$(this).addClass('cross');	
			currentPlayer = 'O';

		
		} else {
		
			$(this).addClass('nought');
			currentPlayer = 'X';

		}

		checkTie();
	
	});


function checkWinner () {
var $boxes = $('.box')

	for (var i = 0; i < winnCombos.length; i++ ) {
			var current = winnCombos[i];

		if ($boxes.eq(current[0]).html() === currentPlayer &&
			$boxes.eq(current[1]).html() === currentPlayer &&
			$boxes.eq(current[2]).html() === currentPlayer ||

			$boxes.eq(current[3]).html() === currentPlayer &&
			$boxes.eq(current[4]).html() === currentPlayer &&
			$boxes.eq(current[5]).html() === currentPlayer ||

			$boxes.eq(current[6]).html() === currentPlayer &&
			$boxes.eq(current[7]).html() === currentPlayer &&
			$boxes.eq(current[8]).html() === currentPlayer ||

			$boxes.eq(current[0]).html() === currentPlayer &&
			$boxes.eq(current[3]).html() === currentPlayer &&
			$boxes.eq(current[6]).html() === currentPlayer ||

			$boxes.eq(current[1]).html() === currentPlayer &&
			$boxes.eq(current[4]).html() === currentPlayer &&
			$boxes.eq(current[7]).html() === currentPlayer ||

			$boxes.eq(current[2]).html() === currentPlayer &&
			$boxes.eq(current[5]).html() === currentPlayer &&
			$boxes.eq(current[8]).html() === currentPlayer ||

			$boxes.eq(current[0]).html() === currentPlayer &&
			$boxes.eq(current[4]).html() === currentPlayer &&
			$boxes.eq(current[8]).html() === currentPlayer ||

			$boxes.eq(current[2]).html() === currentPlayer &&
			$boxes.eq(current[4]).html() === currentPlayer &&
			$boxes.eq(current[6]).html() === currentPlayer)

			 alert("You are the winner");

				// } else if (i = 8) {
				// 	alert("You have tied!!");
				// }

	    }
	}


function checkTie () {

	for (var i >= 8; i++ ) {

		if (i === true);
		alert('You have tied!!')
		}
	}







