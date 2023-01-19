import { useEffect, useState } from "react";
const[date, setData] = useState ([])
useEffect(() => {
    const OpenIssues = () => {
        fetch("https://api.github.com/repos/rails/rails/issues?page=1")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {console.error('Error:', error)});

        return(
            <h1> Hi there</h1>
            {data.lenght}
        )
},[])

export default OpenIssues;
