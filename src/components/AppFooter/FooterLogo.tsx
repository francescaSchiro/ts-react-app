import * as React from 'react';
import FooterLogoWrapper from './FooterLogoWrapper';
import FooterLogoImgWrapper from './FooterLogoImgWrapper';
import FooterLogoImg from './FooterLogoImg';

const FooterLogo = () => (
  <FooterLogoWrapper>
    <FooterLogoImgWrapper>
      <FooterLogoImg src='https://cdn-m.sisal.it/documents/1227501/5490413/01_Timone.png/d6ea05df-bdb3-4f64-8879-6859a39c4cb9?t=1537965537798' />
    </FooterLogoImgWrapper>
    <FooterLogoImgWrapper>
      <FooterLogoImg src='https://cdn-m.sisal.it/documents/1227501/5490413/02_ADM.png/ebf51c0c-2a2c-4319-9100-e3b20d2c4e21?t=1537965539148' />
    </FooterLogoImgWrapper>
    <FooterLogoImgWrapper>
      <FooterLogoImg src='https://cdn-m.sisal.it/documents/1227501/5490413/03_Gioca+il+giusto.png/6a7233f0-0a00-454a-a9cb-dcd52d5e6812?t=1537965539541' />
    </FooterLogoImgWrapper>
    <FooterLogoImgWrapper>
      <FooterLogoImg src='https://cdn-m.sisal.it/documents/1227501/5490413/04_%2B18.png/cef5dff0-7b23-4e07-a41f-9ece1a5bb4a1?t=1537965539973' />
    </FooterLogoImgWrapper>
  </FooterLogoWrapper>
);

export default FooterLogo;
