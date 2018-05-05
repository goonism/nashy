import React, {PureComponent} from 'react';

export default class LandingPage extends PureComponent {
  render() {
    return (
      <section>
        <p> Nashy is a game about trust. </p>
        <p> With each level, you need to get keys from others in the same level. </p>
        <p> If you get one key wrong, you go all the way back to level 1. </p>
        <p> made with {'<3'} by <a href="https://twitter.com/LGVichy">{'@'}lgvichy</a> and <a href="https://twitter.com/stayfun_">{'@'}stayfun_</a> in the frozen tundra of Rochester, New York</p>
      </section>
    )
  }
}