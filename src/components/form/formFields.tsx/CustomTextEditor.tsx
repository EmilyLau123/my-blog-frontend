import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Card, IconButton, Paper } from '@mui/material';
import {
  BOLD_ICON,
  CODE_ICON,
  IMAGE_ICON,
  ITALIC_ICON,
  UNDERLINE_ICON
} from '../../../theme/icons';
//images
import { AtomicBlockUtils, convertFromRaw, EditorState, RichUtils } from 'draft-js';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
// import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
// import createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';
import editorStyles from './editorStyles.module.css';
import 'draft-js/dist/Draft.css';

const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/images/canada-landscape-small.jpg'
      }
    }
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

//main editor area
const CustomTextEditor = () => {
  const focusPlugin = createFocusPlugin();
  const resizeablePlugin = createResizeablePlugin();
  // const blockDndPlugin = createBlockDndPlugin();
  const alignmentPlugin = createAlignmentPlugin();
  const { AlignmentTool } = alignmentPlugin;

  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
  //EditorState.createWithContent(convertFromRaw(initialState));
  //const contentState = editorState.getCurrentContent();

  //editor function
  const handleChangeEditorstate = (internalEditorState: EditorState) => {
    setEditorState(internalEditorState);
  };

  const handleToggleInlineStyleClick = (inlinestyle: string) => {
    handleChangeEditorstate(RichUtils.toggleInlineStyle(editorState, inlinestyle));
  };

  const insertImage = (url: any) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {
      src: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dexample&psig=AOvVaw3T8fUDQ1wI4kVJmK0kUdmn&ust=1666710996502000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCV8riU-foCFQAAAAAdAAAAABAE`
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ''); //Update the editor state
    console.log(`/Users/emilylau/Pictures/useful/${url}`);
  };
  //image handling
  const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator
    // blockDndPlugin.decorator
  );
  const imagePlugin = createImagePlugin({ decorator });

  // const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  //   handleUpload: mockUpload,
  //   addImage: imagePlugin.addImage
  // });

  const plugins = [
    // dragNDropFileUploadPlugin,
    // blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
    imagePlugin
  ];

  //UI return
  return (
    <Card variant='outlined' sx={{ height: 250 }} onClick={() => focus()}>
      <Paper variant='outlined'>
        <IconButton color='inherit' onClick={(): void => handleToggleInlineStyleClick('BOLD')}>
          <BOLD_ICON />
        </IconButton>
        <IconButton color='inherit' onClick={(): void => handleToggleInlineStyleClick('ITALIC')}>
          <ITALIC_ICON />
        </IconButton>
        <IconButton color='inherit' onClick={(): void => handleToggleInlineStyleClick('UNDERLINE')}>
          <UNDERLINE_ICON />
        </IconButton>
        <IconButton color='inherit' onClick={(): void => handleToggleInlineStyleClick('CODE')}>
          <CODE_ICON />
        </IconButton>
        <IconButton color='inherit' aria-label='upload picture' component='label'>
          <input
            hidden
            accept='image/*'
            type='file'
            onChange={(url) => {
              url.target.files && insertImage(url.target.files[0].name);
              url.target.files && console.log(url.target.files[0]);
            }}
          />
          <IMAGE_ICON />
        </IconButton>
      </Paper>
      {/* <Button onClick={() => RichUtils.onTab()}>Bold</Button> */}
      <Editor editorState={editorState} onChange={setEditorState} plugins={plugins} />
      {/* <ImageAdd editorState={editorState} onChange={onChange} modifier={imagePlugin.addImage} /> */}

      <AlignmentTool />
    </Card>
  );
};

export default CustomTextEditor;
