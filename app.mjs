import {createGUI} from "./healpers.mjs";

const supportedMethods = ['get', 'post', 'put', 'patch', 'delete']

const body = document.body;
body.appendChild(createGUI(supportedMethods))
