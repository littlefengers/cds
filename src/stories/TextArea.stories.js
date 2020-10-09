import "../../dist/css/style.css";
import $ from "jquery";
import {character_count} from './utility/utility.js';

export default {
    title: 'TextArea',
    argTypes: {
        variant: {
            control: {
                type:'select',
                options: ["Default","On Focus","Completed","Error"]
            }
        }
    }
}; 

function TextAreaTemplate({ variant}){ 

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

    if(variant === "On Focus"){ 
        textAreaElement.className = "form-control input-outline active";
        $(textAreaElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
        countSpanElement.innerHTML = "164";
    }
    else if(variant === "Completed"){ 
        textAreaElement.className = "form-control input-outline";
        $(textAreaElement).val("Input Text Value");
        labelElement.className = "fw4-ns input-field-v2 label-outline active";
        countSpanElement.innerHTML = "164";
    }
    else if(variant === "Error"){
        textAreaElement.className = "form-control input-outline error";
        labelElement.className = "fw4-ns input-field-v2 label-outline active error";
        countSpanElement.innerHTML = "Error Message";
        countSpanElement.className = "pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error";
        charSpanElement.innerHTML = "";
    }
    countDivElement.id = "textarea-character-count-container";
    countDivElement.className = "cds-t7 cds-u-space-pl-sm";
    countDivElement.appendChild(countSpanElement);
    countDivElement.appendChild(charSpanElement);

    $(textAreaElement).on('input',function(){
        character_count('#textarea-character-count', '#textarea-id');
    });

    $(textAreaElement).on('blur',function(){
        javasript:void(0);
    });

    $(textAreaElement).on("focusin", function() {
        $(labelElement).removeClass("error");
        $(this).removeClass("error");
        $(labelElement).addClass("active");
        $('#textarea-character-count').text("180");
        $('#textarea-character-count').removeClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
        $('#remaining').text(" Characters Remaining");
    }).on("focusout", function() {
        if($(this).val().length === 0) {
           $(labelElement).addClass("error");
           $(this).addClass("error");
           $('#textarea-character-count').text("Error Message");
           $('#textarea-character-count').addClass("pl2-ns cds-t7 cds-u-font-bold cds-u-color-text-error");
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
    return formDivElement;
};

export const TextArea = TextAreaTemplate.bind({});
    TextAreaTemplate.args = {
        variant: '',
    };

TextArea.parameters = {
    docs: {
        source: {
            code: '<div class="form-group input-field-v2"><div class="outerline"><textarea class="form-control input-outline" rows="4" id="textarea-id" name="textarea-name" maxlength="180" style="height: auto;"></textarea><label for="textarea-id" id="inputLabel" class="fw4-ns input-field-v2 label-outline">Textarea Label</label><div id="textarea-character-count-container" class="cds-t7 cds-u-space-pl-sm"><span id="textarea-character-count">180</span><span id="remaining"> Characters Remaining</span></div></div></div>'
        }
    }
}