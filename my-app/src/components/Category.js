import React, { Component } from "react";

export class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <div>
        {
          `<div class="MosaicThumbnails">
          <div class="category_title">
          <h2 class="MosaicThumbnails__title">TVS Y CONSOLAS</h2>
          <a href="https://tienda.plazavea.com.pe/busca/?fq=H:5873">VER TODO</a>
          </div>

            <ul class="MosaicThumbnails__medium">
              <li class="MosaicThumbnails_item">
                <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
                  href="https://tienda.plazavea.com.pe/televisor-hyundai-led-32-hd-smart-tv-hyled3239intm/p">
                  <img
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Televisor-HYUNDAI-LED-HYLED3239iNTM-D-12-15-Sep-CAT1-01.jpg"
                    alt="Televisor HYUNDAI LED HYLED3239iNTM" />
                  <span class="spsa-gtm-name" data-position="1"
                    style="display:none;">NF-Televisor-HYUNDAI-LED-HYLED3239iNTM-D-12-15-Sep-CAT1-01</span>
                </a>
              </li>
              <li class="MosaicThumbnails_item">
                <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
                  href="https://tienda.plazavea.com.pe/consola-ps4-childrens-days-bundle-hw-1tb-negro/p">
                  <img class="desktop"
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Consola-PS4-Childrens-Days-Bundle-D-12-15-Sep-CAT1-02.jpg"
                    alt="Consola PS4 Childrens Days Bundle" />
                  <img class="mobile"
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Consola-PS4-Childrens-Days-Bundle-M-12-15-Sep-CAT1-02.jpg"
                    alt="Consola PS4 Childrens Days Bundle" />
                  <span class="spsa-gtm-name" data-position="2"
                    style="display:none;">NF-Consola-PS4-Childrens-Days-Bundle-D-12-15-Sep-CAT1-02</span>
                </a>
              </li>
            </ul>

            <ul class="MosaicThumbnails__small">
              <li class="MosaicThumbnails_item">
                <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
                  href="https://tienda.plazavea.com.pe/televisor-lg-led-43-uhd-smart-tv-43um7300/p">
                  <img
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Televisor-LG-LED-43UM7300-D-12-15-Sep-CAT1-03.jpg"
                    alt="Televisor LG LED 43UM7300" />
                  <span class="spsa-gtm-name" data-position="3"
                    style="display:none;">NF-Televisor-LG-LED-43UM7300-D-12-15-Sep-CAT1-03</span>
                </a>
              </li>
              <li class="MosaicThumbnails_item">
                <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
                  href="https://tienda.plazavea.com.pe/televisor-philips-led-55--uhd-4k-smart-tv-pud6513/p">
                  <img
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Televisor-PHILIPS-LED-PUD6513-D-12-15-Sep-CAT1-04.jpg"
                    alt="Televisor PHILIPS LED PUD6513" />
                  <span class="spsa-gtm-name" data-position="4"
                    style="display:none;">NF-Televisor-PHILIPS-LED-PUD6513-D-12-15-Sep-CAT1-04</span>
                </a>
              </li>
              <li class="MosaicThumbnails_item">
                <a class="spsa-gtm-promotion spsa-gtm-promotion-link"
                  href="https://tienda.plazavea.com.pe/televisor-sony-led-49-uhd-4k-smart-tv-kd-49x725f/p">
                  <img
                    data-src="https://plazavea.vteximg.com.br/arquivos/NF-Televisor-SONY-KD-49X725F-D-12-15-Sep-CAT1-05.jpg"
                    alt="Televisor SONY KD-49X725F" />
                  <span class="spsa-gtm-name" data-position="5"
                    style="display:none;">NF-Televisor-SONY-KD-49X725F-D-12-15-Sep-CAT1-05</span>
                </a>
              </li>
            </ul>
          </div>`
        }
      </div>
    );
  }
}
