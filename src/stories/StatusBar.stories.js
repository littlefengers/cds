import "../../dist/css/style.css";


export default {
    title: 'StatusBar',
    argTypes: {
      child1: { control: 'text' },
      child2: { control: 'text' },
    },
  };

const Template = ({ child1, child2 }) => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    div1.className='status-bar-container';

    const div3 = document.createElement('div');
    const boldElement = document.createElement('b');
    boldElement.className = "cds-u-font-bold";
    boldElement.innerHTML = child1;
    div3.appendChild(boldElement);

    const div4 = document.createElement('div');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = child2;
    div4.appendChild(spanElement);
    
    div2.appendChild(div3);
    div2.appendChild(div4);

    div1.appendChild(div2);

    return div1;

};

export const StatusBar = Template.bind({});
StatusBar.args = {
    child1: 'Title',
    child2: 'Used for informations about order status and similar containers',
};

StatusBar.parameters = {
  docs: {
      source: {
          code: '<div class="status-bar-container"><div><div><b class="cds-u-font-bold">Title</b></div><div><span>Used for informations about order status and similar containers</span></div></div></div>'
      }
  }
}