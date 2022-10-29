import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DataList from './pages/DataList';
import FormPage from './pages/create/CategoryForm';
import Home from './pages/Home';
import TopicList from './pages/TopicList';
import PostForm from './pages/create/PostForm';
import CategoryForm from './pages/create/CategoryForm';
import TopicForm from './pages/create/TopicForm';

export default function Browser() {
  return (
    <Routes>
      <Route path='/*' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='category/:category/list' element={<DataList />} />
        <Route path='category/:category/topic/:topic/list' element={<DataList />} />
        <Route path='topic/create' element={<TopicForm title='Add New Topic' />} />
        <Route path='category/create' element={<CategoryForm title='Add New Category' />} />
        <Route path='post/create' element={<PostForm title='Add New Post' />} />
        <Route path='topic/:id/update' element={<FormPage title='Edit Topic' />} />
        <Route path='category/:id/update' element={<FormPage title='Edit Category' />} />
        <Route path='post/:id' element={<FormPage title='Edit Category' />} />
      </Route>
    </Routes>
  );
}
