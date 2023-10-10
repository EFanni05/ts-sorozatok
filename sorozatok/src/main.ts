import {Series} from './Seires'

const sorozatok : Series[] = []

function Kiir(){
  const lista = document.getElementById('list')!
  lista.innerHTML = ""
  for(const resz of sorozatok){
    const listItem = document.createElement('li')
    listItem.textContent = `${resz.title} (${resz.episode})`
    lista.appendChild(listItem)
  }
}

function NewSeires(){
  try{
    const title = (document.getElementById('title') as HTMLInputElement).value
    const episode = parseInt((document.getElementById('episode') as HTMLInputElement).value)
    const director = (document.getElementById('director') as HTMLInputElement).value
    const series = new Series(title, episode, director)
    sorozatok.push(series)
    Kiir()
  } catch(e){
    if(e instanceof Error){
      document.getElementById('errormessage')!.textContent = e.message
    }
  }
}

function init(){
  document.getElementById('newSeries')!.addEventListener('click', NewSeires)
}

document.addEventListener('DOMContentLoaded', init)