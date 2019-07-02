import { LitElement, html, css} from 'lit-element';
import "./main-picture";
import "./enlarged-picture";

class ImageGallery extends LitElement {

  static get properties() {
    return {
      images: {type: Array},
      url: {type:String},
      picture: {type:String},
      show: {type:Boolean}
    };
  }

  constructor() {
    super();
    this.url = '/assets/';
    this.picture = this.url + 'image1.jpg';
    this.show = false;
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
    <enlarged-picture .picture=${this.picture} .show=${this.show} @click=${()=>this.show = false}></enlarged-picture>
    <main-picture .picture=${this.picture} @click=${()=>this.show = true}></main-picture>
    <ul id="list">
      ${this.images.map(image => html`
          <img class="image" id=${image} src=${this.url + image} @click=${()=>this.picture = this.url + image}>
      `)}
    </ul>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);