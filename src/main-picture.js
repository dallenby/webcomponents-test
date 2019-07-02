import { LitElement, html, css} from 'lit-element';

class MainPicture extends LitElement {

  static get properties() {
    return {
      picture: {type:String}
    };
  }
  
  static get styles() {
    return css`
      #magnify_image {
        height: 600px;
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

customElements.define('main-picture', MainPicture);