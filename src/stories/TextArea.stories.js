import "../../dist/css/style.css";
import $ from "jquery";
import {character_count} from './utility/utility.js';

export default{
    title: 'TextArea',
}; 

export function TextArea(){ 
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

    formDivElement.className = "form-group input-field-v2";

    outlineDivElement.className = "outerline";   

    textAreaElement.className = "form-control input-outline";
    textAreaElement.rows = "4";
    textAreaElement.id = "textarea-id";
    textAreaElement.name = "textarea-name";
    textAreaElement.maxLength = "180";
    textAreaElement.style = "height:auto;";

    $(textAreaElement).on('input',function(){
        character_count('#textarea-character-count', '#textarea-id');
    });

    $(textAreaElement).on('blur',function(){
        javasript:void(0);
    });

    $(textAreaElement).focusin(function() {
        $(labelElement).addClass("active");
    }).focusout(function() {
        if($(this).val().length === 0) {
            $(labelElement).removeClass("active");
        }
    });
 
    labelElement.htmlFor = "textarea-id";
    labelElement.id = "inputLabel"; 
    //don't have mergin-bottom: 5px, 
    labelElement.className = "fw4-ns input-field-v2 label-outline";
    labelElement.innerHTML = "Textarea Label";
 
    const countDivElement = document.createElement("div");
    const countSpanElement = document.createElement("span");
    const charSpanElement = document.createElement("span");
 
    countSpanElement.id = "textarea-character-count";
    countSpanElement.innerHTML = "180";
    charSpanElement.id = "remaining";
    charSpanElement.innerHTML = " Characters Remaining";

    countDivElement.id = "textarea-character-count-container";
    countDivElement.appendChild(countSpanElement);
    countDivElement.appendChild(charSpanElement);

    outlineDivElement.appendChild(textAreaElement);
    outlineDivElement.appendChild(labelElement);
    outlineDivElement.appendChild(countDivElement);

    formDivElement.appendChild(outlineDivElement);

    //parentDivElement.appendChild(script);
    parentDivElement.appendChild(headerElement);
    parentDivElement.appendChild(formDivElement);
   
    return parentDivElement;
};