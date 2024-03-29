import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
  }

  header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;

    h1 {
      margin: 0;
    }

    p {
      margin: 5px 0 0;
    }
  }

  section {
    margin: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .skill-item {
      text-align: center;
      margin: 10px;
      width: 30%; 
    }

    h2 {
      color: #333;

    }

    p {
      color: #666;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 5px;
      }
    }

    div {
      display: flex;
      gap: 10px;

      a {
        color: #333;
        font-size: 24px;
        transition: color 0.3s;

        &:hover {
          color: #0070f3;
        }
      }
    }
  }
`;

export default GlobalStyle;
