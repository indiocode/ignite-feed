import type { ReactElement } from 'react';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import type { IPostProps } from './interfaces/Post';

const posts: IPostProps[] = [
	{
		id: 1,
		author: {
			name: 'John Doe',
			avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
			role: 'Web Developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Fala galeraa 👋',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2023-01-03 20:00:00'),
	},
	{
		id: 2,
		author: {
			name: 'Jhollyfer Rodrigues',
			avatarUrl: 'https://github.com/indiocode.png',
			role: 'Software Engineer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Fala galeraa 👋',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2023-01-13 20:00:00'),
	},
];

export function App(): ReactElement {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
}
