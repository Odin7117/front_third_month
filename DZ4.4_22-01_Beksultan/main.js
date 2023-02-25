const btn = document.querySelector('.instruction')
const card = document.querySelector('.games')
btn.onclick = () =>
{
    const request = new XMLHttpRequest()
request.open('GET', "data.json")
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () =>
    {
        const data = JSON.parse(request.response)
        console.log(data);
        data.map(game =>
        {
            const gameCard = document.createElement('div')
            const image = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('p')
            image.src = game.imageUrl
            title.append(game.title)
            price.append('Цена: ' + game.price + ' СОМ')
            gameCard.append( title,image, price)
            card.append(gameCard)
        })
    }
}