const Blog = ({type,title,date,wordsCount,readingTime,content,description}) => {
    return (
        <article style={{padding:'1.5rem',border:'1px solid rgba(34, 36, 38, .1)'}} className="m-box">
            <header>
                <div>{title}</div>
                <div>

                </div>
            </header>
            <div dangerouslySetInnerHTML={{__html:content.slice(0,5).join('')}} className="typo">
                
            </div>
        </article>
    )
}

export default Blog