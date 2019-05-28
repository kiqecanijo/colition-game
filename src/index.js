import React from 'react';
import { render } from 'react-dom';
import { Game } from 'containers';

const root = document.getElementById('root')
const size = window.innerWidth


render(
    <Game boardSize={9} playerSize={size/20} />
, root);
