// @flow

import ses from 'node-ses';
import Promise from 'bluebird';

/**
 * Sends an Amazon SES email
 */
class SES {

	_client: Object;

	/**
	 * Constructor
	 * @param {string} awsKey
	 * @param {string} awsSecret
	 * @param {string} zone
	 */
	constructor (awsKey: string, awsSecret: string, zone: string) {

		this._client = ses.createClient({key: awsKey, secret: awsSecret, amazon: zone});

	}

	/**
	 * Send an email
	 * @param {string} to
	 * @param {string}from
	 * @param {string}subject
	 * @param {string}message
	 * @returns {Promise.<void>}
	 */
	async send (to: string, from: string, subject: string, message: string) {

		const mailOptions = {
			to: to,
			from: from,
			subject: subject,
			message: message
		};

		const sendEmail = Promise.promisify(this._client.sendEmail, {context: this._client});
		await sendEmail(mailOptions);

	}

}

export default SES;
