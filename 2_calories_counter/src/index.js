import 'tachyons';
import app from './counter/app';
import initialModel from './counter/models';

const rootNode = document.getElementById('app');

app(initialModel, rootNode);