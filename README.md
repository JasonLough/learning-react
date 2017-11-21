This is just an experiment to help me figure out how to do things in react.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project shows a way to add CSS transitions to an element on click.

How it works :

The App component renders, and inside it, it renders a Mod component.

The Mod components render() function creates an array of Img components. Each Img component has its own state, and each ones state gets initialized to small:false.

When the Img is clicked, (line 49), state is changed, causing a rerender. This components state.small is set to the opposite of what it was (line 51). This component is then rerendered.

In the rerender of the Img, size now holds the other string value it could be (line 57). 

Since the class dictates the height (see App.css), this changing of the className changes the class which changes the height.