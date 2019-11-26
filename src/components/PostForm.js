import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange() {

  }
  render() {
    return (
      <div>
        <h1>Post</h1>
        <form >
          <div>
            <label htmlFor="">Title:</label><br />
            <input type="text" name='title' onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label htmlFor="">Title:</label><br />
            <textarea name='body' onChange={this.onChange} value={this.state.body} />
          </div><br />
          <button type='submit'></button>
        </form>
      </div>
    )
  }
}
