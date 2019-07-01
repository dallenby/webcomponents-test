import { LitElement, html, css} from 'lit-element';
import "./gallery";
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
      #magnify_image {
        height: 600px;
      }
    `;
  }

  render() {
    return html`
    <div id="magnify">
      <img id="magnify_image" src=${this.imageName}>
    </div>
    <div>
      <image-gallery></image-gallery>
    </div>
    `;
  }
}

customElements.define('basic-setup', BasicSetup);