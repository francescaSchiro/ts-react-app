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
    border-bottom:2px solid transparent;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    
    &:first-child {
        box-sizing:border-box;
        height:85%;
        color: #b9d531;
        margin-left: 8px;
        padding:10px;
        border-bottom: 3px solid  #b9d531;
    }
`

export default ClusterItem;
