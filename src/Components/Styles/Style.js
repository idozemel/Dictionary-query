import styled from "@emotion/styled";

export const Card = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-image: url(https://wallpaperaccess.com/full/1799658.jpg);
  background-size: cover;
  background-color: #ffd6ec;
`;

export const Hr = styled.hr`
  border: 1px dotted black;
  border-radius: 1px;
  width: 60%;
`;

export const Button = styled.button`
  margin-left: 20px;
  background-color: #ffa1cf;
  border-radius: 25px;
  font-weight: bold;
  &:hover {
    background-color: #ff74b1;
  }
`;

export const Select = styled.select`
  margin: 0 5px;
  background-color: #ffa1cf;
  border-radius: 25px;
  font-weight: bold;
  &:hover {
    background-color: #ff74b1;
  }
`;

export const Input = styled.input`
  border-radius: 25px;
  margin: 0px 15px;
`;

export const P = styled.p`
  font-size: 1.2rem;
  margin: 10px;
  color: black;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

//export default Card;
