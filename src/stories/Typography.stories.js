import "../../dist/css/style.css";


export default {
    title: 'Typography',
  };

// T1
export function t1() {
    var headerElement = document.createElement('h1');
    headerElement.className = 'cds-t1';
    headerElement.innerHTML = 't1-style';
    return headerElement;
};

// T2
export function t2() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h2');
    var divLink = document.createElement('div');
    var divBold = document.createElement('div');
    var divSuccess = document.createElement('div');
    
    headerElement.className = 'cds-t2';
    headerElement.innerHTML = 't2-style';

    divLink.className = 'cds-t2 cds-u-color-text-link';
    divLink.innerHTML = 't2-style-link';

    divBold.className = 'cds-t2 cds-u-font-bold';
    divBold.innerHTML = 't2-style-bold';

    divSuccess.className = 'cds-u-font-bold cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divSuccess.innerHTML = 't2-style-bold-success';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divSuccess);
    return parentDiv;
};

// T3
export function t3() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h3');
    var divLink = document.createElement('div');
    var divBold = document.createElement('div');
    var divSuccess = document.createElement('div');
    var divError = document.createElement('div');
    
    headerElement.className = 'cds-t3';
    headerElement.innerHTML = 't3-style';

    divLink.className = 'cds-t3 cds-u-color-text-link';
    divLink.innerHTML = 't3-style-link';

    divBold.className = 'cds-t3 cds-u-font-bold';
    divBold.innerHTML = 't3-style-bold';

    divSuccess.className = 'cds-t3 cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divSuccess.innerHTML = 't3-style-bold-success';

    divError.className = 'cds-t3 cds-u-font-bold cds-u-color-text-error';
    divError.innerHTML = 't3-style-bold-error';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divSuccess);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divError);
    return parentDiv;
};

// T4
export function t4() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h4');
    var divLink = document.createElement('div');
    var divBold = document.createElement('div');
   
    
    headerElement.className = 'cds-t4';
    headerElement.innerHTML = 't4-style';

    divLink.className = 'cds-t4 cds-u-color-text-link';
    divLink.innerHTML = 't4-style-link';

    divBold.className = 'cds-t4 cds-u-font-bold';
    divBold.innerHTML = 't4-style-bold';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divBold);
    return parentDiv;
};

// T5
export function t5() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h5');
    var divLink = document.createElement('div');
    var divBold = document.createElement('div');
    var divBoldError = document.createElement('div');
    var divError = document.createElement('div');
    var divMedium = document.createElement('div');
   
    
    headerElement.className = 'cds-t5';
    headerElement.innerHTML = 't5-style';

    divLink.className = 'cds-t5 cds-u-color-text-link';
    divLink.innerHTML = 't5-style-link';

    divBold.className = 'cds-t5 cds-u-font-bold';
    divBold.innerHTML = 't5-style-bold';

    divBoldError.className = 'cds-t5 cds-u-font-bold cds-u-color-text-error';
    divBoldError.innerHTML = 't5-style-bold-error';

    divError.className = 'cds-t5 cds-u-color-text-error';
    divError.innerHTML = 't5-style-error';

    divMedium.className = 'cds-t5 cds-u-color-text-medium';
    divMedium.innerHTML = 't5-style-medium';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divBoldError);
    parentDiv.appendChild(divError);
    parentDiv.appendChild(divMedium);
    return parentDiv;
};

