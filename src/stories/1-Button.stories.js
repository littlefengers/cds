import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withDsm } from '@invisionapp/dsm-storybook';
import "../../dist/css/style.css";

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
  }
};

const Template = ({ onClick, label, className }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = className;
  btn.addEventListener('click', onClick);
  return btn;
};


// export const Primary = ( label ) => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = label
//   btn.className = "cds-btn cds-btn--primary"
//   btn.addEventListener('click', action('onClick'));
//   return btn;
// };


// Primary.args = {
//   label: 'hello world'
// }


// Primary.story = {
//   decorators: [withDsm],
//   parameters: {
//     'in-dsm': { id: '5e8230abdf84e2a27d2c579c' }
//   }
// }


export const Primary = Template.bind({});
Primary.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
 label: 'Cancel',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--secondary',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--outline-primary',
};

export const PrimaryAlternate = Template.bind({});
PrimaryAlternate.args = {
 label: 'Place Your Order',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--primary-alternate',
};



PrimaryAlternate.storyName = 'button with link to another story';
