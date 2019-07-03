import { LitElement, html, css} from 'lit-element';
import "./main-picture";
import "./enlarged-picture";

class ImageGallery extends LitElement {

  static get properties() {
    return {
      images: {type: Array},
      url: {type: String},
      picture: {type: String},
      showEnlarged: {type: Boolean},
      showMain: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.url = '/assets/';
    this.picture = this.url + 'image1.jpg';
    this.showMain = true;
    this.showEnlarged = false;

  }
  
  static get styles() {
    return css`
      .image {
        width: 200px;
        height: 110px;
        padding-right: 27px;
      }
      .image:hover {
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
    <enlarged-picture .picture=${this.picture} .show=${this.showEnlarged} @click=${this._showMain}></enlarged-picture>
    <main-picture .picture=${this.picture} .show=${this.showMain} @click=${this._showEnlarged}></main-picture>
    <ul>
      ${this.images.map(image => html`
          <img class="image" id=${image} src=${this.url + image} @click=${() => this.picture = this.url + image}>
      `)}
    </ul>
    `;
  }

  _showEnlarged() {
    this.showEnlarged = true;
    this.showMain = false;
  }

  _showMain() {
    this.showEnlarged = false;
    this.showMain = true;
  }

}

customElements.define('image-gallery', ImageGallery);