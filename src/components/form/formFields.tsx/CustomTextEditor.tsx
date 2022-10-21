import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Box } from '@mui/material';

const CustomTextEditor = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  return (
    <Box>
      {' '}
      {/* <Button onClick={() => RichUtils.onTab()}>Bold</Button> */}
      <Editor editorState={editorState} onChange={setEditorState} />
    </Box>
  );
};

export default CustomTextEditor;
