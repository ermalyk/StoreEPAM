import Categories from '../mocks/Categories.js';
const getCategories = () => (
    new Promise((resolve, reject) => {
        resolve(Categories);
    })
);

export default {
  getCategories
}

