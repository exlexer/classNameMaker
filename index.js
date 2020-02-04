module.exports = (block = '', className = '') => (
  element,
  modifiers,
  ...additionalClasses
) => {
  const _element = element ? `__${element}` : '';
  const _classNames = className.split(' ').filter(value => value);
  const _modifiers = Object.keys(modifiers);

  return [
    `${block}${_element}`,
    ..._modifiers.reduce(
      (acc, _modifier) => {
        const value = modifiers[_modifier];
    
        if (value) {
          acc.push(
            `${block}${_element}--${_modifier}`,
            ..._classNames.map(_className => `${_className}${_element}--${_modifier}`)
          );
        }
    
        return acc;
      },
      [],
    ),
    ..._classNames.map(_className => `${_className}${_element}`),
    ...additionalClasses
    ].join(' ');
};
