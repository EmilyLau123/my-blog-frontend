import axios from 'axios';

const useCategoryService = () => {
  const getAllCategory = async () => {
    const result = await axios.get('http://localhost:8080/api/category/list');
    return result;
  };
  const getAllCategoryWTopic = async () => {
    const result = await axios.get('http://localhost:8080/api/category/listWTopic');
    return result;
  };
  const createCategory = async () => {
    await axios.post('http://localhost:8080/api/category/create', {
      id: 1,
      value: 'test',
      title: 'testtitle'
    });
  };
  return {
    getAllCategory,
    getAllCategoryWTopic,
    createCategory
  };
};

export default useCategoryService;
