export const loadFromLS = (key) => JSON.parse(localStorage.getItem(key));

export const saveToLS = (key,data) => localStorage.setItem(key,JSON.stringify(data));