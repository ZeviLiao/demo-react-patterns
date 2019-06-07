import { compose } from 'recompose';

import {
  Page,
  numberAddOne,
  greetingWithName,
  addATitle
} from '../Demo2'

const hoc = compose(
  addATitle,
  greetingWithName('Hello3'),
  numberAddOne,
);
const Demo3 = hoc(Page);

export default Demo3