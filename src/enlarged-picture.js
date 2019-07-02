import { LitElement, html, css} from 'lit-element';

class EnlargedPicture extends LitElement {

  static get properties() {
    return {
      picture: {type:String},
      show: {type:Boolean}
    };
  }

  constructor() {
    super();
  }
  
  static get styles() {
    return css`
      #enlarged_image {
        height: 1000px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  }

  render() {
    if (this.show) {
      return html`
      <div>
        <img id="enlarged_image" src=${this.picture}>
      </div>
    `;
    }
    return html``;
  }
}

customElements.define('enlarged-picture', EnlargedPicture);