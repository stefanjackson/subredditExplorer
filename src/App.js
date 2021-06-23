import React, {useState, useEffect} from 'react';
import Article from './components/Article';


  function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('memes');

  useEffect(() => {
  fetch("https://www.reddit.com/r/memes.json").then(response => {
    if (response.status != 200) {
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
            <i class="fab fa-reddit"></i>
           <h1>Explore https://www.reddit.com/r/ </h1>
          <input type="text" className="input" value="memes" />
        </header>

        <div className="articles">
          {
            (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} /> ) : ""
          }
        </div>
      </div>
      );

};

export default App;
