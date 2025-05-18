# React + Vite

This is a sample project no-3

## Notes

** Generating required icons/logos
step -1: Generate an image using Gemni or Chatgpt
step -2: Use Adobe to remove background. Link - https://www.adobe.com/in/express/feature/image/remove-background

** Using local static images for production
The relative paths won't work, as they are all sent as a single html, css and other files.
Don't use hard-coded relative local paths. Use local images like below:

import navBarImg from '../../public/ring.png'

** 
