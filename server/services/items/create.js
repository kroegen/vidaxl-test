const Item  = require('../../models/Item');
const utils = require('../../utils');

exports.createItem = async(req, res, next) => {
    try {
        const { name, content } = req.body;
        const item              = await new Item({ name, content });

        await item.save();
        await res.send({ status: 1, data: { item: utils.dump.dumpItem(item) } });
    } catch (error) {
       return next(error);
    }
};
