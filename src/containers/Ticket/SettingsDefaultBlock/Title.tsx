import styled from 'src/theme/default/index';

const Title = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;


    background-color: #393939;
    color: #eaeaea;
    font-weight: bold;
    font-size:10px;
    padding-left: 8px;

    &::after {
        position: absolute;
        content:'i';
        /* background-image: url('https://www.iconsdb.com/icons/preview/white/info-2-xxl.png'); */
        right: -25px;   
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        height: 12px;
        width: 12px;   
        border-radius: 50%;
        border:1px solid white;
    }
`

export default Title;