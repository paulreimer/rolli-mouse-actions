var clickCount = 0;
var clickWait = 400;
var timer;

function coverClick()
{
	clickCount++;
	clearTimeout(timer);

	if (clickCount == 3) coverAction()
	else timer = setTimeout("coverAction()", clickWait);
}

function coverAction()
{
  switch (clickCount)
  {
    case 1:
      iTunes.playPause();
      break;
    case 2:
      iTunes.nextTrack();
      break;
    case 3:
      iTunes.previousTrack();
      break;
  }
	
	clickCount = 0;
}

function coverDrag()
{
	clearTimeout(timer);
  var position = 1.0 - (event.offsetY / $(this).height());
  Player.setVolume(position*100)
}

function progressDrag()
{
	clearTimeout(timer);
  var position = event.offsetX / $(this).width();
  Player.setPlayerPosition(currentTrackLength*position)
}

