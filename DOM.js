 // Define a new HTML element
    class MyCard extends HTMLElement {
      constructor() {
        super();

        
        const shadow = this.attachShadow({ mode: 'open' });

      
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'card');
        wrapper.innerHTML = `<slot></slot>`; 
        const style = document.createElement('style');
        style.textContent = `
          .card {
            background: grey;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-family: Arial, sans-serif;
          }
        `;

       
        shadow.append(style, wrapper);
      }
    }


    customElements.define('my-card', MyCard);