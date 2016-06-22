// Supporting functions for PeerJS Demo
// 2016 Daniel Tsadok

//Get random n-digit number for peer ID
var generatePeerId = function(digits) {
  if (!digits) digits = 8;
  var mod = Math.pow(10, digits);

  var millis = new Date().getTime(); //# of ms since 1/1/70
  return parseInt(Math.random() * millis) % mod;
}

var showPeers = function(peerServer, peerList) {
  //server must have --allow_discovery
  peerServer.listAllPeers(function(others) {

    peerList.innerHTML = "<option></option>";

    for (var i in others) {
      if (others[i] == peerServer.id) continue;
      peerList.innerHTML += "<option>"+ others[i] +"</option>";
    }
  });
}

var sendMessage = function(peerServer, thou, message) {
  var conn = peerServer.connect(thou);

  conn.on('open', function(){
    conn.send(message);
  });
}
