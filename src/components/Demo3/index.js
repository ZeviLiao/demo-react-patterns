import { compose } from 'recompose';

import {
  Page,
  numberAddOne,
  greetingWithName,
  addATitle,
  addAFooter,
  numberTimesTwo
} from '../Demo2'

const hoc = compose(
  addAFooter,
  addATitle,
  greetingWithName('Hello3'),
  numberTimesTwo('times III'),
  numberAddOne,
);
const Demo3 = hoc(Page);

export default Demo3