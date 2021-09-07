import styled from "styled-components"

const initialArea = styled.div`

    margin: 0;
    padding: 0;

    position: relative;
    
    text-align: center;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;


        .container{
            display: flex;
            flex-flow: column wrap;
            width: 550px;
            margin: 50px auto 30px auto;
            justify-content: center;

            input{
                display: block;
                width: 159px;
                height: 40px;
                background: #F7F7F7;
                box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
                border-radius: 10px;
                margin: 30px auto 30px auto;
                font-size: 20px;
                line-height: 15px;
                outline: none;
            }
            
            button{
                width: 133px;
                height: 46px;
                background: #323232;
                box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
                border-radius: 10px;
                color: white;
                margin: 0 auto 10px auto;
            }
            
            img{
                position: absolute;
                top: 50px;
                left: 25px;
            }
            

            ul{
                list-style: none;
            }

            li{
                margin: 20px;
                padding: 10px;
                font-size: 20px;
            }

            h1{
                padding: 10px;
            }
        }

    
`;

export default initialArea;