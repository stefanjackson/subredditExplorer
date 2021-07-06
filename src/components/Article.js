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
				<div className="article-style article-style-bottom">
					<p><i class="far fa-comment-alt"></i>{props.article.num_comments} Comments</p>
				</div>
			</a>
		</article>
		);
};

export default Article;