// T6
export function t6() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h6');
    var divLink = document.createElement('div');
    var divSuccess = document.createElement('div');
    var divBold = document.createElement('div');
    var divBoldSuccess = document.createElement('div');
    var divMedium = document.createElement('div');
    var divLight = document.createElement('div');
   
    
    headerElement.className = 'cds-t6';
    headerElement.innerHTML = 't6-style';

    divLink.className = 'cds-t6 cds-u-color-text-link';
    divLink.innerHTML = 't6-style-link';

    divSuccess.className = 'cds-t6 cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divSuccess.innerHTML = 't6-style-success';

    divBold.className = 'cds-t6 cds-u-font-bold';
    divBold.innerHTML = 't6-style-bold';

    divBoldSuccess.className = 'cds-t6 cds-u-font-bold cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divBoldSuccess.innerHTML = 't6-style-bold-success';

    divMedium.className = 'cds-t6 cds-u-color-text-medium';
    divMedium.innerHTML = 't6-style-medium';

    divLight.className = 'cds-t6 cds-u-color-text-light';
    divLight.innerHTML = 't6-style-light';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divSuccess);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divBoldSuccess);
    parentDiv.appendChild(divMedium);
    parentDiv.appendChild(divLight);
    return parentDiv;
};

// T7
export function t7() {
    var parentDiv = document.createElement('div');

    var headerElement = document.createElement('h7');
    var divBold = document.createElement('div');
    var divBoldError = document.createElement('div');   
    
    headerElement.className = 'cds-t7';
    headerElement.innerHTML = 't7-style';

    divBold.className = 'cds-t7 cds-u-font-bold';
    divBold.innerHTML = 't7-style-bold';

    divBoldError.className = 'cds-t7 cds-u-font-bold cds-u-color-text-error';
    divBoldError.innerHTML = 't7-style-bold-error';

    parentDiv.appendChild(headerElement);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divBoldError);

    return parentDiv;
};

// BodyCopy
export function BodyCopy() {
    var parentDiv = document.createElement('div');

    var divStyle = document.createElement('div');
    var divLink = document.createElement('div');
    var divSuccess = document.createElement('div');
    var divBold = document.createElement('div');
    var divBoldSuccess = document.createElement('div');
    var divBoldError = document.createElement('div');
    var divMedium = document.createElement('div');
    var divCriticalRedBold = document.createElement('div');
    var divLight = document.createElement('div');
    var divLightBold = document.createElement('div');
    
    divStyle.className = 'cds-body-copy';
    divStyle.innerHTML = 'body-copy-style';

    divLink.className = 'cds-body-copy cds-u-color-text-link';
    divLink.innerHTML = 'body-copy-style-link';

    divSuccess.className = 'cds-body-copy cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divSuccess.innerHTML = 'body-copy-style-success';

    divBold.className = 'cds-body-copy cds-u-font-bold';
    divBold.innerHTML = 'body-copy-style-bold';

    divBoldSuccess.className = 'cds-body-copy cds-u-font-bold cds-u-color-text-success'; //cds-color-text-success in variable needs to be corrected, should point to green instead of blue
    divBoldSuccess.innerHTML = 'body-copy-style-bold-success';

    divBoldError.className = 'cds-body-copy cds-u-font-bold cds-u-color-text-error';
    divBoldError.innerHTML = 'body-copy-style-bold-error';

    divMedium.className = 'cds-body-copy cds-u-color-text-medium';
    divMedium.innerHTML = 'body-copy-style-medium';

    divCriticalRedBold.className = 'cds-body-copy cds-u-font-bold cds-u-color-text-red-500';
    divCriticalRedBold.innerHTML = 'body-copy-style-critical-red-bold';


    divLight.className = 'cds-body-copy cds-u-color-text-light';
    divLight.innerHTML = 'body-copy-style-light';

    divLightBold.className = 'cds-body-copy cds-u-font-bold cds-u-color-text-light';
    divLightBold.innerHTML = 'body-copy-style-light-bold';

    parentDiv.appendChild(divStyle);
    parentDiv.appendChild(divLink);
    parentDiv.appendChild(divSuccess);
    parentDiv.appendChild(divBold);
    parentDiv.appendChild(divBoldSuccess);
    parentDiv.appendChild(divBoldError);
    parentDiv.appendChild(divMedium);
    parentDiv.appendChild(divCriticalRedBold);
    parentDiv.appendChild(divLight);
    parentDiv.appendChild(divLightBold);
    return parentDiv;
};

