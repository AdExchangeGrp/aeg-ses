'use strict';

import SES from '../../src/ses';

describe('ses', () => {

	const client = new SES(
		'AKIAIWAAO6JEYTRO2OJQ',
		'QTj4zCeoomDpr9oHTYqai/XFJDEfT5PIRkTh6rSz',
		'https://email.us-west-2.amazonaws.com',
		{from: 'donotreply@aegaffiliate.com'});

	it('should generate an email using the default address', (done) => {
		client.send('justin@adexchangegrp.com', 'Test Email', 'This is a test', done);
	});

	it('should generate an email', (done) => {
		client.send('justin@adexchangegrp.com', 'Test Email', 'This is a test', {from: 'test@aegaffiliate.com'}, done);
	});

});