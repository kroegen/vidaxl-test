const Item  = require('../../models/Item');
const utils = require('../../utils');

exports.updateItem = async(req, res, next) => {
    try {
        const { id }                = req.params;
        const { name, description } = req.body;
        const item                  = await Item.findOne({ _id: id });

        item.name = name;
        item.description = description;

        await item.save();
        await res.send({ status: 1, data: { item: utils.dump.dumpItem(item) } });
    } catch (error) {
       return next(error);
    }
};
