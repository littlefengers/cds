import "../../dist/css/style.css";
import $ from "jquery";

export default{
    title: 'Input Field',
    argTypes: {
        variant: {
            control: {
                    type:'select',
                    options: ["Input","Input - On Focus","Input - Completed","Input - Error",
                            "Input with Help Text","Input with Help Text - On Focus","Input with Help Text - Completed","Input with Help Text - Error",
                            "Input with Icon","Input with Icon - On Focus","Input with Icon - On Focus","Input with Icon - Completed","Input with Icon - Error",
                            "Input with Help Link","Input with Help Link - On Focus","Input with Help Link - Completed","Input with Help Link - Error",
                            "Input with Help Text & Help Link","Input with Help Text & Help Link - On Focus","Input with Help Text & Help Link - Completed","Input with Help Text & Help Link - Error",
                            "Input with Icon & Help Text","Input with Icon & Help Text - On Focus","Input with Icon & Help Text - Completed","Input with Icon & Help Text - Error",
                            "Input with Icon & Help Link","Input with Icon & Help Link - On Focus","Input with Icon & Help Link - Completed","Input with Icon & Help Link - Error"
                            ]
        }
      }
    }
};

function inputFieldTemplate(variant) {

    const parentDivElement = document.createElement("div");
    parentDivElement.className = "form-group input-field-v2";
    
    const outlineDivElement = document.createElement("div");
    outlineDivElement.className = "outerline";

    const inputElement = document.createElement("input");
    const labelElement = document.createElement("label");

    inputElement.className = "form-control input-outline";
    inputElement.type = "text";
    inputElement.id = "fieldName";
    inputElement.name = "fieldName";
    inputElement.label = "Field Name"; 

    labelElement.htmlFor = "fieldName";
    //don't have mergin-bottom: 5px, 
    labelElement.className = "fw4-ns input-field-v2 label-outline";
    labelElement.innerHTML = "Field Name";


    const spanElement = document.createElement("span");
    spanElement.innerText = ""; 
    
    if(variant === "Input - On Focus" || variant === "Input with Help Text - On Focus" || variant === "Input with Help Link - On Focus" || variant === "Input with Icon - On Focus"
          || variant === "Input with Help Text & Help Link - On Focus" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Link - On Focus"){ 
        inputElement.className = "form-control input-outline active";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Completed" || variant === "Input with Help Text - Completed" || variant === "Input with Help Link - Completed" || variant === "Input with Icon - Completed"
    || variant === "Input with Help Text & Help Link - Completed" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Link - Completed"){ 
        inputElement.className = "form-control input-outline";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Error" || variant === "Input with Help Text - Error" || variant === "Input with Help Link - Error" || variant === "Input with Icon - Error"
    || variant === "Input with Help Text & Help Link - Error" || variant === "Input with Icon & Help Text - Error" || variant === "Input with Icon & Help Link - Error"){
        inputElement.className = "form-control input-outline error";
        labelElement.className = "fw4-ns input-field-v2 label-outline active error";
        spanElement.innerHTML = "Error Message";
        spanElement.className = "pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error";
    }

    if(variant === "Input with Help Text" || variant === "Input with Help Text - On Focus" || variant === "Input with Help Text - Completed"
    || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed" 
            || variant === "Input with Icon & Help Text - Error"){
        spanElement.innerText = "Help Text"; 
        $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");

    }

    $(inputElement).on("focusin",function(){
        inputFieldFocusIn();
    }).on("focusout",function () {
        inputFieldFocusOut();
    });

    function inputFieldFocusIn() {
        $(labelElement).removeClass("error");
        $(inputElement).removeClass("error");
        $(labelElement).addClass("active");
        $(spanElement).removeClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
        $(spanElement).text("");
    }

    function inputFieldFocusOut() {
        if ($(inputElement).val().length === 0) {
            $(labelElement).addClass("error");
            $(inputElement).addClass("error");
            $(spanElement).text("Error Message")
            $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
           } else{
            $(labelElement).removeClass("error");
            $(inputElement).removeClass("error");
            $(labelElement).addClass("active");
           }
    }

    outlineDivElement.appendChild(inputElement);
    outlineDivElement.appendChild(labelElement);
    if(variant === "Input with Icon" || variant === "Input with Icon - On Focus" || variant === "Input with Icon - Completed" || variant === "Input with Icon - Error"
        || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Text - Error"
        || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error"){
        
            const iconElement = document.createElement("div");
            iconElement.className = "h1-ns w1-ns get-help fl-ns";
            $(inputElement).addClass("w-90-ns fl-ns");
            outlineDivElement.appendChild(iconElement);
           
            if(variant === "Input with Icon - Error" || variant === "Input with Icon & Help Text - Error" || variant === "Input with Icon & Help Link - Error"){
                spanElement.innerText = "Error Message";
                $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
            }

    }

    outlineDivElement.appendChild(spanElement);

    if(variant === "Input with Help Text & Help Link" || variant === "Input with Help Text & Help Link - On Focus" 
            || variant === "Input with Help Text & Help Link - Completed" || variant === "Input with Help Text & Help Link - Error"){
        if(variant === "Input with Help Text & Help Link - Error"){
            spanElement.innerText = "Error Message";
            $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
        }else{
            spanElement.innerText = "Help Text";
            $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");
        } 
        

        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        const newLineElement = document.createElement("br");
        outlineDivElement.appendChild(newLineElement);

        outlineDivElement.appendChild(anchorElement);

    }else if(variant === "Input with Help Link" || variant === "Input with Help Link - On Focus" 
            || variant === "Input with Help Link - Completed" || variant === "Input with Help Link - Error"
            || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error"){

        if(variant === "Input with Help Link - Error"){
            spanElement.innerText = "Error Message";
            $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");

            const newLineElement = document.createElement("br");
            outlineDivElement.appendChild(newLineElement);

        }
        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        outlineDivElement.appendChild(anchorElement);
    }


    parentDivElement.appendChild(outlineDivElement);

    return parentDivElement;

};

 
function formTemplate({ variant }) {

    const headerElement = document.createElement('h4');
    headerElement.innerHTML = 'Input Field';
    //line height is supposed to be 1.1, margin top/bottom should have been 10px, 
    headerElement.className = 'cds-t4 dark-gray mv2-m fw4 sans-serif';

    const parentDivElement = document.createElement("div");
    const formElement = document.createElement("form");

    formElement.id = "componentForm";
    formElement.action = "#";
    formElement.noValidate = "noValidate";

    formElement.appendChild(inputFieldTemplate(variant));

    parentDivElement.appendChild(headerElement);
    parentDivElement.appendChild(formElement);

    return parentDivElement;
 
}

export const InputField = formTemplate.bind({});
InputField.args = {
    variant: '',
};

export const InputFieldIcon = formTemplate.bind({});
InputFieldIcon.args = {
    variant: 'Input with Icon',
};

export const InputFieldHelpText = formTemplate.bind({});
InputFieldHelpText.args = {
    variant: 'Input with Help Text',
};

export const InputFieldHelpLink = formTemplate.bind({});
InputFieldHelpLink.args = {
    variant: 'Input with Help Link',
};

export const InputFieldHelpTextLink = formTemplate.bind({});
InputFieldHelpTextLink.args = {
    variant: 'Input with Help Text & Help Link',
};

