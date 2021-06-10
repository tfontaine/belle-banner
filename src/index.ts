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
  @property({ attribute: 'img', type: Array })
  bannerImages = ["https://i.imgur.com/ZtdhrUA.jpg"];

  /**
   * Redirection links.
   */
  @property({ attribute: 'redir', type: Array })
  bannerLinks = ["https://beta.belle.ai"];

  /**
   * Initial height.
   */
  @property({ attribute: 'height', type: Number })
  bannerHeight = 100;

  /**
   * Redirection links.
   */
  @property({ attribute: 'width', type: Array })
  bannerWidth = 600;

  static styles = css`
        :host {
					position: relative;
					display: block;
					overflow: visible;
				}
      }`;

  render() {
    return html`
      ${this.bannerImages.map((bannerImage, idx) => html`
        <div>
          <p style="text-align: center;">
          <a href="${this.bannerLinks[idx]}" target="_blank" rel="noopener noreferrer">
            <img alt="" src="${this.bannerImages[idx]}" 
              style="width: ${this.bannerWidth}px; height: ${this.bannerHeight}px; border-width: 2px; border-style: solid; margin: 1px;" />
          </a>
          </p>
        </div>`)
      }`;
  }

  set sliderIndex(value) {
    this._sliderIndex = value;
  } 

  get sliderIndex() {
    return this._sliderIndex;
  }

  renderBanner(id) {
    if (id >= 0 && id < this.bannerImages.length) {
        return '';
    }
  }
}
