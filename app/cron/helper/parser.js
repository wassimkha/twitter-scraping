const parse_description = (keywords, string) => {
    let found = false;
    string.toLowerCase().split(' ').forEach(word => {
        keywords.forEach(key => {
            if (key == word) {
                found = true
            }
        })
    })
    return found
}

exports.parse_description = parse_description;