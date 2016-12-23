import * as AWS from 'aws-sdk';
import * as dynamoose from 'dynamoose';
import { logger } from '../services/logger';
import { DYNAMO_CONFIG } from '../config/constants';

export class DynamooseController {
	private model: any;
	private table: any;

	constructor() {
		AWS.config.update(DYNAMO_CONFIG);
		dynamoose.setDefaults({ create: true }); //creates the table if it doesn't exists
		this.model = dynamoose.model('Music', { Artist: String, SongTitle: String });
	}

	public get(event, context, callback): Promise<IMusic[]> {
		return new Promise((resolve, reject) => {
			this.model.scan({/*filter*/ }, {/*options*/ }, (error, data: IMusic[]) => {
				if (error) reject(error);
				else resolve(data);
			});
		});
	}

	public post(event, context, callback): Promise<IMusic> {
		return new Promise((resolve, reject) => {
			this.model.create(event.params, (error, data: IMusic) => {
				if (error) reject(error);
				else resolve(data);
			});
		});
	}
}