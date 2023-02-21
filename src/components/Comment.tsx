/* eslint-disable no-unused-vars */
import { ThumbsUp, Trash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface ICommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({
	content,
	onDeleteComment,
}: ICommentProps): ReactElement {
	const [likeCount, setLikeCount] = useState<number>(0);

	function handleDeleteComment(): void {
		onDeleteComment(content);
	}

	function handleLikeComment(): void {
		setLikeCount((prevLikeCount) => prevLikeCount + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/indiocode.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Jhollyfer Rodrigues</strong>
							<time
								title="11 de maio às 00:30h"
								dateTime="2022-05-11 00:30:00"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button
							onClick={handleDeleteComment}
							title="Deletar Comentário"
						>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
