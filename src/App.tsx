import React from 'react';

import { DialogContent } from '@material-ui/core';
import { RecoilRoot } from 'recoil';

import { TodoAppHeader } from './components/TodoAppHeader';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <DialogContent>
        <TodoAppHeader />
        <TodoList />
      </DialogContent>
    </RecoilRoot>
  );
}

export default App;
