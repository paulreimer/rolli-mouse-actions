function progressUpdate()
{
  var currentPosition = Player.playerPosition();
  var position = (currentPosition / currentTrackLength);
  $('#progressBar').width($('#infoBox').width()*position);
}
function playerUpdate()
{
  var oldPlayState = 0;
  var pState = iTunes.playState();
  if (pState != oldPlayState)
  {
    if (pState == 0 || pState == 2)
    {
      $('#infoBox').fadeTo(400, 0.4);
      $('#art').fadeTo(400, 0.4);
    }
    else {
      $('#infoBox').fadeTo(400, 1);
      $('#art').fadeTo(400, 1);
    }
    oldPlayState = pState;
  }
  //progressUpdate();
}

function trackUpdate(track)
{
  $('#title'  ).html(track.property('title')  || '');
  $('#artist' ).html(track.property('artist') || '');
  $('#album'  ).html(track.property('album')  || '');
}

function artworkUpdate(artURL)
{
  artURL = artURL || 'defaultartwork.png';
  $('#art').attr({ src: artURL });
}

function ready()
{}

