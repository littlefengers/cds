import "../../dist/css/style.css";
import $ from "jquery";
import {character_count} from './utility/utility.js';

export default {
    title: 'TextArea',
    argTypes: {
        variant: {
            control: {
                type:'select',
                options: ["default","active","inactive","error"]
            }
        }
    }
}; 

function TextAreaTemplate({ variant}){ 
    const headerElement = document.createElement('h4');
    headerElement.innerHTML = 'Textarea (countable characters)';
    //line height is supposed to be 1.1, margin top/bottom should have been 10px, 
    headerElement.className = 'cds-t4 dark-gray mv2-m fw4 sans-serif'; 

    const parentDivElement = document.createElement("div");  
    parentDivElement.id = "root";
    const formDivElement = document.createElement("div");
    const outlineDivElement = document.createElement("div");
    const textAreaElement = document.createElement("textarea");
    const labelElement = document.createElement("label");
    const countDivElement = document.createElement("div");
    const countSpanElement = document.createElement("span");
    const charSpanElement = document.createElement("span");

    formDivElement.className = "form-group input-field-v2";

    outlineDivElement.className = "outerline";  
    
    textAreaElement.className = "form-control input-outline";
        textAreaElement.rows = "4";
        textAreaElement.id = "textarea-id";
        textAreaElement.name = "textarea-name";
        textAreaElement.maxLength = "180";
        textAreaElement.style = "height:auto;";
        

        labelElement.htmlFor = "textarea-id";
        labelElement.id = "inputLabel"; 
        //don't have mergin-bottom: 5px, 
        labelElement.className = "fw4-ns input-field-v2 label-outline";
        labelElement.innerHTML = "Textarea Label";
    
        countSpanElement.id = "textarea-character-count";
        countSpanElement.innerHTML = "180";
        charSpanElement.id = "remaining";
        charSpanElement.innerHTML = " Characters Remaining";

    if(variant === "active"){ 
        textAreaElement.className = "form-control input-outline active";
        textAreaElement.rows = "4";
        textAreaElement.id = "textarea-id";
        textAreaElement.name = "textarea-name";
        textAreaElement.maxLength = "180";
        textAreaElement.style = "height:auto;";
        $(textAreaElement).val("Input Text Value");

        labelElement.htmlFor = "textarea-id";
        labelElement.id = "inputLabel"; 
        //don't have mergin-bottom: 5px, 
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
        labelElement.innerHTML = "Textarea Label";
    
        countSpanElement.id = "textarea-character-count";
        countSpanElement.innerHTML = "164";
        charSpanElement.id = "remaining";
        charSpanElement.innerHTML = " Characters Remaining";
    }
    else if(variant === "inactive"){ 
        textAreaElement.className = "form-control input-outline";
        textAreaElement.rows = "4";
        textAreaElement.id = "textarea-id";
        textAreaElement.name = "textarea-name";
        textAreaElement.maxLength = "180";
        textAreaElement.style = "height:auto;";
        $(textAreaElement).val("Input Text Value");

        labelElement.htmlFor = "textarea-id";
        labelElement.id = "inputLabel"; 
        //don't have mergin-bottom: 5px, 
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
        labelElement.innerHTML = "Textarea Label";
    
        countSpanElement.id = "textarea-character-count";
        countSpanElement.innerHTML = "164";
        charSpanElement.id = "remaining";
        charSpanElement.innerHTML = " Characters Remaining";
    }
    else if(variant === "error"){
        textAreaElement.className = "form-control input-outline error";
        textAreaElement.rows = "4";
        textAreaElement.id = "textarea-id";
        textAreaElement.name = "textarea-name";
        textAreaElement.maxLength = "180";
        textAreaElement.style = "height:auto;";

        labelElement.htmlFor = "textarea-id";
        labelElement.id = "inputLabel"; 
        //don't have mergin-bottom: 5px, 
        labelElement.className = "fw4-ns input-field-v2 label-outline active error";
        labelElement.innerHTML = "Textarea Label";
    
        countSpanElement.id = "textarea-character-count";
        countSpanElement.innerHTML = "Error Message";
        countSpanElement.className = "pl2-ns cds-body-copy cds-u-font-bold cds-u-color-text-error";
        charSpanElement.id = "remaining";
        charSpanElement.innerHTML = "";
    }
    countDivElement.id = "textarea-character-count-container";
    countDivElement.appendChild(countSpanElement);
    countDivElement.appendChild(charSpanElement);

    $(textAreaElement).on('input',function(){
        character_count('#textarea-character-count', '#textarea-id');
    });

    $(textAreaElement).on('blur',function(){
        javasript:void(0);
    });

    $(textAreaElement).on("focusin", function() {
        $(labelElement).addClass("active");
        $('#textarea-character-count').text("180");
        $('#textarea-character-count').removeClass("pl2-ns cds-body-copy cds-u-font-bold cds-u-color-text-error");
        $('#remaining').text(" Characters Remaining");

    }).on("focusout", function() {
        if($(this).val().length === 0) {
           $(labelElement).addClass("error");
           $(this).addClass("error");
           $('#textarea-character-count').text("Error Message");
           $('#textarea-character-count').addClass("pl2-ns cds-body-copy cds-u-font-bold cds-u-color-text-error");
           $('#remaining').text("");

        }else{
            $(labelElement).removeClass("error");
            $(this).removeClass("error");
            $(labelElement).addClass("active");
        }
    });

    outlineDivElement.appendChild(textAreaElement);
    outlineDivElement.appendChild(labelElement);
    outlineDivElement.appendChild(countDivElement);

    formDivElement.appendChild(outlineDivElement);

    //parentDivElement.appendChild(script);
    parentDivElement.appendChild(headerElement);
    parentDivElement.appendChild(formDivElement);
   
    return parentDivElement;
};


export const TextArea = TextAreaTemplate.bind({});
    TextAreaTemplate.args = {
        variant: '',
    };