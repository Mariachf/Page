import styled from "styled-components";



export const Main = styled.div`
    width: 100%;
     
`;

export const Blue = styled.div`
    
    color:#ffffff;
    font-family: "Open Sans";
    width: 50%;
    height: 66vh;
    background: rgb(0,39,91);
    background: linear-gradient(0deg, rgba(0,39,91,1) 29%, rgba(2,80,185,1) 100%);
    
`;



export const Div = styled.section`
    display:flex;
   img{
    width: 50%;
    height: 66vh;
   }
   
   .linha{
    border:solid 1px #ffffff;
    width: 10%;
    position:relative;
    top:5.78rem;
    left:5rem;
    }

    

    
 
`;

export const White = styled.div`
    
    color:#005BD5;
    font-family: "Open Sans";
    width: 50%;
    height: 66vh;
    background: white;

    .linha{
        border:solid .5px #005BD5;
    }

    button{
        border:solid 1px #005BD5;
        color:#005BD5;
        cursor:pointer;
    }
    
    
    
`;


export const Piscina = styled.div`
    color:#ffffff;
    font-family: "Open Sans";
    width: 50%;
    height: 66vh;
    background: rgb(0,39,91);
    background: linear-gradient(0deg, rgba(0,39,91,1) 29%, rgba(2,80,185,1) 100%);

    h2{
        width: 80%;
    }

    
    
`;

export const Agendar = styled.button`
    width: 20vh;
    height: 5vh;
    border:solid 1px white;
    border-radius:20px;
    color:#ffffff;
    background-color: transparent;
    text-transform:uppercase;
    letter-spacing: .1rem;
    margin-left:5rem;
    cursor:pointer;
`;

export const Text = styled.p`
    padding-top:5rem;
    padding-left:10rem;
    font-size:1rem;
    text-transform:uppercase;
    letter-spacing: .1rem;
`;



export const Principal = styled.h2`
    padding-left:5rem;
    font-size:2.5rem;
    width: 70%;
`;

export const Legenda = styled.p`
    padding-left:5rem;
    padding-top:1rem;
    padding-bottom:1.2rem;
    font-size:1.2rem;
    width:87%;
`;


export const BackgroundR= styled.div`

position:relative;
text-align:center;
button{
    position:relative;
    bottom:70%;
    
}
`;

export const BackgroundO= styled.div`
position:relative;
text-align:center;
button{
    position:relative;
    bottom:70%;
    
}

`;

export const BackgroundD= styled.div`
position:relative;
text-align:center;
button{
    position:relative;
    bottom:70%;
    
}

`;

export const BackgroundT= styled.div`
position:relative;
text-align:center;
button{
        position:relative;
        bottom:70%;
       
}

`;



export const Section = styled.div`
    display:flex;
    width: 100%;
    height: 35vh; 
    button{
        
        
        width: 28vh;
        height: 4.5vh;             
        padding:0;
        border:1px solid white;
        color:white;
        border-radius:20px;
        background: rgba( 255, 255, 255, 0.25 );
        background: rgba( 155, 155, 155, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6.5px );
        -webkit-backdrop-filter: blur( 6.5px );
        text-transform:uppercase;
        letter-spacing: .1rem;
        font-family: "Open Sans";
        }
        img{
            width: 100%;
        }
        
`;


