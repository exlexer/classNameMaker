const assert = require('assert');

const classNameMaker = require('./classnamemaker');

const getClasses = () => {
  const _getClasses = classNameMaker('default_block', 'given_block');
  return _getClasses('section', { modified: true, 'not_modified': false }, 'added');
}

it('should create default classes', () => {
  const classes = getClasses();

  assert.ok(classes.includes('default_block__section'));
});

it('should create given classes', () => {
  const classes = getClasses();

  assert.ok(classes.includes('given_block__section'));
});

it('should add truthy modifiers', () => {
  const classes = getClasses();

  assert.ok(classes.includes('default_block__section--modified'));
  assert.ok(classes.includes('given_block__section--modified'));
});

it('should not add falsy modifiers', () => {
  const classes = getClasses();

  assert.equal(classes.includes('default_block__section--not-modified'), false);
  assert.equal(classes.includes('given_block__section--not-modified'), false);
});

it('should add added classes default classes', () => {
  const classes = getClasses();

  assert.ok(classes.includes('added'));
});