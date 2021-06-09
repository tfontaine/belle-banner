import {html, css, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('belle-banner')
export class BelleBanner extends LitElement {
  /**
   * Internal banner index pointer.
   */
  @state()
  protected _sliderIndex = 0;
  
  /**
   * Links to images to display.
   */
  @property({ attribute: 'banner-images', type: Array })
  bannerImages = ["https://i.imgur.com/ZtdhrUA.jpg"];

  /**
   * Redirection links.
   */
  @property({ attribute: 'banner-links', type: Array })
  bannerLinks = ["https://beta.belle.ai"];

  static styles = css`
      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }`;

  render() {
    return html`
      <div>
      <p style="text-align: center;">
      <img alt="" src="${this.bannerImages[this.sliderIndex]}" style="width: 1200px; height: 200px; border-width: 2px; border-style: solid; margin: 1px;" /></p>
      </div>
    `;
  }

  set sliderIndex(value) {
    this._sliderIndex = value;
  } 

  get sliderIndex() {
    return this._sliderIndex;
  }
}
