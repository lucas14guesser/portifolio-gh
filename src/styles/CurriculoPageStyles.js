import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCurriculoPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;
`
export const SubcontainerTitleBtnCV = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const TitlePageCurriculo = styled.h1`
    text-align: center;
`
export const TitleCurriculo = styled.p`
    font-size: 1.3rem;
`
export const LinkCV = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    background-color: #EAEAEA;
    border: 1px solid #333333;
    color: #333333;
    border-radius: 12px;
    padding: .7rem;
    font-size: .9rem;
    width: 7rem;
    text-align: center;
`
export const SubcontainerDataCurriculo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    background-color: #EAEAEA;
    gap: 3rem;
    border: 1px solid #333333;
    width: 100%;
    height: 20rem;
`
export const SubcontainerDataText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 50%;
`
export const TextTitleDate = styled.p`
    font-size: 1.1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;
`
export const TextDefaultCurriculo = styled.p`
    font-size: 1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;
`
export const SUbcontainerDescript = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.7rem;
    gap: 1rem;
    width: 50%;
`