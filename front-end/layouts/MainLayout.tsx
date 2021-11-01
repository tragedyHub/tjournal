import clsx from "clsx";
import React from "react";
import { LeftMenu } from "../components/LeftMenu";

interface MainLayoutProps {
	contentFullWidth?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	contentFullWidth,
}) => {
	return (
		<div className="wrapper">
			<div className="leftSide">
				<LeftMenu />
			</div>
			<div
				className={clsx("content", {
					"content--full": contentFullWidth,
				})}
			>
				{children}
			</div>
			
		</div>
	);
};
