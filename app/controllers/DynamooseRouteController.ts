import * as AWS from 'aws-sdk';
import * as dynamoose from 'dynamoose';
import { logger } from '../services/logger';
import { DYNAMO_CONFIG } from '../config/constants';

export default class DynamooseRouteController {
	private model: any;
	private table: any;

	constructor() {
		AWS.config.update(DYNAMO_CONFIG);
		dynamoose.setDefaults( { create: true }); //creates the table if it doesnt exists
		this.model = dynamoose.model('Music', { Artist: String, SongTitle: String });
	}

	public get(): Promise {
		new Promise((resolve, reject) => {
			this.model.scan({/*filter*/ }, {/*options*/ }, (error, data) => {
				if (error) return reject(error);
				resolve(data);
			});
		});
	}

	public post(req: any): Promise {
		new Promise((resolve, reject) => {
			this.model.create(req.params, (error, data) => {
				if (error) return reject(error);
				resolve(data);
			});
		});
	}
}