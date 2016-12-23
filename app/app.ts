import { DynamooseController } from './controllers/DynamooseController';

const instance = new DynamooseController();

export const get = (event, context, callback) => {
    instance.get(event, context, callback).then(callback);
}

export const post = (event, context, callback) => {
    instance.post(event, context, callback).then(callback);
}