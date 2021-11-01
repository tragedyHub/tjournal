import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Paper, Typography } from "@material-ui/core";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { LeftMenu } from "../components/LeftMenu";
import { MainLayout } from "../layouts/MainLayout";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</MainLayout>			
	);
};

export default Home;
