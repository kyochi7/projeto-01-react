import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'


import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorInfo}>
                            <strong >Mayk Brito</strong>
                            <time title='13 de Março às 17:16h' dateTime='2023-03-13 17:16:30'>Cerca de 2h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}