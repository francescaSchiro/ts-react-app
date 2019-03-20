export interface FooterHelpIcon {
  url: string,
  label: string,
  iconId: string,
}

const footerHelpIcons: FooterHelpIcon[] = [
  {
    url: 'https://m.sisal.it/sisal-chat/chat/ChatUser.htm?ref=m&nic=&area=Cerchi%20Aiuto&mF=true',
    label: 'Chat',
    iconId: 'C',
  },
  {
    url: 'tel:800999445',
    label: '800.999.445',
    iconId: 'N',

  },
  {
    url: 'https://m.sisal.it/contatti',
    label: 'Contatti',
    iconId: 'C',

  },
  {
    url: 'https://m.sisal.it/scommesse-matchpoint/faq',
    label: 'FAQ',
    iconId: 'F',
  },

];

export default footerHelpIcons;
