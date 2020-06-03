
class Slider {
    constructor(root, data) {
        this.data = data;
        this.root = root;
        this.select = this.data[0];
        this.position = 0;

        this.root.innerHTML = `
            <div class="review-text">
                <img class="text-flare flare" src="images/pattern-quotes.svg" alt="">
                <p class="text-words">${this.select.text}</p>
                <div class="text-person"><p class="text-author">${this.select.name} \u00A0</p><p class="text-job"> ${this.select.job}</p></div>
            </div>

            <div class="review-picture">
                <img class="picture-flare flare" src="images/pattern-bg.svg" alt="">
                <img class="picture-image" src=${this.select.img} alt="">
            </div>

            <div class="slider">
            <img class="slider-prev" src="images/icon-prev.svg" alt="">
            <img class="slider-next" src="images/icon-next.svg" alt="">
            </div>
        `

        this.prev = document.querySelector('.slider-prev');
        this.next = document.querySelector('.slider-next');
        this.textDisplay = document.querySelector('.review-text');
        this.imageDisplay = document.querySelector('.picture-image');

        this.prev.addEventListener('click', function(){
            this.change(-1);
            this.display();
        }.bind(this))
        this.next.addEventListener('click', function(){
            this.change(+1);
            this.display();
        }.bind(this))
    }

change = (change) => {
        this.position += change;
        if (this.position > this.data.length-1){
            this.position = 0;
        } else if(this.position < 0){
            this.position = this.data.length-1;
        }
        this.select = this.data[this.position]
     }

display = ()=>{
    this.root.classList.remove('fadeIn')
    this.root.classList.add('fadeOut')
    setTimeout(()=>{
        this.textDisplay.innerHTML = `
        <img class="text-flare flare" src="images/pattern-quotes.svg" alt="">
        <p class="text-words">${this.select.text}</p>
        <div class="text-person"><p class="text-author">${this.select.name} \u00A0</p><p class="text-job">${this.select.job}</p></div>`
    this.imageDisplay.src = this.select.img;
    this.root.classList.remove('fadeOut')
    this.root.classList.add('fadeIn')
    },200)
    }
}
const data = [
    {
        name:"John Tarkpor",
        job:"Junior Front-end Developer",
        text:"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        img:"images/image-john.jpg"
    },
    {
        name:"Tanya Sinclair",
        job:"UX Engineer",
        text:"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        img:"images/image-tanya.jpg"
    },
]

const slider = new Slider(document.querySelector('.review'),data)

//  slider.addEvents();





