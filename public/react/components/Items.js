import React from 'react';

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }

  async componentDidMount() {
     
     const response = await fetch(`${apiURL}/sauces`)
     .then(response => response.json())
     .then(item => this.setState({ item }));
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        {/* Add more item details here */}
      </div>
    );
  }
}

export default ItemView;
