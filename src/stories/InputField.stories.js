import "../../dist/css/style.css";
import $ from "jquery";

export default{
    title: 'Single Input Field',
    argTypes: {
        inputText: { control: 'text' },
      },
};

const inputFieldTemplate = ({ labelText, labelClassName, className }) => {

    const headerElement = document.createElement('h4');
    headerElement.innerHTML = 'Input Field';
    //line height is supposed to be 1.1, margin top/bottom should have been 10px, 
    headerElement.className = 'cds-t4 dark-gray mv2-m fw4 sans-serif'; 

    const parentDivElement = document.createElement("div");
    const formElement = document.createElement("form");  
    const formDivElement = document.createElement("div");
    const outlineDivElement = document.createElement("div");
    const inputElement = document.createElement("input");
    const labelElement = document.createElement("label");

    formElement.id = "componentForm";
    formElement.action = "#";
    formElement.noValidate = "noValidate";

    formDivElement.className = "form-group input-field-v2";

    outlineDivElement.className = "outerline";   

    inputElement.className = "form-control input-outline";
    inputElement.id = "firstName";
    inputElement.name = "firstName";
    inputElement.label = "First Name";
/*
    $(textAreaElement).on('input',function(){
        character_count('#textarea-character-count', '#textarea-id');
    });

    $(textAreaElement).on('blur',function(){
        javasript:void(0);
    });

    $(inputElement).focusin(function() {
        $(labelElement).addClass("active");
    }).focusout(function() {
        if($(this).val().length === 0) {
            $(labelElement).removeClass("active");
            $(this).addClass("error body-copy-error");
        }
    });*/

    $(formElement).validate({
        rules: {
            firstName: {
                required: true
            }
        },
        errorClass: "error body-copy-error"
    });
 
    labelElement.htmlFor = "firstName";
    //don't have mergin-bottom: 5px, 
    labelElement.className = "fw4-ns input-field-v2 label-outline";
    labelElement.innerHTML = "First Name";

    outlineDivElement.appendChild(inputElement);
    outlineDivElement.appendChild(labelElement);

    formDivElement.appendChild(outlineDivElement);

    formElement.appendChild(formDivElement)

    parentDivElement.appendChild(headerElement);
    parentDivElement.appendChild(formElement);
   
    return parentDivElement;

};

export const FirstName = inputFieldTemplate.bind({});
    FirstName.args = {
        labelText: 'First Name',
        labelClassName: 'label-outline form-label',
        className: 'input-outline form-control',
    };

