/**
 * @class Modal
 *
 */

export default class Modal extends HTMLElement{
    
        

    constructor(){
        super()

        //Shadow DOM
        this.modal = this.attachShadow({ mode : 'open'})

        
        
        //contenu de la boite modal
        //recuperation des items 
        this.jsModal = document.querySelector(".header-left")
        console.log(this.jsModal.innerHTML)

        
        
        
        this.modal.innerHTML = `
            <style>
                div{
                    display : flex;
                    background : rgba(0, 0, 0, 0.5);
                    align-items : center;
                    justify-content : center;
                    left : 0;
                    position : fixed;
                    top : 0;
                    z-index: 10000;
                    width : 100vw;
                    height : 100vh;
                    flex-direction : column;
                    }
                    li{
                        list-style : none;
                    }
            </style>
            <div id = "element">
                ${this.jsModal.innerHTML}
            </div>
        `
    }
    
    //cycle de vie custum element
    //lors de du rendu 
    connectedCallback(){
        //initialisation de l'element 
        this.visible = this.modal.querySelector('#element')
        console.log(this.visible)
        
        // changer l'argument element avec l'id ou la classe correspondante
        
        this.visible.addEventListener('click', ()=>{

            // fonction de fermeture de la boite modal 
            //code de test 
            this.remove()
            this.style.display = "none"
            //le code ici 
        })
    }
    //lorsque le composant est demonte
    disconnetedCallback(){
        
    }



}
    
   

