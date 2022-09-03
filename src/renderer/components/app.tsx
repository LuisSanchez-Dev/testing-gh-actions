import * as React from 'react';
import { AppBridge } from '../bridge';

const getUser = () =>
  AppBridge.app.getUser().then(data => {
    alert(`Message from main: ${data}`);
  });
const prompt = () => AppBridge.app.prompt(Date.now().toString());

export const App = () => (
  <div>
    <button onClick={getUser}>Get User</button>
    <button onClick={prompt}>Prompt from main</button>
    <button onClick={AppBridge.app.max}>Max window</button>
  </div>
);
