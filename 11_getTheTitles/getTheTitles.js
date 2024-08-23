const getTheTitles = function(books) {
    return books.reduce((titleList, curr) => {
        titleList.push(curr.title);
        return titleList
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
