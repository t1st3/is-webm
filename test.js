import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isWebm from '.';

test('should detect WEBM from buffer', t => {
	t.is(isWebm(readChunk.sync(path.join(__dirname, 'fixture.webm'), 0, 4)), true);
});

test('should not detect WEBM on a non-WEBM file', t => {
	t.is(isWebm(readChunk.sync(path.join(__dirname, 'fixture.jpg'), 0, 4)), false);
});
