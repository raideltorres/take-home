import permute from './permute';
/**
 * Generator function for parsing space-delimited BEM expressions.
 * Consider the following BEM expression:
 * bem`Hello A${{ B: 1 }}C X${{ Y: 1 }}Z`
 *
 * Without this generator the bem function would yield:
 * "Hello AC XZ Hello AC XYZ Hello ABC XZ Hello ABC XYZ"
 * It is permuting "Hello A" + {B} + "C X" + {Y} + "Z", which is not counter-intuitive.
 *
 * This generator allows the expression to be ran as three separate expressions:
 * bem`Hello`
 * bem`A${{ B: 1 }}C`
 * bem`X${{ Y: 1 }}Z`
 *
 * The results are joined and the result is:
 * "Hello AC ABC XZ XYZ"
 */
export default function* parse(allStrings, allValues) {
  //! CAUTION: Tagged template function parameters are annoying and generator functions are not for the faint of heart.
  //! I'm not going to document this function line-by-line. Touch it at your own peril. You break it, you buy it.  >:)
  const strings = [];
  const values = [];

  const flush = () => {
    const str = permute({ raw: strings }, ...values);
    strings.length = 0;
    values.length = 0;
    return str;
  };

  while (allStrings.length) {
    const string = allStrings.shift();
    if (string.includes(' ')) {
      const [first, ...rest] = string.split(' ');
      strings.push(first);
      allStrings.unshift(rest.join(' '));
      yield flush();
    } else if (!allValues.length) {
      strings.push(string);
      yield flush();
    } else {
      strings.push(string);
      values.push(allValues.shift());
    }
  }
}
