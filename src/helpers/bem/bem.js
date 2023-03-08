import parse from './parse';

/**
 * Tagged template for creating BEM (Block Element Modifier) class names.
 * @param {string[]} strings
 * @param  {...(string|object)} args
 * @returns {string}
 * @example <caption>Basic usage</caption>
 * bem`Test Hello__${{ world: true, test: false }}`
 * // 'Test Hello Hello__world'
 *
 * const block = 'Example';
 * bem`${block}--${{ visible: 18, hidden: 0, hover: 'on' }}`
 * // 'Example Example--visible Example--hover'
 * @example <caption>All truthy permutations are returned.</caption>
 * bem`${{ a: 1, b: 1 }}--${{ c: 1 }}`
 * // 'c a a--c b b--c'
 *
 * @example <caption>By default all objects match as an empty set. You can control this explicitly with the empty string key.</caption>
 * bem`a__${{        b: 1 }}` // 'a a__b'
 * bem`a__${{ '': 1, b: 1 }}` // 'a a__b'
 * bem`a__${{ '': 1, b: 0 }}` // 'a'
 * bem`a__${{             }}` // 'a'
 * // Explicitly disabling the empty string key will only match valid permutations
 * bem`a__${{ '': 0, b: 1 }}` // 'a__b'
 * bem`a__${{ '': 0, b: 0 }}` // ''
 */
export const bem = (strings, ...args) => {
  // Get an iterator to compute each space-delimited BEM expression individually
  const iter = parse([...strings], args);
  // Deduplicate the output and join everything back together
  /*eslint-disable no-undef */
  return Array.from(new Set(iter)).filter(Boolean).join(' ');
};

export default bem;
