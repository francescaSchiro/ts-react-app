import styled from 'src/theme/default/index';


const ClusterItem = styled.div`

    box-sizing:border-box;
    height:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    padding:10px;
    font-size: 13px;
    white-space: nowrap;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    
    &:first-child > span {
        position: relative;
        box-sizing:border-box;
        width:100%;
        color: #b9d531;
     
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            left: 0;
            bottom: -7px;
            background: #b9d531; 
        }
       
    }
`

export default ClusterItem;
