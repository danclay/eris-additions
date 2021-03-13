module.exports = Eris => {
	Eris.Member.prototype.hasPermission = function(perm) {
		return this.permissions.has(perm);
	};
};
