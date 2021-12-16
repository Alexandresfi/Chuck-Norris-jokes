import styled from "styled-components"

export const initialArea = styled.div`


        
            
            
            img{
                position: absolute;
                top: 50px;
                left: 25px;
            }
            

            ul{
               
            }

           

            h1{
                padding: 10px;
            }

    
`;

export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 550px;
    margin: 50px auto 30px auto;
    justify-content: center;
`

export const Ul = styled.ul`
 list-style: none;

 li{
    margin: 20px;
    padding: 10px;
    font-size: 20px;
    text-align: left;
    }
`

export const Main = styled.main`

    margin: 0;
    padding: 0;

    position: relative;
    
    text-align: center;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`

export const Input = styled.input`
    width: 25vw;
    height: 40px;

    background: #F7F7F7;
    box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);

    border-radius: 10px;
    border: none;
    margin: 30px auto 30px auto;
    
    font-size: 20px;
    line-height: 15px;
    outline: none;

    &::placeholder{
        text-align: center;
    }

`
export const Button = styled.button`
    width: 5vw;
    height: 40px;
    background: #F7F7F7;
    box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    color: black;
    font-weight: bolder;
    margin: 0 auto 10px auto;
    border: 1px solid black;

`