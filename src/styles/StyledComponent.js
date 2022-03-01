import styled from "styled-components"

export const Container = styled.div`
    width: 50vw;
    height: 100px;
    margin: 50px 300px;
    font-family: 'Josefin Sans', sans-serif;

    .section-responsive{
        display:none;
    }
    @media screen and (max-width: 768px) {
        width: 375px;
        margin: 50px 0px;
        h1{
            font-size: 25px;
        }
        .title{
            margin: 0px 50px;;
        }

        .section-responsive{
            display:flex;
            background-color: ${({ theme }) => theme.bgForm};
            color: ${({ theme }) => theme.colorInput};
            margin: 10px 35px;
            padding: 10px;  
            border-radius: 5px;
            a, button{
                &:hover{
                    color:${({ theme }) => theme.hoverLi};
                    font-weight: 700;
                }
            }
        }
    }
`

export const BackgrounDark = styled.div`
    background-image: url(${({ theme }) => theme.bgImage});
    height: 40vh;
    font-family: 'Josefin Sans', sans-serif;
`

export const BackgrounDarkFoot = styled.div`
    background-color: ${({ theme }) => theme.bgFooter};
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
`

export const BgForm = styled.div`
    background-color: ${({ theme }) => theme.bgForm};
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-left: 100px;



    @media screen and (max-width: 768px) {
        margin:0px 40px;
        width: 80vw;
        display: block;
        ul{
            display: flex;
            justify-content: center ;
            align-items:flex-start;
        }
    }
    
`

export const Input = styled.input`
    background-color: ${({ theme }) => theme.bgInput};
    color: ${({ theme }) => theme.colorInput};
    width: 35vw;
    @media screen and (max-width: 768px) {
        width: 80vw;
        margin: 0 ;
        padding: 10px ;
    }
`
export const Li = styled.li`
    width: 35vw;
    color: ${({ theme }) => theme.colorInput};
    a, button{
        &:hover{
            color:${({ theme }) => theme.hoverLi};
            font-weight: 700;
        }
    }
 
    
    @media screen and (max-width: 768px) {
        padding: 10px 20px;
        width: 100%;
        div{
            width: 80%;
        }
        
        .options{
            display:none;
        }
    }
    
`

export const Button = styled.button`
    color: ${({ theme }) => theme.colorInput}
`