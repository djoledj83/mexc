import styled from "styled-components";
import { Link } from 'react-router-dom';

export const colors = {
    primary: "#fff",
    theme: "#8E185D",
    light1: "#F3F4F6",
    light2: "#E5E7E8",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

export const StyledContainer = styled.div`
margin: 0;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #040C18;
${'' /* background: radial-gradient(circle, rgba(22,35,61,1) 0%, rgba(1,3,36,1) 100%); */}
background-size: cover;
background-attachment: fixed;`
    ;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    ${'' /* color: ${(props) => props.color ? props.color : colors.primary}; */}
    color: #C39A40;
    padding: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
export const StyledSubTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    ${'' /* color: ${(props) => props.color ? props.color : colors.primary}; */}
    color: #C39A40;
    padding: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`;



export const Avatar = styled.div`
    width: 110px;
    height: 30px;
    ${'' /* border-radius: 50px; */}
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const StyledTextInput = styled.input`
    width: 380px;
    padding:15px;
    padding-left: 60px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 5px auto;
    transition: ease-in-out 0.3s;
    border-radius: 15px;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.dark1};
    text-align: center;
    padding: 20px 55px;
    border-radius: 25px;
`;

// export const StyledForm = styled.div`
//     display: flex;
//     gap: 5px;
//     flex-flow: row wrap;
//     flex-direction: row;
// `;


export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    ${'' /* border: 3px solid ${colors.theme}; */}
    border: 3px solid #C39A40;
    border-radius: 25px;
    color: #C39A40;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        ${'' /* background-color: ${colors.theme}; */}
        background-color: #C39A40;
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: #C39A40;
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

export const StyledLabel = styled.p`
    text-align: center;
    color: #fff;
    font-size: 13px;
    ${'' /* font-weight: bold; */}
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;

;`

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`};
`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;