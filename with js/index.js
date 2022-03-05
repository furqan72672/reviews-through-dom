//statics start
//

//handle star-half src
const starHalf=document.createElement('img')
starHalf.className='logo'
starHalf.src="https://app.reputationrooster.com/images/logos/star.png"

const starEmpty=document.createElement('img')
starEmpty.className='logo'
starEmpty.src="https://app.reputationrooster.com/images/logos/star-outline.png"

const google=document.createElement('img')
google.className='logo'
google.src="https://app.reputationrooster.com/images/logos/google.png"

const facebook=document.createElement('img')
facebook.className='logo'
facebook.src="https://app.reputationrooster.com/images/logos/facebook.png"

//
//statics end



//select parent-element(empty target div) from dom
const domElem=document.getElementsByClassName('rr-review')[0]


//div card start
//
//
const card = document.createElement('div')
card.className='card'

//handle companyLogo src
const companyLogo=document.createElement('img')
companyLogo.className='company-logo'
companyLogo.src="https://app.reputationrooster.com/images/logos/star.png"
card.appendChild(companyLogo)



//div card-half start
//
const cardHalf = document.createElement('div')
cardHalf.className='card-half'

const performance=document.createElement('p')
performance.className='performance'
performance.textContent="Performance"
cardHalf.appendChild(performance)

const rating=document.createElement('p')
rating.className='rating'
rating.textContent='4.5'
cardHalf.appendChild(rating)
card.appendChild(cardHalf)
//
//div card-half end


//div spacer start
//
const spacer = document.createElement('div')
spacer.className='spacer'
card.appendChild(spacer)
//
//div spacer end


//div platformParent start
//
const platformParent = document.createElement('div')
platformParent.className='platform-parent'
card.appendChild(platformParent)


//div platform1 start
const platform = document.createElement('div')
platform.className='platform'
platform.appendChild(google)
const wrapper = document.createElement('div')
platform.appendChild(wrapper)
let starFull=[]
for(let i=0;i<5;i++){
    starFull[i]=document.createElement('img')
    starFull[i].className='logo'
    starFull[i].src="https://app.reputationrooster.com/images/logos/star.png"
    wrapper.appendChild(starFull[i])
}
//div platform end

//div platform1 start
const platform1 = document.createElement('div')
platform1.className='platform'
platform1.appendChild(facebook)
const wrapper1 = document.createElement('div')
platform1.appendChild(wrapper1)
for(let i=0;i<5;i++){
    starFull[i]=document.createElement('img')
    starFull[i].className='logo'
    starFull[i].src="https://app.reputationrooster.com/images/logos/star.png"
    wrapper1.appendChild(starFull[i])
}
//div platform1 end

//div platform2 start
const platform2 = document.createElement('div')
platform2.className='platform'
const others=document.createElement('p')
others.textContent="others"
others.className='logo'
platform2.appendChild(others)
const wrapper2 = document.createElement('div')
platform2.appendChild(wrapper2)
for(let i=0;i<5;i++){
    starFull[i]=document.createElement('img')
    starFull[i].className='logo'
    starFull[i].src="https://app.reputationrooster.com/images/logos/star.png"
    wrapper2.appendChild(starFull[i])
}
//div platform2 end

platformParent.appendChild(platform)
platformParent.appendChild(platform1)
platformParent.appendChild(platform2)

//
//div platformParent end

domElem.appendChild(card)


//
//
//div card end











// let showReviews=domElem.getAttribute('data-show-reviews')!==null
// console.log(showReviews)
// if(showReviews){
//     const p=document.createElement('p')
//     p.textContent='data-show-reviews'
//     card.appendChild(p)
// }






//css
const styles=`
.rr-review{
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.card{
    background: transparent;
    min-height: 10vh;
    min-width: 25vw;
    padding: 20px 5px 5px 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    display: flex;
    position: relative;
}

.company-logo{
    position: absolute;
    top: 5px;
    left: 5px;
    height:17px;
}

.card-half{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-top: 5px;
}

.performance{
    font-size: 1.25em;
}

.rating{
    font-size: 40px
}

.spacer{
    width: 5%;
}

.platform-parent{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 5px;
}

.platform{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 17px;
}

.logo{
    height: 17px;
}
p{
    margin: 0;
}
`

const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
