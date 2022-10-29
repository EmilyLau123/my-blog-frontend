import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DataList from './pages/DataList';
import FormPage from './pages/create/CategoryForm';
import Home from './pages/Home';
import TopicList from './pages/TopicList';
import PostForm from './pages/create/PostForm';
import CategoryForm from './pages/create/CategoryForm';
import TopicForm from './pages/create/TopicForm';
import { LIST_POST_TITLE, LIST_TOPIC_TITLE, VIEW_POST_TITLE } from './utils/constants';
import PostView from './pages/view/PostView';

export default function Browser() {
  return (
    <Routes>
      <Route path='/*' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='category/'>
          <Route path='create' element={<CategoryForm pageTitle='Add New Category' />} />
          <Route path=':id/update' element={<FormPage pageTitle='Edit Category' />} />
          <Route path=':category/topic/list' element={<DataList pageTitle={LIST_TOPIC_TITLE} />} />
          <Route
            path=':category/topic/:topic/post/list'
            element={<DataList pageTitle={LIST_POST_TITLE} />}
          />
        </Route>
        <Route path='topic/'>
          <Route path='create' element={<TopicForm pageTitle='Add New Topic' />} />
          <Route path=':id/update' element={<FormPage pageTitle='Edit Topic' />} />
        </Route>

        {/* About Post */}
        <Route path='post/'>
          <Route path='create' element={<PostForm pageTitle='Add New Post' />} />
          <Route path=':id/update' element={<FormPage pageTitle='Edit Category' />} />
          <Route path=':id' element={<PostView />} />
        </Route>
      </Route>
    </Routes>
  );
}
