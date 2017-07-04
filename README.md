# Noty, A customizable Javascript notification library

Noty is a small javascript notification library that doesn't depend on jQuery. It can
easily be used in your client side applications regardless of the framework

### Installation
Add the package npm package into your project directory like so:
```bash
$ yarn add noty-noty
```


### Usage
Just use it by importing the library

```javascript
import Noty from 'noty-noty';

const ExampleComponent = (props) => {

  const handleClick = () => {
    Noty({
      type: 'primary',
      message: 'Hi there, Welcome back to our app',
    });
  };

  return (
    <button onClick={handleClick}>Click me!</button>
  );
}
```

### Options

Below shows a list of options you can pass to Noty

| Option  | Description | Example Values |
|---------|-------------|----------|
| type    | Sets the type of alert to show it. (default: `primary`) | `primary`, `success`, `info`, `danger` |
| icon    | Sets an icon for the alert. You can pass it any icon classes you have configured (default: "") | `fa fa-info-circle`, `glyphicon glyphicon-envelope` |
| html    | Option to pass html content. When option is set, title and message options are not used (default: null) | `<h3>Example</h3>` |
| title   | Sets a heading for the alert (default: "") | - |
| message | Sets a message body (default: "") | - |
| closeBtn | Shows a close button that allows users to close alert (default: true) | - |
| timer | Set timer delay to show alert before disappearing (default: 500) | - |
| onShow | Set handler to run right before alert is shown | - |
| onShown | Set handler to run after alert is shown | - |
| onHide | Set handler function to run right before it is hidden | - |
| onHidden | Set handler function to run after it is hidden | - |


### TODO
  * option for page banner alert
  * option for panel level alert


### Contributing

Feel free to create an issue or pull request if there's something you wish to be added to
it
