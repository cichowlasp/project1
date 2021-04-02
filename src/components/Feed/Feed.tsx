import React, { useEffect } from 'react';

interface FuncProps {
	setTitle(arg: string): void;
}

const Feed: React.FC<FuncProps> = ({ setTitle }) => {
	useEffect(() => {
		setTitle('Collection');
	}, [setTitle]);
	return <></>;
};

export default Feed;
