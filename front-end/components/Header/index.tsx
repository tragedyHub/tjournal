import React from "react";
import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import Link from "next/link";

import {
	SearchOutlined as SearchIcon,
	CreateOutlined as PenIcon,
	SmsOutlined as MessageIcon,
	NotificationsNoneOutlined as NotificationIcon,
	Menu as MenuIcon,
	ExpandMoreOutlined as ArrowBottom,
} from "@material-ui/icons";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	return (
		<Paper classes={{ root: styles.root }} elevation={0}>
			<div className="d-flex align-center">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<Link href="/">
					<a className="d-flex align-center">
						<svg className={styles.logo} viewBox="0 0 24 25">
							<path fill="#e8a426" d="M0 19h8.5v6H0v-6z"></path>
							<path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
							<path
								fill="rgba(0,0,0,0.15)"
								d="M7.5 19h1v6l-1-6z"
							></path>
						</svg>
					</a>
				</Link>

				<div className={styles.searchBlock}>
					<SearchIcon />
					<input type="text" placeholder="Поиск" />
				</div>
				<Button variant="contained" className={styles.penButton}>
					Новая запись
				</Button>
			</div>
			<div className="d-flex align-center">
				<IconButton>
					<MessageIcon />
				</IconButton>
				<IconButton>
					<NotificationIcon />
				</IconButton>
				<Link href="/profile/1">
					<a className="d-flex align-center">
						<Avatar
							className={styles.avatar}
							alt="Remy sharp"
							src="https://avatars.githubusercontent.com/u/43935004?v=4"
						/>
					</a>
				</Link>
				<ArrowBottom />
			</div>
		</Paper>
	);
};
