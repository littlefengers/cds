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
    inputElement.required = "true";
    inputElement.setAttribute("aria-required", "true");
    inputElement.type = "text";
    inputElement.id = "fieldName";
    inputElement.name = "fieldName";
    inputElement.label = "Field Name"; 
    inputElement.setAttribute("aria-describedby","errorMessage1");

    labelElement.htmlFor = "fieldName";
    //don't have mergin-bottom: 5px, 
    labelElement.className = "fw4-ns input-field-v2 label-outline";
    labelElement.innerHTML = "Field Name";


    const spanElement = document.createElement("span");
    spanElement.innerText = ""; 
    spanElement.id="errorMessage1";
        
    if(variant === "Input - On Focus" || variant === "Input with Help Text - On Focus" || variant === "Input with Help Link - On Focus" || variant === "Input with Icon - On Focus"
          || variant === "Input with Help Text & Help Link - On Focus" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Link - On Focus"
          || variant === "Input with Button - On Focus"){ 
        // Input Element when OnFocus
        inputElement.className = "form-control input-outline active";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Completed" || variant === "Input with Help Text - Completed" || variant === "Input with Help Link - Completed" || variant === "Input with Icon - Completed"
        || variant === "Input with Help Text & Help Link - Completed" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Link - Completed"
        || variant === "Input with Button - Completed"){ 
        // Input Element when Completed state
        inputElement.className = "form-control input-outline";
        $(inputElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
    }
    else if(variant === "Input - Error" || variant === "Input with Help Text - Error" || variant === "Input with Help Link - Error" || variant === "Input with Icon - Error"
        || variant === "Input with Help Text & Help Link - Error" || variant === "Input with Icon & Help Text - Error" || variant === "Input with Icon & Help Link - Error"
        || variant === "Input with Button - Error"){
        // Input Element On Error
        inputElement.className = "form-control input-outline error";
        labelElement.className = "fw4-ns input-field-v2 label-outline active error";
        spanElement.innerHTML = "Field Name is Required";
        spanElement.className = "pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error";
    }

    if(variant === "Input with Help Text" || variant === "Input with Help Text - On Focus" || variant === "Input with Help Text - Completed"
    || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed"){
        // Input Element with Help Text scenario
        spanElement.innerText = "Help Text"; 
        $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");

    }

    // JS code to track focus in/out actions on input field
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
        spanElement.removeAttribute("role");
        if(variant === "Input with Help Text" || variant === "Input with Icon & Help Text" || variant === "Input with Help Text & Help Link")
        {
            $(spanElement).text("Help Text");
            $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");
        }else{
            $(spanElement).text("");
        }
    }

    function inputFieldFocusOut() {
        if ($(inputElement).val().length === 0) {
            $(labelElement).addClass("error");
            $(inputElement).addClass("error");
            $(spanElement).text("Field Name is Required");
            spanElement.setAttribute("role","alert");
            $(spanElement).removeClass("pl2-ns cds-body-copy cds-u-color-text-light");
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
        // Input field with Button
        const buttonElement = document.createElement("button");
        buttonElement.innerText = "Go";
        buttonElement.className = "cds-t5 cds-btn cds-btn--primary";
        outlineDivElement.appendChild(buttonElement);
    }

    if(variant === "Input with Icon" || variant === "Input with Icon - On Focus" || variant === "Input with Icon - Completed" || variant === "Input with Icon - Error"
        || variant === "Input with Icon & Help Text" || variant === "Input with Icon & Help Text - On Focus" || variant === "Input with Icon & Help Text - Completed" || variant === "Input with Icon & Help Text - Error"
        || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error"){
            // Input Field with Tooltip Icon
            // SVG Icons imported from static file preview-head.html
            var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
            svgElement.setAttribute("class", "cds-icon tooltip-icon");
 
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tooltip-solid');
  
            svgElement.append(useElement);
 
            $(inputElement).addClass("w-90-ns fl-ns");
 
            const newLineElement = document.createElement("br");
 
             outlineDivElement.appendChild(svgElement);
             outlineDivElement.appendChild(newLineElement);
    }
    
    outlineDivElement.appendChild(spanElement);
    parentDivElement.appendChild(outlineDivElement);


    if(variant === "Input with Help Text & Help Link - Error" || variant === "Input with Help Link - Error"){
        spanElement.innerText = "Field Name is Required";
        $(spanElement).addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
    }
    
    if(variant === "Input with Help Text & Help Link" || variant === "Input with Help Text & Help Link - On Focus" 
    || variant === "Input with Help Text & Help Link - Completed"){
        spanElement.innerText = "Help Text";
        $(spanElement).addClass("pl2-ns cds-body-copy cds-u-color-text-light");

        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        parentDivElement.appendChild(anchorElement);

    }else if(variant === "Input with Help Link" || variant === "Input with Help Link - On Focus" 
        || variant === "Input with Help Link - Completed" || variant === "Input with Help Link - Error"
        || variant === "Input with Icon & Help Link" || variant === "Input with Icon & Help Link - On Focus" 
        || variant === "Input with Icon & Help Link - Completed" || variant === "Input with Icon & Help Link - Error" || variant === "Input with Help Text & Help Link - Error"){

        const anchorElement = document.createElement("a");
        anchorElement.href = "url";
        anchorElement.innerText = "Help Link"; 
        $(anchorElement).addClass("pl2-ns cds-body-copy cds-u-color-text-link");

        parentDivElement.appendChild(anchorElement);
        }

    return parentDivElement;

};

 
function formTemplate({ variant }) {
    const fieldElement = document.createElement("fieldset");
     
     const legendElement = document.createElement("legend");
     legendElement.innerText = "Input Field";

    const parentDivElement = document.createElement("div");
    const formElement = document.createElement("form");

    formElement.id = "componentForm";
    formElement.action = "#";
    formElement.noValidate = "noValidate";

    fieldElement.appendChild(legendElement);
    fieldElement.appendChild(inputFieldTemplate(variant));

    formElement.appendChild(fieldElement);

    parentDivElement.appendChild(formElement);

    return parentDivElement;
 
}

