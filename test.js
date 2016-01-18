import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isWebm from './';

test('should detect WEBM from buffer', function (t) {
	readChunk(path.join(__dirname, 'fixture.webm'), 0, 4, function (err, buf) {
		t.is(err, null);
		t.is(isWebm(buf), true);
	});
});

test('should not detect WEBM on a non-WEBM file', function (t) {
	readChunk(path.join(__dirname, 'fixture.jpg'), 0, 4, function (err, buf) {
		t.is(err, null);
		t.is(isWebm(buf), false);
	});
});
