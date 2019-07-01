import { LitElement, html, css} from 'lit-element';
import "./image-gallery";
class BasicSetup extends LitElement {

  render() {
    return html`
    <div>
      <image-gallery></image-gallery>
    </div>
    `;
  }

}

customElements.define('basic-setup', BasicSetup);