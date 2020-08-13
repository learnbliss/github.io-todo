export const deleteKeyInObj = (key, obj) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj
};

export const upperCase = (text) => {
    return text.replace(/^([A-zА-яё])/, (match) => {
        console.log('match: ', match);
        return match.toUpperCase()
    })
};

