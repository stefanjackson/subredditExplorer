import React, {useState, useEffect} from 'react';
import Article from './components/Article';


  function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('memes');

  useEffect(() => {
  fetch("https://www.reddit.com/r/"+ subreddit +".json").then(response => {
    if (response.status !== 200) {
      console.log("Error!");
      return;
    }

    response.json().then(data => {
      if (data != null) {
        console.log(data);
        setArticles(data.data.children);
      }
      });
    })
  }, [subreddit]);

    return (
      <div className="App">
        <header className="appHeader">
          <div className="title-div">
             <i className="fab fa-reddit"></i>
             <h1>Subreddit Explorer</h1>
          </div> 

          <div className="searchBar">
            <input type="text" id="searchBarLabel" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
          </div>
          
        </header>

        <div className="main-container">
          <div className="articles">
          {
            (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} /> ) : ""
          }
          </div>

        </div>

        <footer>
          <p><span>Subreddit Explorer</span> by Stefan Jackson</p>
        </footer>

        <div>
          <a href="#"><i class="fas fa-angle-double-up"></i></a>
        </div>
      </div>
      );

};

export default App;
