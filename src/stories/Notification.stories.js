import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import "../../dist/css/style.css";

export default {
  title: 'Notification',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, className }) => {
  const notification = document.createElement('div');
  notification.innerText = text;
  notification.className = className;
  return notification;
};

export const General = Template.bind({});
General.args = {
 text: 'This is a General Notification.',
 className: 'notification notification-general',
};

export const Success = Template.bind({});
Success.args = {
 text: 'This is a Success Notification.',
 className: 'notification notification-success',
};

export const Alert = Template.bind({});
Alert.args = {
 text: 'This is an Alert Notification.',
 className: 'notification notification-alert',
};

export const Error = Template.bind({});
Error.args = {
 text: 'This is an Error Notification.',
 className: 'notification notification-error',
};


General.parameters = {
    docs: {
        source: {
            code: '<div class="notification notification-general">This is a General Notification</div>'
        }
    }
}