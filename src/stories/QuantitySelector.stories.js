import "../../dist/css/style.css";

export default{
    title: 'Quantity Selector',
};

function QuantitySelectorComponents(variant){
    
    if(variant === "minus" || variant === "plus"){
        // Construct Buttons using SVG icons - & +
        const buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.name = variant + "Qty";

        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        svgElement.setAttribute("class", "cds-icon");

        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#'+variant);

        svgElement.append(useElement);
        buttonElement.appendChild(svgElement);
        return buttonElement;
    }

    if(variant === "input"){
        // Construct Input Field
        const inputElement = document.createElement("input");
        inputElement.className = "quantity";
        return inputElement;
    }
};

function QuantitySelectorTemplate({ variant }) {
    //top most DIV element
    const divElement = document.createElement("div");
    divElement.className = "quantity-selector";

    if(variant === "button"){
        //Construct Quantity Selector with input field and buttons to increase or decrease quantity
        const div2Element = document.createElement("div");
        div2Element.className = "quantity-selector-v2";
        div2Element.appendChild(QuantitySelectorComponents("minus"));
        div2Element.appendChild(QuantitySelectorComponents("input"));
        div2Element.appendChild(QuantitySelectorComponents("plus")); 

        divElement.appendChild(div2Element);
    }
    else{
        // return individual component
        const divElement = document.createElement("div");
        divElement.className = "quantity-selector-v2";
        divElement.appendChild(QuantitySelectorComponents(variant));
        return divElement;
    }

    // Quantity Selector with button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = "Button";
    btn.name="button";
    btn.className = "cds-btn cds-btn--primary";

    divElement.appendChild(btn);

    return divElement;

}


export const Input = QuantitySelectorTemplate.bind({});
Input.args = {
    variant: 'input',
};

Input.parameters = {
    docs: {
        source: {
            code: '<div class="quantity-selector-v2"><input class="quantity"></div>'
        }
    }
}

export const MinusQty = QuantitySelectorTemplate.bind({});
MinusQty.args = {
    variant: 'minus',
};

MinusQty.parameters = {
    docs: {
        source: {
            code: '<div class="quantity-selector-v2"><button type="button" name="minusQty"><svg class="cds-icon"><use xlink:href="#minus"></use></svg></button></div>'
        }
    }
}

export const PlusQty = QuantitySelectorTemplate.bind({});
PlusQty.args = {
    variant: 'plus',
};

PlusQty.parameters = {
    docs: {
        source: {
            code: '<div class="quantity-selector-v2"><button type="button" name="plusQty"><svg class="cds-icon"><use xlink:href="#plus"></use></svg></button></div>'
        }
    }
}

export const WithButton = QuantitySelectorTemplate.bind({});
WithButton.args = {
    variant: 'button',
};

WithButton.parameters = {
    docs: {
        source: {
            code: '<div class="quantity-selector"><div class="quantity-selector-v2"><button type="button" name="minusQty"><svg class="cds-icon"><use xlink:href="#minus"></use></svg></button><input class="quantity"><button type="button" name="plusQty"><svg class="cds-icon"><use xlink:href="#plus"></use></svg></button></div><button type="button" name="button" class="cds-btn cds-btn--primary">Button</button></div>'
        }
    }
}
