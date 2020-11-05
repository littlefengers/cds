import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withDsm } from '@invisionapp/dsm-storybook';
import "../../dist/css/style.css";

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    variation: {
      control: {
        type: 'select',
        options: ['cds-btn--primary','cds-btn--secondary','cds-btn--outline-primary','cds-btn--primary-alternate']
      }
  }}
};

const Template = ({ onClick, label, variation }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = 'cds-btn ' + variation;
  btn.addEventListener('click', onClick);
  return btn;
};

export const Primary = Template.bind({});
Primary.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 variation: 'cds-btn--primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
 label: 'Cancel',
 onClick: action('onClick'),
 variation: 'cds-btn--secondary',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 variation: 'cds-btn--outline-primary',
};

export const PrimaryAlternate = Template.bind({});
PrimaryAlternate.args = {
 label: 'Place Your Order',
 onClick: action('onClick'),
 variation: 'cds-btn--primary-alternate',
};
