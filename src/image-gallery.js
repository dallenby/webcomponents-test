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
    this.images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg'];
    this.picture = '/assets/image1.jpg';
  }
  
  static get styles() {
    return css`
      .image {
        width: 200px;
        height: 110px;
        float: left;
      }
    `;
  }

  updated(changedProperties) {
    if (changedProperties) {
      console.log("Update");
    }
  }

  render() {
    return html`
    <large-picture .picture=${this.picture}></large-picture>
    <ul>
      ${this.images.map(image => html`
          <img class="image" id=${image} src=${this.url + image} @click=${()=>this.picture = this.url + image}>
      `)}
    </ul>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);