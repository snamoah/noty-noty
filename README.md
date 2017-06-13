# Noty, A customizable Javascript notification library

Noty is a small javascript notification library that doesn't depend on jQuery. It can
easily be used in your client side applications regardless of the framework

### Installation
```bash
yarn add noty-noty
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




### TODO
  * option for page banner alert
  * option for panel level alert


### Contributing

Feel free to create an issue or pull request if there's something you wish to be added to
it
