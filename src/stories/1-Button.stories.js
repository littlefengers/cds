import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import "../../dist/css/style.css";

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = ({ onClick, label, className, icon }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = className;
  btn.addEventListener('click', onClick);
  return btn;
};

export const Primary = Template.bind({});
Primary.args = {
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--primary',
};

export const PrimaryAlternate = Template.bind({});
PrimaryAlternate.args = {
 label: 'Place Your Order',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--primary-alternate',
};

export const Secondary = Template.bind({});
Secondary.args = {
 label: 'Cancel',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--secondary',
};

export const OutlinePrimary= Template.bind({});
OutlinePrimary.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--outline-primary',
};

export const OutlineSecondary= Template.bind({});
OutlineSecondary.args = {
 label: 'Add to Cart',
 onClick: action('onClick'),
 className: 'cds-btn cds-btn--outline-secondary',
};



// const Template = ({ onClick, children }) => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = children;
//   btn.addEventListener('click', onClick);
//   return btn;
// };

// export const Text = Template.bind({});
// Text.args = {
//   children: 'Button',
//   onClick: action('onClick'),
// };

// export const Emoji = Template.bind({});
// Emoji.args = {
//   children: '😀 😎 👍 💯',
// };

// export const TextWithAction = () => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = 'Trigger Action';
//   btn.addEventListener('click', () => action('This was clicked')());
//   return btn;
// };

// TextWithAction.storyName = 'With an action';
// TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

// export const ButtonWithLinkToAnotherStory = () => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = 'Go to Welcome Story';
//   btn.addEventListener('click', linkTo('example-introduction--page'));
//   return btn;
// };

// ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
