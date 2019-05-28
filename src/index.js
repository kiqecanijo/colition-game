import React from 'react';
import { render } from 'react-dom';
import { Game } from 'containers';

const root = document.getElementById('root')
const width = window.innerWidth
const height = window.innerHeight

const minor = width > height ? height : width

render(
    <Game boardSize={8} playerSize={minor/10} />
, root);
