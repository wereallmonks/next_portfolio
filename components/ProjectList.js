import Project from './Project'

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map(project => 
                 <span key = {project.id}>
                <Project project={project} />
                </span>
            )}
        </div>
    )
}

export default ProjectList
  