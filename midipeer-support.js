//2016 Daniel Tsadok

var ReceivedSong; //received from peer

var sendSong = function(peerServer, thou) {
  var message = JSON.stringify(Song);
  sendMessage(peerServer, thou, message);
}
