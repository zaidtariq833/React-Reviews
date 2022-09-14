import React, {useState} from 'react'
import './Review.css'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = (number) => {
       if(number > people.length - 1){
        return 0
       }
       if(number < 0){
        return people.length - 1
       }
       return number
    }

    const nextPerson = () => {
      setIndex((index) => {
        let newPerson = index + 1
        return checkNumber(newPerson)
      })
    }

    const prevPerson = () => {
      setIndex((index) => {
        let oldPerson = index - 1
        return checkNumber(oldPerson)
      })
    }

    const randomPerson = () => {
    let randomNumber = parseInt(Math.random() * people.length)
    if(randomNumber === index){
      randomNumber = index + 1
    }
    setIndex (checkNumber(randomNumber))
    }
  return (
    <article className='review'>
        <div className='img__container'>
          <img src = {image} alt = {name} className = "person__img" />
        </div>
        <div className='div__reviews' style = {{textAlign: 'center'}}>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        </div>
        <div className='btns'>
        <button style = {{color: 'lightblue' , backgroundColor: 'black'}} onClick = {prevPerson}><FaChevronLeft/></button>
        <button style = {{color: 'lightblue' , backgroundColor: 'black'}} onClick = {nextPerson}><FaChevronRight/></button>
        <button style = {{color: 'lightblue' , backgroundColor: 'black'}} onClick = {randomPerson}>Surprise Me</button>
        </div>
    </article>
  )
}

export default Review