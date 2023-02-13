# Maps in Angular

## Run the following comands to install the npm leaflet (already with a project Angular).
		- $npm i leaflet@1.9.3
		- $npm install @types/leaflet@1.9.0
		- $npm install @types/leaflet@1.9.0 -D

## After that, change the code inside _app.component.ts_
		- const map = new Map('map').setView([<<the cordinate here>>], <<zoom>>);

- With this, you can start the map in the _cords_ who you choose and the _zoom_ who you like.

## You can put markers and the setview in the mark.
- See the offical _documentation_ and the _start guide_ in [the official website of leaflet](https://leafletjs.com/).