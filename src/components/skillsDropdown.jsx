import AutoFilterDropDown from "../utilities/autoFilterDropdown";

export default function SkillsDropdown() {

    const skillsList = [
        {
          "id": 1,
          "name": "JavaScript",
          "description": "A high-level, versatile programming language used primarily for building interactive web applications."
        },
        {
          "id": 2,
          "name": "React",
          "description": "A JavaScript library for building user interfaces, particularly for single-page applications."
        },
        {
          "id": 3,
          "name": "Node.js",
          "description": "A JavaScript runtime built on Chrome's V8 engine, used to build scalable server-side applications."
        },
        {
          "id": 4,
          "name": "Python",
          "description": "A high-level programming language known for its simplicity and readability, commonly used in web development, data science, and automation."
        },
        {
          "id": 5,
          "name": "Docker",
          "description": "A platform for developing, shipping, and running applications inside containers, which allows for consistency across different environments."
        },
        {
          "id": 6,
          "name": "Kubernetes",
          "description": "An open-source system for automating the deployment, scaling, and management of containerized applications."
        },
        {
          "id": 7,
          "name": "Git",
          "description": "A distributed version control system used to track changes in source code during software development."
        },
        {
          "id": 8,
          "name": "SQL",
          "description": "A domain-specific language used in programming for managing and querying relational databases."
        },
        {
          "id": 9,
          "name": "AWS (Amazon Web Services)",
          "description": "A comprehensive cloud platform offering computing power, storage, and other services to help businesses scale and grow."
        },
        {
          "id": 10,
          "name": "TypeScript",
          "description": "A superset of JavaScript that adds static types, improving code quality and development experience."
        }
      ]
      

    return (

        <AutoFilterDropDown data={skillsList} fieldName={'name'} valueChange={(selected) => console.log(selected)}></AutoFilterDropDown>
    )
}