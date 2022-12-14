import styled from "styled-components";

export const Container = styled.div`

background: #67bc98;
height: 100vh;

`

export const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;

`
export const Logo = styled.a`

padding:  1rem 0;
color: #7b7fda;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;

span{
    font-weight: 300;
    font-size: 1.3rem;

}
`

export const Hamburger = styled.div`
display: none;
cursor: pointer;
flex-direction: column;
 
 span{
    height: 2px;
    width: 25px;
    background: #767fda;
    margin-bottom: 4px;
    border-radius: 5px;

 }

 @media screen and (max-width: 768px){
    display: flex;
 }
`
export const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #67bc98;
transition: all 0.3s ease-in;
font-size: 0.9rem;

&:hover{
   color: #7b7fda;
}
`
export const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;



@media screen and (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    height: ${({open})=>open? "300px":"0"};
    transition: max-height 0.3s ease-in;
}

`