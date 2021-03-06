import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddNewKeg(props) {
  const [name, changeName] = useState("")
  const [price, changePrice] = useState("")
  const [brand, changeBrand] = useState("")
  const [alcoholContent, changeAlcoholContent] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.createNewKeg(name, price, brand, alcoholContent)
    // Clear form inputs
    changeName("")
    changePrice("")
    changeBrand("")
    changeAlcoholContent("")
  }

  const formStyles = {
    display: 'grid'
  }

  const divStyles = {
    display: 'grid',
    gridTemplateColumns: '20% 80%'
  }

  return (
    <div className="container">
      <h3 style={{ margin: '22px' }}>Add a new keg to the rotation</h3>
      <form style={formStyles} onSubmit={e => handleSubmit(e)} >
        <div style={divStyles}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={e => changeName(e.target.value)}
            placeholder='Name'
            value={name}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            min='1'
            name='price'
            onChange={e => changePrice(e.target.value)}
            placeholder='Price'
            value={price}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='brand'>Brand</label>
          <input
            type='text'
            name='brand'
            onChange={e => changeBrand(e.target.value)}
            placeholder='Brand'
            value={brand}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='alcoholContent'>Alcohol Content</label>
          <input
            type='number'
            min='1'
            name='alcoholContent'
            onChange={e => changeAlcoholContent(e.target.value)}
            placeholder='Alcohol Content'
            value={alcoholContent}
            required></input>
        </div>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  )
}

AddNewKeg.propTypes = {
  createNewKeg: PropTypes.func.isRequired
}

export default AddNewKeg