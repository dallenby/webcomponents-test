// LitElement and html are the basic required imports
import { LitElement, html, css} from 'lit-element';

// Create a class definition for your component and extend the LitElement base class
class BasicSetup extends LitElement {

  static get properties() {
    return {
      imageName: {type: String},
    };
  }

  constructor() {
    super();
    this.imageName = "/assets/image1.jpg";
  }
  
  static get styles() {
    return css`
        #image1Button {
        background-image: url("/assets/image1.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image2Button {
        background-image: url("/assets/image2.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image3Button {
        background-image: url("/assets/image3.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image4Button {
        background-image: url("/assets/image4.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image5Button {
        background-image: url("/assets/image5.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image6Button {
        background-image: url("/assets/image6.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image7Button {
        background-image: url("/assets/image7.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image8Button {
        background-image: url("/assets/image8.jpg");
        border: none;
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #magnify_image {
        height: 600px;
      }

    `;
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
    <div id="magnify">
      <img id="magnify_image" src=${this.imageName}>
    </div>
    <div id="image1">
      <button id="image1Button" @click=${() => this.imageName = "/assets/image1.jpg"}>-</button>
    </div>
    <div id="image2">
      <button id="image2Button" @click=${() => this.imageName = "/assets/image2.jpg"}>-</button>
    </div>
    <div id="image3">
      <button id="image3Button" @click=${() => this.imageName = "/assets/image3.jpg"}>-</button>
    </div>
    <div id="image4">
      <button id="image4Button" @click=${() => this.imageName = "/assets/image4.jpg"}>-</button>
    </div>
    <div id="image5">
      <button id="image5Button" @click=${() => this.imageName = "/assets/image5.jpg"}>-</button>
    </div>
    <div id="image6">
      <button id="image6Button" @click=${() => this.imageName = "/assets/image6.jpg"}>-</button>
    </div>
    <div id="image7">
      <button id="image7Button" @click=${() => this.imageName = "/assets/image7.jpg"}>-</button>
    </div>
    <div id="image8">
      <button id="image8Button" @click=${() => this.imageName = "/assets/image8.jpg"}>-</button>
    </div> 
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('basic-setup', BasicSetup);