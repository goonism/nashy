import React, {PureComponent} from 'react';

export default class GameOverPage extends PureComponent {
  render() {
    return (
      <section>
        <p> hey, you lost. someone gave you the wrong number. thanks for playing! </p>
        <p> made with {'<3'} by <a href="https://twitter.com/LGVichy">{'@'}lgvichy</a> and <a href="https://twitter.com/stayfun_">{'@'}stayfun_</a> in the frozen tundra of Rochester, New York</p>
      </section>
    )
  }
}
