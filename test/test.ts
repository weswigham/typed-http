import * as http from "../index";

////////////////////////////////////////////////////
/// Http tests : http://nodejs.org/api/http.html
////////////////////////////////////////////////////
module http_tests {
    // Status codes
    var code = 100;
    var codeMessage = http.STATUS_CODES['400'];
    var codeMessage = http.STATUS_CODES[400];

	var agent: http.Agent = new http.Agent({
		keepAlive: true,
		keepAliveMsecs: 10000,
		maxSockets: Infinity,
		maxFreeSockets: 256
	});

	var agent: http.Agent = http.globalAgent;
}