# Class Name Maker
`classnamemaker` is a dependency free utility for creation of basic BEM classnames and the overwriting of them in divergent usage cases.

### API

`classNameMaker` (`block`: `String`, `className`: `String`): `Function` => `ClassNameHandler`;

`ClassNameHandler` (`element`: `String`, `modifiers`: { ...`modifiers`: `Boolean` }, ...`additional classes`: `String`): `String` => `ClassString`;

### Basic Usage

Let's build a basic component with a container an inner icon and a content element and some random modifiers.

```jsx
import classNameMaker from 'classnamemaker';

const BasicComponent = ({ children, className, tall = true, green = false }) => {
  const _getClasses = classNameMaker('basic-component', className);
  const [active, setActive] = useState();

  return (
    <div className={_getClasses('container', { tall })}>
      <div className={_getClasses(undefined, { green })}>
        <i className={_getClasses('icon', {}, 'icon-check')} />
        <div className={_getClasses('content', { active })}>
          {children}
        </div>
      </div>
    </div>
  );
}
```

If This were instantiated as follows:
```jsx
<BasicComponent>Test Text</BasicComponent>
```

It would render as:
```jsx
<div class="basic-component__container basic-component__container--tall">
  <div class="basic-component">
    <div class="basic-component__icon icon-check">
    <div class="basic-component__content">
      Test Text
    </div>
  </div>
</div>
```

However, if we wanted to customize it for this instance, we could instantiate it like this:
```jsx
<BasicComponent
  className="custom"
  green
>
  Test Text
</BasicComponent>
```

It would render as:
```jsx
<div class="basic-component__container basic-component__container--tall custom__container custom__container--tall">
  <div class="basic-component basic-component--green custom custom--green">
    <div class="basic-component__icon custom__icon icon-gear">
    <div class="basic-component__content custom__content">
      Test Text
    </div>
  </div>
</div>
```

So if the styling for this component were as follows
```less
.basic-component {
  border: 1px solid black;

  &__container {
    display: flex;
    &:not(&--tall) {
      margin: 10px;
    }

    &--tall {
      margin: 20px 10px;
    }
  }

  &__content {
    padding: 10px;
    flex-grow: 0;
  }

  &--green {
    background: green;
  }
}
```

Then if all that we wanted to customize was the height of content, we could write the following:
```less
.basic-component {
  &__content {
    padding: 16px 10px;
  }
}
```
