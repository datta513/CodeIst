import {Component} from 'react'
import {Filter} from '../LanguageFilterItem/index'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {current: languageFiltersData[0].id, lis: null, isload: true}

  componentDidMount() {
    this.fet()
  }

  chan = id => {
    console.log(id)
    this.setState(
      prev => ({
        current: id,
        isload: true,
      }),
      this.fet,
    )
  }

  fet = async () => {
    const {current} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${current}`
    const option = {
      method: 'GET',
    }
    const m = await fetch(url, option)
    const res1 = await m.json()
    this.setState(prev => ({lis: res1, isload: false}))
    console.log(res1)
  }

  render() {
    const {current, isload} = this.state
    console.log(current)
    return (
      <div className="style1">
        <h1 className="hstyle1">Popular</h1>
        <ul className="liststy">
          {languageFiltersData.map(each => (
            <Filter item={each} key={each.id} changereq={this.chan} />
          ))}
        </ul>
        {isload ? <p>Loading</p> : null}
        <button>h1</button>
      </div>
    )
  }
}
export default GithubPopularRepos
