'use strict';

import SES from '../../src/ses';

describe('ses', () => {

	const client = new SES(
		'3555F4IHMVXTSB0WUZFJQZQPJ',
		'qSAhf1HC39wmnz1/UVKvpwyfVWPywrqE9Te8CdwGGww',
		'https://email.us-west-2.amazonaws.com',
		{from: 'donotreply@aegaffiliate.com'});

	it.skip('should generate an email using the default address', (done) => {
		client.send('justin@adexchangegrp.com', 'Test Email', 'This is a test', done);
	});

	it.skip('should generate an email', (done) => {
		client.send('justin@adexchangegrp.com', 'Test Email', 'This is a test', {from: 'test@aegaffiliate.com'}, done);
	});

});