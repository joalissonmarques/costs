import {useState} from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){

function submit(){
  
}

function handleChance(e){

}

  return(
    <form action='' className={styles.form}>
      <Input 
       type="text"
       text="Nome do Serviço"
       name="name"
       placeholder="Insira o nome do serviço"
       handleOnChance={handleChance}
      />
      <Input 
       type="number"
       text="Custo do Serviço"
       name="cost"
       placeholder="Insira o valor total"
       handleOnChance={handleChance}
      />
      <Input 
       type="text"
       text="Descrição do Serviço"
       name="description"
       placeholder="Escreva o serviço"
       handleOnChance={handleChance}
      />
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ServiceForm