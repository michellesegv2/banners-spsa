import React, { Component } from "react";

export class ItemCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    if (this.state.index != 2) {
      return (
        <div>
          <li class="MosaicThumbnails_item">
            <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
              href={}>
              <img
                data-src={}
                alt={} />
              <span class="spsa-gtm-name" data-position={}
                style="display:none;">{}</span>
            </a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li class="MosaicThumbnails_item">
            <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
              href={}>
              <img class="desktop"
                data-src={}
                alt={} />
              <img class="mobile"
                data-src={}
                alt={} />
              <span class="spsa-gtm-name" data-position={}
                style="display:none;">{}</span>
            </a>
          </li>
        </div>
      );
    }
  }
}
