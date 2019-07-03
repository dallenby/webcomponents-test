import { LitElement, html, css} from 'lit-element';

class MainPicture extends LitElement {

  static get properties() {
    return {
      picture: {type:String},
      show: {type:Boolean}
    };
  }
  
  static get styles() {
    return css`
      #main-picture {
        height: 600px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
      }
    `;
  }

  render() {
    if(this.show){
      return html`
        <div>
          <img id="main-picture" src=${this.picture}>
        </div>
      `;
    }
    return html``;
  }
}

customElements.define('main-picture', MainPicture);