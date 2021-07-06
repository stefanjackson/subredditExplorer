import React from 'react';

function Article(props) {
	return (
		<article>
			<a href={"https://reddit.com" + props.article.permalink} target="_blank">
				<div className="article-style">
					<p>
						Posted by {props.article.author}
					</p>
					<h3>
						{ 
				 		props.article.title
						}		
					</h3>
				</div>
				{ 
					props.article.post_hint === 'image' ? <img src={props.article.url_overridden_by_dest} alt=""/> : <img src={props.article.thumbnail} style={{height:'300px'}} />
				}
			</a>
		</article>
		);
};

export default Article;