export const InputField = formTemplate.bind({});
InputField.args = {
    variant: '',
};

InputField.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><span id="errorMessage1"></span></div></div></fieldset></form></div>'
        }
    }
}

export const InputFieldIcon = formTemplate.bind({});
InputFieldIcon.args = {
    variant: 'Input with Icon',
};

InputFieldIcon.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline w-90-ns fl-ns" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><svg class="cds-icon tooltip-icon"><use xlink:href="#tooltip-solid"></use></svg><br><span id="errorMessage1"></span></div></div></fieldset></form></div>'
        }
    }
}

export const InputFieldIconHelpText = formTemplate.bind({});
InputFieldIconHelpText.args = {
    variant: 'Input with Icon & Help Text',
};

InputFieldIconHelpText.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline w-90-ns fl-ns" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><svg class="cds-icon tooltip-icon"><use xlink:href="#tooltip-solid"></use></svg><br><span id="errorMessage1" class="pl2-ns cds-body-copy cds-u-color-text-light">Help Text</span></div></div></fieldset></form></div>'
        }
    }
}

export const InputFieldIconHelpLink = formTemplate.bind({});
InputFieldIconHelpLink.args = {
    variant: 'Input with Icon & Help Link',
};

InputFieldIconHelpLink.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline w-90-ns fl-ns" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><svg class="cds-icon tooltip-icon"><use xlink:href="#tooltip-solid"></use></svg><br><span id="errorMessage1"></span></div><a href="url" class="pl2-ns cds-body-copy cds-u-color-text-link">Help Link</a></div></fieldset></form></div>'
        }
    }
}

export const InputFieldHelpText = formTemplate.bind({});
InputFieldHelpText.args = {
    variant: 'Input with Help Text',
};

InputFieldHelpText.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><span id="errorMessage1" class="pl2-ns cds-body-copy cds-u-color-text-light">Help Text</span></div></div></fieldset></form></div>'
        }
    }
}

export const InputFieldHelpLink = formTemplate.bind({});
InputFieldHelpLink.args = {
    variant: 'Input with Help Link',
};

InputFieldHelpLink.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><span id="errorMessage1"></span></div><a href="url" class="pl2-ns cds-body-copy cds-u-color-text-link">Help Link</a></div></fieldset></form></div>'
        }
    }
}

export const InputFieldHelpTextLink = formTemplate.bind({});
InputFieldHelpTextLink.args = {
    variant: 'Input with Help Text & Help Link',
};

InputFieldHelpTextLink.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><span id="errorMessage1" class="pl2-ns cds-body-copy cds-u-color-text-light">Help Text</span></div><a href="url" class="pl2-ns cds-body-copy cds-u-color-text-link">Help Link</a></div></fieldset></form></div>'
        }
    }
}

export const InputFieldButton = formTemplate.bind({});
InputFieldButton.args = {
    variant: 'Input with Button',
};

InputFieldButton.parameters = {
    docs: {
        source: {
            code: '<div><form id="componentForm" action="#" novalidate=""><fieldset><legend>Input Field</legend><div class="form-group input-field-v2"><div class="outerline"><input class="form-control input-outline" required="" aria-required="true" type="text" id="fieldName" name="fieldName" aria-describedby="errorMessage1"><label for="fieldName" class="fw4-ns input-field-v2 label-outline">Field Name</label><button class="cds-t5 cds-btn cds-btn--primary">Go</button><span id="errorMessage1"></span></div></div></fieldset></form></div>'
        }
    }
}

