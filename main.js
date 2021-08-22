let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {

	menu.classList.toggle('fa-times')
	navbar.classList.toggle('active')
}

window.onscroll = () => {
	console.log('window scrolling')
	menu.classList.remove('fa-times')
	navbar.classList.remove('active')
}

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VpMjEzIiwiYSI6ImNrc24zNDdiaTBrcWIycHBlZ2FiNnF3anUifQ.LB8DngD12vDxJLBk4L64bw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [23.424567, -19.987831],
zoom: 18
});