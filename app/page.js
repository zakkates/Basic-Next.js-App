import Image from "next/image";
import styles from "./page.module.css";

const data = [`omg`, `Edgar`, `Stop!`];
function TestContent() {
	return (
		// A comment
		<div className={styles.test_content_container}>
			<h1>Zak&apos;s Test</h1>

			<p>
				<strong>Ut enim ad minim veniam</strong>, duis aute irure dolor in
				reprehenderit in voluptate velit esse
				<em>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</em>
			</p>

			<h2>Tester: {data[1]}</h2>
			<p>
				Ut enim ad minim veniam, duis aute irure dolor in reprehenderit in
				voluptate velit esse <em>quis nostrud</em> exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</p>
			<ul
				style={{
					margin: `1rem 0`,
					padding: `0 0 0 2rem`,
				}}>
				{data.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				className={styles.logo}
				src="./next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
				style={{
					marginBottom: `5rem`,
				}}
			/>

			{/* Middle Content w/ Test Content */}
			<div
				className={styles.center}
				style={{ flexFlow: `column` }}>
				<TestContent />
			</div>

			{/* Stylelized original content from Vercel */}
			<div className={styles.description}>
				<p className={styles.description.p}>
					You&apos;re checking out the first Next.js app by&nbsp;
					<code className={styles.code}>Zakery Kates</code>
				</p>
			</div>

			<div className={styles.grid}>
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	);
}
