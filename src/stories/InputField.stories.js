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
                            "Input with Icon & Help Link","Input with Icon & Help Link - On Focus","Input with Icon & Help Link - Completed","Input with Icon & Help Link - Error",
                            "Input with Button","Input with Button - On Focus","Input with Button - Completed","Input with Button - Error"
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
          || variant === "Input with Help Text & Help Link - On Focus" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Link - On Focus"
          || variant === "Input with Button - On Focus"){ 
        inputElement.className = "form-control input-outline active";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Completed" || variant === "Input with Help Text - Completed" || variant === "Input with Help Link - Completed" || variant === "Input with Icon - Completed"
        || variant === "Input with Help Text & Help Link - Completed" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Link - Completed"
        || variant === "Input with Button - Completed"){ 
        inputElement.className = "form-control input-outline";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Error" || variant === "Input with Help Text - Error" || variant === "Input with Help Link - Error" || variant === "Input with Icon - Error"
        || variant === "Input with Help Text & Help Link - Error" || variant === "Input with Icon & Help Text - Error" || variant === "Input with Icon & Help Link - Error"
        || variant === "Input with Button - Error"){
        inputElement.className = "form-control input-outline error";
        labelElement.className = "fw4-ns input-field-v2 label-outline active error";
        spanElement.innerHTML = "Error Message";
        spanElement.className = "pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error";
    }

    if(variant === "Input with Help Text" || variant === "Input with Help Text - On Focus" || variant === "Input with Help Text - Completed"
    || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed"){
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
    
    if(variant === "Input with Button" || variant === "Input with Button - On Focus" 
        || variant === "Input with Button - Completed" || variant === "Input with Button - Error"){
        const buttonElement = document.createElement("button");
        buttonElement.innerText = "Go";
        buttonElement.className = "cds-t5 cds-btn cds-btn--primary";
        outlineDivElement.appendChild(buttonElement);
    }

    if(variant === "Input with Icon" || variant === "Input with Icon - On Focus" || variant === "Input with Icon - Completed" || variant === "Input with Icon - Error"
        || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Text - Error"
        || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error"){

            var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.setAttribute("version", "1.1");
            var useElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svgElement.setAttribute("viewBox", "0 0 24 24");
            svgElement.setAttribute("class", "cds-icon tooltip-icon");
 
            useElement.setAttribute("d","M11.867 2.001c-0.001 0-0.001 0-0.002 0-5.522 0.075-9.939 4.612-9.864 10.134s4.612 9.938 10.134 9.864c5.521-0.075 9.937-4.611 9.864-10.132s-4.609-9.939-10.132-9.866zM13.453 17.282c-0.079 0.193-0.19 0.361-0.332 0.503s-0.31 0.253-0.503 0.333c-0.193 0.079-0.398 0.119-0.613 0.119s-0.421-0.040-0.614-0.119c-0.193-0.079-0.361-0.19-0.503-0.333s-0.253-0.309-0.332-0.503-0.119-0.397-0.119-0.613c0-0.216 0.040-0.42 0.119-0.613s0.19-0.361 0.332-0.503c0.142-0.142 0.31-0.253 0.503-0.332s0.398-0.119 0.614-0.119c0.215 0 0.42 0.040 0.613 0.119s0.36 0.19 0.503 0.332c0.142 0.142 0.253 0.309 0.332 0.503s0.119 0.398 0.119 0.613c0 0.215-0.040 0.42-0.119 0.613zM15.958 10.015c-0.069 0.267-0.185 0.531-0.349 0.792s-0.381 0.526-0.648 0.792c-0.267 0.267-0.605 0.559-1.014 0.877-0.262 0.205-0.437 0.403-0.528 0.597s-0.137 0.386-0.137 0.579v0.494h-2.555v-0.75c0-0.341 0.045-0.63 0.136-0.869s0.244-0.46 0.46-0.665c0.318-0.307 0.61-0.573 0.877-0.801 0.266-0.227 0.497-0.44 0.689-0.639s0.344-0.386 0.452-0.562 0.162-0.361 0.162-0.554c0-0.375-0.117-0.667-0.349-0.877-0.233-0.21-0.525-0.315-0.877-0.315-0.534 0-0.94 0.147-1.218 0.443s-0.434 0.653-0.469 1.073l-2.65-0.003c0.125-1.354 0.594-2.289 1.355-2.919s1.738-0.945 2.931-0.945c0.522 0 1.014 0.071 1.474 0.213s0.866 0.355 1.218 0.639c0.351 0.284 0.63 0.636 0.835 1.056s0.307 0.903 0.307 1.448c0.001 0.331-0.033 0.629-0.101 0.896z");
            svgElement.append(useElement);

            $(inputElement).addClass("w-90-ns fl-ns");

            outlineDivElement.appendChild(svgElement);
    }
    
    parentDivElement.appendChild(outlineDivElement);
    parentDivElement.appendChild(spanElement);


    if(variant === "Input with Help Text & Help Link - Error" || variant === "Input with Help Link - Error"){
        spanElement.innerText = "Error Message";
        $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
        const newLineElement = document.createElement("br");
        parentDivElement.appendChild(newLineElement);
    }
    
    if(variant === "Input with Help Text & Help Link" || variant === "Input with Help Text & Help Link - On Focus" 
    || variant === "Input with Help Text & Help Link - Completed"){
        spanElement.innerText = "Help Text";
        $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");

        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        const newLineElement = document.createElement("br");
        parentDivElement.appendChild(newLineElement);

        parentDivElement.appendChild(anchorElement);

    }else if(variant === "Input with Help Link" || variant === "Input with Help Link - On Focus" 
        || variant === "Input with Help Link - Completed" || variant === "Input with Help Link - Error"
        || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" 
        || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error" || variant === "Input with Help Text & Help Link - Error"){

        if(variant === "Input with Icon & Help Link - Error"){
            const newLineElement = document.createElement("br");
            parentDivElement.appendChild(newLineElement);
        }
        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        parentDivElement.appendChild(anchorElement);
        }

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

export const InputFieldButton = formTemplate.bind({});
InputFieldButton.args = {
    variant: 'Input with Button',
};

