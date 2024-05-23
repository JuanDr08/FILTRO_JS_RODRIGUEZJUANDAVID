export class simpleCard extends HTMLElement {
    content
    constructor(){
        super()
        this.attachShadow({ mode: 'open' });
        // Generacion de la estructura del componente
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            
            .head {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }
            .head h2 {
                font-size: 24px;
                font-weight: 600;
            }
            .head p {
                font-size: 14px;
            }
        </style>
        <div class="head">
            <div class="content">
                
            </div>
        </div>
        `
        this.content = this.shadowRoot.querySelector(".content")
    }

    
    static get observedAttributes() {
        return ["titulo"];
    }
    attributeChangedCallback(name, old, now){
        if(name == "movie") this.generateCard(now)
    }
}




/* <div class="card">
    <div class="head">
        <div>
            <h2>1500</h2>
            <p>Traffic</p>
        </div>
        <i class='bx bx-trending-up icon' ></i>
    </div>
    <span class="progress" data-value="40%"></span>
    <span class="label">40%</span>
</div> */