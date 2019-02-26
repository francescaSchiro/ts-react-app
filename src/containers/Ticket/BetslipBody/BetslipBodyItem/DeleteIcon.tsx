import styled from 'src/theme/default/index';

interface MyProps {
    display?: boolean;
}

const DeleteIcon = styled.div`
   
    display: ${(props: MyProps) => props.display ? 'block' : 'none'};
    width:12px;
    height:14px;
    margin-right: 8px;
    background-size: 12px;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_delete.png?v=2.6.8');
    background-repeat: no-repeat;
    background-position: center;

`
export default DeleteIcon;