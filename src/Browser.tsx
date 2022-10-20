import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DataList from './pages/DataList';
import FormPage from './pages/CategoryForm';
import Home from './pages/Home';
import TopicList from './pages/TopicList';

export default function Browser() {
  return (
    <Routes>
      <Route path='/*' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=':category/list' element={<TopicList />} />
        <Route path=':category/:topic/list' element={<DataList />} />
        <Route path='topic/create' element={<FormPage title='Add New Topic' />} />
        <Route path='category/create' element={<FormPage title='Add New Category' />} />
        <Route path='topic/:id/update' element={<FormPage title='Edit Topic' />} />
        <Route path='category/:id/create' element={<FormPage title='Edit Category' />} />
      </Route>
    </Routes>
  );
}
