import { LitElement, html, css} from 'lit-element';
import "./image-gallery";
class WebComponentsExercise extends LitElement {

  static get properties() {
    return {
      images: {type: Array},
    };
  }

  constructor() {
    super();
    this.images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg'];
  }

  static get styles() {
    return css`
      #div {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  }


  render() {
    return html`
    <div id="div">
      <image-gallery .images=${this.images}></image-gallery>
    </div>
    `;
  }

}

customElements.define('web-components-exercise', WebComponentsExercise);