import styled from 'styled-components'

export const SiteStyle = styled.div`
   a {
      color: #007BFF;           
      text-decoration: none;    
      transition: color 0.3s;  
      font-weight: 500;         
      padding-bottom: 2px;      
  
   }
`;

export const NavbarStyle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 50px;
   box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
   padding: 10px 20px;
   border-radius: 10px;

   .homeLink {
      font-size: 20px;
      font-weight: bold;
      color: black;
   }

   form {
      display: flex;
      justify-content:center;
      align-items: center;
      font-size: 14px;
      gap: 5px;
      padding: 10px;
      width: 60%;


      input[type="text"] {
         border: 1px solid grey;
         border-radius: 5px;
         height: 20px;
         width: 150px;
         width: 80px;
         padding: 2px 23px 2px 30px;
         outline: 0;
         background-color: #f5f5f5;
      }

      input[type="submit"] {
         background-color: #D3D3D3;
         height: 25px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
         font-size: 13px;
         text-align: center;
         transition: background-color 0.3s;
      }
   }



   form input:hover {
      background-color: grey;
  }
`

