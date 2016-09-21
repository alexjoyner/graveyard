module.exports = {
	isOneWord : function(searchStr) {
		return (searchStr.match(/^((?:\S+\s+){1}\S+)/) !== null)
	},
	isThreeWords : function(searchStr) {
		return (searchStr.match(/^((?:\S+\s+){2}\S+)/) !== null)
	}
};