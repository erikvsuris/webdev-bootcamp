//jshint esversion:6

exports.getDate = function() {
    const today = new Date()
    const options = {
        weekDay: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-US", options)
}

exports.getDay = function() {
    const today = new Date()
    const options = {
        weekDay: "long"
    }

    return today.toLocaleDateString("en-US", options)
}