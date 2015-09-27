if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function () {
	React.render(<Navigation />, document.getElementById('growthplot-navigation'));
	React.render(<Homepage />, document.getElementById('growthplot-home-page'));
  });
}