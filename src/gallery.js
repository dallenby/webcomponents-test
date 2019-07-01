import { LitElement, html, css} from 'lit-element';

class ImageGallery extends LitElement {

  static get properties() {
    return {
      images: {type: Array},
      url: {type:String},
    };
  }

  constructor() {
    super();
    this.url = '/assets/';
    this.images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg'];
  }
  
  static get styles() {
    return css`
      .image {
        width: 200px;
        height: 100px;
        float: left;
      }
    `;
  }

  render() {
    return html`
    <ul>
      ${this.images.map(image => html`
          <img class="image" id=${image} src=${this.url + image}>
      `)}
    </ul>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);