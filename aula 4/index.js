const inquirer = require('inquirer')
const chalk = require

const fs = require('fs')
 function operation(){
 inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        messagem: 'escolha duas opcoes no menu ',
        choices: [
            'criar conta',
            'consultar saldo',
            'depositar',
            'sacar',
            'sair',
        ],
    }
    .then ((answer) => {
        const action = answer['action']
        if(action === 'Criar conta'){
        console. log ( 'Criando a conta...'){

      

        }else if(action === 'Consultar saldo'){
           console.log('consultando saldo') 
        }else if(action ==='depositar'){
            console.log('depositando')
        }else if(action === 'Consultar saldo'){
       
})

}
