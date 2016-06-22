// Supporting functions for PeerJS Demo
// 2016 Daniel Tsadok

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
