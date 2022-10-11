module.exports = {
	pattern:
		'^(master|main|develop){1}$|^(feature|fix|hotfix|bugfix|release)/.+$',
	errorMsg:
		'Branch name validate failed, please rename your current branch to master/main/develop/feature/fix/hotfix/bugfix/release',
};
