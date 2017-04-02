const finalize = (req, res) => {
	req.roCoreFunc(req, function (err, result) {
		if (err) {
			res.status(err.status).send(err.messages).end();
			return;
		}
		res.status(200).send(result).end();
	})
};

export {finalize};
