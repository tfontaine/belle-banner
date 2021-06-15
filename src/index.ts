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

        [data-component="slideshow"] .slide {
          display: none;
        }

        [data-component="slideshow"] .slide.active {
          display: block;
        }
      }`;

  render() {
    return html`
      <div id="banner-slider" data-component="slideshow">
        <div role="list">
          ${this.bannerImages.map((bannerImage, index) => html`
            <div class="slide">
              <p style="text-align: center;">
              <a href="${this.bannerLinks[index]}" target="_blank" rel="noopener noreferrer">
                <img alt="" src="${this.bannerImages[index]}" 
                  style="width: ${this.bannerWidth}px; height: ${this.bannerHeight}px; border-width: 2px; border-style: solid; margin: 1px;" />
              </a>
              </p>
            </div>`)
          }
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.initializeBanners();
  }

  set sliderIndex(value) {
    this._sliderIndex = value;
  } 

  get sliderIndex() {
    return this._sliderIndex;
  }

  initializeBanners() {
    var slideshows = this.shadowRoot.querySelectorAll('[data-component="slideshow"]');
  
    // Apply to all slideshows that you define with the markup wrote
    slideshows.forEach(this.initializeSlideShow.bind(this));
  }

  initializeSlideShow(slideshow) {
    var slides = this.shadowRoot.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
}
