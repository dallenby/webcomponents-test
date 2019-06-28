// LitElement and html are the basic required imports
import { LitElement, html, css} from 'lit-element';

// Create a class definition for your component and extend the LitElement base class
class BasicSetup extends LitElement {
  
  static get styles() {
    return css`
      #image1 {
        background-image: url("/assets/image1.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        float: left;
      }
      #image2 {
        background-image: url("/assets/image2.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image3 {
        background-image: url("/assets/image3.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image4 {
        background-image: url("/assets/image4.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image5 {
        background-image: url("/assets/image5.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image6 {
        background-image: url("/assets/image6.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image7 {
        background-image: url("/assets/image7.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #image8 {
        background-image: url("/assets/image8.jpg");
        background-size: 200px 100px;
        width: 200px;
        height: 100px;
        color: white;
        float: left;
      }
      #magnify {
        height: 400px;
      }
    `;
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
    <div id="magnify">
      magnified
    </div>
    <div id="image1">
      <p>Image 1</p>
    </div>
    <div id="image2">
      <p>Image 2</p>
    </div>
    <div id="image3">
      <p>Image 3</p>
    </div>
    <div id="image4">
      <p>Image 4</p>
    </div>
    <div id="image5">
      <p>Image 5</p>
    </div>
    <div id="image6">
      <p>Image 6</p>
    </div>
    <div id="image7">
      <p>Image 7</p>
    </div>
    <div id="image8">
      <p>Image 8</p>
    </div> 
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('basic-setup', BasicSetup);