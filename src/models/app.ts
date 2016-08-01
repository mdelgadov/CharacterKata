/// <reference path="./character.ts" />

import {Character} from "./character";
window.onload = () => {
    var el = document.getElementById('content');

    let char = new Character('Inigo Montoya', 'Inigo', ['swordsman', 'pepetone'],  'You killed my father, prepare to die' );

    el.innerHTML += char.short;
};