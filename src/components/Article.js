// default date "January 1, 1970"
import React from 'react'

function whichEmojis(minutes){
    const interval = minutes < 30 ? 5 : 10
    const emoji = interval === 5 ? '☕️' : '🍱'
    let numEmojis = Math.ceil(minutes/interval)

    let emojis = ''
    for (let i = 0; i < numEmojis; i++) {
        emojis += emoji
    }

    return emojis

}

function Article({
    key,
    minutes,
    title,
    date = "January 1, 1970",
    preview
}) {

    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}  {whichEmojis(minutes)}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article