import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import type { ChangeEvent, FormEvent, InvalidEvent, ReactElement } from 'react';
import { useState } from 'react';

import type { IPostProps } from '../interfaces/Post';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({
	author,
	content,
	publishedAt,
}: IPostProps): ReactElement {
	const [comments, setComments] = useState<string[]>(['Post Muito massinha!']);
	const [newCommentText, setNewCommentText] = useState<string>('');

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR },
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent): void {
		event.preventDefault();

		if (newCommentText) {
			const commentsWithNewComment = [...comments, newCommentText];
			setComments(commentsWithNewComment);
			// setComments((prev) => [...prev, newCommentText]);
			setNewCommentText('');
		}
	}

	function handleNewCommentChange(
		event: ChangeEvent<HTMLTextAreaElement>,
	): void {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(
		event: InvalidEvent<HTMLTextAreaElement>,
	): void {
		event.target.setCustomValidity('Este campo é obrigatório');
	}

	function deleteComment(commentToDelete: string): void {
		const commentsWithoutDeletedOne = comments.filter(
			(item) => item !== commentToDelete,
		);

		setComments(commentsWithoutDeletedOne);
		// setComments((prev) => prev.filter((item) => item !== comment));
	}

	const isNewCommentEmpty = !newCommentText;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar
						hasBorder
						src={author.avatarUrl}
					/>
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((item) =>
					item.type === 'paragraph' ? (
						<p key={item.content}>{item.content}</p>
					) : (
						<p key={item.content}>
							<a href="#">{item.content}</a>
						</p>
					),
				)}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu feedback</strong>
				<textarea
					name="comment"
					value={newCommentText}
					onChange={handleNewCommentChange}
					placeholder="Deixe um comentário"
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button
						type="submit"
						disabled={isNewCommentEmpty}
					>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => (
					<Comment
						content={comment}
						key={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
