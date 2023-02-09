import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-mapas';
  ngAfterViewInit(): void{
  const map = new Map('map').setView([-10.963,-50.537], 4.6);
  tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//	marcador de Natal
	const markerItemRN = marker([-5.8046,-35.2084]).addTo(map).bindPopup("PCD Natal-RN");
//	marcador de Alcântara
	const markerItemMA = marker([-2.3779,-44.4164]).addTo(map).bindPopup("PCD ALcântara-MA");
//	marcador de São José dos Campos
	const markerItemSP = marker([-23.1909,-45.8926]).addTo(map).bindPopup("PCD São José dos Campos-SP");
//	marcador de Cuiába
	const markerItemMT = marker([-15.6012,-56.0989]).addTo(map).bindPopup("PCD Cuiába-MT");
//	marcador de Maringá
	const markerItemPR = marker([-23.4254,-51.9365]).addTo(map).bindPopup("PCD Maringá-PR");
//	marcador de Palmas
	const markerItemTO = marker([-10.1842,-48.3333]).addTo(map).bindPopup("PCD Palma-TO");
//	marcador de Manaus
	const markerItemAM = marker([-3.1287,-59.9836]).addTo(map).bindPopup("PCD Manaus-AM");
//	marcador de Salvador
	const markerItemBA = marker([-12.9771,-38.4776]).addTo(map).bindPopup("PCD Salvador-BA");

//	Exemplo da função que leva o setView direto para o marcador
/*
	map.fitBounds([
		[markerItemNatal.getLatLng().lat, markerItemNatal.getLatLng().lng]
	]);
*/
  }
}