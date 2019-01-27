import Widget from './widget';
import TextBox from './components/textBox';
import TextBoxForm from './components/textBoxForm';

export default {
  TEXT_BOX: new Widget('TEXT_BOX', 'Text Box', TextBox, TextBoxForm),
};