const CreateEntryUtils = require('../createEntryUtils');

test('creates plain activatable object', () => {
  expect(CreateEntryUtils.createActivatableDependent('SA_1'))
    .toEqual({
      id: 'SA_1',
      active: [],
      dependencies: [],
    });
});

test('creates active activatable object', () => {
  expect(CreateEntryUtils.createActivatableDependent('SA_1', {
    active: [{}],
  }))
    .toEqual({
      id: 'SA_1',
      active: [{}],
      dependencies: [],
    });
});

test('creates required activatable object', () => {
  expect(CreateEntryUtils.createActivatableDependent('SA_1', {
    dependencies: [{ active: false }],
  }))
    .toEqual({
      id: 'SA_1',
      active: [],
      dependencies: [{ active: false }],
    });
});

test('creates active required activatable object', () => {
  expect(CreateEntryUtils.createActivatableDependent('SA_1', {
    active: [{}],
    dependencies: [{ active: true }],
  }))
    .toEqual({
      id: 'SA_1',
      active: [{}],
      dependencies: [{ active: true }],
    });
});

test('creates plain activatable skill object', () => {
  expect(CreateEntryUtils.createActivatableDependentSkill('SPELL_1'))
    .toEqual({
      id: 'SPELL_1',
      value: 0,
      active: false,
      dependencies: [],
    });
});

test('creates active activatable skill object', () => {
  expect(CreateEntryUtils.createActivatableDependentSkill('SPELL_1', {
    active: true
  }))
    .toEqual({
      id: 'SPELL_1',
      active: true,
      value: 0,
      dependencies: [],
    });
});

test('creates higher SR activatable skill object', () => {
  expect(CreateEntryUtils.createActivatableDependentSkill('SPELL_1', {
    value: 10,
  }))
    .toEqual({
      id: 'SPELL_1',
      active: true,
      value: 10,
      dependencies: [],
    });
});

test('creates required activatable skill object', () => {
  expect(CreateEntryUtils.createActivatableDependentSkill('SPELL_1', {
    dependencies: [{ active: false }],
  }))
    .toEqual({
      id: 'SPELL_1',
      active: false,
      value: 0,
      dependencies: [{ active: false }],
    });
});

test('creates active required activatable skill object', () => {
  expect(CreateEntryUtils.createActivatableDependentSkill('SPELL_1', {
    value: 5,
    dependencies: [{ active: true }],
  }))
    .toEqual({
      id: 'SPELL_1',
      active: true,
      value: 5,
      dependencies: [{ active: true }],
    });
});