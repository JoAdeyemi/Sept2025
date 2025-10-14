 // Define a new HTML element
    class MyCard extends HTMLElement {
      constructor() {
        super();

        // Attach a shadow root to <my-card>
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a wrapper div
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'card');
        wrapper.innerHTML = `<slot></slot>`; // Slot for content

        // Add some scoped styles
        const style = document.createElement('style');
        style.textContent = `
          .card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-family: Arial, sans-serif;
          }
        `;

        // Attach styles and wrapper to shadow root
        shadow.append(style, wrapper);
      }
    }

    // Register the custom element
    customElements.define('my-card', MyCard);