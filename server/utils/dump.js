exports.dumpItem = task => {
    return {
        id      : task._id,
        name    : task.name,
        content : task.content,
    }
}
