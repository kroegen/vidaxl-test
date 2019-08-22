const Item  = require('../../models/Item');
const utils = require('../../utils');

exports.getItems = async (req, res, next) => {
    try {
        const items = (await Item.find()).map(item => utils.dump.dumpItem(item));

        await res.send({ status: 1, data: { items } });
    } catch (error) {
       return next(error);
    }
}
