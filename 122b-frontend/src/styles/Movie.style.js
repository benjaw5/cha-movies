import styled from 'styled-components'

export const MovieTable = styled.div`
    table {
        width: 100%;
        margin: 25px 0;
        font-size: 18px;
        text-align: left;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        padding: 20px;
    }

    th, td {
        padding: 12px 15px;
        border-bottom: 1px solid grey;
    }

    th {
        font-weight: bold;
    }

`

export const MoviePageStyle = styled.div`
    a {
        margin-left: 10px;
        color: #007BFF;
        margin-bottom: 10px;
        display: inline-block;
    }

    a:hover h3 {
        color: #0056b3;
    }

    p {
        font-size: 16px;
        color: #333;
        margin: 10px 0;
    }
`
