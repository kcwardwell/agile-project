import styled from "styled-components";

const FormStyled = styled.form`
  text-transform: capitalize;
  width: 100%;

  .form-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    
  }
  .form-item {
    width:50%;
    margin: 1rem;
    
  }

  .form-control {
    display: block;
    width: 100%;
    margin: 1rem 0;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export default FormStyled;
