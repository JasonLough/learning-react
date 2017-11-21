This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Purpose :

This is just an experiment to help me figure out how to do things in react.

This project shows a way to add CSS transitions to an element on click.


Files of interest :

src/App.js - imports the custom component, sets up the data object to pass to Mod components

src/App.css - holds the 2 css rules for making the component taller / shorter

src/modules/Mod.js - the custom component 


What this all does :

Several cat pictures are displayed. Clicking them toggles their size with a css transition.


How it works :

The App component renders, and inside it, it renders a Mod component.

The Mod components render() function creates an array of Img components. Each Img component has its own state, and each ones state gets initialized to small:false.

When the Img is clicked, (line 49), state is changed, causing a rerender. This components state.small is set to the opposite of what it was (line 51). This component is then rerendered.

In the rerender of the Img, size now holds the other string value it could be (line 57). 

Since the class dictates the height (see App.css), this changing of the className changes the class which changes the height.


