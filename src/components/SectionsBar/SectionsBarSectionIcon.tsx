import styled from 'src/theme/default/index';

interface MyProps {
  active: boolean;
  icon?: string;
}

const SectionsBarSectionIcon = styled.div`
  background-image: ${(props: MyProps) =>
    props.icon ? `url(${props.icon})` : undefined};
  width: 24px;
  height: 24px;
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props: MyProps) => (props.active ? '1' : '0.5')};
  filter: grayscale(${(props: MyProps) => (props.active ? '0' : '100%')});

  font-size: 25px;
  font-weight: 700;
  width: 1.5em;
  text-align: center;
  line-height: 1em;
`;

export default SectionsBarSectionIcon;
