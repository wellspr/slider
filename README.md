# Slider

Create sliders easy end fast. Currently available is an infinite slider component. You must pass an array of components that will slide through the slider pane. Each time one component goes out of the

## install

  npm install @wellspr/slider

## Usage

You must provide an array containing the react components that are intended to enter the slide.

```javascript
import { InfiniteSlider } from "@wellspr/slider";

const App = () => {

const arr = [ <ComponentA />, <ComponentB />, ..., <ComponentN /> ];

return <InfiniteSlider
   	arr={arr}
	className="slider"
	translationStep="20rem"
	interval={3000}
	transitionDelay={1000}
   />
}
```

You can pass a classname to style the slider component. There is a required prop, *translationStep*, which tells slider by how much it will translate each time. Set this *translationStep* to equal to the *width* of each component. Also you can set *interval*, the interval between each iteration, and *transitionDelay*, the actual delay between each iteration.

* translationStep (string): The size of each individual translation of the slider;
* interval (number): The interval between each subsequent translation (given in miliseconds);
* transitionDelay (number): The transition delay imposed on the translation (given in miliseconds).

## Example

[Demo app](https://slider-demo-app.vercel.app/)