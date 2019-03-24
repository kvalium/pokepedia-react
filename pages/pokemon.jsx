import React from 'react';

class Pokemon extends React.Component {
  static async getInitialProps({ query }) {
    console.log('id', query.id);
    return {};
  }

  render() {
    return <h1>My blog post</h1>;
  }
}

export default Pokemon;
