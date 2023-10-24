
let quote = document.querySelector('.quote');

let author = document.querySelector('.author');

let copyText = document.querySelector('.copy');

let generate = document.querySelector('.generate');



// async function which is called everytime 'generate' button is clicked

let generatingQuote = async () => {
 try{
    quote.innerHTML = 'loading...';
    author.innerHTML = 'loading...'

    //get random quote api : (' https://github.com/lukePeavey/quotable')

    let url = 'https://api.quotable.io/random';

    let response = await fetch(url);
    let result =await response.json();

    quote.innerHTML = result.content;
    author.innerHTML = result.author;
    copyText.innerHTML = 'Copy'
    console.log(result)
 }catch(error){
    console.log(error)
 }

}

generate.addEventListener('click', generatingQuote);


generatingQuote();





// code for text copy, 
// the method retunrs a promise;


copyText.addEventListener('click', () => {
    let clipping = () => {
        return navigator.clipboard.writeText(quote.innerHTML +' "' + author.innerHTML + '"');
    }
    clipping().then(() => {
        copyText.innerHTML = 'Copied'
    }).catch((er) => {
        console.log(er)
    })
})