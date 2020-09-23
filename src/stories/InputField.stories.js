import "../../dist/css/style.css";
import $ from "jquery";

export default{
    title: 'Input Field',
    argTypes: {
        inputText: { control: 'text' },
      },
};

function inputFieldTemplate(inputId,label) {

    const parentDivElement = document.createElement("div");
    parentDivElement.className = "form-group input-field-v2";
    
    const outlineDivElement = document.createElement("div");
    outlineDivElement.className = "outerline";

    const inputElement = document.createElement("input");
    const labelElement = document.createElement("label");

    inputElement.className = "form-control input-outline";
    inputElement.id = inputId;
    inputElement.name = inputId;
    inputElement.label = label; 

    labelElement.htmlFor = inputId;
    //don't have mergin-bottom: 5px, 
    labelElement.className = "fw4-ns input-field-v2 label-outline";
    labelElement.innerHTML = label;

    $(inputElement).focusin(function () {
        $(labelElement).addClass("active");
    }).focusout(function () {
        if ($(this).val().length === 0) {
            //$(labelElement).removeClass("active");
            $(labelElement).addClass("active");
            $(inputElement).addClass("error body-copy-error");
           }
    });

    outlineDivElement.appendChild(inputElement);
    outlineDivElement.appendChild(labelElement);

    parentDivElement.appendChild(outlineDivElement);

    return parentDivElement;

};

 
function formTemplate({ labelText, labelClassName, className }) {

    const headerElement = document.createElement('h4');
    headerElement.innerHTML = 'Input Field';
    //line height is supposed to be 1.1, margin top/bottom should have been 10px, 
    headerElement.className = 'cds-t4 dark-gray mv2-m fw4 sans-serif';

    const parentDivElement = document.createElement("div");
    const formElement = document.createElement("form");

    formElement.id = "componentForm";
    formElement.action = "#";
    formElement.noValidate = "noValidate";

    formElement.appendChild(inputFieldTemplate('fieldName','Field Name'));

    parentDivElement.appendChild(headerElement);
    parentDivElement.appendChild(formElement);

    return parentDivElement;
 
}

export const FieldName = formTemplate.bind({});
    FieldName.args = {
        labelText: 'Field Name',
        labelClassName: 'label-outline form-label',
        className: 'input-outline form-control',
    };

