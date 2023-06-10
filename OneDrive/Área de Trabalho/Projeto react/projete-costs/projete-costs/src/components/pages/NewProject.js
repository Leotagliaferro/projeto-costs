import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function Newproject (){
    return (
       <div className={styles.newproject_container}>
        <h1>Criar projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm />
       </div> 
    )
}

export default Newproject