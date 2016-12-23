import { DynamooseController } from './controllers/DynamooseController';
import { ResponseHelper } from './services/ResponseHelper';

export const getHandler = get;
export const postHandler = post;

const dmCtrl: DynamooseController = new DynamooseController();
const rh: ResponseHelper = new ResponseHelper();

function get(event, context, callback) {
    dmCtrl.get(event, context, callback).then(
        data => rh.success(data, event),
        error => rh.error(error, event)
    );
}

function post(event, context, callback) {
    dmCtrl.post(event, context, callback).then(
        data => rh.success(data, event),
        error => rh.error(error, event)
    );
}
