
const data = [
    {logo: '', name: 'Java'},
    {logo: '', name: 'Springboot'},
    {logo: '', name: 'HTML'},
    {logo: '', name: 'CSS'},
    {logo: '', name: 'Javascript'},
    {logo: '', name: 'ReactJS'},
    {logo: '', name: 'PostgreSQL'},
    {logo: '', name: 'GIT'},
    {logo: '', name: 'Kanban'},
]

const Skills = () => {
    return (
        <div id="skill">
            <h1>Skill</h1>
            {data.map((item) => (
                <li>{item.name}</li>
            ))}
        </div>
    )
}

export default Skills;