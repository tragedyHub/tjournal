import React from "react";
import { IconButton, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

import styles from "./Post.module.scss";
import {
	ModeCommentOutlined as CommentsIcon,
	RepeatOutlined as RepeatIcon,
	BookmarkBorderOutlined as FavoriteIcon,
	ShareOutlined as ShareIcon,
	ArrowBackIos as Arrow,
} from "@material-ui/icons";

export const Post: React.FC = () => {
	return (
		<Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
			<Typography variant="h5" className={styles.title}>
				Сонный паралич — странное, но нормальное состояние, которое
				веками объясняли мистикой. Это продолжается и в интернете
			</Typography>
			<Typography className="mt-10 mb-15">
				От групп поддержки до паранормальных форумов и мемов: в сети не
				только обсуждают, как справляться с эпизодами, но и придумывают
				шутки про демона паралича.
			</Typography>
			<Image
				src="https://leonardo.osnova.io/e3bba5d7-dcd7-56be-878d-9357eca8c827/-/preview/1100/-/format/webp/"
				height={330}
				width={640}
			/>

			<div className={styles.post_footer}>
				<ul className={styles.actions}>
					<li>
						<IconButton>
							<CommentsIcon />
						</IconButton>
					</li>
					<li>
						<IconButton>
							<RepeatIcon />
						</IconButton>
					</li>
					<li>
						<IconButton>
							<FavoriteIcon />
						</IconButton>
					</li>
					<li>
						<IconButton>
							<ShareIcon />
						</IconButton>
					</li>
				</ul>
				<div className={styles.raiting}>
					<Arrow className={styles.rotate} />
					<span>40</span>
					<Arrow className={styles.rotate2} />
				</div>
			</div>
		</Paper>
	);
};
