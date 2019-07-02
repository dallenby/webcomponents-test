import { LitElement, html, css} from 'lit-element';
import "./large-picture";

class ImageGallery extends LitElement {

  static get properties() {
    return {
      images: {type: Array},
      url: {type:String},
      picture: {type:String}
    };
  }

  constructor() {
    super();
    this.url = '/assets/';
    this.picture = '/assets/image1.jpg';
  }
  
  static get styles() {
    return css`
      .image {
        width: 200px;
        height: 110px;
        padding-right: 27px;
      }
    `;
  }

  render() {
    return html`
    <large-picture .picture=${this.picture}></large-picture>
    <ul id="list">
      ${this.images.map(image => html`
          <img class="image" id=${image} src=${this.url + image} @click=${()=>this.picture = this.url + image}>
      `)}
    </ul>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);