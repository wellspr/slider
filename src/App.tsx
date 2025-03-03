import "./app.scss";
import "./slider.scss";

import { InfiniteSlider } from "../lib/InfiniteSlider";

import angularjs from "./assets/logos/angular.svg";
import django from "./assets/logos/djangoproject-icon.svg";
import docker from "./assets/logos/docker.svg";
import js from "./assets/logos/js.svg";
import laravel from "./assets/logos/laravel.svg";
import nextjs from "./assets/logos/nextjs.svg";
import nodejs from "./assets/logos/node-js.svg";
import nuxt from "./assets/logos/nuxtjs-icon.svg";
import flask from "./assets/logos/palletsprojects_flask-icon.svg";
import reactjs from "./assets/logos/react.svg";
import svelte from "./assets/logos/sveltetechnology-icon.svg";
import vuejs from "./assets/logos/vue.svg";
import vite from "./assets/logos/vitejsdev-icon.svg";

type Logo = { id: number, image: string, alt: string }

const logos: Logo[] = [
	{ id: 0, image: js, alt: "Javascript logo" },
	{ id: 1, image: nextjs, alt: "Next js logo" },
	{ id: 2, image: reactjs, alt: "React logo" },
	{ id: 3, image: vuejs, alt: "Vue logo" },
	{ id: 4, image: angularjs, alt: "Angular logo" },
	{ id: 5, image: nodejs, alt: "Node logo" },
	{ id: 6, image: docker, alt: "Docker logo" },
	{ id: 7, image: laravel, alt: "Laravel logo" },
	{ id: 8, image: django, alt: "Django logo" },
	{ id: 9, image: nuxt, alt: "Nuxt logo" },
	{ id: 10, image: svelte, alt: "Svelte logo" },
	{ id: 11, image: flask, alt: "Flask logo" },
	{ id: 12, image: vite, alt: "Vite logo" },
];

const LogoComponent = ({ image, alt }: { image: string; alt: string }) => {
	return (
		<div className="logo">
			<img src={image} alt={alt} />
		</div>
	);
};

function App() {

	const arr = logos.map(logo => {
		return <LogoComponent
			key={logo.id}
			alt={logo.alt}
			image={logo.image}
		/>
	});

	return (
		<div className="app">
			<div className="app__header">
				Slider App
			</div>

			<div className="app__slider">
				<InfiniteSlider
					arr={arr}
					className="slider"
					translationStep="20rem"
					interval={3000}
					transitionDelay={1000}
				/>
			</div>

		</div>

	);
};

export default App;
