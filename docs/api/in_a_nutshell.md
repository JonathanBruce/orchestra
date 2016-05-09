## In A Nutshell !heading

The idea behind Orchestra is simple: reusable bits of UI functionality that can easily plug into your Redux powered application.  For example, considering the following:

```javascript
import { PrimaryPositiveButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryPositiveButton>Hello!</PrimaryPositiveButton>
		);
	}
}
```

This would render Orchestra's `PrimaryPositiveButton` component that is simply a button with certain style attributes and has it's own API attached to it.  Since this is a button built with React you can pass all the usual suspects you would expect to pass to a React component like `onClick`, `onKeyUp`, etc...

