// LitElement and html are the basic required imports
import { LitElement, html, css} from 'lit-element';

// Create a class definition for your component and extend the LitElement base class
class BasicSetup extends LitElement {
  
  static get styles() {
    return css`
      #image1 {
        background-image: url("assets/image1.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
      }
      #image2 {
        background-image: url("assets/image2.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
      }
    `;
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <div id="image1">
        <p>Image 1</p>
      </div>
      <div id="image2">
        <p>Image 2</p>
      </div>
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('basic-setup', BasicSetup);