import styled from 'src/theme/default/index';


const ClusterAccordionItem = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items: center;
    width: 50%;
    height: 35px;
    padding: 0 10px;

    &:first-child > span{
        position:relative;
        font-weight: bold;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            left: 50%;
            bottom: -5px;
            background: #b9d531;
         
            transform: translate(-50%,0);
        }
    }

`

export default ClusterAccordionItem;