'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 26 &&
		buf[1] === 69 &&
		buf[2] === 223 &&
		buf[3] === 163;
};
