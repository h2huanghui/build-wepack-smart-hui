import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../../common';
import './search.css';
import './search.less';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null
    }
  }

  /* 动态import */
  handleText() {
    import(/* webpackChunkName: "text" */'./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }

  render() {
    const { Text } = this.state;

    return (
      <div className='search-text'>Search Text test hh
        {Text ? <Text /> : null}
				323<img onClick={this.handleText.bind(this)} />
      </div>
    )
  }
}
ReactDom.render(<Search />, document.getElementById('root'))