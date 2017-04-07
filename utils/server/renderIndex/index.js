function renderIndex(req, res) {
	res.sendFile(path.resolve(__dirname, '../../dist_client/index.html'));
}

export {renderIndex};
