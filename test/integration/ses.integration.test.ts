import SES from '../../src/index';

describe('ses', async () => {

	const client = new SES(
		'AKIAIWAAO6JEYTRO2OJQ',
		'QTj4zCeoomDpr9oHTYqai/XFJDEfT5PIRkTh6rSz',
		'https://email.us-west-2.amazonaws.com');

	it('should generate an email', async () => {

		await client.send('justin@adexchangegrp.com', 'test@aegaffiliate.com', 'Test Email', 'This is a test');

	});

});
