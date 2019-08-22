exports.dumpItem = task => {
    return {
        id          : task._id,
        name        : task.name,
        description : task.description,
    }
}
