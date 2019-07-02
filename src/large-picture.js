import { LitElement, html, css} from 'lit-element';

class LargePicture extends LitElement {

  static get properties() {
    return {
      picture: {type:String}
    };
  }
  
  static get styles() {
    return css`
      #magnify_image {
        height: 700px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  }

  render() {
    return html`
      <div>
        <img id="magnify_image" src=${this.picture}>
      </div>
    `;
  }
}

customElements.define('large-picture', LargePicture);