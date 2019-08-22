exports.dumpItem = item => {
    return {
        id          : item._id,
        name        : item.name,
        description : item.description,
    }
}
