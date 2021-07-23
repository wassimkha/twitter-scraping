/**
 * return whether or not a string includes any of the keywords array passed
 * @param keywords array of keyworkds (str)
 * @param string the string to parse (str)
 * @returns {boolean}
 */
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