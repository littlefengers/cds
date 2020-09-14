import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import "../../dist/css/style.css";
//import { firstNameLabel } from "Label.stories.js";

//var test = import("firstNameLabel");

export default{
    title: 'Input Field',
    argTypes: {
        labelText: { control: 'text' },
        labelClassName: { control: 'text' },
        className: {control: 'text'},
      },
};

// const labelTemplate = ({text, labelClassName}) => {
//     const label = document.createElement('label');
//     label.textContent = text;
//     label.className = labelClassName;

//     return label;

// };

// var firstNameLabel = labelTemplate.bind({});
// firstNameLabel.args = {
//        text: 'First Name',
//        className: 'outline',
//    };

const inputFieldTemplate = ({ labelText, labelClassName, className }) => {

    const divElement = document.createElement('div');
    divElement.className=labelClassName;
    const label = document.createElement('label');
    label.innerText = labelText;
 //   label.className = labelClassName;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = className;
    inputField.innerHTML=labelText;

    divElement.appendChild(inputField);
    divElement.appendChild(label);

   // inputField.textContent = firstNameLabel;
    //inputField.textContent = label;
    return divElement;

};

export const FirstName = inputFieldTemplate.bind({});
    FirstName.args = {
        labelText: 'First Name',
        labelClassName: 'label-outline form-label',
        className: 'input-outline form-control',
    };

