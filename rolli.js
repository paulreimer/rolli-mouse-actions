
function playerUpdate() {
	var oldPlayState = 0;
	var pState = iTunes.playState();
	if (pState != oldPlayState)
	{
		if (pState == 0 || pState == 2) {
			$('#infoBox').fadeTo(400, 0.4);
			$('#art').fadeTo(400, 0.4);
		}
		else {
			$('#infoBox').fadeTo(400, 1);
			$('#art').fadeTo(400, 1);
		}
		oldPlayState = pState;
	}
}

function trackUpdate(track){
		$('#title').html(track.property('title'));
			if ('title' == ""){
				$('#title').attr('');
			}		
		$('#artist').html(track.property('artist'));
			if ('artist' == ""){
				$('#artist').attr('');
			}
		$('#album').html(track.property('album'));
			if ('album' == ""){
				$('#album').attr('');
			}
}

function artworkUpdate(artURL){
		if (artURL == ""){
			$('#art').attr({ 
        		src: "defaultartwork.png"
        	});
		}
		else
		{
			$('#art').attr({ 
        		src: artURL
        	});
		}
}
