const Item = require('../../models/Item');

exports.deleteItem = async(req, res, next) => {
    try {
        const { id } = req.params;
        const item   = await Item.findOne({ _id: id });

        await item.remove();
        await res.send({ status: 1 });
    } catch (error) {
       return next(error);
    }
};
